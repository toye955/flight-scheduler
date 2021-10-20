import { getRequest } from "./default.service";

export const getFlights = () => {
  return getRequest(`${process.env.REACT_APP_BASE_URL}/flights`);
};
