var schedule = document.querySelector(".col-8") // input from hours
var save9a = document.querySelector("#save9a")
var save10a = document.querySelector("#save10a")
var save11a = document.querySelector("#save11a")
var save12p = document.querySelector("#save12p")
var save1p = document.querySelector("#save1p")
var save2p = document.querySelector("#save2p")
var save3p = document.querySelector("#save3p")
var save4p = document.querySelector("#save4p")
var save5p = document.querySelector("#save5p")




const events = {
    nine: '',
    ten:'',
    eleven:'',
    twelve:'',
    one:'',
    two:'',
    three:'',
    four:'',
    five:'',

}


const events 
function int(){
    getSchedule();
    // getCurrentTime(); ?
}

//really wanna just get the events in an array from 9-5 and reprint from there
//so i need to storage the inputs in an array or object
function getSchedule(){


}

//store event to lcl storage. triggers upon event listener
function setEvent(){ 



}
function setScore() {
    scoreBoard = timer;
    var scoreBoardHistory = JSON.parse(localStorage.getItem('setScore')) || [];
    scoreBoardHistory.push(scoreBoard);
    localStorage.setItem("setScore", JSON.stringify(scoreBoardHistory));

buttons.addEventListener.("click", setEvent)
//do add event listener to save text content in box to local stroage
// need one for each button. cant target all buttons because it'll save everything on one click
