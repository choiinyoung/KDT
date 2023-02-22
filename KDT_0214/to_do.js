const addBtn = document.querySelector(".input-btn");
const todoList = document.querySelector(".todo-list");
const inputTask = document.querySelector(".input-task");
const enter = inputTask.value
console.log(enter);
const addEvent = document.querySelector(".input-btn");
addEvent.addEventListener("click",function(){
  todoList.innerHTML = `<input type="checkbox"> <label>input-task.value</label>`;
})
