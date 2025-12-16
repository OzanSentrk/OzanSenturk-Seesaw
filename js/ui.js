export function createObject(weight, position, parentElement) {
  const obj = document.createElement("div"); // Create a new div element
  obj.classList.add("weight-object"); // add a class for styling
  obj.innerText = weight; //write weight value inside div
  obj.style.left = `${position}px`; // dynamic position setting
  parentElement.appendChild(obj); // Append to parent element
  return obj;
}
