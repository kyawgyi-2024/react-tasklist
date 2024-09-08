import React, { useContext, useState } from "react";
// import TaskContext from "../context/TaskContext";
import useTaskStore from "../store/useTaskStore";


const CreateTask = () => {
  const [job, setJob] = useState("");
  // const { addTask } = useContext(TaskContext);

  const {addTask} = useTaskStore()

  const handleOnChange = (event) => {
    setJob(event.target.value);
  };

  const handleAddTaskBtn = () => {
    const newTask = {
      id: Date.now(),
      task: job,
      isDone: false,
    };
    addTask(newTask);
    setJob("");
  };
  return (
    <div className=" flex justify-between">
     <div className="">
     <input
        type="text"
        className=" bg-slate-300 bg-transparent border-0 outline-none pl-3 h-14 placeholder:text-slate-400"
        value={job}
        onChange={handleOnChange}
        placeholder="Write your new task"
      />
     
     </div>
     <button
        onClick={handleAddTaskBtn}
        className=" mx-auto justify-center"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-8 ml-36 text-green-500"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
      </button>
    </div>
  );
};

export default CreateTask;
