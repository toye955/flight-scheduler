import { Card, CardActionArea, CardContent } from "@mui/material";

const Flight = ({ flight, handleClick }) => {
  return (
    <div className="flight">
      <Card onClick={() => handleClick(flight)}>
        <CardActionArea>
          <CardContent>
            <div className="flight-details">
              <div>{flight.id}</div>
              <div className="flight-details__trip">
                <div>{flight.origin}</div>
                <div>{flight.destination}</div>
              </div>
              <div className="flight-details__time">
                <div>{flight.readable_departure}</div>
                <div>{flight.readable_arrival}</div>
              </div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Flight;
