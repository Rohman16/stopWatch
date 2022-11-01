document.addEventListener("DOMContentLoaded", () => {
  let tens = 0;
  let minutes = 0;
  let seconds = 0;
  let numberTens = document.getElementById("tens");
  let numberSeconds = document.getElementById("seconds");
  let numberMinutes = document.getElementById("minutes");
  let run = 0;
  const buttonStart = document.getElementById("start");
  const buttonStop = document.getElementById("stop");
  const buttonReset = document.getElementById("reset");
  const buttonTimeLaps = document.getElementById("timeLaps");
  buttonStart.addEventListener("click", start);
  buttonStop.addEventListener("click", stop);
  buttonReset.addEventListener("click", reset);
  buttonTimeLaps.addEventListener("click", displayLaps);

  function start() {
    run = setInterval(runCount, 100);
  }

  function stop() {
    clearInterval(run);
  }

  function reset() {
    tens = seconds = minutes = 0;
    numberTens.innerHTML = "0" + tens;
    numberSeconds.innerHTML = seconds + "0";
    numberMinutes.innerHTML = minutes + "0";
  }

  function runCount() {
    tens++;
    if (tens > 9) {
      tens = 0;
      seconds++;
      if (seconds > 12) {
        seconds = 0;
        minutes++;
      }
    }
    numberTens.innerHTML = "0" + tens;
    if (seconds > 9) {
      numberSeconds.innerHTML = seconds;
    } else {
      numberSeconds.innerHTML = "0" + seconds;
    }
    if (minutes > 9) {
      numberMinutes.innerHTML = minutes;
    } else {
      numberMinutes.innerHTML = "0" + minutes;
    }
  }

  function displayLaps() {
    const lapsDisplay = document.createElement("div");
    const lapsTitle = document.createElement("h2");
    const lapsDisplayTime = document.createElement("div");
    const lapsTens = document.createElement("h2");
    lapsDisplayTime.append(lapsTens);
    lapsTens.innerHTML = numberTens.innerHTML;
    lapsTitle.innerHTML = "Time Laps";
    lapsDisplay.append(lapsTitle, lapsDisplayTime);
    document.body.append(lapsDisplay);
  }
});
