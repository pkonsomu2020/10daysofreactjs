import React, { useState, useEffect } from "react";
import axios from "axios";

const Quote: React.FC = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  useEffect(() => {
    const fetchQuote = async () => {
      try {
        const response = await axios.get("https://api.quotable.io/random");
        setQuote(response.data.content);
        setAuthor(response.data.author);
      } catch (error) {
        console.error("Error fetching the quote:", error);
      }
    };

    // Check if a quote was already saved today
    const savedQuote = localStorage.getItem("dailyQuote");
    const savedDate = localStorage.getItem("quoteDate");
    const today = new Date().toDateString();

    if (savedQuote && savedDate === today) {
      setQuote(savedQuote);
      setAuthor(localStorage.getItem("dailyAuthor") || "");
    } else {
      fetchQuote().then(() => {
        localStorage.setItem("dailyQuote", quote);
        localStorage.setItem("dailyAuthor", author);
        localStorage.setItem("quoteDate", today);
      });
    }
  }, [quote, author]);

  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <p className="text-lg italic">"{quote}"</p>
      <p className="mt-2 font-semibold">- {author}</p>
    </div>
  );
};

export default Quote;