import { ChevronRightIcon, TrashIcon } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

function Tasks(props) {
  const navigate = useNavigate();

  function onSeeDetailsClick(task) {
    const query = new URLSearchParams();
    query.set("title", task.title);
    query.set("description", task.description);
    query.set("status", task.status);
    navigate(`/task?${query.toString()}`);
  }

  return (
    <ul className="space-y-4 p-6 bg-gray-100 rounded-md shadow">
      {props.tasks.map((task) => (
        <li key={task.id} className="flex gap-2">
          <button
            onClick={() => props.onTaskClick(task.id)}
            className={`bg-gray-200 text-left w-full text-black p-2 rounded-md ${
              task.isCompleted ? "line-through" : ""
            }`}
          >
            {task.title}
          </button>
          <button
            onClick={() => onSeeDetailsClick(task)}
            className="bg-gray-200 p-2 rounded-md text-black cursor-pointer"
          >
            <ChevronRightIcon />
          </button>
          <button
            onClick={() => props.deleteTaskClick(task.id)}
            className="bg-gray-200 p-2 rounded-md text-black cursor-pointer"
          >
            <TrashIcon />
          </button>
          <select
            value={task.status}
            onChange={(e) => props.onStatusChange(task.id, e.target.value)}
            className="
    border-2 border-blue-400
    focus:border-blue-600 focus:ring-2 focus:ring-blue-200
    rounded-full px-4 py-1
    bg-gradient-to-r from-blue-50 to-blue-100
    text-blue-800 font-semibold
    shadow-md
    transition-all duration-200
    outline-none
    hover:border-blue-500
    cursor-pointer
  "
          >
            <option value="Iniciado" className="text-red-700">
              Iniciado
            </option>
            <option value="Em andamento" className="text-yellow-700">
              Em andamento
            </option>
            <option value="Concluído" className="text-green-700">
              Concluído
            </option>
          </select>
        </li>
      ))}
    </ul>
  );
}

export default Tasks;
