class Chart {
  constructor({ height = 0 } = {}) {
    this.height = height;
    this.bullColour = '#00e600';
    this.bearColour = '#ff0000';
  }

  addCandle(ctx, { wickWidth = 1, open = 0, high = 0, low = 0, close = 0, isPeak = false, isValley = false } = {}) {
    var bodyWidth = wickWidth * 3;

    var wickLeftBorder = bodyWidth + 4;
    var wickRightBorder = wickLeftBorder + wickWidth;
    var bodyLeftBorder = wickLeftBorder - bodyWidth;
    var bodyRightBorder = wickRightBorder + bodyWidth;

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
}