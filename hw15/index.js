const API_URL = 'https://jsonplaceholder.typicode.com/todos';
const TODO_ITEM_CLASS = 'todo-item';
const TODO_ITEM_SELECTOR = '.' + TODO_ITEM_CLASS;
const DONE_ITEM_CLASS = 'done';
const DELETE_BTN_CLASS = 'delete-btn';
const INVALID_CLASS = 'invalid-input';

const todoTemplate = document.querySelector('#todoTemplate').innerHTML;
const todoListEL = document.querySelector('#todoList');
const newTodoTitleInput = document.querySelector('#newTodoTitle');
const saveTodoBtn = document.querySelector('#saveTodoBtn');
const newTodoForm = document.querySelector('#newTodoForm');

let todoList = [];

const validation = {
    isValid: false,
    errors: {
        title: 'Field is Required'
    }
}

newTodoForm.addEventListener('submit', onNewTodoFormSubmit);
newTodoForm.addEventListener('input', onFormInput);
todoListEL.addEventListener('click', onListElClick);

init();

function init() {
    fetchTodoList();
}

function onNewTodoFormSubmit(e) {
    e.preventDefault();

    if (!validation.isValid) {
        return;
    }

    const newTodo = getFormValues();
    addTodo(newTodo);
    resetInput();
}

function onFormInput(e) {
    validateInput(e.target);
}

function onListElClick(e) {
    const todoId = getTodoId(e.target);

if(e.target.classList.contains(DELETE_BTN_CLASS)) {
    deleteTodo(todoId);
}
if(e.target.classList.contains(TODO_ITEM_CLASS)) {
    toggleTodo(todoId);
}
}

function fetchTodoList() {
    fetch(API_URL).then((resp) => {
         resp.json().then((data) => {
            todoList = data;
            renderTodoList(todoList);
         })
        });
}

function renderTodoList(list) {
    todoListEL.innerHTML = list.map(generateTodoItemHtml).join('');
}

function generateTodoItemHtml({id, title, completed}) {
    return todoTemplate
            .replaceAll('{{title}}', title)
            .replaceAll('{{doneClass}}', completed ? DONE_ITEM_CLASS : '')
            .replaceAll('{{id}}', id);
}
function getFormValues() {
    return {
        title: newTodoTitleInput.value 
    }
}

function addTodo(todo) {
    todo.id = Date.now();
    todo.completed = false;

    todoList.push(todo);

    renderTodoList(todoList);
}

function deleteTodo(id) {
    todoList = todoList.filter((item) => item.id !== id);

    renderTodoList(todoList);
}

function getTodoId(el) {
   return +el.closest(TODO_ITEM_SELECTOR).dataset.todoId;
}

function toggleTodo(id) {
   const todo = todoList.find((item) => item.id === id);
   todo.completed = !todo.completed;

   renderTodoList(todoList);
}

function resetInput() {
    newTodoTitleInput.value = '';
}

function validateInput(el) {
    let error = null;
    const { name, value } = el;

    resetValidation(el);

    if (value === '') {
        error = 'Field is Required';
    }
    if (value.length < 3) {
        error = 'Field is too short';
    }

    validation.errors[name] = error;
    validation.isValid = !validation.errors.title;

    if (error !== null) {
        el.classList.add(INVALID_CLASS);
    }
}

function resetValidation(el) {
    el.classList.remove(INVALID_CLASS);
}

