import React from "react";

const TrendingItem = ({ title, interactions }) => {
  return (
    <div className="bg-gray-200 p-4 rounded-md shadow">
      <h2 className="font-semibold">{title}</h2>
      <p>{interactions} interactions</p>
    </div>
  );
};

export default TrendingItem;
