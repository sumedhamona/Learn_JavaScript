//input
// var username = prompt("Give me username?")

//processing
// var welcome = "This script works!!" + username;

//output
// alert(welcome);

var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

//var serverURL = "https://lessonforapi.tanaypratap.repl.co/translate/yoda.json"

var serverURL = "https://api.funtranslations.com/translate/minion.json"
// outputDiv.innerText = "Sumedha Singh"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error Occured", error);
    alert("Something went wrong.");
}

function clickEventHandler() {
    console.log("clicked");
    console.log("input", txtInput.value);
    outputDiv.innerText = "cghytsdfrfvh" + txtInput.value;

    var inputText = txtInput.value; //taking input

    //calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        // .then(json => console.log(json.contents.translated))
        .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickEventHandler)

//emojipedia
//fun translations

