import React from "react";
import Heading from "./components/Heading";
import CreateTask from "./components/CreateTask";
import TaskList from "./components/TaskList";
import TaskProvider from "./context/TaskProvider";
import FaqSection from "./components/FaqSection";
import Counter from "./components/Counter";

const App = () => {
  return (
    // <div className=" bg-[#415a77] grid py-4 min-h-screen">
      
    //  <Heading /> 

    //  </div>

    <div className=" bg-[#acaaaa] py-4 min-h-screen m-0 p-0">
      <FaqSection/>
    </div>

    // <div>
    //   <Counter/>
    // </div>
    // <div>
    //   <Heading /> 
    //    <CreateTask />
    //    <TaskList />
    // </div>
  );
};

export default App;
