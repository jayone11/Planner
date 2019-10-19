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
// Display standard business hours 9am to 5pm.
function generateRow() {
    // Each time slot is one hour.
    let hoursInDay = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM"];
    // Each slot contains the time, user input field, and save button.
    // Dynamically updated HTML and CSS powered by jQuery.
    for (i = 0; i < hoursInDay.length; i++) {
        console.log(hoursInDay[i]);
        
        // Create Planner div.
        let plannerDiv = $('<div>')
        plannerDiv.addClass('planner')
        $(".section").append($(plannerDiv))
       
        // Create Time div.
        let timeDiv = $('<div>')
        
        // Passing in each hour from the array
        timeDiv.text(hoursInDay[i])
        timeDiv.addClass('plannerItems time')
        $(plannerDiv).append(timeDiv)
        
        // Create Input element.
        let input = $('<input>')
        input.addClass('plannerItems activity')
        input.attr('placeholder', 'Enter activity here')
        $(timeDiv).after(input)
        
        // Create Save button div.
        let saveBtnDiv = $('<div>')
        saveBtnDiv.addClass('plannerItems action')
        $(input).after(saveBtnDiv)
        
        // Create Save button element
        let saveBtn = $('<button>')
        saveBtn.addClass('save-button')
        saveBtn.text('Save')
        $(saveBtnDiv).append(saveBtn)
        var outputDiv = "";
        $(saveBtn).click(function() {
            outputDiv = $('<p>')
            outputDiv.text(input.val())
            outputDiv.addClass("output")
            let test = $(input).val()
            localStorage.setItem("Activity", test)
            $(input).append(outputDiv)
            $(input).prop("readonly", true)
            // $(this).attr("disabled", true)
            $(this).css("background-color", "red")
            $(this).text("Delete")
            // Delete button removes prior activity and restores input to editable
            $(this).click(function() {
                $(input).text(input.val(""))
                $(input).prop("readonly", false)
                $(this).text('Save')
                $(this).css("background-color", "rgb(77, 154, 248)")
            })
        })

    function renderLastActivity() {
        let activity = localStorage.getItem("Activity");
        if (activity === null) {
            return;
        }
        $('.output').text(activity);
        }
    
    }
}
generateRow();
renderLastActivity()
});
// Save events for each hour of the day.
// $('.activity').val().append()
// console.log(activityValue)
// Clicking on the button will store the time and user input in localStorage.

// Each hour should be color coded to reflect if time slot is in the past, the present, or the future.
// This will change depending on the time of day.

