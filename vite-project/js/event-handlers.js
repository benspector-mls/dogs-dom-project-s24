import { makeDogCard } from "./dom-helpers";

export const handleDogSubmit = (event) => {
  event.preventDefault();

  // event.target = the thing that triggers the event
  // event.currentTarget = the thing that handles the event
  const form = event.target;

  const image_url = form.imageURL.value;
  const caption = form.caption.value;
  const date_taken = form.date.value;

  makeDogCard({ image_url, caption, date_taken });

  form.reset();
}