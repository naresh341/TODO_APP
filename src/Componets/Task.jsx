import React, { useEffect, useState } from 'react';

import check from "../assets/icon-check.svg"; 
import cross from "../assets/icon-cross.svg"
import CreatTask from './CreatTask';
import Footer from './Footer';
import { useTheme } from '../Context/ThemeContext';

const Task = () => {
  const [tasks, setTasks] = useState([]); 
  const [filter, setFilter] = useState("all")
  const {isDarkMode} = useTheme();  

  useEffect(() => {
    const storedTasks=JSON.parse(localStorage.getItem("tasks"))
    if(storedTasks){
      setTasks(storedTasks)
    }
  
  }, [])

  useEffect(() => {
    if(tasks.length>0){

      localStorage.setItem("tasks",JSON.stringify(tasks))
    }
  
   
  }, [tasks])
  

  function addTask(taskText) {
    const newTask = { id: Date.now(), text: taskText, completed: false }; 
    setTasks((prevTask) => [...prevTask, newTask]); 
  }

  function toggleTaskCompleted(taskId) {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task );
    setTasks(updatedTasks); 
  }

  function deleteTask(taskId){
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  }

  function clearCompleted(){
    setTasks(tasks.filter((task) => !task.completed));
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
  });

  return (
    <div className="px-4 sm:px-6 md:px-8">
      <CreatTask addTask={addTask} />

      <div className="mt-[25px]">
        {filteredTasks.map((task) => (
          <div
            key={task.id}
            className={` caret-transparent flex items-center border-b ${isDarkMode ? 'bg-very-dark-desaturated-blue text-white border-light-grayish-blue':'bg-very-light-gray'} rounded-b-none 
            
            ${task.completed ? 'line-through text-dark-grayish-blue-light' : ''} 
            h-[3rem] sm:h-[3.5rem] md:h-[4rem] pl-3 sm:px-3  rounded-sm`}
          >
            <div className='caret-transparent flex items-center justify-center'>
              <div
                onClick={() => toggleTaskCompleted(task.id)}
                className={` caret-transparent w-6 h-6 rounded-full border-2 ${isDarkMode ? 'border-light-grayish-blue' : 'border-dark-grayish-blue-light'} flex items-center justify-center transition-all duration-300 
                
                ${task.completed ? 'bg-custom-gradient' : ''}`}
              >
                {task.completed && <img src={check} alt="check" className="w-3 h-3 " />}
              </div>
            </div>
            <span className={`transition-opacity duration-500 ml-8 font-light
               ${task.completed 
               ? 'line-through opacity-50 ' : ''} font-semibold text-[18px] sm:text-[20px] md:text-[22px]` }>
              {task.text}
            </span>

            <div className='ml-auto p-2 sm:p-5'>
              <img 
                src={cross} 
                alt="cross" 
                onClick={() => deleteTask(task.id)} 
                className='w-3 h-3 cursor-pointer' 
              />
            </div>
          </div>
        ))}
      </div>
      <Footer tasks={tasks} clearCompleted={clearCompleted} setFilter={setFilter} filter={filter}/>
    </div>
  );
};

export default Task;
