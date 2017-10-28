Gamespace.Sparkle = function(x, y, squareLength, duration, colorIndex) {
  this.x = x;
  this.y = y;
  this.squareLength = squareLength;

  this.drawable = new Gamespace.DrawableSquare(this.x, this.y, this.squareLength, Gamespace.rainbow[0]);
  this.maxFrameCount = duration !== undefined ? duration : 15;
  this.frameCount = 0;
  this.framesPerColorChange = 5;
  this.startColor = colorIndex ? colorIndex : 0;
};

Gamespace.Sparkle.prototype.colorForFramecount = function(count) {
  // return Gamespace.rainbow[0];
  return Gamespace.rainbow[Math.floor(count/this.framesPerColorChange) + this.startColor % Gamespace.rainbow.length];
};

Gamespace.Sparkle.prototype.isHalfDone = function() {
  return this.frameCount > (this.maxFrameCount / 2);
};

Gamespace.Sparkle.prototype.isDone = function() {
  return this.frameCount > this.maxFrameCount;
};

Gamespace.Sparkle.prototype.draw = function(canvas, context) {
  var xPlus, newColor;

  if (this.frameCount <= this.maxFrameCount) {
    this.frameCount += 1;
    this.drawable.draw(canvas, context);
    xPlus = this.isHalfDone() ? -1 : 1;
    this.drawable.addY(xPlus);    
    newColor = this.colorForFramecount(this.frameCount);
    this.drawable.setColor(newColor);
  }
};

Gamespace.Sparkle.prototype.getFrameCount = function() {
    return this.frameCount;
};