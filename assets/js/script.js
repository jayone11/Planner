const planner = document.getElementById("planner");
const date = document.getElementById("date");

const newDate = moment().format('MMMM Do YYYY')
date.textContent += newDate;
console.log(newDate);

// Save events for each hour of the day.

// Dynamically updated HTML and CSS powered by jQuery.

// Display standard business hours 9am to 5pm.

// Each time slot is one hour.
// Each slot contains the time, user input field, and save button.

// Clicking on the button will store the time and user input in localStorage.

// Display current day near top of container

// Each hour should be color coded to reflect if time slot is in the past, the present, or the future.
// This will change depending on the time of day.

