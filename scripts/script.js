const editButton = document.querySelector('.profile__edit-button');
editButton.addEventListener('click', () => {
    let popup = document.querySelector('.popup');
    popup.classList.add('popup_opened');
});

const closeButton = document.querySelector('.popup__close-button');
closeButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    let popup = document.querySelector('.popup');
    popup.classList.remove('popup_opened');
});

const submitButton = document.querySelector('.popup__submit-button');
submitButton.addEventListener('click', (evt) => {
    evt.preventDefault()
    let formName = document.querySelector('.popup__name-field');
    let formStatus = document.querySelector('.popup__status-field');
    let profileName = document.querySelector('.profile__name');
    let profileStatus = document.querySelector('.profile__status');
    profileName.textContent = formName.value;
    profileStatus.textContent = formStatus.value;
});