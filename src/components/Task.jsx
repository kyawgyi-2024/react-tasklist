import React, { useContext } from "react";
// import TaskContext from "../context/TaskContext";
import useTaskStore from "../store/useTaskStore";


const Task = ({ job: { id, task, isDone } }) => {
  // const { removeTask, doneTask } = useContext(TaskContext);

  const {removeTask,doneTask} = useTaskStore()
  const handleRemoveTaskBtn = () => {
    if (confirm("Are you sure you want to delete this task?")) {
      removeTask(id);
    }
  };

  const handleOnChange = () => {
    doneTask(id);
  };
  return (
    <div className=" text-slate-500 flex justify-between items-center p-2 bg-slate-300 border-2 border-slate-300 mb-3 last:mb-0 rounded-lg">
      <div className=" flex items-center gap-3">
        <input
          type="checkbox"
          onChange={handleOnChange}
          checked={isDone}
          className=" cursor-pointer size-4 w-4 h-4 appearance-none bg-green-100 rounded-full border-white outline checked:bg-rose-400"
        />
        <p className={isDone ? "line-through decoration-red-400" : ""}>{task}</p>
      </div>
      <button
        onClick={handleRemoveTaskBtn}
        className="text-sm  rounded-lg py-2 text-red-700 px-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
          />
        </svg>
      </button>
    </div>
  );
};

export default Task;
