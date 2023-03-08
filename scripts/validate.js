const showError = (input, settings) => {
    const inputError = document.querySelector(`.${input.id}-error`);
    input.classList.add(settings.inputErrorClass);
    inputError.textContent = input.validationMessage;
    inputError.classList.add(settings.errorClass);
};

const hideError = (input, settings) => {
    const inputError = document.querySelector(`.${input.id}-error`);
    input.classList.remove(settings.inputErrorClass);
    inputError.classList.remove(settings.errorClass);
}

function isValid(input, settings) {
    if (input.validity.valid) {
        hideError(input, settings);
    } else {
        showError(input, settings);
    }
}

function formInputHandle(evt, form, inputList, submitButton, settings) {
    isValid(evt.target, settings);
    if (inputList.some(input => !input.validity.valid)) {
        submitButton.classList.add(settings.inactiveButtonClass);
        submitButton.disabled = true;
    } else {
        submitButton.classList.remove(settings.inactiveButtonClass);
        submitButton.disabled = false;
    }
}

function enableValidation(settings) {
    const formList = document.querySelectorAll(settings.formSelector);
    formList.forEach(form => {
        const inputList = Array.from(form.querySelectorAll(settings.inputSelector));
        const submitButton = form.querySelector(settings.submitButtonSelector);
        form.addEventListener('input', evt => {
            formInputHandle(evt, form, inputList, submitButton, settings);
        })
    });
}

enableValidation({
    formSelector: '.form',
    inputSelector: '.form__input',
    submitButtonSelector: '.form__submit-button',
    inactiveButtonClass: 'form__submit-button_disabled',
    inputErrorClass: 'form__input_error',
    errorClass: 'form__error_active',
});