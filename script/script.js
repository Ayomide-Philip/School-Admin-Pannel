setInterval(getTime, 1000);

function getTime() {
  const date = new Date();
  var seconds = date.getSeconds();

  if (seconds.length < 10) {
    seconds = `0${seconds}`;
  } else {
    seconds = `${seconds}`;
  }
  document.getElementById(
    "current-time"
  ).innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${date.getSeconds()}`;
}
