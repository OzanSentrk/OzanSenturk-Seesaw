import { Seesaw_Width } from "./js/constants.js";
import { randomWeight } from "./js/physics.js";
import { createObject } from "./js/ui.js";

const plankElement = document.getElementById("seesaw-plank"); // Assuming there's an element with this ID

plankElement.addEventListener("click", (event) => {
  //listen clicks for plank
  const rectangle = plankElement.getBoundingClientRect(); //get position and size
  const clickedX = event.clientX - rectangle.left; //calculate clicked x position relative to plank
  if (clickedX < 0 || clickedX > Seesaw_Width) return; //ignore clicks outside plank
  const weight = randomWeight(); //get computed random weight
  createObject(weight, clickedX, plankElement); //create and place object on plank
  //weight:number inside the box, clickedX:How many pixels will the box, the plank, rely on to help the left? , plankElement:main element to append
  console.log(`Created object of weight ${weight} at position ${clickedX}`); //check is it working
});
