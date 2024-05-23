import { makeDogCard } from "./dom-helpers";
import { setLocalStorageKey, getLocalStorageKey } from "./local-storage-helpers";

export const handleDogSubmit = (event) => {
  event.preventDefault();

  // event.target = the thing that triggers the event
  // event.currentTarget = the thing that handles the event
  const form = event.target;

  const image_url = form.imageURL.value;
  const caption = form.caption.value;
  const date_taken = form.date.value;

  makeDogCard({ image_url, caption, date_taken });
  // 1. get the existing dogs in localStorage and store it in-memory
  const dogs = getLocalStorageKey('dogs');

  // 2. add the new dog to the in-memory array
  dogs.push({ image_url, caption, date_taken })

  // 3. update the localStorage with the in-memory array
  setLocalStorageKey('dogs', dogs);

  form.reset();
}