import React, { useContext } from "react";
import Task from "./Task";
import useTaskStore from "../store/useTaskStore";
// import TaskContext from "../context/TaskContext";

const TaskList = () => {
  // const { tasks } = useContext(TaskContext);

  const {tasks} = useTaskStore()

  return (
    <div>
      <h3 className=" text-slate-500 font-bold font-serif text-xl mb-3 items-center justify-center">
        Task List (Total : {tasks.length} | Done : {" "}
        {tasks.filter((el) => el.isDone).length})
      </h3>
      {tasks.map((el) => (
        <Task job={el} key={el.id} />
      ))}
    </div>
  );
};

export default TaskList;
