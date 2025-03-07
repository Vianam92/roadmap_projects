"use strict";

const tasks = [];

const inputElement = document.querySelector("#task");
const ulElement = document.querySelector(".listOfTask");

const renderListOfTasks = () => {
  ulElement.textContent = "";

  tasks.map((task) => {
    const liElement = document.createElement("li");
    liElement.setAttribute("data-id", task.id);

    const textElement = document.createElement("p");
    textElement.textContent = task.description;
    textElement.classList.toggle(task.completed ? "completed" : "text");

    const iconSquareElement = document.createElement("i");
    const iconTrashElement = document.createElement("i");

    iconSquareElement.classList.add(
      "fa-regular",
      task.completed ? "fa-square-check" : "fa-square",
      "icon-square"
    );
    iconTrashElement.classList.add("fa-solid", "fa-trash", "icon-trash");

    liElement.appendChild(iconSquareElement);
    liElement.appendChild(textElement);
    liElement.appendChild(iconTrashElement);
    ulElement.appendChild(liElement);
  });
};

const addTask = (e) => {
  const value = e.target.value.trim();

  if (value === "") return;

  const newTask = { id: Date.now(), description: value, completed: false };

  tasks.push(newTask);

  e.target.value = "";

  renderListOfTasks();
};

const handleTaskClick = (e) => {
  const liElement = e.target.closest("li");

  if(!liElement) return;

  const listId = Number(liElement.getAttribute("data-id"));

  const taskIndex = tasks.findIndex((task) => task.id === listId);

  if (e.target.classList.contains("icon-square")) {
      tasks[taskIndex].completed = !tasks[taskIndex].completed;
  }

  if (e.target.classList.contains("icon-trash")) {
      tasks.splice(taskIndex, 1);
  }

  renderListOfTasks();
}

inputElement.addEventListener("change", addTask);

if (ulElement) {
  ulElement.addEventListener("click", handleTaskClick);
}
