import { createSlice } from "@reduxjs/toolkit";
import { getTimeInInteger } from "../../core/utils";
import dayjs from "dayjs";
import { toast } from "react-toastify";

const initialState = {
  data: [],
  currentAircraft: "",
};

const isFlightActiveAtMidnight = (payload) => {
  const departuretime = getTimeInInteger(payload.readable_departure);
  const arrivaltime = getTimeInInteger(payload.readable_arrival);
  if (departuretime <= 2399 && arrivaltime <= 2399) {
    return false;
  }
  return true;
};

const isTurnAroundTimeValid = (data, currentFlight) => {
  const rotationList = [...data, currentFlight];
  const sortedRotationList = rotationList.sort(
    (a, b) => a.departuretime - b.departuretime
  );
  const index = sortedRotationList.findIndex(
    (flight) => flight.id === currentFlight.id
  );
  const flightBefore = index - 1 < 0 ? null : sortedRotationList[index - 1];
  const flightAfter =
    index + 1 > sortedRotationList.length - 1
      ? null
      : sortedRotationList[index + 1];
    const date = dayjs().add(1, 'day').format('YYYY-MM-DD')
  if (flightBefore !== null) {
    const flightBeforeArrivaltime = dayjs(`${date} ${flightBefore.readable_arrival}`) 
    const currentFlightDepartureTime = dayjs(`${date} ${currentFlight.readable_departure}`) 
    const beforediff = currentFlightDepartureTime.diff(flightBeforeArrivaltime, "minutes", true)
    if (beforediff < 20) {
      return false;
    }
  }
  if (flightAfter !== null) {
    const flightAfterDepartureTime = dayjs(`${date} ${flightAfter.readable_departure}`)
    const currentFlightArrivalTime = dayjs(`${date} ${currentFlight.readable_arrival}`)
    const afterDiff = flightAfterDepartureTime.diff(currentFlightArrivalTime, "minutes", true)
    if (afterDiff < 20) {
      return false;
    }
  }
  return true;
};

export const rotationSlice = createSlice({
  name: "rotation",
  initialState,
  reducers: {
    setRotationData: (state, { payload }) => {
      if (isFlightActiveAtMidnight(payload)) {
        toast.error("Flight should not be active at midnight");
        return;
      }
      if (!isTurnAroundTimeValid(state.data, payload)) {
        toast.error(
          "Flight should have a minimum turnaround time of 20 minutes"
        );
        return;
      }
      const data = [...state.data, payload];
      state.data = data.sort((a, b) => a.departuretime - b.departuretime);
      toast.success("Flight has been added to rotation");
    },
    setCurrentAircraft: (state, { payload }) => {
      state.currentAircraft = payload;
    },
    removeFlightFromRotation: (state, { payload }) => {
      state.data.forEach((flight, index) => {
        if (flight.id === payload) {
          state.data.splice(index, 1);
          toast.success(
            `Flight ${payload} has been removed from the rotation.`
          );
        }
      });
    },
  },
});

export const { setRotationData, setCurrentAircraft, removeFlightFromRotation } =
  rotationSlice.actions;

export default rotationSlice.reducer;
