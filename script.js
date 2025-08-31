// script.js - Beginner Real World Project: Profile, Age Check, To-Do List

// Profile Section
const profileName = document.getElementById("profileName");
const profileHobby = document.getElementById("profileHobby");
const editProfileBtn = document.getElementById("editProfileBtn");

editProfileBtn.addEventListener("click", () => {
  const newName = prompt("Enter your name:", profileName.textContent);
  if (newName) profileName.textContent = newName;
  const newHobby = prompt(
    "Enter your favorite hobby:",
    profileHobby.textContent
  );
  if (newHobby) profileHobby.textContent = newHobby;
});

// Age Check Section
const ageInput = document.getElementById("ageInput");
const checkAgeBtn = document.getElementById("checkAgeBtn");
const ageResult = document.getElementById("ageResult");

checkAgeBtn.addEventListener("click", () => {
  const age = Number(ageInput.value);
  if (isNaN(age) || age <= 0) {
    ageResult.textContent = "Please enter a valid age.";
  } else if (age >= 18) {
    ageResult.textContent = "You are an adult!";
  } else {
    ageResult.textContent = "You are a minor.";
  }
});

// To-Do List Section
const todoInput = document.getElementById("todoInput");
const addTodoBtn = document.getElementById("addTodoBtn");
const todoList = document.getElementById("todoList");

addTodoBtn.addEventListener("click", () => {
  const task = todoInput.value.trim();
  if (task) {
    const li = document.createElement("li");
    li.textContent = task;
    // Add remove button
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.style.marginLeft = "1rem";
    removeBtn.onclick = () => li.remove();
    li.appendChild(removeBtn);
    todoList.appendChild(li);
    todoInput.value = "";
  }
});

// Theme Toggle
const toggleThemeBtn = document.getElementById("toggleThemeBtn");
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-theme");
});
