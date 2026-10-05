const exerciseTimerExercisingMinutesInput = document.getElementById("exerciseTimerExercisingMinutesInput");
const exerciseTimerExercisingSecondsInput = document.getElementById("exerciseTimerExercisingSecondsInput");
const exerciseTimerRestingMinutesInput = document.getElementById("exerciseTimerRestingMinutesInput");
const exerciseTimerRestingSecondsInput = document.getElementById("exerciseTimerRestingSecondsInput");
const exerciseTimerExercisingMinutesDisplay = document.getElementById("exerciseTimerExercisingMinutesDisplay");
const exerciseTimerExercisingSecondsDisplay = document.getElementById("exerciseTimerExercisingSecondsDisplay");
const exerciseTimerRestingMinutesDisplay = document.getElementById("exerciseTimerRestingMinutesDisplay");
const exerciseTimerRestingSecondsDisplay = document.getElementById("exerciseTimerRestingSecondsDisplay");
const loopCheck = document.getElementById("exerciseLoop");
let exercisingMinutes;
let exercisingSeconds;
let restingMinutes;
let restingSeconds;
let exercisingTotalSeconds;
let restingTotalSeconds;
let exerciseTimer = null;

function hideExerciseTimerInputs(){
    exerciseTimerExercisingMinutesInput.style.display = "none";
    exerciseTimerExercisingSecondsInput.style.display = "none";
    exerciseTimerRestingMinutesInput.style.display = "none";
    exerciseTimerRestingSecondsInput.style.display = "none";
}

function showExerciseTimerDisplay(){
    exerciseTimerExercisingMinutesDisplay.removeAttribute("style");
    exerciseTimerExercisingSecondsDisplay.removeAttribute("style");
    exerciseTimerRestingMinutesDisplay.removeAttribute("style");
    exerciseTimerRestingSecondsDisplay.removeAttribute("style");
}

function getAndSetExerciseTimerSpanValues(exercisingSeconds, restingSeconds){
    exerciseTimerExercisingMinutesDisplay.textContent = String(convertSecondsToMinutes(exercisingSeconds));
    exerciseTimerExercisingSecondsDisplay.textContent = String(getRestOfSeconds(exercisingSeconds));
    exerciseTimerRestingMinutesDisplay.textContent = String(convertSecondsToMinutes(restingSeconds));
    exerciseTimerRestingSecondsDisplay.textContent = String(getRestOfSeconds(restingSeconds));
}

function getAndSetExerciseTimerExercisingInputUpdatedValues(exercisingSeconds){
    exerciseTimerExercisingMinutesInput.value = convertSecondsToMinutes(exercisingSeconds);
    exerciseTimerExercisingSecondsInput.value = getRestOfSeconds(exercisingSeconds);
}

function getAndSetExerciseTimerRestingInputUpdatedValues(restingSeconds){
    exerciseTimerRestingMinutesInput.value = convertSecondsToMinutes(restingSeconds);
    exerciseTimerRestingSecondsInput.value = getRestOfSeconds(restingSeconds);
}

function exerciseTimerRevertInputsAndHideSpans(){
    exerciseTimerExercisingMinutesInput.style.display = "inline";
    exerciseTimerExercisingSecondsInput.style.display = "inline";
    exerciseTimerRestingMinutesInput.style.display = "inline";
    exerciseTimerRestingSecondsInput.style.display = "inline";
    exerciseTimerExercisingMinutesDisplay.style.display = "none";
    exerciseTimerExercisingSecondsDisplay.style.display = "none";
    exerciseTimerRestingMinutesDisplay.style.display = "none";
    exerciseTimerRestingSecondsDisplay.style.display = "none";
}

function startExerciseTimer(){
    if(exerciseTimer == null){
        startExerciseTimerButton.style.display = "none";
        const exercisingMinutesInput = Number(exerciseTimerExercisingMinutesInput.value);
        const exercisingSecondsInput = Number(exerciseTimerExercisingSecondsInput.value);
        const restingMinutesInput = Number(exerciseTimerRestingMinutesInput.value);
        const restingSecondsInput = Number(exerciseTimerRestingSecondsInput.value);
        exercisingSeconds = convertToSeconds(0, exercisingMinutesInput, exercisingSecondsInput);
        restingSeconds = convertToSeconds(0, restingMinutesInput, restingSecondsInput);
        hideExerciseTimerInputs();
        showExerciseTimerDisplay();
        getAndSetExerciseTimerSpanValues(exercisingSeconds, restingSeconds);
        exerciseTimer = setInterval(() => {
            if(restingSeconds>0){
                restingSeconds-=1;
                getAndSetExerciseTimerSpanValues(exercisingSeconds, restingSeconds);
            }else if(exercisingSeconds>0){
                if(restingSeconds == 0 && exercisingSeconds == ((exercisingMinutesInput * 60) + exercisingSecondsInput)){
                    audio.play();
                    timerModal.showModal();
                }
                getAndSetExerciseTimerSpanValues(exercisingSeconds, restingSeconds);
                exercisingSeconds-=1;
                getAndSetExerciseTimerSpanValues(exercisingSeconds, restingSeconds);
            }else if(restingSeconds == 0 && exercisingSeconds == 0 && loopCheck.checked){
                exercisingSeconds = convertToSeconds(0, exercisingMinutesInput, exercisingSecondsInput);
                restingSeconds = convertToSeconds(0, restingMinutesInput, restingSecondsInput);
                audio.play();
                timerModal.showModal();
            }else{
                clearInterval(exerciseTimer);
                exerciseTimer = null;
                audio.play();
                timerModal.showModal();
                startExerciseTimerButton.style.display = "inline";
            }
        }, 1000);
    }
}

function resetExerciseTimer(){
    clearInterval(exerciseTimer);
    exerciseTimerExercisingMinutesInput.value = "";
    exerciseTimerExercisingSecondsInput.value = "";
    exerciseTimerRestingMinutesInput.value = "";
    exerciseTimerRestingSecondsInput.value = "";
    startExerciseTimerButton.style.display = "inline";
    exerciseTimerRevertInputsAndHideSpans();
    exerciseTimer = null;
}