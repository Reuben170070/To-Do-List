/* Name: Reuben Aby
   Project name: To-Do-List Web App 
   Date: May5th 2025
   Description:A simple web-based to-do list where users can add, edit, delete, and
               mark tasks as complete. 

This is the HTML file that sets up a text input, a button to add, edit,delete, and mark tasks as complete. 
*/

//Load tasks from localStorage when the page loads
document.addEventListener('DOMContentLoaded', () => {
    loadTasks();
});

//Function to add a new task
function addTask(){
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();


//Prevent empty tasks
if (taskText === ''){
    alert('Please enter a task!');
    return;
}

//Create task object 
const task = {
    id: Date.now(), //Unique ID based on timestamp
    text: taskText,
    completed: false
};

//Add task to localStorage
saveTask(task);

//Render the task
renderTask(task);

//Clear input
taskInput.value = '';
}

//Function to render a single task
function renderTask(task){
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.setAttribute('data-id', task.id);

    // Apply completed class if task is completed
    if (task.completed) {
        li.classList.add('completed');
    }

    //Task HTML with Edit button
    li.innerHTML = `
    <span>${task.text}</span>
    <div>
        <button class="complete" onclick="toggleComplete(${task.id})">
            ${task.completed ? 'Undo' : 'Complete'}
        </button>
        <button class="edit" onclick="editTask(${task.id})">Edit</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
    </div>
    `;

    //Append to task list
    taskList.appendChild(li);
}


//Function to save a task to localStorage
function saveTask(task) {
    let tasks = getTasks();
    tasks.push(task);
    localStorage.setItem('tasks' , JSON.stringify(tasks));
}

//Function to get tasks from localStorage
function getTasks() {
    const tasks = localStorage.getItem('tasks');
    return tasks ? JSON.parse(tasks) : [];
}

//Function to load and render all tasks
function loadTasks() {
    const tasks = getTasks();
    tasks.forEach(task => renderTask(task));
}

//Function to toggle task completion
function toggleComplete(id) {
    let tasks = getTasks();
    tasks = tasks.map(task => {
        if (task.id === id ) {
            task.completed = !task.completed;
        }
        return task;
    });
    localStorage.setItem('tasks' , JSON.stringify(tasks));

    //Re-render task list
    document.getElementById('taskList').innerHTML = '';
    loadTasks();
}

//Function to delete a task
function deleteTask(id) {
    let tasks = getTasks();
    tasks = tasks.filter(task => task.id !== id);
    localStorage.setItem('tasks' , JSON.stringify(tasks));

    //Re-render task list
    document.getElementById('taskList').innerHTML = '';
    loadTasks();
}


//Function to edit a task
function editTask(id) {
    let tasks = getTasks();
    const task = tasks.find(task => task.id === id);
    const newText = prompt('Edit task:' , task.text);
    if (newText && newText.trim()) {
        tasks = tasks.map(t => t.id === id ? { ...t, text: newText.trim() } : t);
        localStorage.setItem('tasks' , JSON.stringify(tasks));
        document.getElementById('taskList').innerHTML = '';
        loadTasks();
    }
}

//Function to clear all tasks
function clearAllTasks() {
    localStorage.removeItem('tasks');
    document.getElementById('taskList').innerHTML = '';
}

