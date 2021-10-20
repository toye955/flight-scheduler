import dayjs from "dayjs";
import { useSelector } from "react-redux";
const AircraftTimeline = () => {
  const rotationData = useSelector((state) => state.rotation.data);

  const getTimeDifference = (time1, time2) => {
    const date = dayjs().add(1, "day").format("YYYY-MM-DD");
    const firstTime = dayjs(`${date} ${time1}`);
    const secondTime = dayjs(`${date} ${time2}`);
    return secondTime.diff(firstTime, "minutes", true);
  };

  const getPercentageTime = (time) => {
    const percTime = (time / 1440) * 100;
    return percTime;
  };

  const getTimeline = (time1, time2, backgroundColor) => {
    let time = getTimeDifference(time1, time2);
    let percentageTime = getPercentageTime(time);
    return { width: percentageTime, backgroundColor };
  };

  const getTimelines = () => {
    let timeline = [];
    for (let i = 0; i < rotationData.length; i++) {
      let prev;
      let current = rotationData[i];
      if (i === 0) {
        timeline.push({
          ...getTimeline("00:00", current.readable_departure),
          background: "#b4b5b9",
        });
      } else if (i > 0 && i <= rotationData.length - 1) {
        prev = rotationData[i - 1];
        timeline.push({
          ...getTimeline(prev.readable_arrival, current.readable_departure),
          background: "#9c27b0",
        });
      }
      timeline.push({
        ...getTimeline(current.readable_departure, current.readable_arrival),
        background: "#406810",
      });
    }
    return timeline;
  };
  return (
    <div className="timeline">
      <div className="timeline-intervals">
        {["00", "06", "12", "18", "24"].map((item, index) => (
          <div style={{ fontSize: 10, color: "#888" }} key={index.toString()}>
            {item}:00
          </div>
        ))}
      </div>
      <div className="timeline-bar">
        {getTimelines().map((timeline, index) => (
          <div
            key={index.toString()}
            style={{
              background: timeline.background,
              width: `${timeline.width}%`,
              height: "100%",
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default AircraftTimeline;
