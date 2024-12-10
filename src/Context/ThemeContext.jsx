import React, { createContext, useContext, useState,useEffect } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true)

  useEffect(() => {
    const storedTheme=localStorage.getItem("theme")
    if(storedTheme){
      setIsDarkMode(storedTheme==="dark")
    }
  
   
  }, [])
  
 

  const toggleTheme = () => {
   setIsDarkMode((prevmode)=>{
    const newMode=!prevmode
    localStorage.setItem("theme", newMode ? "dark" : "light");
    return newMode
   })
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
