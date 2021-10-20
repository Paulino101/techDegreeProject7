const close = document.getElementsByClassName("closebtn");
let i;

for (i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    const div = this.parentElement;
    div.style.opacity = "0";
    setTimeout(function () {
      div.style.display = "none";
    }, 600);
  };
}

// LIne Chart//

// const labels = ["January", "February", "March", "April", "May", "June"];
// const data = {
//   labels: labels,
//   datasets: [
//     {
//       label: "My First dataset",
//       backgroundColor: "rgb(255, 99, 132)",
//       borderColor: "rgb(255, 99, 132)",
//       data: [0, 10, 5, 2, 20, 30, 45],
//     },
//   ],
// };

// const config = {
//   type: "line",
//   data: data,
//   options: {},
// };
// // === include 'setup' then 'config' above ===

// var myChart = new Chart(document.getElementById("myChart"), config);
//

// Bar Chart //
const labels = ["S", "M", "T", "W", "T", "F", "S"];
const data = {
  labels: labels,
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
};
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};
// === include 'setup' then 'config' above ===

var myChart = new Chart(document.getElementById("myChart"), config);

//////////////////
//Doughnut Chart//
const dataDoughnut = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [
    {
      label: "My First Dataset",
      data: [300, 50, 100],
      backgroundColor: [
        "rgb(255, 99, 132)",
        "rgb(54, 162, 235)",
        "rgb(255, 205, 86)",
      ],
      hoverOffset: 4,
    },
  ],
};
const configDoughnut = {
  type: "doughnut",
  data: dataDoughnut,
};
// === include 'setup' then 'config' above ===

var myChart = new Chart(document.getElementById("doughnutChart"), config);
