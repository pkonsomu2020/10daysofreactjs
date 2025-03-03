import React from "react";

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => {
  return (
    <div className="p-4 border rounded-lg shadow-lg bg-white">
      <h2 className="text-lg font-semibold">{title}</h2>
      <p>{content}</p>
    </div>
  );
};

export default Card;