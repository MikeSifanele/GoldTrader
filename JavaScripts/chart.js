class Chart {
  constructor({ height = 0, width = 0,  chartLimit = 240} = {}) {
    this.canvasHeight = height;
    this.canvasWidth = width;
    this.bullColour = '#00e600';
    this.bearColour = '#ff0000';
    this.chartLimit = chartLimit;
  }

  addCandle(chart, {wickWidth = 2, open = 0, high = 0, low = 0, close = 0, isPeak = false, isValley = false } = {}) {
    const numberOfCandles = chart.getElementsByTagName('canvas').length;

    if(numberOfCandles >= this.chartLimit)
    {
      document.getElementById("candle_0").remove();
    }
    
    open = this.#fromPercentage(open, this.canvasHeight);
    high = this.#fromPercentage(high, this.canvasHeight);
    low = this.#fromPercentage(low, this.canvasHeight);
    close = this.#fromPercentage(close, this.canvasHeight);
    
    var bodyWidth = wickWidth * 3;

    const elementId = 'candle_' + numberOfCandles.toString();

    let canvas = document.createElement('canvas');
    canvas.id = elementId;
    canvas.height = this.canvasHeight;
    canvas.width = bodyWidth + wickWidth;

    chart.appendChild(canvas);

    var bodyLeftBorder = 1;
    var wickLeftBorder = bodyLeftBorder + wickWidth;
    var bodyRightBorder = bodyLeftBorder + bodyWidth;
    var wickRightBorder = wickLeftBorder + wickWidth;

    var ctx = canvas.getContext('2d');

    ctx.fillStyle = (close >= open) ? this.bullColour : this.bearColour;
    ctx.beginPath();

    //upper wick top left corner
    ctx.moveTo(wickLeftBorder, high);
    //upper wick bottom left corner
    ctx.lineTo(wickLeftBorder, Math.max(open, close));
    //upper body left corner
    ctx.lineTo(bodyLeftBorder, Math.max(open, close));
    //lower body left corner
    ctx.lineTo(bodyLeftBorder, Math.min(open, close));
    //lower wick top left corner
    ctx.lineTo(wickLeftBorder, Math.min(open, close));
    //lower wick bottom left corner
    ctx.lineTo(wickLeftBorder, low);
    //lower wick bottom right corner
    ctx.lineTo(wickRightBorder, low);
    //lower wick top right corner
    ctx.lineTo(wickRightBorder, Math.min(open, close));
    //lower body right corner
    ctx.lineTo(bodyRightBorder, Math.min(open, close));
    //upper body right corner
    ctx.lineTo(bodyRightBorder, Math.max(open, close));
    //upper wick bottom right corner
    ctx.lineTo(wickRightBorder, Math.max(open, close));
    //upper wick top right corner
    ctx.lineTo(wickRightBorder, high);

    ctx.closePath();
    ctx.fill();
  }
  #fromPercentage(value, maxValue){
    return value / 100 * maxValue;
  }
}