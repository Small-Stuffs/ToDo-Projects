const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS = 'toDos';

function loadToDo() {
  const toDos = localStorage.getItem(TODOS);

  if (toDos !== null) {
  }
}

function displayToDo(text) {
  const list = document.createElement('li');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';
  const span = document.createElement('span');
  span.innerText = text;
  list.appendChild(deleteBtn);
  list.appendChild(span);
  toDoList.appendChild(list);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = toDoInput.value;
  displayToDo(currentValue);
  toDoInput.value = '';
}

function init() {
  loadToDo();
  toDoForm.addEventListener('submit', handleSubmit);
}
init();
