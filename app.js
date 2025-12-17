import { Seesaw_Width, Max_Angle } from "./js/constants.js";
import {
  randomWeight,
  calcTorque,
  determineSeesawAngle,
} from "./js/physics.js";
import { createObject } from "./js/ui.js";
import { saveData, loadData } from "./js/storage.js";
const plankElement = document.getElementById("seesaw-plank"); // Assuming there's an element with this ID
let seesawObjects = loadData(); // Array to hold objects on the seesaw

if (seesawObjects.length > 0) {
  // 1. Kutuları ekrana geri koy
  seesawObjects.forEach((obj) => {
    createObject(obj.weight, obj.position, plankElement);
  });

  // 2. Fiziği hemen hesapla (Tahta yamuk başlamalıysa yamuk dursun)
  const { leftTorque, rightTorque } = calcTorque(seesawObjects, Seesaw_Width);
  const angle = determineSeesawAngle(leftTorque, rightTorque);
  plankElement.style.transform = `rotate(${angle}deg)`;
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
  saveData(seesawObjects);
  // Recalculate torques and angle after adding new object
  const { leftTorque, rightTorque } = calcTorque(seesawObjects, Seesaw_Width);
  // Calculate the new angle based on torques
  const angle = determineSeesawAngle(leftTorque, rightTorque);
  plankElement.style.transform = `rotate(${angle}deg)`; // Apply rotation to the plank element
  console.log(
    `Sol Tork: ${leftTorque} | Sağ Tork: ${rightTorque} | Açı: ${angle.toFixed(
      1
    )}°`
  );
});
