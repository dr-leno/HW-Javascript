const INVALID_CLASS = 'invalid-input';
const DELETE_BTN_CLASS = 'delete-btn';

const contactTemplate = document.querySelector('#contactTemplate').innerHTML;
const contactsListEl = document.querySelector('#contactsList');
const nameInput = document.querySelector('#name');
const surnameInput = document.querySelector('#surname');
const phoneInput = document.querySelector('#phone');
const addContactBtn = document.querySelector('#addContactBtn');

addContactBtn.addEventListener('click', onAddContactBtnClick);
contactsListEl.addEventListener('click', onContactsListClick);

nameInput.addEventListener('input', onInputChange);
surnameInput.addEventListener('input', onInputChange);
phoneInput.addEventListener('input', onInputChange);

function onInputChange(event) {
    validateInput(event.target);
}

function onAddContactBtnClick() {
    const newContact = getValues();
    addContact(newContact);
    resetInput();
    addContactBtn.disabled = true;
}

function onContactsListClick(event) {
    if (event.target.classList.contains(DELETE_BTN_CLASS)) {
        removeContact(event.target.parentElement.parentElement);
    }
}

function validateInput(input) {
    resetInputValidation(input);
    validateInputsValue();
    if(input.value === ''){   
       input.classList.add(INVALID_CLASS);
        return false;
    }
    return true;
}
function validateInputsValue(){
    if (nameInput.value === '' || surnameInput.value === '' || phoneInput.value === ''){
        addContactBtn.disabled = true;
    }
    else{
        addContactBtn.disabled = false;
    }       
}

function resetInputValidation(input){
    input.classList.remove(INVALID_CLASS); 
}

function getValues() {
    return {
        name: nameInput.value,
        surname: surnameInput.value,
        phone: phoneInput.value,
    };
}

function generateContactHtml({name, surname, phone}) {

        return contactTemplate
                .replaceAll('{{name}}', name)
                .replaceAll('{{surname}}', surname)
                .replaceAll('{{phone}}', phone);
}

function addContact(contact) {
    const contactHtml = generateContactHtml(contact);
    contactsListEl.insertAdjacentHTML('beforeend', contactHtml);
}

function resetInput() {
    nameInput.value = '';
    surnameInput.value = '';
    phoneInput.value = '';
}

function removeContact(contactEl) {
    contactEl.remove();
}