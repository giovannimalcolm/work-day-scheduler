let event;
let hour;

$(document).ready(function () {
    $('#currentDay').text(moment().format('dddd, MMMM Do')); // display current day
    timeUpdate();

    $('.saveBtn').on('click', function () {
        let event = $(this).siblings('.event').val(); //get text content of event 
        let hour = $(this).parent().attr('id') //pull time that is associated with event from ID name
        localStorage.setItem(hour, event)
        console.log(hour, event)
    })

    $('#block-9 .event').val(localStorage.getItem('block-9'));
    $('#block-10 .event').val(localStorage.getItem('block-10'));
    $('#block-11 .event').val(localStorage.getItem('block-11'));
    $('#block-12 .event').val(localStorage.getItem('block-12'));
    $('#block-13 .event').val(localStorage.getItem('block-13'));
    $('#block-14 .event').val(localStorage.getItem('block-14'));
    $('#block-15 .event').val(localStorage.getItem('block-15'));
    $('#block-16 .event').val(localStorage.getItem('block-16'));
    $('#block-17 .event').val(localStorage.getItem('block-17'));

})



function timeUpdate() {
    let presentTime = moment().hours();
    $('.hourBlock').each(function () {
        let selectedHour = parseInt($(this).attr('id').split('-')[1]);
        if (selectedHour < presentTime) {
            $(this).addClass('past');
        }
        else if (selectedHour === presentTime) {
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

$('.clearBtn').on('click', function () {
    localStorage.clear();
    location.reload();

})









