let resetButton = document.getElementById("resetEl");
let pauseButton = document.getElementById("pauseEl");
let startButton = document.getElementById("startEl");
let stopEl = document.getElementById("stopwatch");
let lapButton = document.getElementById("lapEl");
let lapTimesEl = document.getElementById("lapTimes");

let uniqueId;
let timerEl = true;

if (timerEl === true){
    startButton.onclick = function() {
        let stopwatchEl = parseInt(stopEl.textContent);
        uniqueId = setInterval(function() {
            stopwatchEl = stopwatchEl + 1
            stopEl.textContent = stopwatchEl;
        }, 1000);
    }
    timerEl = false;
}


resetButton.onclick = function() {
    clearInterval(uniqueId);
    stopEl.textContent = 0;
    lapTimesEl.textContent = "";
    timerEl = true;
}

pauseButton.onclick = function() {
    clearInterval(uniqueId)
    timerEl = true;
}

lapButton.onclick = function() {
    let lapTimesPara = document.createElement("p");
    lapTimesPara.classList.add("p")
    lapTimesPara.textContent = "At  " + stopEl.textContent + "  seconds";
    lapTimesEl.appendChild(lapTimesPara);
}