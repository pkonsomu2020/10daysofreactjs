import React from "react";
import Navbar from "./components/Navbar";
import Weather from "./components/Weather";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        <Weather />
      </div>
    </div>
  );
};

export default App;
