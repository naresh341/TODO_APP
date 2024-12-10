import React from 'react'
import Header from './Header'
import CreatTask from './CreatTask'
import Task from './Task'
import Footer from './Footer'

const Container = ({isDarkMode,toggleTheme}) => {
  return (
    <>
<div className="  absolute z-100 w-full max-w-[90%] h-[650px] left-[50%] top-[50%] md:left-[50%] md:top-[50%] md:w-[600px] transform -translate-x-[50%] -translate-y-[60%] sm:left-[5%] sm:top-[5%] lg:left-[50%] lg:top-[50%] sm:max-w-full">
 
  <Header isDarkMode={isDarkMode} toggleTheme={toggleTheme}/>
    <Task/>
    
   
        </div>
    
    </>
  )
}

export default Container