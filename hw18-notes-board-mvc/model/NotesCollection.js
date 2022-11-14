class NotesCollection {
    
    #api = null;
    notes = [];

    constructor() {
        this.#api = new RestApi('https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/stickers/');
    }

    fetchNotes() {
        return this.#api.getList().then(((data) => (this.notes = data)));
    }
    // fetchOneNote(id) {
    //     return this.#api.getOne(id).then(((data) => (this.notes = data)));
    // }

    create(note) {
        return this.#api.create(note).then((data) => this.notes.push(data));
    }

    delete(id) {
        return this.#api.delete(id).then(() => this.notes = this.notes.filter((item) => item.id !== id));
    }

    update(note) {
        return this.#api.update(note).then(() => this.notes = this.notes.map((item) => item.id === note.id ? note : item));
    }

}