console.log(name);

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

if (0 <= date && date <= 11) {
  document.getElementById("day-time").innerHTML = `Good Morning Admin`;
} else if (12 <= date && date <= 18) {
  document.getElementById("day-time").innerHTML = `Good Afternoon Admin`;
} else if (19 <= date && date <= 23) {
  document.getElementById("day-time").innerHTML = `Good Evening Admin`;
}

document.addEventListener("DOMContentLoaded", (event) => {
  console.log(event);
  var myChart = document.getElementById("myChart").getContext("2d");

  new Chart(myChart, {
    type: "pie",
    data: {
      labels: ["Contacts", "Student Admission", "Testimonials"],
      datasets: [
        {
          label: "School Statitics",
          data: [12, 19, 3],
          borderWidth: 1,
          backgroundColor: ["white", ""],
          hoverBackgroundColor: "green",
        },
      ],
    },
  });
});
