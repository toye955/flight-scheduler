import { Close, Forward } from "@mui/icons-material";
import { Card, CardContent, IconButton } from "@mui/material";

const Rotation = ({ flight, removeRotation }) => {
  return (
    <div className="rotation">
      <Card>
        <CardContent>
          <div className="rotation-details">
            <div className="rotation-details__top">
              <div>Flight: {flight.id}</div>
              <div style={{ textAlign: "right", position: "relative" }}>
                <IconButton
                  style={{ position: "absolute", right: -10, top: -30 }}
                  onClick={() => removeRotation(flight.id)}
                >
                  <Close style={{ fontSize: "1rem" }} />
                </IconButton>
              </div>
            </div>
            <div className="rotation-details__trip">
              <div>{flight.origin}</div>
              <div style={{ position: "relative" }}>
                <Forward style={{ fontSize: "2.5rem", position: "absolute" }} />
              </div>
              <div>{flight.destination}</div>
            </div>
            <div className="rotation-details__time">
              <div>{flight.readable_departure}</div>
              <div>{flight.readable_arrival}</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Rotation;
