Gamespace.DrawableObject = function() {
  this.id = Gamespace.generateId();
};
Gamespace.DrawableObject.prototype.getId = function() {
  return this.id;
};

// Constructor calls super
Gamespace.DrawableSquare = function(x, y, length, color) {
  Gamespace.DrawableObject.call(this);
  this.x = x;
  this.y = y;
  this.length = length;
  this.color = color;
};

// Explicit Inheritance
Gamespace.DrawableSquare.prototype = Object.create(Gamespace.DrawableObject.prototype);

Gamespace.DrawableSquare.prototype.constructor = Gamespace.DrawableSquare;
// Explicit Inheritance
Gamespace.DrawableSquare.prototype.getId = function() {
  console.log('This is a super method on sub.');
};
// Instance Method
Gamespace.DrawableSquare.prototype.draw = function(canvas, context) {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.length, this.length);
};

Gamespace.DrawableSquare.prototype.isDone = function() {
  return false;
};

Gamespace.DrawableSquare.prototype.addX = function(value) {
  this.x += value;
};

Gamespace.DrawableSquare.prototype.addY = function(value) {
  this.y += value;
};

Gamespace.DrawableSquare.prototype.setX = function(value) {
  this.x = value;
};

Gamespace.DrawableSquare.prototype.setY = function(value) {
  this.y = value;
};

Gamespace.DrawableSquare.prototype.setColor = function(value) {
  this.color = value;
};

// Constructor calls super
Gamespace.DrawableCircle = function(x, y, radius, color) {
  Gamespace.DrawableObject.call(this);
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.color = color;
};


// Explicit Inheritance
Gamespace.DrawableCircle.prototype = Object.create(Gamespace.DrawableObject.prototype);

Gamespace.DrawableCircle.prototype.constructor = Gamespace.DrawableCircle;
// Explicit Inheritance
Gamespace.DrawableCircle.prototype.getId = function() {
  console.log('This is a super method on sub.');
};
// Instance Method
Gamespace.DrawableCircle.prototype.draw = function(canvas, context) {
    context.fillStyle = this.color;
    context.beginPath();
    context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    context.fill();
};

Gamespace.DrawableCircle.prototype.isDone = function() {
  return false;
};

Gamespace.DrawableCircle.prototype.addX = function(value) {
  this.x += value;
};

Gamespace.DrawableCircle.prototype.addY = function(value) {
  this.y += value;
};

Gamespace.DrawableCircle.prototype.setX = function(value) {
  this.x = value;
};

Gamespace.DrawableCircle.prototype.setY = function(value) {
  this.y = value;
};

Gamespace.DrawableCircle.prototype.setColor = function(value) {
  this.color = value;
};

