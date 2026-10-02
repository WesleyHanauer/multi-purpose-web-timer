const regularTimerHourInput = document.getElementById("regularInputH");
const regularTimerMinuteInput = document.getElementById("regularInputM");
const regularTimerSecondInput = document.getElementById("regularInputS");
const regularTimerHoursDisplay = document.getElementById("regularTimerHoursDisplay");
const regularTimerMinutesDisplay = document.getElementById("regularTimerMinutesDisplay");
const regularTimerSecondsDisplay = document.getElementById("regularTimerSecondsDisplay");
let totalSeconds;

function revertInputsAndHideSpans(){
    regularTimerHourInput.style.display = "inline";
    regularTimerMinuteInput.style.display = "inline";
    regularTimerSecondInput.style.display = "inline";
    regularTimerHoursDisplay.style.display = "none";
    regularTimerMinutesDisplay.style.display = "none";
    regularTimerSecondsDisplay.style.display ="none";
}

function hideRegularTimerInputs(){
    regularTimerHourInput.style.display = "none";
    regularTimerMinuteInput.style.display = "none";
    regularTimerSecondInput.style.display = "none";
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
    regularTimerHourInput.value = convertSecondsToHour(totalSeconds);
    regularTimerMinuteInput.value = convertSecondsToMinutes(totalSeconds);
    regularTimerSecondInput.value = getRestOfSeconds(totalSeconds);
}

function startRegularTimer(){
    const hours = Number(regularTimerHourInput.value);
    const minutes = Number(regularTimerMinuteInput.value);
    const seconds = Number(regularTimerSecondInput.value);
    totalSeconds = convertToSeconds(hours, minutes, seconds);
    if(regularTimer == null && totalSeconds != 0){
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
                regularTimer = null
                revertInputsAndHideSpans()
            }
        }, 1000);
    }
}

function stopRegularTimer(){
    if(totalSeconds){
        clearInterval(regularTimer);
        regularTimer = null;
        getAndSetRegularTimerInputUpdatedValues(totalSeconds);
        revertInputsAndHideSpans();
    }
}

function resetRegularTimer(){
    clearInterval(regularTimer);
    regularTimerHourInput.value = "";
    regularTimerMinuteInput.value = "";
    regularTimerSecondInput.value = "";
    regularTimer = null;
    revertInputsAndHideSpans()
}