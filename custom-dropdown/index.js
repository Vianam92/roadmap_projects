"strict";

const selectElement = document.querySelector(".select-principal");
const textSelect = document.querySelector(".text-select");
const listElement = document.querySelector(".list");
const listE = document.querySelectorAll("li");
const arrowElementSelect = document.querySelector(".icon-arrow");
const checkedElement = document.querySelectorAll(".checked");

const addClassList = () => {
  listElement.classList.toggle("noShow");
  listElement.classList.toggle("show");
};

const showList = () => {
  addClassList();
  arrowElementSelect.classList.toggle("fa-arrow-down");
  arrowElementSelect.classList.toggle("fa-arrow-up");
};

const selectElementInList = (e) => {
  textSelect.textContent = e.target.textContent;
  arrowElementSelect.classList.add("fa-arrow-down");
  arrowElementSelect.classList.remove("fa-arrow-up");
  addClassList();
  checkedElement.forEach((check) => {
    if (check.classList.contains("fa-check")) {
      check.classList.remove("fa-check");
    }
  });
  e.currentTarget.firstElementChild.classList.add("fa-check");
};

selectElement.addEventListener("click", showList);

listE.forEach((list) => {
  list.addEventListener("click", selectElementInList);
});
