const buttonEdit = document.querySelector('.profile__edit-button');
const buttonClose = document.querySelector('.popup__close-button');
const popupElement = document.querySelector('.popup');

const nameInput = document.querySelector('.form__input_value_name');
const statusInput = document.querySelector('.form__input_value_status');
const formElement = document.querySelector('.form');

const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');

function openPopup() {
    popupElement.classList.add('popup_opened');
}

function closePopup() {
    popupElement.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileStatus.textContent = statusInput.value;
    closePopup();
}

buttonEdit.addEventListener('click', openPopup);
buttonClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);