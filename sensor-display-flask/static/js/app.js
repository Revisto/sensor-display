$(document).ready(function () {
  const ctx = document.getElementById("myChart").getContext("2d");

  const myChart = new Chart(ctx, {
    type: "line",
    data: {
      datasets: [{ }],
    },
    options: {
      plugins: {
        legend: {
            display: false
        },
      },
      borderWidth: 3,
      borderColor: ['rgba(255, 99, 132, 1)',],
    },
  });
  myChart.options.animation = false; // disables all animations
  myChart.options.animations.colors = false; // disables animation defined by the collection of 'colors' properties
  myChart.options.animations.x = false; // disables animation defined by the 'x' property
  myChart.options.transitions.active.animation.duration = 0; // disables the animation for 'active' mode
  


  function addData(label, data) {
    myChart.data.labels.push(label);
    myChart.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    myChart.update();
  }

  function removeFirstData() {
    myChart.data.labels.splice(0, 1);
    myChart.data.datasets.forEach((dataset) => {
      dataset.data.shift();
    });
  }

  const MAX_DATA_COUNT = 100;
  //connect to the socket server.
  //   var socket = io.connect("http://" + document.domain + ":" + location.port);
  var socket = io.connect();

  //receive details from server
  socket.on("updateSensorData", function (msg) {
    console.log("Received sensorData :: " + msg.date + " :: " + msg.diesel_consumption);

    // Show only MAX_DATA_COUNT data
    if (myChart.data.labels.length > MAX_DATA_COUNT) {
      removeFirstData();
    }
    addData(msg.date, msg.diesel_consumption);
  });



  const ctx2 = document.getElementById("myChart2").getContext("2d");

  const myChart2 = new Chart(ctx2, {
    type: "line",
    data: {
      datasets: [{ }],
    },
    options: {
      plugins: {
        legend: {
            display: false
        },
      },
      borderWidth: 3,
      borderColor: ['rgba(50, 50, 132, 1)',],
    },
  });

  myChart2.options.animation = false; // disables all animations
  myChart2.options.animations.colors = false; // disables animation defined by the collection of 'colors' properties
  myChart2.options.animations.x = false; // disables animation defined by the 'x' property
  myChart2.options.transitions.active.animation.duration = 0; // disables the animation for 'active' mode
  

  function addData2(label, data) {
    myChart2.data.labels.push(label);
    myChart2.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    myChart2.update();
  }

  function removeFirstData2() {
    myChart2.data.labels.splice(0, 1);
    myChart2.data.datasets.forEach((dataset) => {
      dataset.data.shift();
    });
  }

  const MAX_DATA_COUNT2 = 100;
  //connect to the socket server.

  //receive details from server
  socket.on("updateSensorData", function (msg) {
    console.log("Received sensorData :: " + msg.date + " :: " + msg.tempreture);

    // Show only MAX_DATA_COUNT data
    if (myChart2.data.labels.length > MAX_DATA_COUNT2) {
      removeFirstData2();
    }
    addData2(msg.date, msg.tempreture);
  });

  const ctx3 = document.getElementById("myChart3").getContext("2d");

  const myChart3 = new Chart(ctx3, {
    type: "line",
    data: {
      datasets: [{ }],
    },
    options: {
      plugins: {
        legend: {
            display: false
        },
      },
      borderWidth: 3,
      borderColor: ['rgba(20, 200, 50, 1)',],
    },
  });

  myChart3.options.animation = false; // disables all animations
  myChart3.options.animations.colors = false; // disables animation defined by the collection of 'colors' properties
  myChart3.options.animations.x = false; // disables animation defined by the 'x' property
  myChart3.options.transitions.active.animation.duration = 0; // disables the animation for 'active' mode
  

  function addData3(label, data) {
    myChart3.data.labels.push(label);
    myChart3.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    myChart3.update();
  }

  function removeFirstData3() {
    myChart3.data.labels.splice(0, 1);
    myChart3.data.datasets.forEach((dataset) => {
      dataset.data.shift();
    });
  }

  const MAX_DATA_COUNT3 = 100;
  //connect to the socket server.

  //receive details from server
  socket.on("updateSensorData", function (msg) {
    console.log("Received sensorData :: " + msg.date + " :: " + msg.rpm);

    // Show only MAX_DATA_COUNT data
    if (myChart3.data.labels.length > MAX_DATA_COUNT3) {
      removeFirstData3();
    }
    addData3(msg.date, msg.rpm);
  });
  const ctx4 = document.getElementById("myChart4").getContext("2d");

  const myChart4 = new Chart(ctx4, {
    type: "line",
    data: {
      datasets: [{ }],
    },
    options: {
      plugins: {
        legend: {
            display: false
        },
      },
      borderWidth: 3,
      borderColor: ['rgba(250, 200, 120, 1)',],
    },
  });

  myChart4.options.animation = false; // disables all animations
  myChart4.options.animations.colors = false; // disables animation defined by the collection of 'colors' properties
  myChart4.options.animations.x = false; // disables animation defined by the 'x' property
  myChart4.options.transitions.active.animation.duration = 0; // disables the animation for 'active' mode
  

  function addData4(label, data) {
    myChart4.data.labels.push(label);
    myChart4.data.datasets.forEach((dataset) => {
      dataset.data.push(data);
    });
    myChart4.update();
  }

  function removeFirstData4() {
    myChart4.data.labels.splice(0, 1);
    myChart4.data.datasets.forEach((dataset) => {
      dataset.data.shift();
    });
  }

  const MAX_DATA_COUNT4 = 100;
  //connect to the socket server.

  //receive details from server
  socket.on("updateSensorData", function (msg) {
    console.log("Received sensorData :: " + msg.date + " :: " + msg.gas_mass);

    // Show only MAX_DATA_COUNT data
    if (myChart4.data.labels.length > MAX_DATA_COUNT4) {
      removeFirstData4();
    }
    addData4(msg.date, msg.gas_mass);
  });
});
