import { useDispatch, useSelector } from "react-redux";
import { setCurrentAircraft } from "../../redux/slices/rotationSlice";
import Aircraft from "./Aircraft";

const AircraftList = () => {
  const data = useSelector((state) => state.aircrafts.data);
  const dispatch = useDispatch();
  const currentAircraft = data && data.length ? data[0].ident : "";
  dispatch(setCurrentAircraft(currentAircraft));

  return (
    <div className="aircraft-list">
      <h4 className="aircraft-list-title">Aircrafts</h4>
      <div className="aircraft-list-container">
        <div className="aircraft-list-container-scroll">
          {data &&
            data.map((obj, index) => (
              <Aircraft aircraft={obj} key={index.toString()} />
            ))}
        </div>
      </div>
    </div>
  );
};

export default AircraftList;
