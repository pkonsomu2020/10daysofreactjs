import React, { useState, useEffect } from "react";

const WORK_TIME = 25 * 60; // 25 minutes in seconds
const BREAK_TIME = 5 * 60; // 5 minutes in seconds

const Pomodoro: React.FC = () => {
  const [time, setTime] = useState(WORK_TIME);
  const [isRunning, setIsRunning] = useState(false);
  const [isBreak, setIsBreak] = useState(false);

  // Timer countdown effect
  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (isRunning && time > 0) {
      timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsBreak(!isBreak);
      setTime(isBreak ? WORK_TIME : BREAK_TIME);
    }
    return () => clearInterval(timer);
  }, [isRunning, time, isBreak]);

  // Format time as mm:ss
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${secs
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-4">
        {isBreak ? "Break Time" : "Work Time"}
      </h2>
      <div className="text-4xl font-semibold p-4 bg-gray-200 rounded-lg">
        {formatTime(time)}
      </div>
      <div className="mt-4 flex justify-center gap-3">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Pause" : "Start"}
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded"
          onClick={() => {
            setIsRunning(false);
            setIsBreak(false);
            setTime(WORK_TIME);
          }}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default Pomodoro;