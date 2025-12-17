import { Min_Weight, Max_Weight, Max_Angle } from "./constants.js";
export function randomWeight(weight) {
  return Math.floor(Math.random() * (Max_Weight - Min_Weight + 1)) + Min_Weight;
} //Math.random creates random number between 0 and 1
//We multiply it with the range (max-min+1) to get a number between 0 and (max-min+1)
//Then we add min to shift the range to (min) to (max+1)
//Finally, we use Math.floor to round down to the nearest integer

export function calcTorque(objects, seesawWidth) {
  let leftTorque = 0; // initially left-and right torque are 0
  let rightTorque = 0;

  let leftWeightTotal = 0; // total weight on left side
  let rightWeightTotal = 0; // total weight on right side
  const seesawCenter = seesawWidth / 2; // center point of seesaw

  objects.forEach((obj) => {
    //iterate through all objects on seesaw
    const distanceFromCenter = Math.abs(obj.position - seesawCenter); //calculate distance from center
    const torque = obj.weight * distanceFromCenter; //torque formula = weight * distance
    if (obj.position < seesawCenter) {
      //if object is on left side of seesaw
      leftTorque += torque; // add to left torque
      leftWeightTotal += obj.weight; // add to left weight total
    } else {
      rightTorque += torque; // else add to right torque
      rightWeightTotal += obj.weight; // add to right weight total
    }
  });

  return { leftTorque, rightTorque, leftWeightTotal, rightWeightTotal }; //return both torques and weight totals as an object
}

export function determineSeesawAngle(leftTorque, rightTorque, Max_Angle) {
  const Sensivity = 100; // Sensitivity factor to control angle response.Divide by 100 to reduce angle effect

  const torqueDifference = rightTorque - leftTorque; // Calculate torque difference.If right torque is greater, seesaw tilts right

  let angle = torqueDifference / Sensivity;
  // Clamp angle to max limits
  if (angle > Max_Angle) {
    angle = Max_Angle;
  } else if (angle < -Max_Angle) {
    angle = -Max_Angle;
  }
  return angle; // Return the calculated angle
}
