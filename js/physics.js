import { Min_Weight, Max_Weight } from "./constants.js";
export function randomWeight(weight) {
  return Math.floor(Math.random() * (Max_Weight - Min_Weight + 1)) + Min_Weight;
} //Math.random creates random number between 0 and 1
//We multiply it with the range (max-min+1) to get a number between 0 and (max-min+1)
//Then we add min to shift the range to (min) to (max+1)
//Finally, we use Math.floor to round down to the nearest integer
