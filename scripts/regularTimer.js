const hoursInput = document.getElementById("regularInputH");
const minutesInput = document.getElementById("regularInputM");
const secondsInput = document.getElementById("regularInputS");

let lessHours;
let lessMinutes;
let lessSeconds;

function startRegularTimer(){
    const hours = Number(hoursInput.value);
    const minutes = Number(minutesInput.value);
    const seconds = Number(secondsInput.value);
    let totalSeconds = convertToSeconds(hours, minutes, seconds);
        if(timer == null){
            timer = setInterval(() => {
            if(totalSeconds>0){
                totalSeconds-=1;
                lessHours = Math.floor(totalSeconds / 3600);
                lessMinutes = Math.floor((totalSeconds % 3600) / 60);
                lessSeconds = totalSeconds % 60;
                hoursInput.value = lessHours;
                minutesInput.value = lessMinutes;
                secondsInput.value = lessSeconds;
            }else{
                clearInterval(timer);
                timer = null
                audio.play();
                alert("Timer done");
                audio.pause();
                audio.currentTime = 1;
            }
        }, 1000);
    }
}

function stopRegularTimer(){
    clearInterval(timer);
    timer = null;
}

function resetRegularTimer(){
    hoursInput.value = "";
    minutesInput.value = "";
    secondsInput.value = "";
    clearInterval(timer);
    timer = null;
}