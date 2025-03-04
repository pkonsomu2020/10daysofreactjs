import React from "react";
import GoogleLogin from "./components/GoogleLogin";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <GoogleLogin />
    </div>
  );
};

export default App;
