class NoteFormView {
    static noteFormTemplate = `
    <form action="#">
            <textarea name="description" id="note-input" cols="30" rows="3" placeholder="Enter your note here..."></textarea>
            <button id="addBtn"><i class="fas fa-plus"></i> Add Note</button>
        </form>`;


    #config = null;
    el = null;


    constructor(config){
        this.#initView();
        this.#config = config;
    }

    #initView(){
        this.el = htmlToElement(NoteFormView.noteFormTemplate);

        this.el.addEventListener('submit', (e) =>{
            e.preventDefault();

            const newNote = this.getFormValue();

            this.saveNote(newNote);

            this.el.reset();
           
        });

    }

    getFormValue() {
       return {
            description: this.el.querySelector('textarea').value
        }
    }

    saveNote(note) {
        this.#config.onSave(note);
    }
}