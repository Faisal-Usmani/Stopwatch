let timer = document.querySelector(".timer");
let play = document.getElementById("btn-play");
let reset = document.getElementById("btn-set");
let stop = document.getElementById("btn-stop");

let msec = 0;
let sec = 0;
let min = 0;

let timerid = null;
play.addEventListener("click", function () {
  if (timerid !== null) {
    clearInterval(timerid);
  }
  timerid = setInterval(stopwatch, 10);
});

reset.addEventListener("click", function () {
  clearInterval(timerid);
  msec = sec = min = 0;
  timer.innerHTML = `00:00:00`;
});

stop.addEventListener("click", function () {
  clearInterval(timerid);
});

function stopwatch() {
  msec++;
  if (msec == 100) {
    msec = 0;
    sec++;
    if (sec == 60) {
      sec = 0;
      min++;
    }
  }
  let s = msec < 10 ? `0${msec}` : msec;
  let m = sec < 10 ? `0${sec}` : sec;
  let h = min < 10 ? `0${min}` : min;
  timer.innerHTML = `${h}:${m}:${s}`;
}
