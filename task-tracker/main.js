"strict";

const tasks = [];

const inputElement = document.querySelector("#task");

const createListOfTasks = (list) => {
    const ulElement = document.querySelector(".listOfTask");

    const liElement = document.createElement("li");
    const textElement = document.createElement("p");
    const iconSquareElement = document.createElement("i");
    const iconTrashElement = document.createElement("i");

    textElement.textContent = list;
    iconSquareElement.classList.add("fa-regular", "fa-square", "icon-square");
    iconTrashElement.classList.add("fa-solid", "fa-trash", "icon-trash");

    liElement.appendChild(iconSquareElement);
    liElement.appendChild(textElement);
    liElement.appendChild(iconTrashElement);
    ulElement.appendChild(liElement);
}

const getTaskValue = (e) => {
  const value = e.target.value;

  tasks.push(...tasks, { description: value, state: false });

  createListOfTasks(value);
};

inputElement.addEventListener("change", getTaskValue);

