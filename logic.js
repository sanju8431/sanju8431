"use strict";

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const btnAdd = document.querySelector(".btnAdd");

const addTask = function () {
  const task = inputBox.value;
  if (!task) alert("Some thing is Wrong");
  else {
    const li = `<li > ${task} <span> ${"\u00d7"} </span></li>`;
    listContainer.insertAdjacentHTML("beforeend", li);
  }
  saveData();
  inputBox.value = "";
  inputBox.blur();
};
btnAdd.addEventListener("click", addTask);

listContainer.addEventListener("click", function (e) {
  if (e.target.tagName === "LI") {
    // console.log(e.target);
    e.target.classList.toggle("checked");
    saveData();
  }
  if (e.target.tagName === "SPAN") {
    e.target.parentElement.remove(); //parent is li
    saveData();
  }
});

const saveData = function () {
  localStorage.setItem("data", JSON.stringify(listContainer.innerHTML));
};
const showData = function () {
  listContainer.innerHTML = JSON.parse(localStorage.getItem("data"));
};
showData();
