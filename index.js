let year = "";
let response = "";
let inputEl = document.getElementById("input-el")
let buttonEl = document.getElementById("button")
let resEl = document.getElementById("res")
buttonEl.addEventListener("click", function() {
  year = Number(inputEl.value);
  
   if (year % 4 === 0) {
    response = "a leap year"
  } else if (year % 4 === 0 && year % 100 !== 0) {
    response = "a leap year"
  } else if (year % 4 === 0 && year % 100 === 0 && year % 400 === 0) {
    response = "leap year"
  } else {
    response = "not a leap year"
  } 
  resEl.style.display = "block"
  resEl.textContent = year + " is " + response
})