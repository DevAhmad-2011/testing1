// Get references to elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();
  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create a new list item
  const li = document.createElement('li');
  li.textContent = taskText;

  // Add the new task to the list
  taskList.appendChild(li);

  // Clear the input box
  taskInput.value = '';
}

// Add click event listener to the button
addTaskBtn.addEventListener('click', addTask);
