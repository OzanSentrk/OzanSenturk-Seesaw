import { Seesaw_Width, Max_Angle } from "./js/constants.js";

import {
  randomWeight,
  calcTorque,
  determineSeesawAngle,
} from "./js/physics.js";

import { createObject, updateWeightDisplays } from "./js/ui.js";

import { saveData, loadData } from "./js/storage.js";

const plankElement = document.getElementById("seesaw-plank"); // Assuming there's an element with this ID

const resetBtn = document.getElementById("reset-button");

let seesawObjects = loadData(); // Array to hold objects on the seesaw

function updateSimulation() {
  const { leftTorque, rightTorque, leftWeightTotal, rightWeightTotal } =
    calcTorque(seesawObjects, Seesaw_Width);

  const angle = determineSeesawAngle(leftTorque, rightTorque);

  plankElement.style.transform = `rotate(${angle}deg)`;

  updateWeightDisplays(leftWeightTotal, rightWeightTotal);

  saveData(seesawObjects);
}

if (seesawObjects.length > 0) {
  // 1. Kutuları ekrana geri koy

  seesawObjects.forEach((obj) => {
    createObject(obj.weight, obj.position, plankElement);
  });

  updateSimulation();
}

plankElement.addEventListener("click", (event) => {
  //listen clicks for plank

  const rectangle = plankElement.getBoundingClientRect(); //get position and size

  const clickedX = event.clientX - rectangle.left; //calculate clicked x position relative to plank

  if (clickedX < 0 || clickedX > Seesaw_Width) return; //ignore clicks outside plank

  const weight = randomWeight(); //get computed random weight

  createObject(weight, clickedX, plankElement); //create and place object on plank

  //weight:number inside the box, clickedX:How many pixels will the box, the plank, rely on to help the left? , plankElement:main element to append

  console.log(`Created object of weight ${weight} at position ${clickedX}`); //check is it working

  const newObj = {
    id: Date.now(), //unique id based on timestamp

    weight: weight, //weight of the object

    position: clickedX, //position on the seesaw
  };

  seesawObjects.push(newObj);

  //add new object to seesawObjects array

  updateSimulation();
});

resetBtn.addEventListener("click", () => {
  // Clear seesaw objects array

  seesawObjects = [];
  plankElement.innerHTML = ""; // Clear all child elements from the plank
  plankElement.style.transform = "rotate(0deg)"; // Reset plank angle
  updateWeightDisplays(0, 0); // Reset weight displays
  saveData([]); // Save the cleared state
  console.log("Simülasyon sıfırlandı.");
});
