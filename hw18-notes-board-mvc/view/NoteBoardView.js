class NoteBoardView {

    static noteBoardTemplate = `
    <div class="note-board">
    </div>`;

    static noteTemplate = `
    <div class="note" data-note-id="{{id}}">
    <div class="note-header">
    <i class="fas fa-trash delete-btn"></i>
    </div>
    <textarea>{{description}}</textarea>
    </div>`;

    static generateNoteHtml({description, id}) {
            return interpolate(NoteBoardView.noteTemplate, {description, id});
        }

    static getNoteId(el) {
            return el.closest('.note').dataset.noteId;
        }

    #config = null;
    el = null;

    constructor(config) {
        this.#initView();
        this.#config = config;
    }

    #initView() {
        this.el = htmlToElement(NoteBoardView.noteBoardTemplate);
        this.el.addEventListener('change', (e) => {
            const noteId = NoteBoardView.getNoteId(e.target);

            const updatedNoteValue = e.target.value;

            const updatedNote = {
                id: noteId,
                description: updatedNoteValue
            }

            this.change(updatedNote);
            
        })
        this.el.addEventListener('click', (e) => {
            
            if(e.target.classList.contains('delete-btn')){
                const noteId = NoteBoardView.getNoteId(e.target);
                
                this.delete(noteId);
            }
        })

    }

    renderNotes(notes) {
        this.el.innerHTML = notes.map(NoteBoardView.generateNoteHtml).join('');
        }

    delete(id) {
        this.#config.onDelete(id);  
        }


    change(note){
        this.#config.onChange(note);
    }    
}