import React, { useEffect, useState } from "react";
import { Typography, Box } from "@mui/material";

const CountdownTimer: React.FC = () => {
  const countdownDurationInSeconds = 30 * 60; // 30 minutes in seconds
  const [remainingTime, setRemainingTime] = useState(
    countdownDurationInSeconds
  );

  useEffect(() => {
    const timerInterval = setInterval(() => {
      if (remainingTime > 0) {
        setRemainingTime(remainingTime - 1);
      } else {
        clearInterval(timerInterval);
      }
    }, 1000);

    return () => {
      clearInterval(timerInterval);
    };
  }, [remainingTime]);

  const formatTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const remainingSeconds = seconds % 60;
    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
      2,
      "0"
    )}:${String(remainingSeconds).padStart(2, "0")}`;
  };

  return (
    <>
      <Box>
        <Typography>Remaining Time: {formatTime(remainingTime)}</Typography>
      </Box>
    </>
  );
};

export default CountdownTimer;
