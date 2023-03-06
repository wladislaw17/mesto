const profileForm = document.forms.profile;
const photoForm = document.forms.photo;

const nameInput = profileForm.elements.name;
const statusInput = profileForm.elements.status;
const titleInput = photoForm.elements.title;
const linkInput = photoForm.elements.link;

const profileInputList = [nameInput, statusInput];
const photoInputList = [titleInput, linkInput];

const nameError = profileForm.querySelector(`.${nameInput.id}-error`);
const statusError = profileForm.querySelector(`.${statusInput.id}-error`);
const titleError = profileForm.querySelector(`.${titleInput.id}-error`);
const linkError = profileForm.querySelector(`.${linkInput.id}-error`);

const showError = input => {
    input.classList.add('form__input_error');
    document.querySelector(`.${input.id}-error`).textContent = input.validationMessage;
    document.querySelector(`.${input.id}-error`).classList.add('form__error_active');
};

const hideError = input => {
    input.classList.remove('form__input_error');
    document.querySelector(`.${input.id}-error`).classList.remove('form__error_active');
}

function isValid(input) {
    if (input.validity.valid) {
        hideError(input);
    } else {
        showError(input);
    }
}

function formInputHandle(evt, form, inputList) {
    isValid(evt.target);
    if (inputList.some(input => !input.validity.valid)) {
        form.querySelector('.form__submit-button').classList.add('form__submit-button_disabled');
        form.querySelector('.form__submit-button').disabled = true;
    } else {
        form.querySelector('.form__submit-button').classList.remove('form__submit-button_disabled');
        form.querySelector('.form__submit-button').disabled = false;
    }
}

function enableValidation(settings) {
    const formList = document.querySelectorAll(settings.formSelector);
    formList.forEach(form => {
        const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
        const submitButton = form.querySelector(settings.submitButtonSelector);
        form.addEventListener('input', evt => {
            formInputHandle(evt, form, inputList);
        })
    });
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
});