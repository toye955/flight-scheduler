import { Fragment, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AircraftList from "../components/aircrafts/AircraftList";
import SchedulingDate from "../components/date/SchedulingDate";
import FlightList from "../components/flights/FlightList";
import RotationList from "../components/rotations/RotationList";
import { setAircraftData } from "../redux/slices/aircraftSlice";
import { setFlightData } from "../redux/slices/flightSlice";
import { getAircrafts } from "../services/aircraft.service";
import { getFlights } from "../services/flight.service";

const FlightSchedulingDashboard = () => {
  const dispatch = useDispatch();
  const { data, pagination } = useSelector((state) => state.flights);
  const [loadedAllData, setLoadedAllData] = useState(false);

  const fetchAircrafts = async () => {
    try {
      const response = await getAircrafts();
      const data = await response.json();
      dispatch(setAircraftData(data));
    } catch (e) {
      console.error(e);
    }
  };

  const fetchFlights = async (offset = 0, limit = 25) => {
    try {
      const response = await getFlights(offset, limit);
      const data = await response.json();
      dispatch(setFlightData(data));
    } catch (e) {
      console.error(e);
    }
  };

  const loadMoreFlights = () => {
    if (data.length < pagination.total) {
      const offset = pagination.offset + pagination.limit;
      const limit = pagination.limit;
      fetchFlights(offset, limit);
    } else {
      setLoadedAllData(true);
    }
  };

  useEffect(() => {
    fetchAircrafts();
    fetchFlights();
  }, []);

  return (
    <Fragment>
      <SchedulingDate />
      <div className="dashboard">
        <AircraftList />
        <RotationList />
        <FlightList
          loadMoreFlights={loadMoreFlights}
          loadedAllData={loadedAllData}
        />
      </div>
    </Fragment>
  );
};

export default FlightSchedulingDashboard;
