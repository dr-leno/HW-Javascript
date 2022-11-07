const API_URL = 'https://5dd3d5ba8b5e080014dc4bfa.mockapi.io/users/';
const INVALID_CLASS = 'invalid';
const DELETE_BTN_CLASS = 'delete-btn';
const EDIT_BTN_CLASS = 'edit-btn';
const CONTACT_ITEM_CLASS = 'new-contact';
const CONTACT_ITEM_SELECTOR = '.' + CONTACT_ITEM_CLASS;


const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const contactsListEl = document.querySelector('#contactsList');
const idInput = document.querySelector('#idInput');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const emailInput = document.querySelector('#email');
const newContactForm = document.querySelector('#contactForm');
const addContactBtn = document.querySelector('#addContactBtn');

let contactList = [];


newContactForm.addEventListener('submit', onNewContactFormSubmit);
contactsListEl.addEventListener('click', onContactsListClick);
newContactForm.addEventListener('input', onNewContactFormInput);

init();

function init() {
    fetchContacts();
}

function fetchContacts() {
    fetch(API_URL).then((res) => res.json())
                .then((data) => {
                    contactList = data;
                    renderContacts(contactList);
                })
}

function renderContacts(list) {
    contactsListEl.innerHTML = list.map(generateContactHtml).join('');
}

function generateContactHtml({id, name, surname, email}) {
    return contactTemplate
                    .replaceAll(`{{id}}`, id)
                    .replaceAll(`{{name}}`, name)
                    .replaceAll(`{{surname}}`, surname)
                    .replaceAll(`{{email}}`, email);
}

// хотела сделать универсально, чтобы, например, добавить телефон,
// но оно не сработало, заменяет только namе, вот почему так хочу спросить на занятии
// function generateContactHtml(obj) {
//      console.log(obj);
//      for(const key in obj) {
//          console.log(key);
//          return contactTemplate.replaceAll(`{{${key}}}`, obj[key]);
//      }
// }

function onNewContactFormSubmit(e) {
    e.preventDefault();

    const newContact = getFormValues();

    if(nameInput.value === '' || surnameInput.value === '' || emailInput.value === '') {
        return
    }
    saveContact(newContact);

    resetInput();
}

function onContactsListClick(e) {
    const contactId = getContactId(e.target);
    if(e.target.classList.contains(DELETE_BTN_CLASS)) {
        deleteContact(contactId);
    }
    if(e.target.classList.contains(EDIT_BTN_CLASS)) {
        editContact(contactId);
    }
}

function onNewContactFormInput(e) {
    validateInput(e.target);
}

function saveContact(contact) {
    if(!contact.id){
        addContact(contact);
    } else {
        updateContact(contact);
    }
}

function addContact(contact) {
    fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then((res) => res.json())
    .then((data) => {
        contactList = [...contactList, data];

        renderContacts(contactList);
    })

}

function getFormValues() {
    return {
        id: idInput.value,
        name: nameInput.value,
        surname: surnameInput.value,
        email: emailInput.value
    }
}

function getContactId(el) {
   return el.closest(CONTACT_ITEM_SELECTOR).dataset.contactId;
}

function deleteContact(id) {
    fetch(API_URL + id, {
        method: 'DELETE',
    }).then(() => {
        contactList = contactList.filter((item) => item.id !== id);

        renderContacts(contactList);
    });
}

function editContact(id) {
    const contact = contactList.find((item) => item.id === id);
    editFormValues(contact);
    
}

function updateContact(contact) {
    fetch(API_URL + contact.id, {
        method: 'PUT',
        body: JSON.stringify(contact),
        headers: {
            'Content-Type': 'application/json',
        },
    })
    .then(() => {
        contactList = contactList.map((item) => item.id === contact.id ? contact : item);

        renderContacts(contactList);
    })
    resetInput();
}

function editFormValues({id, name, surname, email}) {
        idInput.value = id;
        nameInput.value = name;
        surnameInput.value = surname;
        emailInput.value = email;
        addContactBtn.innerText = 'Save';
}

function resetInput() {
    idInput.value = '';
    nameInput.value = '';
    surnameInput.value = '';
    emailInput.value = '';
    addContactBtn.innerText = 'Add';
}


function validateInput(input) {
    resetInputValidation(input);
    if(input.value === ''){   
       input.classList.add(INVALID_CLASS);
       addContactBtn.disabled = true;
        return false;
    }
    addContactBtn.disabled = false;
    return true;
}

function resetInputValidation(input) {
    input.classList.remove(INVALID_CLASS);
}




// const validation = {
//     isValid: false,
//     errors: {
//         title: 'Field is Required'
//     }
// }

// if (!validation.isValid) {
//     console.log(validation.isValid);
//     return;
// }

// function onNewContactFormInput(e) {
//     console.log(e.target.id);
//      if(e.target.id != idInput) {
//          validateInput(e.target);
//      } 
//  }
 

// function validateInput(el) {
//     let error = null;
//     const { name, value } = el;

//     resetValidation(el);

//     if (value === '') {
//         error = 'Field is Required';
//     }
//     if (value.length < 3) {
//         error = 'Field is too short';
//     }

//     validation.errors.title[name] = error;
//     validation.isValid = !validation.errors.title;

//     if (error !== null) {
//         el.classList.add(INVALID_CLASS);
//     }
//     console.log('validation.errors.title', validation.errors.title);
// }


