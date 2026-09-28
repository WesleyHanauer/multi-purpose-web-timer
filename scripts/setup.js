const regularTimerForm = document.getElementById("regularTimerForm");
const exerciseTimerForm = document.getElementById("exerciseTimerForm");
const mission = document.getElementById("mission");
const exerciseLabel = document.getElementById("exerciseLabel");
const regularLabel = document.getElementById("regularLabel");


regularTimerForm.style.display = "none";

window.addEventListener('load', () => {
    regularTimerForm.reset();
    exerciseTimerForm.reset();
    regularTimerForm.style.display = "none";
});

const tooltips = document.querySelectorAll("span[class=tooltip]");

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

const radioButtons = document.querySelectorAll("input[name=timerSelect]");

radioButtons.forEach(radioButton => {
    radioButton.addEventListener("change", (event) => {
        selectChange(event.target.id);
    })
});

function selectChange(type){
    if (type == "regularTimer") {
        regularTimerForm.style.display = "flex";
        exerciseTimerForm.style.display = "none";
        mission.style.display = "none";
        regularLabel.classList.add("bg-sky-700");
        exerciseLabel.classList.remove("bg-sky-700");
        
    } else if (type == "exerciseTimer") {
        exerciseLabel.classList.add("bg-sky-700");
        regularLabel.classList.remove("bg-sky-700");
        exerciseTimerForm.style.display = "flex";
        regularTimerForm.style.display = "none";
        mission.style.display = "flex";
    }
}