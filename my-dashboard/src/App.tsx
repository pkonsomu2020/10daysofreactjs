import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import Quote from "./components/Quote";
import ThemeToggle from "./components/ThemeToggle";
import { ThemeProvider } from "./context/ThemeContext";

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen p-6 transition duration-300">
        <Navbar />
        <div className="flex justify-end mb-4">
          <ThemeToggle />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <Card title="Users" content="Total: 1,245" />
          <Card title="Revenue" content="$12,500" />
          <Card title="Orders" content="325 new orders" />
        </div>
        <div className="mt-8">
          <Quote />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
