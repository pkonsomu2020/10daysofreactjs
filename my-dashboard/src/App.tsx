import React from "react";
import Navbar from "./components/Navbar";
import TodoList from "./components/TodoList";

const App: React.FC = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="p-6">
        <TodoList />
      </div>
    </div>
  );
};

export default App;
