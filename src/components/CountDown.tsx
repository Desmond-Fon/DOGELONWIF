/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from "react";

interface CountdownProps {
  targetDate: Date;
  mainTextSize: string;
  subTextSize: string;
}

const CountdownTimer: React.FC<CountdownProps> = ({
  targetDate,
  mainTextSize,
  subTextSize,
}) => {
  const calculateTimeLeft = () => {
    const difference = +targetDate - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    } else {
      timeLeft = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<any>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div
      className={`colab ${mainTextSize} text-center bg-white text-primary px-3 lg:px-12 rounded-full py-1 lg:py-3 w-full `}
    >
      {`${timeLeft.days} DAYS : ${timeLeft.hours} HRS : ${timeLeft.minutes} MINS : ${timeLeft.seconds} SECS`}{" "}
      <br />
      <span
        className={`${subTextSize}`}
      >
        TO LAUNCH
      </span>
    </div>
  );
};

export default CountdownTimer;
