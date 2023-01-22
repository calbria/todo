// Find form element
const form = document.getElementById('form');
const taskInput = document.getElementById('taskInput');
const tasksList = document.getElementById('tasksList');
const emptyList = document.getElementById('emptyList');
const emptyListTitle = document.querySelector('#emptyList > .empty-list__title')

let tasks = [];
// Check local storage data
if (localStorage.getItem('tasks')) {
    tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.forEach(renderTask);
}


checkEmptyList();

// Add task
form.addEventListener('submit', addTask);

// Delete task
tasksList.addEventListener('click', deleteTask);

// Mark as done
tasksList.addEventListener('click', doneTask);



// Functions

function addTask(event) {
    // prevents reloading page after submit
    event.preventDefault();
    // text from input 
    const taskText = taskInput.value;
    // create object for local storage
    const newTask = {
        id: Date.now(),
        text: taskText,
        done: false,
    }

    tasks.push(newTask);
    saveToLocal();

    renderTask(newTask);
    checkEmptyList();
    // Clear task input
    taskInput.value = '';
    // return focus on input
    taskInput.focus();


}

function deleteTask(event) {

    if (event.target.dataset.action !== 'delete') return;

    const taskTag = event.target.closest('li');
    const id = Number(taskTag.id);
    //    Delete task from array using filter
    tasks = tasks.filter(item => item.id !== id);

    taskTag.remove();
    saveToLocal();

    checkEmptyList();

}

function doneTask(event) {
    if (event.target.dataset.action !== 'done') return;
    const taskTag = event.target.closest('li');
    const taskTitle = taskTag.querySelector('span');
    taskTitle.classList.toggle('task-title--done');
    const id = Number(taskTag.id);
    const task = tasks.find(task => task.id === id);
    task.done = !task.done;
    saveToLocal();
}

function checkEmptyList() {
    if (tasks.length > 0) {
        emptyListTitle.setAttribute('hidden', true)
    } else emptyListTitle.removeAttribute('hidden');
}
// Save to local storage
function saveToLocal() {
    localStorage.setItem('tasks', JSON.stringify(tasks));

}

// Render task
function renderTask(task) {
    const cssClass = task.done ? 'task-title task-tigit tle--done' : 'task-title';

    // create new task - html element
    const taskHTML = `<li id='${task.id}' class="list-group-item d-flex justify-content-between task-item">
                        <span class="${cssClass}">${task.text}</span>
                        <div class="task-item__buttons">
                            <button type="button" data-action="done" class="btn-action">
                                <img src="./img/tick.svg" alt="Done" width="18" height="18">
                            </button>
                            <button type="button" data-action="delete" class="btn-action">
                                <img src="./img/cross.svg" alt="Done" width="18" height="18">
                            </button>
                        </div>
                    </li>`;


    // Add to task list 
    tasksList.insertAdjacentHTML('beforeend', taskHTML);

}