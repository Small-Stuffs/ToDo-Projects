const form = document.querySelector('.form'),
  input = form.querySelector('input'),
  greeting = document.querySelector('.name');

const USER = 'currentUser';
const SHOWING = 'show-name';

function displayName(text) {
  form.classList.remove(SHOWING);
  greeting.classList.add(SHOWING);

  greeting.innerHTML = `Hello ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER);
  if (currentUser === null) {
    askName();
  } else {
    displayName(currentUser);
  }
}
function saveName(text) {
  localStorage.setItem(USER, text);
}
function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  console.log(currentValue);
  displayName(currentValue);
  saveName(currentValue);
}

function askName() {
  form.classList.add(SHOWING);
  form.addEventListener('submit', handleSubmit);
}

function init() {
  loadName();
}
init();
