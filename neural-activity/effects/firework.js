Gamespace.Firework = function(canvasLength, color) {
  this.color = color;
  this.sparkleDuration = 20;
  this.frameCount = 0;
  this.maxFrameCount = 120;
  this.totalRings = 4;
  this.framesPerNewRing = 8;
  this.canvasLength = canvasLength;
  this.squareLength = (canvasLength / 20) - (canvasLength / 200);
  this.offset = this.squareLength + 2;

  this.x = Math.floor(Math.random() * canvasLength);
  this.y = Math.floor(Math.random() * canvasLength);

  this.color = 0x6600BB;
  this.sparkles = [
    new Gamespace.Sparkle(this.x, this.y, this.squareLength, this.sparkleDuration),
  ];
  this.rings = [];//new Gamespace.Ring(this.x, this.y, this.squareLength, 1),
    // new Gamespace.Ring(this.x, this.y, this.squareLength, 2)];
};  

Gamespace.Firework.prototype.draw = function(canvas, context) {
  var smallerLength = this.squareLength * .7;
  var i;
  this.frameCount += 1;

  for (i = 0; i < this.sparkles.length; i++) {
    this.sparkles[i].draw(canvas, context);
  }
  
  for (i = 0; i < this.rings.length; i++) {
    this.rings[i].draw(canvas, context);
  }

  var ringOffset = this.frameCount / this.framesPerNewRing;
  if (this.frameCount % this.framesPerNewRing == 0 && ringOffset <= this.totalRings) {
    this.rings.push(new Gamespace.Ring(this.x, this.y, this.offset, ringOffset, this.sparkleDuration));
  }
};

Gamespace.Firework.prototype.isDone = function() {
  // return false;
  return this.frameCount > this.maxFrameCount;
};

Gamespace.Firework.prototype.colorString = function(number) {
  return "#" + number.toString(16);
};

Gamespace.Firework.prototype.getColor = function(addend) {
  var newColor;
  addend = (typeof addend !== 'undefined') ?  addend : 0;
  newColor = this.color + addend;
  newColor = newColor > 0xFFFFFF ? newColor - 0xFFFFFF : newColor;
  newColor = newColor < 0 ? 0xFFFFFF - newColor: newColor;
  return colorString(this.color + addend);
};
