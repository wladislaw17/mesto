const buttonEdit = document.querySelector('.profile__edit-button');
const buttonCloseProfile = document.querySelectorAll('.popup__close-button')[0];
const buttonClosePhoto = document.querySelectorAll('.popup__close-button')[1];
const buttonCloseView = document.querySelectorAll('.popup__close-button')[2];
const buttonAdd = document.querySelector('.profile__add-button');

const popupProfile = document.querySelector('.popup_profile');
const popupPhoto = document.querySelector('.popup_photo');
const popupView = document.querySelector('.popup_view');

const formElementProfile = document.querySelector('.form_profile');
const formElementPhoto = document.querySelector('.form_photo');

const profileNameInput = document.querySelector('.form__input_value_name');
const profileStatusInput = document.querySelector('.form__input_value_status');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');

const popupImage = document.querySelector('.popup__image');

const photoTitleInput = document.querySelector('.form__input_value_title'); 
const photoLinkInput = document.querySelector('.form__input_value_link'); 

const cardTemplate = document.querySelector('#card').content;
const elements = document.querySelector('.elements');

const initialCards = [
  {
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];

initialCards.forEach(function(elem){
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.card__image').src = elem.link;
  card.querySelector('.card__image').alt = elem.name;
  card.querySelector('.card__title').textContent = elem.name;
  card.querySelector('.card__image').addEventListener('click', openPopupView);
  card.querySelector('.card__like-button').addEventListener('click', addLikeOption);
  card.querySelector('.card__delete-button').addEventListener('click', addDeleteOption);
  elements.append(card);
});

function openPopupProfile() {
  profileNameInput.value = profileName.textContent;
  profileStatusInput.value = profileStatus.textContent;
  popupProfile.classList.add('popup_opened');
}

function openPopupPhoto() {
  popupPhoto.classList.add('popup_opened');
}

function openPopupView(evt) {
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupView.classList.add('popup_opened');
}

function closePopupProfile() {
  popupProfile.classList.remove('popup_opened');
}

function closePopupPhoto() {
  popupPhoto.classList.remove('popup_opened');
}

function closePopupView() {
  popupView.classList.remove('popup_opened');
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileStatus.textContent = profileStatusInput.value;
  closePopupProfile();
}

function handleFormSubmitPhoto(evt) {
  evt.preventDefault();
  const card = cardTemplate.cloneNode(true);
  card.querySelector('.card__image').src = photoLinkInput.value;
  card.querySelector('.card__image').alt = photoTitleInput.value;
  card.querySelector('.card__title').textContent = photoTitleInput.value;
  card.querySelector('.card__image').addEventListener('click', openPopupView);
  card.querySelector('.card__like-button').addEventListener('click', addLikeOption);
  card.querySelector('.card__delete-button').addEventListener('click', addDeleteOption);
  elements.prepend(card);
  photoLinkInput.value = '';
  photoTitleInput.value = '';
  closePopupPhoto();
}

function addLikeOption(evt) {
  evt.target.classList.toggle('card__like-button_active');
}

function addDeleteOption(evt) {
  evt.target.closest('.card').remove();
}

buttonEdit.addEventListener('click', openPopupProfile);
buttonCloseProfile.addEventListener('click', closePopupProfile);
buttonClosePhoto.addEventListener('click', closePopupPhoto);
buttonCloseView.addEventListener('click', closePopupView);
buttonAdd.addEventListener('click', openPopupPhoto);

formElementProfile.addEventListener('submit', handleFormSubmitProfile);
formElementPhoto.addEventListener('submit', handleFormSubmitPhoto);