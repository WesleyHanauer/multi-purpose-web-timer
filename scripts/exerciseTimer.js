const exercisingTimeM = document.getElementById("exerciseInputExercisingM");
const exercisingTimeS = document.getElementById("exerciseInputExercisingS");
const separationTimeM = document.getElementById("exerciseInputSeparationM");
const separationTimeS = document.getElementById("exerciseInputSeparationS");
const loopCheck = document.getElementById("exerciseLoop");

var audio = new Audio('./public/audio/alarm.mp3');
audio.currentTime = 1;

let exercisingTimer;

let lessMinutesExercising;
let lessSecondsExercising;
let lessMinutesSeparation;
let lessSecondsSeparation;

function startExerciseTimer(){
    const separationMinutesInput = Number(separationTimeM.value);
    const separationSecondsInput = Number(separationTimeS.value);
    const exercisingMinutesInput = Number(exercisingTimeM.value);
    const exercisingSecondsInput = Number(exercisingTimeS.value);

    let separationSeconds = (separationMinutesInput * 60) + separationSecondsInput;
    let exercisingSeconds = (exercisingMinutesInput * 60) + exercisingSecondsInput;

    exercisingTimer = setInterval(() => {
        if(separationSeconds>0){
            separationSeconds-=1;

            lessMinutesSeparation = Math.floor((separationSeconds % 3600) / 60);
            lessSecondsSeparation = separationSeconds % 60;

            separationTimeM.value = lessMinutesSeparation;
            separationTimeS.value = lessSecondsSeparation;
        }else if(exercisingSeconds>0){
            
            if(separationSeconds == 0 && exercisingSeconds == ((exercisingMinutesInput * 60) + exercisingSecondsInput)){
                audio.play();
                alert("Timer done, time to exercise!");
                audio.pause();
                audio.currentTime = 1;
            }
            exercisingSeconds-=1;

            lessMinutesExercising = Math.floor((exercisingSeconds % 3600) / 60);
            lessSecondsExercising = exercisingSeconds % 60;

            exercisingTimeM.value = lessMinutesExercising;
            exercisingTimeS.value = lessSecondsExercising;
        }else if(separationSeconds == 0 && exercisingSeconds == 0 && loopCheck.checked){
            separationSeconds = (separationMinutesInput * 60) + separationSecondsInput;
            exercisingSeconds = (exercisingMinutesInput * 60) + exercisingSecondsInput;
            audio.play();
            alert("Exercise done, time to rest!");
            audio.pause();
            audio.currentTime = 1;
        }else{
            clearInterval(exercisingTimer);
        }
    }, 1000);
}

function stopExerciseTimer(){
    clearInterval(exercisingTimer);
}

function resetExerciseTimer(){
    exercisingTimeM.value = "";
    exercisingTimeS.value = "";
    separationTimeM.value = "";
    separationTimeS.value = "";
    clearInterval(exercisingTimer);
}