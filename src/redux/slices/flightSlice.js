import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  pagination: {},
};

export const flightSlice = createSlice({
  name: "flights",
  initialState,
  reducers: {
    setFlightData: (state, { payload }) => {
      state.data = payload.data;
      state.pagination = payload.pagination;
    },
  },
});

export const { setFlightData } = flightSlice.actions;

export default flightSlice.reducer;
