document.addEventListener("DOMContentLoaded", function() {
    const taskForm = document.getElementById("task-form");
    const taskInput = document.getElementById("task-input");
    const taskList = document.getElementById("task-list");

    taskForm.addEventListener("submit", function(e) {
      e.preventDefault();
      addTask(taskInput.value);
      taskInput.value = "";
    });

    function addTask(taskText) {
      const taskItem = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.addEventListener("change", function() {
        if (this.checked) {
          taskText.style.textDecoration = "line-through";
        } else {
          taskText.style.textDecoration = "none";
        }
      });

      const taskTextElement = document.createElement("span");
      taskTextElement.textContent = taskText;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Delete";
      deleteButton.addEventListener("click", function() {
        taskItem.remove();
      });

      taskItem.appendChild(checkbox);
      taskItem.appendChild(taskTextElement);
      taskItem.appendChild(deleteButton);
      taskList.appendChild(taskItem);
    }
  });