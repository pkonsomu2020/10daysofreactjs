import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Quote from "./components/Quote";  // Import Quote component

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-6">
      <Navbar />
      <div className="grid grid-cols-3 gap-4">
        <Card title="Users" content="Total: 1,245" />
        <Card title="Revenue" content="$12,500" />
        <Card title="Orders" content="325 new orders" />
      </div>
      <div className="mt-8">
        <Quote />
      </div>
    </div>
  );
};

export default App;