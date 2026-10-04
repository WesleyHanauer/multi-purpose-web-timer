const startExerciseTimerButton = document.getElementById("startExerciseTimerButton");
const resetExerciseTimerButton = document.getElementById("resetExerciseTimerButton");
const startRegularTimerButton = document.getElementById("startRegularTimerButton");
const stopRegularTimerButton = document.getElementById("stopRegularTimerButton");
const resetRegularTimerButton = document.getElementById("resetRegularTimerButton");
const radioButtons = document.querySelectorAll("input[name=timerSelect]");
const tooltips = document.querySelectorAll("span[class=tooltip]");
const hamburguerButton = document.getElementById("hamburguer-button");
const hamburguerText = document.getElementById("hamburguer-menu");
const closeRegularTimerModal = document.getElementById("closeRegularTimerModal");
const regularTimerModal = document.getElementById("regularTimerModal");

closeRegularTimerModal.addEventListener("click", function(){
    regularTimerModal.close();
    audio.pause();
    audio.currentTime = 1;
})

startRegularTimerButton.addEventListener("click", function(){
    startRegularTimer();
});

stopRegularTimerButton.addEventListener("click", function(){
    stopRegularTimer();
});

resetRegularTimerButton.addEventListener("click", function(){
    resetRegularTimer();
});

startExerciseTimerButton.addEventListener("click", function(){
    startExerciseTimer();
});

resetExerciseTimerButton.addEventListener("click", function(){
    resetExerciseTimer();
});

window.addEventListener("load", () => {
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

hamburguerButton.addEventListener("click", function(){
    hamburguerText.style.display = "flex";
})

document.addEventListener("click", function(event){
    if(!hamburguerButton.contains(event.target)){
        hamburguerText.style.display = "none";
    }
})

