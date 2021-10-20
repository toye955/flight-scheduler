import { configureStore } from "@reduxjs/toolkit";
import aircraftReducer from "./slices/aircraftSlice";
import flightReducer from "./slices/flightSlice";
import rotationReducer from "./slices/rotationSlice";

export const store = configureStore({
  reducer: {
    aircrafts: aircraftReducer,
    flights: flightReducer,
    rotation: rotationReducer,
  },
});
