import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react"; // Lottie library
import "@theme-toggles/react/css/Classic.css";

const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <div className=" caret-transparent relative z-10 flex justify-between items-center top-3 px-4 sm:px-6">
      <h1 className="font-bold text-[1.8rem] text-white sm:text-[2.5rem]">T O D O</h1>
      <button onClick={toggleTheme} className="relative">
        <DotLottieReact
          src={
            isDarkMode
            ? "https://lottie.host/9b18450f-387b-4332-9874-52ead9107b00/K7QgSiD2QD.lottie"
              : "https://lottie.host/e6e05836-f20a-41ae-b9a2-287febd929f0/HAKdznPGNH.lottie"
          }
          loop
          autoplay
          style={{
            width: "100px",
            height: "100px",
            filter: isDarkMode
              ? "invert(1) brightness(100%)"
              : "invert(0) brightness(1)",
            transition: "width 0.3s ease, height 0.3s ease",
          }}
        />
      </button>
    </div>
  );
};

export default Header;
