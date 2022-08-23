const inputTarefa = document.querySelector('.input-tarefa')
const botao = document.querySelector('.btn-tarefa')
const tarefas = document.querySelector('.tarefas')

botao.addEventListener('click', (e) => {
  e.preventDefault()
  // if(inputTarefa.value === '') -> campo vazio retorna falso
  // então checar invertido \/
  // if (!inputTarefa.value) return
  // criaTarefa(inputTarefa.value)
  verifica(inputTarefa)
})
inputTarefa.addEventListener('keypress', (e) => {
  if (e.keyCode === 13)
    // if (!inputTarefa.value)return
    //   criaTarefa(inputTarefa.value)
    verifica(inputTarefa)
})
function verifica(inputTarefa) {
  if (!inputTarefa.value) return
  criaTarefa(inputTarefa.value)
}
function limpaInput() {
  inputTarefa.value = ''
  inputTarefa.focus()
}
function criaLi() {
  const li = document.createElement('li') // cria Li
  return li
}
function criaTarefa(texto) {
  const li = criaLi()
  li.innerHTML = texto
  li.classList.add('lista-tarefa')
  tarefas.appendChild(li)
  limpaInput()
  criaBotaoApagar(li)
  salvarTarefas(li)
}

function criaBotaoApagar(li) {
  li.innerText += ' '
  const botaoApagar = document.createElement('button')
  botaoApagar.innerText = 'Apagar'
  // botaoApagar.classList.add('apagar')
  botaoApagar.setAttribute('class', 'apagar')
  botaoApagar.setAttribute('title', 'Apagar esta Tarefa')
  li.appendChild(botaoApagar)
}
document.addEventListener('click', (e) => {
  const el = e.target;
  if (el.classList.contains('apagar')) {
    el.parentElement.remove()
    salvarTarefas()
  }
})
function salvarTarefas() {
  const liTarefas = tarefas.querySelectorAll('li')
  const listaDeTarefas = []
  for (let tarefa of liTarefas) {
    let tarefaTexto = tarefa.innerText
    tarefaTexto = tarefaTexto.replace('Apagar', ' ').trim()
    // console.log(tarefaTexto)
    listaDeTarefas.push(tarefaTexto)
  }
  const tarefasJSON = JSON.stringify(listaDeTarefas)//String convertido para JSON

  // Salvando Local Storage
  localStorage.setItem('tarefas', tarefasJSON) //pode ser salvo somente strings
}
function adicionaTarefasSalvas() {
  const tarefas = localStorage.getItem('tarefas')
  const listaDeTarefas = JSON.parse(tarefas) //converte de volta para um objeto Javascript
  
  for(let tarefa of listaDeTarefas){
    criaTarefa(tarefa)
  }

}
adicionaTarefasSalvas()