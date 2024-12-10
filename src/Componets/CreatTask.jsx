import React, { useState } from 'react';
import check from "../assets/icon-check.svg"; 
import { useTheme } from '../Context/ThemeContext';

const CreatTask = ({ addTask }) => {
  const [taskInput, setTaskInput] = useState(''); 
  const [isSelected, setIsSelected] = useState(false)
  const{isDarkMode}=useTheme()
  
 

  function handleKeyDown(e) {
    if (e.key === 'Enter' && taskInput.trim() !== '') {
      addTask(taskInput);
      setTaskInput(''); 
    }
  }
  function handleCheck(){
    setIsSelected(!isSelected)
  }
  return (
    <div className="relative z-2 mt-5">
      <div className="relative  z-1 flex justify-center ">
        <div className="w-full max-w-md sm:max-w-full">
         
          <input
            className={`${
              isDarkMode
              ?'bg-very-dark-desaturated-blue text-very-light-gray':'text-very-dark-desaturated-blue'} 
              border-none outline-none w-full h-[3rem] font-md text-[18px] pl-16 rounded-md sm:h-[3.5rem] md:h-[4rem]`}
            placeholder="Create a new todo..."
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            onKeyDown={handleKeyDown} 
          />
                 <div
            onClick={handleCheck}
            className={`${
              isSelected ? "bg-custom-gradient" : ""
            } caret-transparent absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 rounded-full border-2 border-very-dark-grayish-blue flex items-center justify-center sm:w-7 md:w-8 md:h-8`}
          >
            {isSelected && <img src={check} alt="check" className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatTask;
