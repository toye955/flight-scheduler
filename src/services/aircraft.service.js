import { getRequest } from "./default.service";

export const getAircrafts = () => {
  return getRequest(`${process.env.REACT_APP_BASE_URL}/aircrafts`);
};
