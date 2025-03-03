import React, { useState, useEffect } from "react";

const StreakTracker: React.FC = () => {
  const [streak, setStreak] = useState<number>(0);
  const [longestStreak, setLongestStreak] = useState<number>(0);
  const [lastCompletedDate, setLastCompletedDate] = useState<string | null>(null);

  useEffect(() => {
    const savedStreak = JSON.parse(localStorage.getItem("streak") || "0") as number;
    const savedLongestStreak = JSON.parse(localStorage.getItem("longestStreak") || "0") as number;
    const savedDate = localStorage.getItem("lastCompletedDate");

    setStreak(savedStreak);
    setLongestStreak(savedLongestStreak);
    setLastCompletedDate(savedDate);
  }, []);

  const handleTaskCompletion = () => {
    const today = new Date().toISOString().split("T")[0]; // Format: YYYY-MM-DD

    if (lastCompletedDate === today) {
      alert("You've already completed a task today! ✅");
      return;
    }

    let newStreak = streak + 1;

    if (lastCompletedDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const formattedYesterday = yesterday.toISOString().split("T")[0];

      if (lastCompletedDate !== formattedYesterday) {
        newStreak = 1; // Reset streak if a day was skipped
      }
    }

    setStreak(newStreak);
    setLastCompletedDate(today);

    if (newStreak > longestStreak) {
      setLongestStreak(newStreak);
      localStorage.setItem("longestStreak", JSON.stringify(newStreak));
    }

    localStorage.setItem("streak", JSON.stringify(newStreak));
    localStorage.setItem("lastCompletedDate", today);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-lg rounded-lg text-center">
      <h2 className="text-2xl font-bold mb-2">🔥 Productivity Streak</h2>
      <p className="text-lg">Current Streak: <strong>{streak} days</strong></p>
      <p className="text-lg">Longest Streak: <strong>{longestStreak} days</strong></p>
      <button
        onClick={handleTaskCompletion}
        className="mt-4 px-4 py-2 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition"
      >
        ✅ Mark Task as Completed
      </button>
    </div>
  );
};

export default StreakTracker;