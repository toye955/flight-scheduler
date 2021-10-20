import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  pagination: {},
};

export const aircraftSlice = createSlice({
  name: "aircrafts",
  initialState,
  reducers: {
    setAircraftData: (state, { payload }) => {
      state.data = payload.data;
      state.pagination = payload.pagination;
    },
  },
});

export const { setAircraftData } = aircraftSlice.actions;

export default aircraftSlice.reducer;
