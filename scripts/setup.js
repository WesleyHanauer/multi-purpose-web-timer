const regularTimerForm = document.getElementById("regularTimerForm");
const exerciseTimerForm = document.getElementById("exerciseTimerForm");
const info = document.getElementById("info");
const exerciseLabel = document.getElementById("exerciseLabel");
const regularLabel = document.getElementById("regularLabel");


regularTimerForm.style.display = "none";

window.addEventListener('load', () => {
    regularTimerForm.reset();
    exerciseTimerForm.reset();
    regularTimerForm.style.display = "none";
    /*
    const tooltip = document.getElementById("tooltip");
    const tooltiptext = document.getElementById("tooltiptext");

    tooltip.addEventListener("mouseover", function(){
        tooltiptext.removeAttribute("style");
    })
    tooltip.addEventListener("mouseout", function(){
        tooltiptext.style.display = "none";
    })

    <p id="tooltip">?</p>
    <p id="tooltiptext" style="display: none;">tooltip test/p></p>*/
});

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
        info.style.display = "none";
        regularLabel.classList.add("bg-sky-700");
        exerciseLabel.classList.remove("bg-sky-700");
        
    } else if (type == "exerciseTimer") {
        exerciseLabel.classList.add("bg-sky-700");
        regularLabel.classList.remove("bg-sky-700");
        exerciseTimerForm.style.display = "flex";
        regularTimerForm.style.display = "none";
        info.style.display = "flex";
    }
}