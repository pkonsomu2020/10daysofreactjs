import { useState, useEffect } from "react";
import TodoList from "./TodoList";
import Weather from "./Weather";
import Quote from "./Quote";

const WidgetToggle = () => {
  const [visibleWidgets, setVisibleWidgets] = useState<{ [key: string]: boolean }>({
    todo: true,
    weather: true,
    quote: true,
  });

  // Load preferences from localStorage when the component mounts
  useEffect(() => {
    const savedPreferences = localStorage.getItem("widgetPreferences");
    if (savedPreferences) {
      setVisibleWidgets(JSON.parse(savedPreferences));
    }
  }, []);

  // Function to toggle widgets and save state
  const toggleWidget = (widget: string) => {
    setVisibleWidgets((prev) => {
      const updated = { ...prev, [widget]: !prev[widget] };
      localStorage.setItem("widgetPreferences", JSON.stringify(updated)); // Save to localStorage
      return updated;
    });
  };

  return (
    <div>
      <h2>Customize Your Dashboard</h2>
      <button onClick={() => toggleWidget("todo")}>
        {visibleWidgets.todo ? "Hide" : "Show"} To-Do List
      </button>
      <button onClick={() => toggleWidget("weather")}>
        {visibleWidgets.weather ? "Hide" : "Show"} Weather
      </button>
      <button onClick={() => toggleWidget("quote")}>
        {visibleWidgets.quote ? "Hide" : "Show"} Quotes
      </button>

      <div style={{ marginTop: "20px" }}>
        {visibleWidgets.todo && <TodoList />}
        {visibleWidgets.weather && <Weather />}
        {visibleWidgets.quote && <Quote />}
      </div>
    </div>
  );
};

export default WidgetToggle;