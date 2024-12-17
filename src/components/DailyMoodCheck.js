
import React, { useState } from "react";

const DailyMoodCheck = () => {
  const [mood, setMood] = useState(""); // State to store the selected mood

  const handleMoodChange = (selectedMood) => {
    setMood(selectedMood); // Update the mood state
  };

  const handleSubmit = () => {
    alert(`You are feeling ${mood}!`);
  };

  return (
    <div className="mt-4 bg-green-100 p-4 rounded-lg shadow-md text-center max-w-sm mx-auto">
      <h2 className="font-bold text-2xl text-gray-800 mb-3">Daily Mood Check</h2>
      <p className="text-base text-gray-700 mb-4">How are you feeling today?</p>
      
      {/* Mood selection with hover effects and smooth transitions */}
      <div className="flex justify-center gap-5 text-4xl">
        <span
          role="button"
          onClick={() => handleMoodChange("happy")}
          className={`cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 ${mood === "happy" ? "text-yellow-400" : "text-gray-700"} hover:text-yellow-500`}
          title="Happy"
        >
          😊
        </span>
        <span
          role="button"
          onClick={() => handleMoodChange("calm")}
          className={`cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 ${mood === "calm" ? "text-blue-300" : "text-gray-700"} hover:text-blue-400`}
          title="Calm"
        >
          😌
        </span>
        <span
          role="button"
          onClick={() => handleMoodChange("reflective")}
          className={`cursor-pointer transition-all duration-300 ease-in-out transform hover:scale-110 ${mood === "reflective" ? "text-purple-400" : "text-gray-700"} hover:text-purple-500`}
          title="Reflective"
        >
          😲
        </span>
      </div>

      {/* Mood description */}
      <p className="mt-4 text-sm text-gray-700">
        {mood === "happy" && "You're feeling happy! 😄"}
        {mood === "calm" && "You're feeling calm. 🧘‍♀️"}
        {mood === "reflective" && "You're feeling reflective. 🤔"}
        {!mood && "Select a mood to see how you're feeling!"}
      </p>

      {/* Submit button */}
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          disabled={!mood}
          className={`px-5 py-2 rounded-full text-white font-bold transition-all duration-300 ease-in-out transform hover:scale-105 disabled:opacity-50 ${
            mood ? "bg-green-600 hover:bg-green-700" : "bg-gray-400"
          }`}
        >
          Submit Mood
        </button>
      </div>
    </div>
  );
};

export default DailyMoodCheck;
