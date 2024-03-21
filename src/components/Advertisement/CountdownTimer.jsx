import React, { useState, useEffect } from 'react';


const CountdownTimer = ({ initialTime, onTimeout }) => {
    const [time, setTime] = useState(initialTime);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
  
      if (time === 0) {
        clearInterval(timer);
        onTimeout();
      }
  
      return () => clearInterval(timer);
    }, [time, onTimeout]);
  
    return <div className="text-white">{time}s</div>;
  };

export default CountdownTimer