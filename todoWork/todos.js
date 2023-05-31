/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");
const $delete = document.querySelector(".delete");
let toDos = [];
const TODOS_KEY = "todos";
function saveToDos(){
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}


function paintToDo(newTodo) {
  const li = document.createElement("li");
  li.id = newTodo.id;
  const span = document.createElement("span");
  const button = document.createElement("button");
  const input = document.createElement("input");
  input.type = "checkbox";
  input.className = 'toggle-checked';
  button.innerText = "×";
  button.className = "delete"
  li.appendChild(input);
  li.appendChild(span);
  li.appendChild(button);
  span.innerText = newTodo.text;
  span.className = "text";
  toDoList.appendChild(li);
  button.addEventListener("click", deleteToDo);
}
function deleteToDo(event){
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}
function handleToDoSubmit(event){
  event.preventDefault();
  const newTodo = toDoInput.value;

  toDoInput.value = "";
  const newTodoObject = {
    text : newTodo,
    id : Date.now(),
  };
  toDos.push(newTodoObject);
  paintToDo(newTodoObject);
  saveToDos();
}
toDoForm.addEventListener("submit", handleToDoSubmit);

function deleteEvent() {

}

$delete.addEventListener("click", deleteEvent);
// let toDos = [];
// const TODOS_KEY = "todos";

// function saveToDos() {
//   localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
// }

// function deleteToDo(event) {
//   const li = event.target.parentElement;
//   li.remove();
//   toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
//   saveToDos();
// }

// function paintToDo(newTodo) {
//   const li = document.createElement("li");
//   li.id = newTodo.id;
//   const span = document.createElement("span");
//   const button = document.createElement("button");
//   button.className = "delete";
//   li.appendChild(span);
//   li.appendChild(button);
//   span.innerText = newTodo.text;
//   toDoList.appendChild(li);
//   button.addEventListener("click", deleteToDo);
// }

// function handleToDoSubmit(event) {
//   event.preventDefault();
//   const newTodo = toDoInput.value;

//   toDoInput.value = "";
//   const newTodoObject = {
//     text: newTodo,
//     id: Date.now(),
//   };
//   toDos.push(newTodoObject);
//   paintToDo(newTodoObject);
//   saveToDos();
// }

// toDoForm.addEventListener("submit", handleToDoSubmit);

// const savedToDos = localStorage.getItem(TODOS_KEY);
// if (savedToDos !== null) {
//   const parsedToDos = JSON.parse(savedToDos);
//   toDos = parsedToDos;
//   parsedToDos.forEach(paintToDo);
// }
