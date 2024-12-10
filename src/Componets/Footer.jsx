import React from "react";
import { useTheme } from "../Context/ThemeContext";

const Footer = ({ tasks, clearCompleted, setFilter, filter }) => {
  const { isDarkMode } = useTheme();
  const remainingTasks = tasks.filter((task) => !task.completed).length;

  return (
    <div
      className={`caret-transparent py-4 px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between rounded-sm space-y-4 sm:space-y-0 ${
        isDarkMode ? "bg-very-dark-desaturated-blue text-very-light-gray" : "bg-very-light-gray text-very-dark-gray"
      }`}
    >
      {/* Remaining Tasks Count */}
      <span
        className={`  sm:text-base ${isDarkMode ? "text-very-light-gray" : "text-very-dark-gray"}`}
      >
        {remainingTasks} item{remainingTasks !== 1 ? "s" : ""} left
      </span>

      {/* Filter Buttons */}
      <div className="flex space-x-4 text-sm sm:text-base md:text-lg">
        <button
          className={` ${
            filter === "all" ? (isDarkMode ? "text-custom-gradient" : "text-blue-500") : ""
          } hover:${isDarkMode ? "text-very-light-gray" : "text-dark-grayish-blue-light"}`}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={` ${
            filter === "active" ? (isDarkMode ? "text-custom-gradient" : "text-blue-500") : ""
          } hover:${isDarkMode ? "text-very-light-gray" : "text-dark-grayish-blue-light"}`}
          onClick={() => setFilter("active")}
        >
          Active
        </button>
        <button
          className={` ${
            filter === "completed" ? (isDarkMode ? "text-custom-gradient" : "text-blue-500") : ""
          } hover:${isDarkMode ? "text-very-light-gray" : "text-dark-grayish-blue-light"}`}
          onClick={() => setFilter("completed")}
        >
          Completed
        </button>
      </div>

      {/* Clear Completed Button */}
      <button
        className={` hover:text-gray-400 text-sm sm:text-base md:text-lg ${
          isDarkMode ? "text-very-light-gray" : "text-very-dark-gray"
        }`}
        onClick={clearCompleted}
      >
        Clear Completed
      </button>
    </div>
  );
};

export default Footer;
