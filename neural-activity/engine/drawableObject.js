DrawableObject = function() {
  this.id = Gamespace.generateId();
};
DrawableObject.prototype.getId = function() {
  return this.id;
};
DrawableObject.prototype.isDone = function() {
  return false;
};

// Constructor calls super
DrawableSquare = function(x, y, length, color) {
  DrawableObject.call(this);
  this.x = x;
  this.y = y;
  this.length = length;
  this.color = color;
};

// Explicit Inheritance
DrawableSquare.prototype = Object.create(DrawableObject.prototype);

DrawableSquare.prototype.constructor = DrawableSquare;
// Explicit Inheritance
DrawableSquare.prototype.getId = function() {
  console.log('This is a super method on sub.');
};
// Instance Method
DrawableSquare.prototype.draw = function(canvas, context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.length, this.length);
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
DrawableCircle = function(x, y, radius, color) {
  DrawableObject.call(this);
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
};


// Explicit Inheritance
DrawableCircle.prototype = Object.create(DrawableObject.prototype);

DrawableCircle.prototype.constructor = DrawableCircle;
// Explicit Inheritance
DrawableCircle.prototype.getId = function() {
  console.log('This is a super method on sub.');
};
// Instance Method
DrawableCircle.prototype.draw = function(canvas, context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
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
DrawableText = function(x, y, text, color) {
  DrawableObject.call(this);
  this.x = x;
  this.y = y;
  this.text = text;
  this.color = color;
};

// Explicit Inheritance
DrawableText.prototype = Object.create(DrawableObject.prototype);
DrawableText.prototype.constructor = DrawableText;

// Instance Method
DrawableText.prototype.draw = function(canvas, context) {
  context.font = "12px Courier New";
  context.fillStyle = this.color;
  context.fillText(this.text, this.x, this.y);
};