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
function criaTarefa(texto) {
  const li = criaLi()
  li.innerHTML = texto
  li.classList.add('lista-tarefa')
  tarefas.appendChild(li)
  inputTarefa.value = ' '
}

function criaLi() {
  const li = document.createElement('li') // cria Li
  return li
}
