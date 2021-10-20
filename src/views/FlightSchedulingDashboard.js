import { Fragment, useEffect } from "react";
import { useDispatch } from "react-redux";
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

  const fetchAircrafts = async () => {
    try {
      const response = await getAircrafts();
      const data = await response.json();
      dispatch(setAircraftData(data));
    } catch (e) {
      console.error(e);
    }
  };

  const fetchFlights = async () => {
    try {
      const response = await getFlights();
      const data = await response.json();
      dispatch(setFlightData(data));
    } catch (e) {
      console.error(e);
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
        <FlightList />
      </div>
    </Fragment>
  );
};

export default FlightSchedulingDashboard;
