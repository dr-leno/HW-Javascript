class TodoFormView {
    static todoFormTemplate = `    
    <form class = "form">
        <input
            type="text"
            name="title"
            class="todo-input"
        />
        <button class="save-todo">Save</button>
    </form>`;

    #config = null;
    el = null;


    constructor(config){
        this.#initView();
        this.#config = config;
    }

    #initView() {
        const todoForm = document.createElement('form');
        todoForm.className = 'form';

        const toDoInput = document.createElement('input');
        toDoInput.className = 'todo-input';    

        const saveButton = document.createElement('button');
        saveButton.className = 'save-todo';
        saveButton.innerText = 'Save';

        todoForm.append(toDoInput);
        todoForm.append(saveButton);

        this.el = todoForm;

        todoForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const newTodo = this.getFormValues();

            if(newTodo.title === ''){
                return
            } else{
                this.saveTodo(newTodo);
            }  

            this.resetInput();
        })
    }

    getFormValues() { 
        return {
        title: this.el.children[0].value 
        }
    };

    saveTodo(todo) {
        this.#config.onSave(todo);
    }

    resetInput() {
        this.el.children[0].value = '';
    }

}
