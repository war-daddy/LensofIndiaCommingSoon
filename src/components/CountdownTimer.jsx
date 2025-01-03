import React, { useState, useEffect } from 'react';
import './CountdownTimer.css'; 

const CountdownTimer = () => {
  const oneMonthInSeconds = 30 * 24 * 60 * 60; 
  const [timeLeft, setTimeLeft] = useState(oneMonthInSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => Math.max(prevTime - 1, 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

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
