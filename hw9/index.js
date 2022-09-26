const toDoListEl = document.querySelector('#to-do-list');
const taskInputEl = document.querySelector('#to-do-input');
const addTaskBtn = document.querySelector('#to-do-button');

addTaskBtn.addEventListener('click', onAddTaskBtnClick);

function onAddTaskBtnClick() {
    if(!validateInput()){
        return 
    }
    const newTask = getTask();
    addTask(newTask);
    resetInput();
}

function getTask() {
    return taskInputEl.value;
}

function validateInput() {
    resetInputValidation();
    if(taskInputEl.value === ''){
        taskInputEl.classList.add('invalid-input');
        return false;
    }
    return true;
}
function resetInputValidation() {
    taskInputEl.classList.remove('invalid-input')
}

function addTask(task) {
    const taskEl = generateTaskElement(task);

    toDoListEl.append(taskEl);
}

function generateTaskElement(task) {
    const liEl = document.createElement('li')
    liEl.innerText = task;

    liEl.addEventListener('click', () =>{
        liEl.classList.toggle('completed');
    })
    return liEl;
}
function resetInput() {
    taskInputEl.value = '';
}
