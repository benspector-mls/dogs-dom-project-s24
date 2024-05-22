import './style.css'
import { initDogCards } from './js/dom-helpers';
import { handleDogSubmit } from './js/event-handlers';

const main = () => {
  initDogCards();
  document
    .querySelector('form')
    .addEventListener('submit', handleDogSubmit);
}

main();