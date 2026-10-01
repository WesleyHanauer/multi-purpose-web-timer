const regularTimerHourInput = document.getElementById("regularInputH");
const regularTimerMinuteInput = document.getElementById("regularInputM");
const regularTimerSecondInput = document.getElementById("regularInputS");

function startRegularTimer(){
    const hours = Number(regularTimerHourInput.value);
    const minutes = Number(regularTimerMinuteInput.value);
    const seconds = Number(regularTimerSecondInput.value);
    let totalSeconds = convertToSeconds(hours, minutes, seconds);
        if(regularTimer == null){
            regularTimer = setInterval(() => {
            if(totalSeconds>0){
                totalSeconds-=1;
                regularTimerHourInput.value = convertSecondsToHour(totalSeconds);
                regularTimerMinuteInput.value = convertSecondsToMinutes(totalSeconds);
                regularTimerSecondInput.value = getRestOfSeconds(totalSeconds);
            }else{
                clearInterval(regularTimer);
                audio.play();
                alert("Timer done");
                audio.pause();
                audio.currentTime = 1;
                regularTimer = null
            }
        }, 1000);
    }
}

function stopRegularTimer(){
    clearInterval(regularTimer);
    regularTimer = null;
}

function resetRegularTimer(){
    clearInterval(regularTimer);
    regularTimerHourInput.value = "";
    regularTimerMinuteInput.value = "";
    regularTimerSecondInput.value = "";
    regularTimer = null;
}