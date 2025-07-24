import React, { useState } from "react";

function AddTask({ addTaskSubmit }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  return (
    <div className="space-y-4 p-6 bg-gray-100 rounded-md shadow flex flex-col">
      <input
        type="text"
        placeholder="Título da Tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-3/4 mx-auto"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />
      <input
        type="text"
        placeholder="Descrição da Tarefa"
        className="border border-slate-300 outline-slate-400 px-4 py-2 rounded-md w-3/4 mx-auto"
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />
      <div className="flex justify-center">
        <button
          onClick={() => {
            if (!title.trim() || !description.trim()) {
              return alert("Por favor, preencha todos os campos.");
            }
            addTaskSubmit(title, description);
            setTitle("");
            setDescription("");
          }}
          className="bg-gray-400 text-white px-6 py-2 rounded-md cursor-pointer"
        >
          Adicionar
        </button>
      </div>
    </div>
  );
}

export default AddTask;
