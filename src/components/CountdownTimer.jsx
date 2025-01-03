import React, { useState, useEffect } from 'react';
import './CountdownTimer.css';

// Function to calculate the remaining time in seconds
const calculateTimeLeft = (targetDate) => {
  const now = new Date().getTime(); // Current time in milliseconds
  return Math.max(Math.floor((targetDate - now) / 1000), 0); // Time left in seconds
};

const CountdownTimer = () => {
  // Set the target date and time
  const targetDate = new Date('2025-02-01T00:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState(() => calculateTimeLeft(targetDate));

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft(targetDate));
    }, 1000);

    return () => clearInterval(timer); // Cleanup the interval on unmount
  }, [targetDate]);

  // Calculate days, hours, minutes, and seconds from timeLeft
  const days = Math.floor(timeLeft / (24 * 60 * 60));
  const hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
  const minutes = Math.floor((timeLeft % (60 * 60)) / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="countdown-container">
      <div className="countdown-time">
        <span className="time-block">{days}<span className="label">D</span></span>
        <span className="time-block">{hours}<span className="label">H</span></span>
        <span className="time-block">{minutes}<span className="label">M</span></span>
        <span className="time-block">{seconds}<span className="label">S</span></span>
      </div>
    </div>
  );
};

export default CountdownTimer;
