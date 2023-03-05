import React, { useEffect, useState } from "react";
const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(intervalId);
  });

  return (
    <div className="digital-clock">
      <div className="clockdisplay">
        {time.toLocaleDateString([], {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })}
      </div>
    </div>
  );
};
export default DigitalClock;
