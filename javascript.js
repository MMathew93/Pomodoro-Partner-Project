//global variables
var sessionTime = 1500;
var sessionClock = 1500;
var breakTime = 300;
var isPaused = true;
var isbreak = false;
var bup= new Audio("/home/lyndexer/Downloads/toolur_jbdngw-1.mp3")


//clock function
setInterval(timerLoop, 1000)
function timerLoop(){
    if (isPaused=== false){
            sessionClock--;
            updateClock();
            //alert and switch to break timer
            if (sessionClock == 0){
                if (isbreak == true){
                    isbreak = false;
                    sessionClock = sessionTime;
                    updateClock();
                    console.log("Back to Work!");
                    bup.play();
                }else{
                console.log("Break Time!");
                bup.play(); 
                sessionClock = breakTime;
                updateClock();
            }
            }
    }
}

//playPauseButton function
function playPause(){
    if (isPaused== true){
    isPaused= false;
    playPauseButton.innerHTML= '&#10074;&#10074'
    }else{
        isPaused= true;
        playPauseButton.innerHTML= '&#9658'
    }
    disableButtons(true);
}

//Reset to defaults function
function reset(){
    isPaused= true;
    sessionTime= 1500;
    sessionClock = sessionTime;
    breakTime= 300;
    document.getElementById("breakTimeDisplay").innerHTML = minutes = Math.floor(breakTime/60) + "mins";
    document.getElementById("sessionTimeDisplay").innerHTML  = Math.floor(sessionTime/60) + "mins";
    updateClock();
    disableButtons(false);
}

//stopButton function
function stop(){
    isPaused= true;
    sessionClock = sessionTime;
    updateClock();
    disableButtons(false);
}

//updateClock function
function updateClock(){
    var y='';
    var z='';
    hours = Math.floor((sessionClock/60)/60);
    minutes = Math.floor(sessionClock/60)-(hours*60);
    seconds = Math.floor(((sessionClock/60-(hours*60))-minutes)*60);
    if (seconds < 10){
        y=0;
    }else{
        y='';
    }
    if (minutes < 10){
        z=0;
    }else{
        z='';
    }
    document.getElementById("clock").innerHTML = hours + ":" + z + minutes + ":" + y + seconds;
}

// diables increment and decrement while clock runs
function disableButtons(val) {
    document.querySelectorAll(".settingButton").forEach(o => o.disabled = val)
}

//increase and decrease session timer
function session(x) {
    if(x== '+') {
        sessionTime += 60;
        }else if(x== '-') {
            sessionTime -= 60;
        }else{ return }
        
    if (sessionTime < 60) {
        sessionTime = 60;
    }
    document.getElementById("sessionTimeDisplay").innerHTML  = Math.floor(sessionTime/60) + " mins";
    sessionClock = sessionTime;
    updateClock();
}

function breakTimer(x) {
    if(x== '+') {
        breakTime += 60;
        }else if(x== '-') {
            breakTime -= 60;
        }else{ return }

    if (breakTime < 60) {
            breakTime = 60;
    }
    document.getElementById("breakTimeDisplay").innerHTML = minutes = Math.floor(breakTime/60) + " mins";
}