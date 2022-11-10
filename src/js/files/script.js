const hour = document.getElementById("hour");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const ampm = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampmEl = "AM";
  if (h > 12) {
    h = h - 12;
    ampmEl = "PM";
  }

// if (h < 10) h = "0" + h;
  h = h < 10 ? "0" + h : h;
  s = s < 10 ? "0" + s : s;
  m = m < 10 ? "0" + m : m;

  hour.innerText = h;
  minutes.innerText = m;
  seconds.innerText = s;
  ampm.innerText = ampmEl;
  setTimeout(() => {
    updateClock();
  }, 1000);
}

updateClock();
