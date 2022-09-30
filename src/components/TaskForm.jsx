import React, { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
  const {createTask} = useContext(TaskContext);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createTask(title, description);
    setTitle("");
    setDescription("");
  };

  return (
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4" >
        <h1 className="text-2xl font-bold text-center mb-3 text-white">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
          autoFocus
          className="bg-slate-300 p-3 w-full mb-2"
        />
        <br />
        <textarea
          placeholder="Escribe la descripción"
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button 
        className="bg-blue-700 px-3 py-1 text-white rounded-md mt-4 hover:bg-black"
        >Guardar</button>
      </form>
      </div>
  );
}

export default TaskForm;
