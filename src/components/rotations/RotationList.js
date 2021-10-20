import { useDispatch, useSelector } from "react-redux";
import { removeFlightFromRotation } from "../../redux/slices/rotationSlice";
import AircraftTimeline from "../timeline/AircraftTimeline";
import Rotation from "./Rotation";

const RotationList = () => {
  const { data, currentAircraft } = useSelector((state) => state.rotation);
  const dispatch = useDispatch();
  const removeRotation = (flightId) => {
    dispatch(removeFlightFromRotation(flightId));
  };
  return (
    <div className="rotation-list">
      <h4 className="rotation-list-title">Rotation {currentAircraft}</h4>
      <div className="rotation-list-container">
        <div className="rotation-list-container-scroll">
          {data.length ? (
            data.map((obj, index) => (
              <Rotation
                flight={obj}
                key={index.toString()}
                removeRotation={removeRotation}
              />
            ))
          ) : (
            <div className="rotation-nodata">
              Select an item in <span>"Flights"</span> to add a rotation.
            </div>
          )}
        </div>
      </div>
      <div className="rotation-timeline">
        <AircraftTimeline />
      </div>
    </div>
  );
};
export default RotationList;
