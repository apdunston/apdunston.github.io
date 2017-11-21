/**
 * Interface DisplayObject
 */
DrawableObject = function() {
  this.alpha = 1.0;
};

DrawableObject.prototype.constructor = DrawableObject;

DrawableObject.prototype.isDone = function() {
  return false;
};

DrawableObject.prototype.setAlpha = function(value) {
  this.alpha = value;
}

// Constructor calls super
DrawableSquare = function(x, y, length, color, alpha) {
  DrawableObject.call(this);
  this.x = x;
  this.y = y;
  this.length = length;
  this.color = color;
  this.alpha = alpha;
};

// Explicit Inheritance
DrawableSquare.prototype = Object.create(DrawableObject.prototype);

DrawableSquare.prototype.constructor = DrawableSquare;

// Instance Method
DrawableSquare.prototype.draw = function(renderer) {
    renderer.drawSquare(this.x, this.y, this.length, this.color, this.alpha);
};

DrawableSquare.prototype.isDone = function() {
  return false;
};

DrawableSquare.prototype.addX = function(value) {
  this.x += value;
};

DrawableSquare.prototype.addY = function(value) {
  this.y += value;
};

DrawableSquare.prototype.setX = function(value) {
  this.x = value;
};

DrawableSquare.prototype.setY = function(value) {
  this.y = value;
};

DrawableSquare.prototype.setColor = function(value) {
  this.color = value;
};

// Constructor calls super
DrawableCircle = function(x, y, radius, color, alpha) {
  DrawableObject.call(this);
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
  this.alpha = alpha;
};


// Explicit Inheritance
DrawableCircle.prototype = Object.create(DrawableObject.prototype);

DrawableCircle.prototype.constructor = DrawableCircle;
// Explicit Inheritance
// Instance Method
DrawableCircle.prototype.draw = function(renderer) {
  renderer.drawCircle(this.x, this.y, this.radius, this.color, this.alpha);
};

DrawableCircle.prototype.isDone = function() {
  return false;
};

DrawableCircle.prototype.addX = function(value) {
  this.x += value;
};

DrawableCircle.prototype.addY = function(value) {
  this.y += value;
};

DrawableCircle.prototype.setX = function(value) {
  this.x = value;
};

DrawableCircle.prototype.setY = function(value) {
  this.y = value;
};

DrawableCircle.prototype.setColor = function(value) {
  this.color = value;
};

// Constructor calls super
DrawableText = function(x, y, text, color, alpha) {
  DrawableObject.call(this);
  this.x = x;
  this.y = y;
  this.text = text;
  this.color = color;
  this.alpha = alpha;
};

// Explicit Inheritance
DrawableText.prototype = Object.create(DrawableObject.prototype);
DrawableText.prototype.constructor = DrawableText;

// Instance Method
DrawableText.prototype.draw = function(renderer) {
  renderer.drawText(this.x, this.y, this.text, this.color, 12, Font.COURIER_NEW, this.alpha);
};