//need addEventListener to listen for save button clicks and save text content to local storage

//div "hour-9" > timebox, textarea, and button (all siblings/kids)

$('.saveBtn').on('click', saveData())

//instead of doing global vars for every timeblock the event and time associated can be saved together
function saveData() {
    let event = $(this).siblings('.event').val(); //get text content of event 
    let hour = $(this).parent().attr('id') //pull time that is associated with event from ID name

    localStorage.setItem(hour, event)

}


function timeUpdate () {
    let presentTime = moment().hours();

    $('.hourBlock').each(function () {
        let selectedHour = parseInt($(this).attr('id').split('-')[1]);


        if (selectedHour < presentTime) {

            $(this).addClass('past');
        }
        else if (blockHour === currentHour){
            $(this).removeClass('past');
            $(this).addClass('present');
        }
        else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
        }
        

    });

    }





function getData(){
    for(i = 9; i < 18; i++){
        $('#block-i .event').val(localStorage.getItem('block-i'));
    }

}

$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do')); // display current day
    getData();

})