import React, { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import Tasks from "./components/Tasks";
import fundo from "./img/fundo.jpg";
import { v4 } from "uuid";

function App() {
  // Carrega as tarefas do localStorage ao iniciar
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved
      ? JSON.parse(saved)
      : [
          {
            id: 1,
            title: "Estudar",
            description: "Estudar programação",
            isCompleted: false,
            status: "Iniciado",
          },
        ];
  });

  // Salva as tarefas no localStorage sempre que mudarem
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function onTaskClick(taskId) {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        const isCompleted = !task.isCompleted;
        return {
          ...task,
          isCompleted,
          status: isCompleted ? "Concluído" : "Iniciado",
        };
      }
      return task;
    });
    setTasks(newTasks);
  }

  function deleteTaskClick(taskId) {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  }

  function addTaskSubmit(title, description) {
    const newTask = {
      id: v4(),
      title,
      description,
      isCompleted: false,
      status: "Iniciado",
    };
    setTasks([...tasks, newTask]);
  }

  function onStatusChange(taskId, newStatus) {
    const newTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(newTasks);
  }

  return (
    <div
      className="w-screen h-screen flex flex-col items-center justify-center p-6 bg-cover bg-center"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div className="w-[500px] space-y-4">
        <h1 className="text-3xl text-black font-bold text-center">
          Gerenciador de Tarefas
        </h1>
        <AddTask addTaskSubmit={addTaskSubmit} />
        <Tasks
          tasks={tasks}
          onTaskClick={onTaskClick}
          deleteTaskClick={deleteTaskClick}
          onStatusChange={onStatusChange}
        />
      </div>
    </div>
  );
}

export default App;
