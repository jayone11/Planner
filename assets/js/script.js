$(document).ready(function() {
const planner = document.getElementById("planner");

// Display current day near top of container
function displayTodaysDate() {
    const date = document.getElementById("date");
    const newDate = moment().format('MMMM Do YYYY')
    date.textContent += newDate;
    console.log(newDate);    
}
displayTodaysDate();

// Create dynamic elements
function generateRow() {
    let hoursInDay = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
    for (i = 0; i < hoursInDay.length; i++) {
        console.log(hoursInDay[i]);

        let plannerDiv = $('<div>')
        plannerDiv.addClass('planner')
        $(".section").append($(plannerDiv))

        let timeDiv = $('<div>')
        timeDiv.text(hoursInDay[i])
        timeDiv.addClass('plannerItems time')
        $(plannerDiv).append(timeDiv)

        let input = $('<input>')
        input.addClass('plannerItems activity')
        input.attr('placeholder', 'Enter activity here')
        $(timeDiv).after(input)
        console.log(timeDiv)

        let saveBtnDiv = $('<div>')
        saveBtnDiv.addClass('plannerItems action')
        $(input).after(saveBtnDiv)

        let saveBtn = $('<button>')
        saveBtn.addClass('save-button')
        saveBtn.text("Save")
        $(saveBtnDiv).append(saveBtn)
    }
}
generateRow();
// Save events for each hour of the day.
// var activityValue = $("#activity").val();
// console.log("Log1", activityValue);

});
// Dynamically updated HTML and CSS powered by jQuery.

// Display standard business hours 9am to 5pm.

// Each time slot is one hour.
// Each slot contains the time, user input field, and save button.

// Clicking on the button will store the time and user input in localStorage.



// Each hour should be color coded to reflect if time slot is in the past, the present, or the future.
// This will change depending on the time of day.

