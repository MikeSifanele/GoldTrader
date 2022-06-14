const canvas = document.getElementById('chart');
canvas.height = window.innerHeight;
canvas.width = parseInt(window.innerWidth * .9);

let chart = new Chart({height: canvas.height});
chart.addCandle(canvas.getContext("2d"), {open: 50, high: 10, low: 130, close: 100});