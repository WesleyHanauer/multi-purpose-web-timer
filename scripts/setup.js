const regularTimerForm = document.getElementById("regularTimerForm");
const exerciseTimerForm = document.getElementById("exerciseTimerForm");
const exerciseLabel = document.getElementById("exerciseLabel");
const regularLabel = document.getElementById("regularLabel");

var audio = new Audio('./public/audio/alarm.mp3');
audio.currentTime = 1;

function selectChange(type){
    if (type == "regularTimer") {
        regularTimerForm.style.display = "flex";
        exerciseTimerForm.style.display = "none";
        regularLabel.classList.add("bg-slate-600");
        exerciseLabel.classList.remove("bg-slate-600");
        
    } else if (type == "exerciseTimer") {
        exerciseTimerForm.style.display = "flex";
        regularTimerForm.style.display = "none";
        exerciseLabel.classList.add("bg-slate-600");
        regularLabel.classList.remove("bg-slate-600");
    }
}

function convertToSeconds(hours, minutes, seconds){
    return ((hours * 60) * 60) + (minutes * 60) + seconds;
}

function convertSecondsToHour(seconds){
    return Math.floor(seconds / 3600);
}

function convertSecondsToMinutes(seconds){
    return Math.floor((seconds % 3600) / 60);
}

function getRestOfSeconds(seconds){
    return seconds % 60;
}