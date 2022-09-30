import {createContext, useState,useEffect} from 'react'
import { taskList } from "../data/task";


export const TaskContext = new createContext();


export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    setTasks(taskList);
  }, []);


  function createTask(task, description){
    setTasks([...tasks, {
      title: task,
      id: tasks.length ,
      desciption: description
  }]);
  }

  function deleteTask(taskId){
    setTasks(
      tasks.filter(task => task.id !== taskId)
    ); 
  }
  return (
    <TaskContext.Provider value={
      {
        tasks: tasks,
        createTask: createTask,
        deleteTask: deleteTask
      }
    }>
        {props.children}
    </TaskContext.Provider>
  )
}
