//input
// var username = prompt("Give me username?")

//processing
// var welcome = "This script works!!" + username;

//output
// alert(welcome);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");

function clickEventHandler(){
    console.log("clicked");
    console.log("input", txtInput.value);
}

btnTranslate.addEventListener("click", clickEventHandler)