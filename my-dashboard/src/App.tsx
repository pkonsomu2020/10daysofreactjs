import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6 pl-8 ml-8 grid grid-cols-3 gap-4">
        <Card title="Users" content="Total: 1,245" />
        <Card title="Revenue" content="$12,500" />
        <Card title="Orders" content="325 new orders" />
      </div>
    </div>
  );
};

export default App;
