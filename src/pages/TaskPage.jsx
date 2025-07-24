import React from "react";
import fundo from "../img/fundo.jpg";
import { useSearchParams, useNavigate } from "react-router-dom";
import { ChevronLeftIcon } from "lucide-react";

function TaskPage() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const title = searchParams.get("title");
  const description = searchParams.get("description");
  const status = searchParams.get("status");

  return (
    <div
      className="w-screen h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${fundo})` }}
    >
      <div className="w-[500px] space-y-4">
        <div className="flex justify-center relative">
          <button
            onClick={() => navigate(-1)}
            className="absolute left-0 p-2 bg-gray-200 rounded-md text-black cursor-pointer"
          >
            <ChevronLeftIcon />
          </button>
          <h1 className="text-3xl text-black font-bold text-center">
            Detalhes da Tarefa
          </h1>
        </div>
        <div className="bg-gray-100 p-6 rounded-md shadow">
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="text-gray-700 mt-2">{description}</p>
          <p className="text-gray-700 mt-2 font-bold">Status: {status}</p>
        </div>
      </div>
    </div>
  );
}

export default TaskPage;
