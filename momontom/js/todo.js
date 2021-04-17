const toDoForm = document.querySelector('.js-toDoForm'),
  toDoInput = toDoForm.querySelector('input'),
  toDoList = document.querySelector('.js-toDoList');

const TODOS = 'toDos';

const toDos = [];

function loadToDo() {
  const toDos = localStorage.getItem(TODOS);

  if (toDos !== null) {
    const parsedToDos = JSON.parse(toDos);
    parsedToDos.forEach(function (toDo) {
      displayToDo(toDo.text);
    });
  }
}
function saveToDo() {
  localStorage.setItem(TODOS, JSON.stringify(toDos));
}
function deleteToDo(event) {
  console.log(event);
}
function displayToDo(text) {
  const list = document.createElement('li');
  const deleteBtn = document.createElement('button');
  deleteBtn.innerText = '❌';

  deleteBtn.addEventListener('click', deleteToDo);
  const span = document.createElement('span');
  const newId = toDos.length + 1;
  span.innerText = text;
  list.appendChild(deleteBtn);
  list.appendChild(span);
  list.id = newId;
  toDoList.appendChild(list);

  const toDoObj = {
    text: text,
    id: newId,
  };
  toDos.push(toDoObj);
  saveToDo();
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
