DisplayDriver = function(canvas) {
  this.canvas = canvas;
  this.context = canvas.getContext("2d");
};

DisplayDriver.prototype.constructor = DisplayDriver;

DisplayDriver.prototype.drawRectangle = function(x, y, xLength, yWidth, color) {
    this.context.fillStyle = color;
    this.context.fillRect(x, y, xLength, yWidth);
};

DisplayDriver.prototype.drawSquare = function(x, y, length, color) {
  this.drawRectangle(x, y, length, length, color);
};

DisplayDriver.prototype.drawCircle = function(x, y, radius, color) {
    this.context.fillStyle = color;
    this.context.beginPath();
    this.context.arc(x, y, radius, 0, 2 * Math.PI);
    this.context.fill();
};

DisplayDriver.prototype.drawText = function(x, y, text, color, size, font) {
  font = (font || "Courier New");
  if (!Fonts.isValid(font)) {
    throw font + " is an invalid font.";
  }

  this.context.font = size + "px " + font;
  this.context.fillStyle = color;
  this.context.fillText(text, x, y);
};


DisplayDriver.prototype.drawLine = function(x1, y1, x2, y2, color, width) {
  width = (width || 2);
  this.context.strokeStyle = color;
  this.context.lineWidth = width;
  this.context.beginPath();
  this.context.moveTo(x1, y1);
  this.context.lineTo(x2, y2);
  this.context.stroke();
}
