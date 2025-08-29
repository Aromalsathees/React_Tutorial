import React, { useState, useRef } from 'react';

const Stopwatch = () => {
  const [count, setCount] = useState(0);
  const intervalRef = useRef(null);

  // Start Stopwatch
  function startWatch() {
    if (intervalRef.current !== null) return; // prevent multiple intervals
    intervalRef.current = setInterval(() => {
      setCount(prev => prev + 1);
    }, 1000); // update every 1 second
  }

  // Stop Stopwatch
  function stopWatch() {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  }

  // Reset Stopwatch
  function resetWatch() {
    stopWatch();
    setCount(0);
  }

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={startWatch}>Start</button>
      <button onClick={stopWatch}>Stop</button>
      <button onClick={resetWatch}>Reset</button>
    </div>
  );
};

export default Stopwatch;
