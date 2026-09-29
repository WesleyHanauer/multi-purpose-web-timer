const exercisingTimeM = document.getElementById("exerciseInputExercisingM");
const exercisingTimeS = document.getElementById("exerciseInputExercisingS");
const separationTimeM = document.getElementById("exerciseInputSeparationM");
const separationTimeS = document.getElementById("exerciseInputSeparationS");
const loopCheck = document.getElementById("exerciseLoop");

let exercisingTimer;

// These variables will be used to control the time changes without changing the original input values that must be saved
let lessMinutesExercising;
let lessSecondsExercising;
let lessMinutesSeparation;
let lessSecondsSeparation;

function exerciseStartTimer(){
    // Grabs the numbers inside the inputs rather than the inputs themselves handled on lines 1 through 5
    const separationMinutesInput = Number(separationTimeM.value);
    const separationSecondsInput = Number(separationTimeS.value);
    const exercisingMinutesInput = Number(exercisingTimeM.value);
    const exercisingSecondsInput = Number(exercisingTimeS.value);

    // Turns the input time into raw seconds so we can work with it
    let separationSeconds = convertToSeconds(0, separationMinutesInput, separationSecondsInput);
    let exercisingSeconds = convertToSeconds(0, exercisingMinutesInput, exercisingSecondsInput);

    if(timer == null){
        timer = setInterval(() => {
            if(separationSeconds>0){
                separationSeconds-=1;

                lessMinutesSeparation = Math.floor((separationSeconds % 3600) / 60);
                lessSecondsSeparation = separationSeconds % 60;

                separationTimeM.value = lessMinutesSeparation;
                separationTimeS.value = lessSecondsSeparation;
            }else if(exercisingSeconds>0){
                // This allows the alarm to only play once after the separation timer is done, otherwise it would play indefinitely
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
                timer = null
                clearInterval(timer);
            }
        }, 1000);
    }
}

function exerciseStopTimer(){
    clearInterval(timer);
    timer = null;
}

function exerciseResetTimer(){
    exercisingTimeM.value = "";
    exercisingTimeS.value = "";
    separationTimeM.value = "";
    separationTimeS.value = "";
    clearInterval(timer);
    timer = null;
}