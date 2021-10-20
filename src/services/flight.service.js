import { getRequest } from "./default.service";

export const getFlights = (offset, limit) => {
  return getRequest(
    `${process.env.REACT_APP_BASE_URL}/flights?offset=${offset}&limit=${limit}`
  );
};
