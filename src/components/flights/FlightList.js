import { Button } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { setRotationData } from "../../redux/slices/rotationSlice";
import Flight from "./Flight";

const FlightList = ({ loadMoreFlights, loadedAllData }) => {
  const flightsdata = useSelector((state) => state.flights.data);
  const dispatch = useDispatch();

  const handleClick = (flight) => {
    dispatch(setRotationData(flight));
  };

  return (
    <div className="flight-list">
      <h4 className="flight-list-title">Flights</h4>
      <div className="flight-list-container">
        <div className="flight-list-container-scroll">
          {flightsdata &&
            flightsdata.map((obj, index) => (
              <Flight
                flight={obj}
                key={index.toString()}
                handleClick={handleClick}
              />
            ))}
          <div style={{ textAlign: "center", marginTop: 16 }}>
            {flightsdata.length && !loadedAllData ? (
              <Button variant="outlined" onClick={() => loadMoreFlights()}>Load more</Button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlightList;
