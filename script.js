document.addEventListener("DOMContentLoaded", () => {
    let tens = 0;
    let minutes = 0;
    let seconds = 0;
    let numberTens = document.getElementById("tens")
    let numberSeconds = document.getElementById("minutes")
    let numberMinutes = document.getElementById("seconds")
    const buttonStart = document.getElementById("start")
    const buttonStop = document.getElementById("stop")
    const buttonReset = document.getElementById("reset")
    buttonStart.addEventListener("click", start);
    buttonStop.addEventListener("click", stop);
    buttonReset.addEventListener("click", reset);
    let run = 0;

    function start() {
        run = setInterval(runCount, 100)
    }

    function stop() {
        clearInterval(run)
    }

    function reset() {
        tens = seconds = minutes = 0;
        numberTens = tens;
        numberSeconds = seconds;
        numberMinutes = minutes;
    }

    function runCount() {
        tens++;
        if (tens > 9) {
            numberTens.innerHTML = tens;
        }

    }


})