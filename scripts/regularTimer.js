const regularTimerHoursInput = document.getElementById("regularTimerHoursInput");
const regularTimerMinutesInput = document.getElementById("regularTimerMinutesInput");
const regularTimerSecondsInput = document.getElementById("regularTimerSecondsInput");
const regularTimerHoursDisplay = document.getElementById("regularTimerHoursDisplay");
const regularTimerMinutesDisplay = document.getElementById("regularTimerMinutesDisplay");
const regularTimerSecondsDisplay = document.getElementById("regularTimerSecondsDisplay");
let regularTimer = null;
let totalSeconds;

function hideRegularTimerInputs(){
    regularTimerHoursInput.style.display = "none";
    regularTimerMinutesInput.style.display = "none";
    regularTimerSecondsInput.style.display = "none";
}

function showRegularTimerSpans(){
    regularTimerHoursDisplay.removeAttribute("style");
    regularTimerMinutesDisplay.removeAttribute("style");
    regularTimerSecondsDisplay.removeAttribute("style");
}

function getAndSetRegularTimerSpanValues(totalSeconds){
    regularTimerHoursDisplay.textContent = String(convertSecondsToHour(totalSeconds));
    regularTimerMinutesDisplay.textContent = String(convertSecondsToMinutes(totalSeconds));
    regularTimerSecondsDisplay.textContent = String(getRestOfSeconds(totalSeconds));
}

function getAndSetRegularTimerInputUpdatedValues(totalSeconds){
    regularTimerHoursInput.value = convertSecondsToHour(totalSeconds);
    regularTimerMinutesInput.value = convertSecondsToMinutes(totalSeconds);
    regularTimerSecondsInput.value = getRestOfSeconds(totalSeconds);
}

function regularTimerRevertInputsAndHideSpans(){
    regularTimerHoursInput.style.display = "inline";
    regularTimerMinutesInput.style.display = "inline";
    regularTimerSecondsInput.style.display = "inline";
    regularTimerHoursDisplay.style.display = "none";
    regularTimerMinutesDisplay.style.display = "none";
    regularTimerSecondsDisplay.style.display ="none";
}

function startRegularTimer(){
    if(regularTimer == null){
        const hours = Number(regularTimerHoursInput.value);
        const minutes = Number(regularTimerMinutesInput.value);
        const seconds = Number(regularTimerSecondsInput.value);
        totalSeconds = convertToSeconds(hours, minutes, seconds);
        if(totalSeconds){
            startRegularTimerButton.style.display = "none";
            hideRegularTimerInputs();
            showRegularTimerSpans();
            getAndSetRegularTimerSpanValues(totalSeconds);
            regularTimer = setInterval(() => {
                if(totalSeconds>0){
                    totalSeconds-=1;
                    getAndSetRegularTimerSpanValues(totalSeconds);
                }else{
                    clearInterval(regularTimer);
                    audio.play();
                    alert("Timer done");
                    audio.pause();
                    audio.currentTime = 1;
                    regularTimer = null;
                    regularTimerRevertInputsAndHideSpans();
                    startRegularTimerButton.style.display = "inline";
                }
            }, 1000);
        }
    }
}

function stopRegularTimer(){
    if(totalSeconds){
        clearInterval(regularTimer);
        regularTimer = null;
        getAndSetRegularTimerInputUpdatedValues(totalSeconds);
        regularTimerRevertInputsAndHideSpans();
    }
}

function resetRegularTimer(){
    clearInterval(regularTimer);
    regularTimerHoursInput.value = "";
    regularTimerMinutesInput.value = "";
    regularTimerSecondsInput.value = "";
    regularTimer = null;
    regularTimerRevertInputsAndHideSpans();
}