var hrs = 0;
var sec = 0;
var min = 0;
var msec = 0;
var interval;

var msecHeading = document.getElementById("msec");
var secHeading = document.getElementById("sec");
var minHeading = document.getElementById("min");
var hrsHeading = document.getElementById("hrs");

function startTimer(){
    msec++;
    msecHeading.innerHTML = msec;
    if(msec >= 100){
        sec++;
        secHeading.innerHTML = sec;
        msec = 0;
    }
    else if(sec >= 60){
        min++;
        minHeading.innerHTML = min;
        sec = 0;
    }
    else if(min >= 60){
        hrs++;
        hrsHeading.innerHTML = hrs;
        min = 0;
    }
}

function start(){
   interval = setInterval(startTimer,10);
}

function stop(){
    clearInterval(interval);
}

function reset(){
    hrs = 0;
    min = 0;
    sec = 0;
    msec = 0;
    hrsHeading.innerHTML = hrs;
    minHeading.innerHTML = min;
    secHeading.innerHTML = sec;
    msecHeading.innerHTML = msec;
    stop();
}



