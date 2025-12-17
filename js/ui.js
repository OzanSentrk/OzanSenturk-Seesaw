export function createObject(weight, position, parentElement) {
  const obj = document.createElement("div"); // Create a new div element
  obj.classList.add("weight-object"); // add a class for styling
  obj.innerText = weight; //write weight value inside div
  obj.style.left = `${position}px`; // dynamic position setting
  parentElement.appendChild(obj); // Append to parent element
  return obj;
}

export function updateWeightDisplays(leftWeight, rightWeight) {
  const leftWeightElement = document.getElementById("left-weight");
  const rightWeightElement = document.getElementById("right-weight");
  leftWeightElement.innerText = `Left Weight Total: ${leftWeight}kg`;
  rightWeightElement.innerText = `Right Weight Total: ${rightWeight}kg`;
}
