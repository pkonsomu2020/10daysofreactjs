import React from "react";
import Navbar from "./components/Navbar";
import Pomodoro from "./components/Pomodoro";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        <Pomodoro />
      </div>
    </div>
  );
};

export default App;
