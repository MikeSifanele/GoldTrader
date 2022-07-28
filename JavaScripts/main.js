var chartContainer = document.getElementById('chartContainer');

let chart = new Chart({height: window.innerHeight, width: parseInt(window.innerWidth * .95)});
chart.addCandle(chartContainer, {open: 10, high: 1, low: 40, close: 35});

