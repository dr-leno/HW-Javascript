class NoteBoardController {

    #noteFormView = null;
    #noteBoardView = null;
    #notesCollection = null;

    constructor(container) {
        this.#noteFormView = new NoteFormView({
            onSave: (note) => this.save(note)
            
        });
        container.append(this.#noteFormView.el);

        this.#noteBoardView = new NoteBoardView({
            onChange: (note) => this.change(note),
            onDelete: (id) => this.delete(id)
        });
        container.append(this.#noteBoardView.el);

        this.#notesCollection = new NotesCollection();

        this.#notesCollection.fetchNotes().then(() => this.#noteBoardView.renderNotes(this.#notesCollection.notes));

    }

    save(note) {
        this.#notesCollection.create(note).then(() => this.#noteBoardView.renderNotes(this.#notesCollection.notes));
    }

    delete(id) {
        this.#notesCollection.delete(id).then(() => this.#noteBoardView.renderNotes(this.#notesCollection.notes)); 
    }

    change(note) {
        this.#notesCollection.update(note).then(() => this.#noteBoardView.renderNotes(this.#notesCollection.notes));
    }

    
}