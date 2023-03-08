const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');

const popups = document.querySelectorAll('.popup');
const popupProfile = document.querySelector('.popup_profile');
const popupPhoto = document.querySelector('.popup_photo');
const popupView = document.querySelector('.popup_view');

const formElementProfile = document.forms.profile;
const formElementPhoto = document.forms.photo;

const profileNameInput = document.querySelector('.form__input_value_name');
const profileStatusInput = document.querySelector('.form__input_value_status');
const profileName = document.querySelector('.profile__name');
const profileStatus = document.querySelector('.profile__status');

const popupImageElement = document.querySelector('.popup__image');
const popupCaptionElement = document.querySelector('.popup__caption');

const photoTitleInput = document.querySelector('.form__input_value_title'); 
const photoLinkInput = document.querySelector('.form__input_value_link'); 

const cardTemplate = document.querySelector('#card').content;
const elements = document.querySelector('.elements');

const photoSubmitButton = formElementPhoto.querySelector('.form__submit-button');

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

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('keydown', handleEscape);
}

function closePopup(popup) {
  popup.classList.remove('popup_opened');
  document.removeEventListener('keydown', handleEscape);
}

const findOpenedPopup = () => document.querySelector('.popup_opened');

function handleEscape(evt) {
  if (evt.key === 'Escape') {
    const openedPopup = findOpenedPopup();
    openedPopup && closePopup(openedPopup);
  }
}

function createCard(link, name) {
  const card = cardTemplate.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  cardImage.src = link;
  cardImage.alt = name;
  card.querySelector('.card__title').textContent = name;
  cardImage.addEventListener('click', () => handleCardClick(link, name));
  card.querySelector('.card__like-button').addEventListener('click', toggleLike);
  card.querySelector('.card__delete-button').addEventListener('click', deleteCard);
  return card;
}

function handleCardClick(link, name) {
  popupImageElement.src = link;
  popupImageElement.alt = name;
  popupCaptionElement.textContent = name;
  openPopup(popupView);
}

function handleFormSubmitProfile(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileStatus.textContent = profileStatusInput.value;
  closePopup(popupProfile);
}

function handleFormSubmitPhoto(evt) {
  evt.preventDefault();
  const newCard = createCard(photoLinkInput.value, photoTitleInput.value);
  elements.prepend(newCard);
  evt.target.reset();
  closePopup(popupPhoto);
  photoSubmitButton.classList.add('form__submit-button_disabled');
  photoSubmitButton.disabled = true;
}

function toggleLike(evt) {
  evt.target.classList.toggle('card__like-button_active');
}

function deleteCard(evt) {
  evt.target.closest('.card').remove();
}

initialCards.forEach(function(elem){
  const newCard = createCard(elem.link, elem.name);
  elements.append(newCard);
});

popups.forEach(popup => {
  popup.addEventListener('mousedown', evt => {
    if (evt.target.classList.contains('popup_opened')) {
      closePopup(popup);
    }
    if (evt.target.classList.contains('popup__close-button')) {
      closePopup(popup);
    }
   })
})

buttonEdit.addEventListener('click', () => openPopup(popupProfile));
buttonAdd.addEventListener('click', () => openPopup(popupPhoto));

formElementProfile.addEventListener('submit', handleFormSubmitProfile);
formElementPhoto.addEventListener('submit', handleFormSubmitPhoto);