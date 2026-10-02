const exercisingTimeM = document.getElementById("exerciseInputExercisingM");
const exercisingTimeS = document.getElementById("exerciseInputExercisingS");
const restingTimeM = document.getElementById("exerciseInputSeparationM");
const restingTimeS = document.getElementById("exerciseInputSeparationS");
const loopCheck = document.getElementById("exerciseLoop");

let lessMinutesExercising;
let lessSecondsExercising;
let lessMinutesresting;
let lessSecondsresting;

function startExerciseTimer(){
    if(exerciseTimer == null){
        const restingMinutesInput = Number(restingTimeM.value);
        const restingSecondsInput = Number(restingTimeS.value);
        const exercisingMinutesInput = Number(exercisingTimeM.value);
        const exercisingSecondsInput = Number(exercisingTimeS.value);

        let restingSeconds = convertToSeconds(0, restingMinutesInput, restingSecondsInput);
        let exercisingSeconds = convertToSeconds(0, exercisingMinutesInput, exercisingSecondsInput);

        exerciseTimer = setInterval(() => {
            if(restingSeconds>0){
                restingSeconds-=1;

                lessMinutesresting = Math.floor((restingSeconds % 3600) / 60);
                lessSecondsresting = restingSeconds % 60;

                restingTimeM.value = lessMinutesresting;
                restingTimeS.value = lessSecondsresting;
            }else if(exercisingSeconds>0){
                if(restingSeconds == 0 && exercisingSeconds == ((exercisingMinutesInput * 60) + exercisingSecondsInput)){
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
            }else if(restingSeconds == 0 && exercisingSeconds == 0 && loopCheck.checked){
                restingSeconds = (restingMinutesInput * 60) + restingSecondsInput;
                exercisingSeconds = (exercisingMinutesInput * 60) + exercisingSecondsInput;
                audio.play();
                alert("Exercise done, time to rest!");
                audio.pause();
                audio.currentTime = 1;
            }else{
                clearInterval(exerciseTimer);
                exerciseTimer = null;
            }
        }, 1000);
    }
}

function stopExerciseTimer(){
    clearInterval(exerciseTimer);
    exerciseTimer = null;
}

function resetExerciseTimer(){
    clearInterval(exerciseTimer);
    exercisingTimeM.value = "";
    exercisingTimeS.value = "";
    restingTimeM.value = "";
    restingTimeS.value = "";
    exerciseTimer = null;
}