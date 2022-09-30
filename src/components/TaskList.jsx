import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import TaskCard from "./TaskCard";


function TaskList() {

  const {tasks} = useContext(TaskContext);
  
  if (tasks.length === 0) {
    return <h1 className="text-white text-2xl font-bold text-center">No hay tareas aún</h1>; 
  }
  return (
    <div className="grid grid-cols-4 gap-2">
      {tasks.map((task) => (
        <div key={task.id}>
          <TaskCard task={task}/>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
