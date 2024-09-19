setInterval(getTime, 1000);

function getTime() {
  const date = new Date();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  if (seconds < 10) {
    seconds = `0${seconds}`;
  } else {
    seconds = `${seconds}`;
  }

  if (minutes < 10) {
    minutes = `0${minutes}`;
  } else {
    minutes = `${minutes}`;
  }

  document.getElementById(
    "current-time"
  ).innerHTML = `${new Date().getHours()}:${minutes}:${seconds}`;
}

const date = new Date().getHours();
console.log(date);

if (0 <= date < 12) {
  console.log("True");
} else if (12 <= date <= 18) {
  console.log("true");
} else if (19 <= date <= 23) {
}
