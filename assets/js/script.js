$(document).ready(function() {
    // const planner = document.getElementById("planner");
    // Display current day near top of container
    function displayTodaysDate() {
        const newDate = moment().format('MMMM Do YYYY')
        $(".date").html(newDate);
        console.log(newDate);    
    }
    displayTodaysDate();
    // Create dynamic elements
    // Display standard business hours 9am to 5pm.
    // Each time slot is one hour.
    const hoursInDay = [];
    // let hoursInDay = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM","5:00 PM"];
    // Each slot contains the time, user input field, and save button.
    // Dynamically updated HTML and CSS powered by jQuery.
    // for (i = 0; i < hoursInDay.length; i++) {
    for (var hour = 9; hour < 18; hour++) {
        hoursInDay.push(moment({
            hour
        }).format('h:mm  a'));
        $('.section').append(`<div class="planner" data-time="${hour}">
               <!-- Hours Column -->
                <div class="plannerItems time">
                    <p>${moment({hour}).format('h:mm  a')}</p>
                </div>  
                
                <!-- User input text area -->
                <div class="description">  
                <textarea class="textArea plannerItems activity"></textarea>
                </div>

                <!-- Save Button -->
                <div class="plannerItems action" id="action">
                    <button class="save-button" id="save-button">Save</button>
                </div>
            </div>`);


        // // Create Planner div.
        // let plannerDiv = $('<div>');
        // plannerDiv.addClass('planner');
        // plannerDiv.attr("data-time", hour);
        // $(".section").append($(plannerDiv));
 
        // // Create Time div.
        // let timeDiv = $('<div>');
        // // Passing in each hour from the array
        // timeDiv.addClass('plannerItems time');
        // timeDiv.attr("data-time", hour);
        // $(plannerDiv).append(timeDiv);

        // // Create paragraph element.
        // let pElement = $('<p>');
        // let text = moment({hour}).format('h:mm a');
        // pElement.text(text);
        // $(timeDiv).append(pElement);

        // // Create Input element.
        // let input = $('<textarea>');
        // input.addClass('plannerItems activity textArea');
        // input.attr('placeholder', 'Enter activity here');
        // input.attr('data-time', hour);
        // $(timeDiv).after(input);
        
        // // Create Save button div.
        // let saveBtnDiv = $('<div>');
        // saveBtnDiv.addClass('plannerItems action');
        // saveBtnDiv.attr('data-time', hour);
        // $(input).after(saveBtnDiv);
        
        // // Create Save button element
        // let saveBtn = $('<button>');
        // saveBtn.addClass('save-button');
        // saveBtn.text('Save');
        // $(saveBtnDiv).append(saveBtn);
        // var outputDiv;
        // $(saveBtn).click(function() {
        //     outputDiv = $('<p>');
        //     outputDiv.text(input.val());
        //     outputDiv.addClass("output");
        //     // let test = $(input).val()
        //     // localStorage.setItem("Activity", test)
        //     $(input).append(outputDiv);
        //     $(input).prop("readonly", true);
        //     // $(this).attr("disabled", true)
        //     // $(this).css("background-color", "red")
        //     // $(this).text("Delete")
            
        //     // Delete button removes prior activity and restores input to editable
        //     // $(this).click(function() {
        //     //     $(input).text(input.val(""))
        //     //     $(input).prop("readonly", false)
        //     //     $(this).text('Save')
        //     //     $(this).css("background-color", "rgb(77, 154, 248)")
        //     // })
        //     // renderLastActivity();
        // });

        // // function renderLastActivity() {
        // //     let activity = localStorage.getItem("Activity");
        // //     if (activity === null) {
        // //         return;
        // //     }
        // //     $('.output').text(activity);
        // // }
    }

    var m = moment();
    $.each($(".planner"), function (index, value) {
        let dateHour = $(value).attr("data-time");
        if (Number(dateHour) === m.hour()) {
            $(this).find("textarea").addClass('present');
        } else if (Number(dateHour) < m.hour()) {
            $(this).find("textarea").addClass('past');
        } else {
            $(this).find("textarea").addClass('future');
        }
    });

    //Check for local storage to set value to the object
    let timeObject = {};
        if (localStorage.getItem('timeObject')) {
        timeObject = JSON.parse(localStorage.getItem('timeObject'));
    }else{
        timeObject = {
            '9':{ time: "9", value: ""},
            '10':{ time: "10", value: ""},
            '11':{ time: "11", value: ""},
            '12':{ time: "12", value: ""},
            '13':{ time: "13", value: ""},
            '14':{ time: "14", value: ""},
            '15':{ time: "15", value: ""},
            '16':{ time: "16", value: ""},
            '17':{ time: "17", value: ""}
        };
    }
    console.log(timeObject);
    $(".planner").each(function(){
        console.log(this)
        $(this).find(".textArea").val(timeObject[$(this).attr("data-time")].value);
        // $(this).find(".textArea").val(timeObject[$(this).attr("data-time")].value);
        // console.log(this)
   });

    $('.save-button').on('click', function(event){
        // var data = $(this).attr("data-time") 
        // console.log('alert' + data);
        var timeValue = $(this).closest(".planner").attr("data-time");
        var textValue = $(this).closest(".planner").find(".textArea").val();
        timeObject[timeValue].value = textValue;
        // console.log(timeObject);
      localStorage.setItem('timeObject', JSON.stringify(timeObject));
  });

});



// Save events for each hour of the day.
// $('.activity').val().append()
// console.log(activityValue)
// Clicking on the button will store the time and user input in localStorage.

// Each hour should be color coded to reflect if time slot is in the past, the present, or the future.
// This will change depending on the time of day.

