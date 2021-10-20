import { Card, CardActionArea, CardContent } from "@mui/material";
import dayjs from "dayjs";
import { useSelector } from "react-redux";
const Aircraft = ({ aircraft }) => {
  const rotationData = useSelector((state) => state.rotation.data);

  const getUsage = () => {
    const date = dayjs().add(1, "day").format("YYYY-MM-DD");
    const usageInHours = rotationData.reduce((acc, val) => {
      const arrival = dayjs(`${date} ${val.readable_arrival}`);
      const departure = dayjs(`${date} ${val.readable_departure}`);
      return acc + arrival.diff(departure, "minutes", true);
    }, 0);
    return ((usageInHours / 1440) * 100).toFixed(2);
  };
  return (
    <div className="aircraft">
      <Card>
        <CardActionArea>
          <CardContent>
            <div className="aircraft-details">
              <div>{aircraft.ident}</div>
              <div style={{ marginTop: 10 }}>({getUsage()}%)</div>
            </div>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
};

export default Aircraft;
