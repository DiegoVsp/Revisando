// Seleção de elementos
const todoForm = document.querySelector('#todo-form');
const todoInput = document.querySelector('#todo-input');
const todoList = document.querySelector('#todo-list');
const editForm = document.querySelector('#edit-form');
const editInput = document.querySelector('#edit-input');
const cancelEditBtn = document.querySelector('#cancel-edit-btn');
// Funções
const saveTodo = (text) => {
  const todo = document.createElement('div')
  todo.classList.add('todo')

  const todoTitle = document.createElement('h3')
  todoTitle.innerText = text // Aqui já pega o valor do input
  todo.appendChild(todoTitle)

  const doneBtn = document.createElement('button')
  doneBtn.classList.add('finish-todo')
  doneBtn.innerHTML = `<i class="fa-solid fa-check"></i>`
  todo.appendChild(doneBtn)

  const editBtn = document.createElement('button')
  editBtn.classList.add('edit-todo')
  editBtn.innerHTML = ` <i class="fa-solid fa-pen"></i>`
  todo.appendChild(editBtn)

  const deleteBtn = document.createElement('button')
  deleteBtn.classList.add('remove-todo')
  deleteBtn.innerHTML = ` <i class="fa-solid fa-xmark"></i>`
  todo.appendChild(deleteBtn)

  todoList.appendChild(todo)

  todoInput.value = ''  //Limpar campo assim que incluido na lista
  todoInput.focus()
}
// Eventos
todoForm.addEventListener('submit', e => {
  e.preventDefault();
  const inputValue = todoInput.value
  if (!inputValue) return alert('Preencha o campo')
  console.log(inputValue)
  // save Todo
  saveTodo(inputValue)
})

document.addEventListener('click', e => {
  const el = e.target;
  const parentEl = el.closest('div')
  
  if (el.classList.contains('finish-todo')) return parentEl.classList.add('done')
  if (el.classList.contains('edit-todo')) return
  if (el.classList.contains('remove-todo')) return 'Clicou aqui'
})
