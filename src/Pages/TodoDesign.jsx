
import React from "react";
import dark from "../assets/bg-desktop-dark.jpg";
import light from "../assets/bg-desktop-light.jpg";
import mobiledark from "../assets/bg-mobile-dark.jpg";
import mobilelight from "../assets/bg-mobile-light.jpg";
import { useTheme } from "../Context/ThemeContext"; 
import Container from "../Componets/Container";

const TodoDesign = () => {
  const { isDarkMode, toggleTheme } = useTheme(); 

  return (
    <div className={`w-full h-screen absolute ${isDarkMode ? "bg-very-dark-blue" : "bg-very-light-gray"}`}>
      <img
        className="w-full sm:hidden object-cover"
        src={isDarkMode ? mobiledark : mobilelight}
        alt="Mobile Background"
      />
      <img
        className="hidden sm:block  w-full md:h-[250px] object-cover"
        src={isDarkMode ? dark : light}
        alt="Desktop Background"
      />
      <Container isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
    </div>
  );
};

export default TodoDesign;
