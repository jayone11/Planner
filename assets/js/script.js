const planner = document.getElementById("planner");
const date = document.getElementById("date");

const newDate = moment().format('MMMM Do YYYY')
date.textContent += newDate;
console.log(newDate);
