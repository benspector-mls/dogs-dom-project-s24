import './style.css'
import dogs from './dogs.json'
/* 
1. [DONE] create a container HTML to hold my "cards"
2. [DONE] figure out how to create a single "card" dynamically (using hard-coded data)
3. [DONE] create the cards using my array of data
4. [DONE] style
*/

// take in information about a dog card
// create a dog card and add it to the dog-list
const makeDogCard = (dog) => {
  const { image_url, caption, date_taken } = dog

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

// take the dogs json data and for each dog object
// invoke makeDogCard
const initDogCards = () => {
  dogs.forEach(makeDogCard)
}

initDogCards();