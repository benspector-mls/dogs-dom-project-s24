import dogsFromJSON from '../dogs.json'
import {
  setLocalStorageKey,
  getLocalStorageKey
} from './local-storage-helpers';

export const makeDogCard = (dog) => {
  const { image_url, caption, date_taken } = dog;

  const li = document.createElement('li');
  const imageContainer = document.createElement('div')
  const textContainer = document.createElement('div')
  const image = document.createElement('img');
  const captionP = document.createElement('p');
  const dateP = document.createElement('p');

  // structure
  li.append(imageContainer, textContainer);
  imageContainer.append(image);
  textContainer.append(captionP, dateP);

  // classes
  li.classList.add('dog-card');
  imageContainer.classList.add('img-container')
  textContainer.classList.add('text-container')
  dateP.classList.add('date');

  // content
  image.src = image_url
  captionP.textContent = caption;
  dateP.textContent = date_taken;

  // append the li to ???
  document.querySelector("#dogs-list").append(li);
}

export const initDogCards = () => {
  // if there are NO dogs already in localStorage...
  // use the dogs from dogs.json
  if (!getLocalStorageKey('dogs')) {
    setLocalStorageKey('dogs', dogsFromJSON)
  }
  // use the localStorage dogs, not the dogsFromJSON
  getLocalStorageKey('dogs').forEach(makeDogCard)
}