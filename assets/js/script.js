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


    


}