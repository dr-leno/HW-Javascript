class Accordion {
    static CLASSES = {
      ITEM: 'accordion-item',
      TITLE: 'accordion-title',
      BODY: 'accordion-body',
      ACTIVE_CLASS: 'active',
    };

    #el = null;


    constructor(el) {
        this.#el = el;
        this.#bindEventListeners();
    }

    #bindEventListeners() {
        this.#el.addEventListener('click', (e) => {
          if (e.target.classList.contains(Accordion.CLASSES.TITLE)) {
            this.#toggleElement(e.target);
            this.#toggleElement(e.target.nextElementSibling);
          }
        });
    }

      #toggleElement(el) {
        el.classList.toggle(Accordion.CLASSES.ACTIVE_CLASS);
    }
}