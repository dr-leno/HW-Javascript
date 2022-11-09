class TodoListView {
    static CLASSES = {
        TODO_ITEM_CLASS: 'todo-item',
        DONE_ITEM_CLASS: 'done',
        DELETE_BTN_CLASS: 'delete-btn',
    }

    static todoListContainerTemplate = 
    `<div class="row">
        <div class="list"></div>
    </div>`;

    static todoItemTemplate = `
        <div class="todo-item {{doneClass}}" data-todo-id="{{id}}">
            {{title}}
            <button type="button" class="delete-btn">Delete</button>
        </div>`;

    el = null; //публичное
    #config = null;

    static generateTodoItemHtml(todo) {
       return interpolate(TodoListView.todoItemTemplate,todo)
       .replaceAll('{{doneClass}}', todo.isDone ? TodoListView.CLASSES.DONE_ITEM_CLASS : '');
    }

    static getTodoId(el) {
        return el.closest('.' + TodoListView.CLASSES.TODO_ITEM_CLASS).dataset.todoId;
     }

    constructor(config){
        this.#initView();
        this.#config = config;
    }

    #initView(){

        const row = document.createElement('div');

        row.className = 'row';

        const div = document.createElement('div');
        div.className = 'list';

        row.append(div);

        row.addEventListener('click', (e) => {
            const todoId = TodoListView.getTodoId(e.target);

            if (e.target.classList.contains(TodoListView.CLASSES.TODO_ITEM_CLASS)){
                this.toggleTodo(todoId);
            }
            if (e.target.classList.contains(TodoListView.CLASSES.DELETE_BTN_CLASS)){
                this.deleteTodo(todoId);
            }
        })



        this.el = row;
    }

    renderList(list) {
        this.el.children[0].innerHTML = list.map(TodoListView.generateTodoItemHtml).join('');
    }

    toggleTodo(id) {
        this.#config.onToggle(id);
    }

    deleteTodo(id) {
        this.#config.onDelete(id);
    }
}