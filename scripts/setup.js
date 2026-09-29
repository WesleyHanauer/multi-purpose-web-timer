const regularTimerForm = document.getElementById("regularTimerForm");
const exerciseTimerForm = document.getElementById("exerciseTimerForm");
const exerciseLabel = document.getElementById("exerciseLabel");
const regularLabel = document.getElementById("regularLabel");
const hamburguerButton = document.getElementById("hamburguer-button");
const hamburguerText = document.getElementById("hamburguer-menu");
const radioButtons = document.querySelectorAll("input[name=timerSelect]");
const tooltips = document.querySelectorAll("span[class=tooltip]");

var timer = null;

let timerRunning=false;

var audio = new Audio('./public/audio/alarm.mp3');
audio.currentTime = 1;

regularTimerForm.style.display = "none";

window.addEventListener('load', () => {
    regularTimerForm.reset();
    exerciseTimerForm.reset();
    regularTimerForm.style.display = "none";
});

for(let i=0;i<tooltips.length;i++){
    const tooltiptext = document.getElementsByClassName("tooltiptext"); 
    tooltiptext[i].style.display = "none";
    tooltips[i].addEventListener("mouseover", function(){
        tooltiptext[i].removeAttribute("style");
    })
    tooltips[i].addEventListener("mouseout", function(){
        tooltiptext[i].style.display = "none";
    })
}

radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", (event) => {
        selectChange(event.target.id);
    })
});

function selectChange(type){
    if (type == "regularTimer") {
        regularTimerForm.style.display = "flex";
        exerciseTimerForm.style.display = "none";
        regularLabel.classList.add("bg-sky-700");
        exerciseLabel.classList.remove("bg-sky-700");
        
    } else if (type == "exerciseTimer") {
        exerciseLabel.classList.add("bg-sky-700");
        regularLabel.classList.remove("bg-sky-700");
        exerciseTimerForm.style.display = "flex";
        regularTimerForm.style.display = "none";
    }
}

hamburguerButton.addEventListener("click", function(){
    hamburguerText.style.display = "flex";
})

document.addEventListener("click", function(event){
    if(!hamburguerButton.contains(event.target)){
        hamburguerText.style.display = "none";
    }
})

function convertToSeconds(hours, minutes, seconds){
    return ((hours * 60) * 60) + (minutes * 60) + seconds;
}