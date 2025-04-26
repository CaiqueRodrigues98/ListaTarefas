const inputTarefa = document.querySelector(".input-tarefa");
const btnTarefa = document.querySelector(".btn-tarefa");
const tarefas = document.querySelector(".tarefas");

function criaLi() {
  const li = document.createElement("li");
  return li;
}

inputTarefa.addEventListener("keypress", function (event) {
  if (event.key === "Enter") { // Verifica se a tecla pressionada foi "Enter"
    if (!inputTarefa.value) return;
    criaTarefa(inputTarefa.value);
  }
});

function limpaTarefas() {
  tarefas.value = ""; // Limpa a lista de tarefas
  tarefas.focus(); // Foca no campo de tarefas
}

function criaBotaoApagar(li) {
  li.innerText += " ";
  const botaoApagar = document.createElement("button");
  botaoApagar.innerText = "EXCLUIR";
  botaoApagar.style.backgroundColor = "#ff4d4d"; // Define a cor de fundo do botão
  botaoApagar.style.color = "#fff"; // Define a cor do texto do botão
  botaoApagar.style.border = "none"; // Remove a borda do botão
  botaoApagar.style.padding = "2px 5px"; // Adiciona espaçamento interno
  botaoApagar.style.borderRadius = "5px"; // Adiciona bordas arredondadas
  botaoApagar.style.cursor = "pointer"; // Define o cursor como ponteiro ao passar o mouse
  botaoApagar.style.fontSize = "11px"; // Define o tamanho da fonte
  //botaoApagar.classList.add("apagar"); // Adiciona uma classe ao botão
  botaoApagar.setAttribute("class", "apagar"); // Adiciona uma classe ao botão
  botaoApagar.setAttribute("title", "Apagar esta tarefa"); // Adiciona um título ao botão
  botaoApagar.setAttribute("type", "button"); // Define o tipo do botão como "button"
  li.appendChild(botaoApagar);

  };

function criaTarefa(textoInput) {
  const li = criaLi();
  li.innerText = textoInput;
  tarefas.appendChild(li);
  inputTarefa.value = ""; // Limpa o campo de input após adicionar a tarefa
  criaBotaoApagar(li); // Cria o botão de apagar
  salvarTarefas(); // Salva as tarefas no localStorage
  limpaTarefas(); // Limpa o campo de tarefas
}

btnTarefa.addEventListener("click", function (event) {
  event.preventDefault(); // Previne o comportamento padrão do botão
  if (!inputTarefa.value) return;
  criaTarefa(inputTarefa.value);
});

document.addEventListener("click", function (event) {
  const el = event.target; // Obtém o elemento que foi clicado
  if (el.classList.contains("apagar")) { // Verifica se o elemento clicado tem a classe "apagar"
    el.parentElement.remove(); // Remove o elemento pai do botão
    limpaTarefas(); // Limpa o campo de tarefas
    salvarTarefas();
  }
});

function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll("li"); // Seleciona todas as li dentro de tarefas
  const listaDeTarefas = []; // Cria um array vazio para armazenar as tarefas
  for (let tarefa of liTarefas) { // Percorre todas as tarefas
    let tarefaTexto = tarefa.innerText; // Obtém o texto da tarefa
    tarefaTexto = tarefaTexto.replace("Apagar", "").trim(); // Remove a palavra "Apagar" e espaços em branco
    listaDeTarefas.push(tarefaTexto); // Adiciona a tarefa ao array
    
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas); // Converte o array de tarefas para JSON
  localStorage.setItem("tarefas", tarefasJSON); // Salva as tarefas no localStorage 
}

function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem("tarefas"); // Obtém as tarefas do localStorage
  const listaDeTarefas = JSON.parse(tarefas); // Converte o JSON de volta para um array
  for (let tarefa of listaDeTarefas) { // Percorre todas as tarefas
    criaTarefa(tarefa); // Cria a tarefa na tela
  }
}
adicionaTarefasSalvas(); // Chama a função para adicionar as tarefas salvas