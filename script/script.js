setInterval(getTime, 1000);

function getTime() {
  const date = new Date();
  var seconds = date.getSeconds();
  console.log(seconds.length);
  
  //   if (seconds.length === 1) {
  //     console.log("true");
  //   } else {
  //     console.log("false");
  //   }
  document.getElementById(
    "current-time"
  ).innerHTML = `${new Date().getHours()}:${new Date().getMinutes()}:${date.getSeconds()}`;
}
