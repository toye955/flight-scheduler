import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import { Button } from "@mui/material";
import { useEffect, useState } from "react";

const SchedulingDate = () => {
  const [schedulingDate, setSchedulingDate] = useState("");

  const setNextDayDate = () => {
    const d = new Date();
    const newDate = d.setUTCDate(d.getUTCDate() + 1);
    setSchedulingDate(new Date(newDate).toDateString());
  };

  useEffect(() => {
    setNextDayDate();
  }, []);

  return (
    <div className="date">
      <div>
        <Button disabled>
          <ArrowLeft />
        </Button>
      </div>
      <div style={{ marginTop: 10 }}>{schedulingDate}</div>
      <div>
        <Button disabled>
          <ArrowRight />
        </Button>
      </div>
    </div>
  );
};

export default SchedulingDate;
