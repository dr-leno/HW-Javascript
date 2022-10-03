const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const INVALID_INPUT_CLASS = 'invalid-input';
const TODO_ITEM_SELECTOR = '.todo-item';
const TODO_ITEM_CLASS = 'todo-item';
const DONE_ITEM_CLASS = 'done';

const todoListEl = document.querySelector('#todoList');
const newTodoForm = document.querySelector('#newTodoForm');
const newTodoTitleInput = document.querySelector('#newTodoTitle');
const todoTemplate = document.querySelector('#todoTemplate').innerHTML;
const idInput = document.querySelector('#idInput');
const saveTodoBtn = document.querySelector('#saveTodoBtn');


let todoList =[
    { id: 1, title: 'Todo 1', isDone: false },
    { id: 2, title: 'Todo 2', isDone: false },
    { id: 3, title: 'Todo 3', isDone: false },
];

newTodoForm.addEventListener('submit', onFormSubmit);
todoListEl.addEventListener('click', onListElClick);
newTodoTitleInput.addEventListener('input', onInputChange);


init();

function init() {
    // глобальная область видимости
    renderList(todoList); 
    
}

function renderList(list) {
    // локальная область видимости
   todoListEl.innerHTML = list.map(generateTodoListHtml).join('');
   
}

function onFormSubmit(e) {
    e.preventDefault();

    const todoData  = getFormValues();
    saveTodo(todoData);
    resetInput();
}

function onInputChange(e) {
    validateInput(e.target);
}

function onListElClick(e){
    const todoId = getTodoId(e.target);

    if(e.target.classList.contains(TODO_ITEM_CLASS)) {
        setTodoStatus(todoId);
    }
    if(e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTodo(todoId);
    }
    if(e.target.classList.contains(EDIT_BTN_CLASS)){
        editTodo(todoId);
    }
}

function generateTodoListHtml({id, title, isDone}) {
        return todoTemplate
                    .replaceAll('{{id}}', id)
                    .replaceAll('{{title}}', title)
                    .replaceAll('{{class}}', isDone ? 'todo-item done' : 'todo-item');
}

function getFormValues() {
    return {
        id: +idInput.value,
        title: newTodoTitleInput.value,
    }
}

function editFormValues({id, title}) {
        idInput.value = id;
        newTodoTitleInput.value = title;
}

function addNewTodo(todo) {
    todo.id = Date.now();
    todo.isDone = false

    todoList.push(todo);
    renderList(todoList);
}

function saveTodo(todo){
    if(todo.id === 0){
        addNewTodo(todo);
    } else {
        updateTodo(todo);
    }
}
function updateTodo(todo) {
    todoList = todoList.map((item) => item.id === todo.id ? todo : item);
    renderList(todoList);
}

function getTodoId(el) {
    return +el.closest(TODO_ITEM_SELECTOR).dataset.todoId;
}

function setTodoStatus(id){
    todoList = todoList.map((item) => {
        if(item.id === id){
            item.isDone = !item.isDone;  
        }
        return item;
    }) 
    
    renderList(todoList);
}

function deleteTodo(id) {
    todoList = todoList.filter((item) => item.id !== id);
    renderList(todoList);
}

function editTodo(id) {
    const todo = todoList.find((item) => item.id === id);
    editFormValues(todo);
}

function validateInput(input) {
    resetInputValidation(input);
    if(input.value === ''){   
       input.classList.add(INVALID_INPUT_CLASS);
       saveTodoBtn.disabled = true;
        // если тут не оставить кнопку disable, то при очищении инпута могу сохранить пустую таску
        return false;
    }
    saveTodoBtn.disabled = false;
    return true;
}
function resetInputValidation(input){
    input.classList.remove(INVALID_INPUT_CLASS);
      
}
function resetInput() {
    idInput.value = '';
    newTodoTitleInput.value = '';
    saveTodoBtn.disabled = true;
}

// function toggleTodo(id) {
//     const todoEl = document.querySelector(`[data-todo-id="${id}"]`)
//     todoEl.classList.add(DONE_ITEM_CLASS);
//     console.dir(todoEl);
// }