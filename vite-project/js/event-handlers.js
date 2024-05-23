import { makeDogCard } from "./dom-helpers";
import {
  setLocalStorageKey,
  getLocalStorageKey
} from "./local-storage-helpers";

export const handleDogSubmit = (event) => {
  event.preventDefault();

  // Get form data
  const form = event.target;
  const image_url = form.imageURL.value;
  const caption = form.caption.value;
  const date_taken = form.date.value;

  // Use it to make a card
  makeDogCard({ image_url, caption, date_taken });

  // 1. get the existing dogs in localStorage and store it in-memory
  // 2. add the new dog to the in-memory array
  // 3. update the localStorage with the in-memory array
  const dogs = getLocalStorageKey('dogs');
  dogs.push({ image_url, caption, date_taken })
  setLocalStorageKey('dogs', dogs);

  form.reset();
}