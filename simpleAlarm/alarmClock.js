let timer = document.getElementById("timer");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let ampm = document.getElementById("ampm");
let startStop = document.getElementById("startStop");

let currentTime;
let alarmElement;
let activeAlarm = false;
let sound = new Audio('alarm.mp3');
sound.loop = true;

function showTimes() {
  let now = new Date();
  currentTime = now.toLocaleTimeString();

  if (currentTime === alarmElement) {
    sound.play();
  }

  timer.textContent = currentTime;
  setTimeout(showTimes, 1000);
}


function addMinSec(id) {
  let min = 60;

  for (i = 0; i < min; i++) {
    id.options[id.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}

function addHour(id) {
  let min = 12;

  for (i = 0; i < min; i++) {
    id.options[id.options.length] = new Option(i < 10 ? "0" + i : i);
  }
}

startStop.onclick = function () {
  if (activeAlarm === false) {
    hours.disabled = true;
    minutes.disabled = true;
    seconds.disabled = true;
    ampm.disabled = true;

    alarmElement = hours.value + ":" + minutes.value + ":" + seconds.value + ":" + ampm.value;
    this.textContent = "Clear Alarm";
    activeAlarm = true;
  }
  else {
    hours.disabled = false;
    minutes.disabled = false;
    seconds.disabled = false;
    ampm.disabled = false;

    sound.pause();
    this.textContent = "Set Alarm";
    activeAlarm = false;
  }
}

showTimes();
addMinSec(seconds);
addMinSec(minutes);
addHour(hours);