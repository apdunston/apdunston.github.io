/**
 * Interface Display
 */
Display = function(canvas, framesPerSecond) {
  this.color = "black";
  this.context = canvas.getContext("2d");
  this.canvas = canvas;
  this.framesPerSecond = framesPerSecond;
  this.objects = [];
  this.backgroundOnly = false;
  this.backgroundObject = new DrawableSquare(0, 0, canvas.width, this.color);
  this.addObject(this.backgroundObject);
};

Display.prototype.constructor = Display;

Display.prototype.setColor = function(value) {
  this.color = value;
  this.objects[0] = new DrawableSquare(0, 0, this.canvas.width, this.color);
  this.drawLoop();
};

Display.prototype.flash = function(color, time, callback) {
  var self = this;
  time = time ? time : 200;
  var flashObject = new DrawableSquare(0, 0, this.canvas.width, color);
  this.objects.push(flashObject);
  // flashObject.draw(this.canvas, this.context);
  setTimeout(function() { 
    self.objects.pop();
    if (callback) {
      callback();
    }
  }, time);
};

Display.prototype.drawLoop = function() {
  if (this.backgroundOnly) { return; }

  for (var x = 0; x < this.objects.length; x++) {
    this.objects[x].draw(this.canvas, this.context);
    if (this.objects[x].isDone()) {
      this.objects.splice(x, 1);
    }
  }

  if (this.objects.length == 1) {
    this.backgroundOnly = true;
  }
};

Display.prototype.start = function() {
  if (this.framesPerSecond === 0) {
    return;
  }
  var milliseconds = 1000 / this.framesPerSecond;
  var self = this;
  this.drawInterval = setInterval(function() {self.drawLoop()}, milliseconds);
};

Display.prototype.stop = function() {
  if (this.framesPerSecond === 0) {
    return;
  }
  clearInterval(this.drawInterval);
};

Display.prototype.clear = function() {
  this.objects = [];
  this.addObject(this.backgroundObject);
  this.drawLoop();
};

Display.prototype.addObject = function(object) {
  this.objects.push(object);
  this.backgroundOnly = false;
};

Display.prototype.getLength = function() {
  return this.canvas.width;
};
