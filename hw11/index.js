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

let todoList =[
    { id: 1, title: 'Todo1', },
    { id: 2, title: 'Todo2' },
    { id: 3, title: 'Todo3' },
];

newTodoForm.addEventListener('submit', onFormSubmit);
todoListEl.addEventListener('click', onListElClick);

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
    addNewTodo(todoData);
    resetInput();
}

function onListElClick(e){
    const todoId = getTodoId(e.target);

    if(e.target.classList.contains(TODO_ITEM_CLASS)) {
        toggleTodo(e.target);
    }
    if(e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteTodo(todoId);
    }
    if(e.target.classList.contains(EDIT_BTN_CLASS)){
        editTodo(todoId);
    }
}


function generateTodoListHtml({id, title}) {
    return todoTemplate
                    .replaceAll('{{id}}', id)
                    .replaceAll('{{title}}', title);
}



function getFormValues() {
    return {
        // id: +idInput.value,
        title: newTodoTitleInput.value,
    }
}
function addNewTodo(todo) {
    todo.id = Date.now();

    todoList.push(todo);
    renderList(todoList);
}

function resetInput() {
    newTodoTitleInput.value = '';
}
function getTodoId(el) {
    return +el.closest(TODO_ITEM_SELECTOR).dataset.todoId;
}
function deleteTodo(id) {
    todoList = todoList.filter((item) => item.id !== id);
    renderList(todoList);
}
function editTodo(id) {
    console.log({todoList, id});
}
function toggleTodo(todoEl) {
    todoEl.classList.toggle(DONE_ITEM_CLASS);
}
