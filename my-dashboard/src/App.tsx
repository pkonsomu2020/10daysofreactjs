import React from "react";
import StreakTracker from "./components/StreakTracker";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <StreakTracker />
    </div>
  );
};

export default App;
