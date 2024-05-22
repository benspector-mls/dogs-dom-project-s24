# Dog Cards

**Part 1: Dynamically Generate a List of Cards from a JSON file**
1. [DONE] create a container HTML to hold my "cards"
2. [DONE] figure out how to create a single "card" dynamically (using hard-coded data)
3. [DONE] create the cards using my array of data
4. [DONE] style

**Part 2: Build a Form to Add New Cards**

1. [DONE] Create the form in HTML
2. [DONE] Add an event listener to collect data from the form
3. [DONE] use the data to generate a new card using the `makeDogCard` helper function

**Form Review**

What is the meaning/purpose of the attributes of a `form`, `label`, and `input`?
* Form:
  * `aria-labelledby` - for accessibility, refers to the id of an element that labels the form
* Label
  * labels increase the clickable size of an input
  * `for` - links the label to the input that has the matching id
* Input
  * `type` - what kind of input you're using (radio, checkbox, textbox)
  * `id` - used to link to a label, css, to be targeted by JS query selector
  * `name` - used when getting user values from the input

**Form Submissions**

* Who/what invokes the `handleSubmit` function?
* Who/what creates the `event` object?
  * `addEventListener` invokes `handleSubmit` and provides the `event` object

**Module Organization**

![](./img/modules.png)