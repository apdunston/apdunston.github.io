DrawableObjectState = {
  STATIC: 0,
  FADING_IN: 1,
  FADING_OUT: 2
}

/**
 * Interface DisplayObject
 */
DrawableObject = function() {
  this.alpha = Alpha.OPAQUE;
  this.isDoneValue = false;
  this.state = DrawableObjectState.STATIC;
  this.fadeDelta = 0.02;
};

DrawableObject.prototype.constructor = DrawableObject;

DrawableObject.prototype.isDone = function() {
  return this.isDoneValue;
};

DrawableObject.prototype.setAlpha = function(value) {
  this.alpha = value;
}

DrawableObject.prototype.setIsDone = function(value) {
  this.isDoneValue = value;
}

DrawableObject.prototype.fadeIn = function() {
  this.state = DrawableObjectState.FADING_IN;
}

DrawableObject.prototype.fadeOut = function() {
  this.state = DrawableObjectState.FADING_IN;
}

DrawableObject.prototype.draw = function() {
  if (this.state === DrawableObjectState.FADING_IN) {
    this.fadeInStep();
  }

  if (this.state === DrawableObjectState.FADING_OUT) {
    this.fadeOutStep();
  }
}

DrawableObject.prototype.fadeInStep = function() {
  if (this.alpha >= Alpha.OPAQUE) {
    this.state = DrawableObjectState.STATIC;
    this.alpha = Alpha.OPAQUE;
    return;
  }

  this.alpha += this.fadeDelta;
}

DrawableObject.prototype.fadeOutStep = function() {
  if (this.alpha <= Alpha.INVISIBLE) {
    this.state = DrawableObjectState.STATIC;
    this.alpha = Alpha.INVISIBLE;
    return;
  }

  this.alpha -= this.fadeDelta;
}

DrawableObject.prototype.setPosition = function(x, y) {
  this.x = x;
  this.y = y;
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
  DrawableObject.prototype.draw.call(this);
  renderer.drawSquare(this.x, this.y, this.length, this.color, this.alpha);
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
  DrawableObject.prototype.draw.call(this);
  renderer.drawCircle(this.x, this.y, this.radius, this.color, this.alpha);
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
  DrawableObject.prototype.draw.call(this);
  renderer.drawText(this.x, this.y, this.text, this.color, DisplayConstants.TEXT_SIZE, Font.COURIER_NEW, this.alpha);
};


DrawableTypedTextState = {
  INVISIBLE: 0,
  TYPING: 1,
  TYPED: 2
};

// Constructor calls super
DrawableTypedText = function(x, y, text, color) {
  DrawableObject.call(this);
  this.x = x;
  this.y = y;
  this.text = "";
  this.fullText = text;
  this.color = color;
  this.typingState = DrawableTypedTextState.INVISIBLE;
  this.typingFrame = 0;
  this.framesPerLetter = 5;
};

// Explicit Inheritance
DrawableTypedText.prototype = Object.create(DrawableObject.prototype);
DrawableTypedText.prototype.constructor = DrawableTypedText;

DrawableTypedText.prototype.type = function(fn) {
  this.typingState = DrawableTypedTextState.TYPING;
  this.fn = fn;
}

// Instance Method
DrawableTypedText.prototype.draw = function(renderer) {
  if (this.typingState === DrawableTypedTextState.INVISIBLE) {
    return;
  }

  if (this.typingState === DrawableTypedTextState.TYPING) {
    this.advanceTypingFrame();
  }

  if (this.text !== "") {
    DrawableObject.prototype.draw.call(this);
    renderer.drawText(this.x, this.y, this.text, this.color, DisplayConstants.TEXT_SIZE, Font.COURIER_NEW, this.alpha);
  }
};

DrawableTypedText.prototype.advanceTypingFrame = function() {
  if (this.typingFrame === this.framesPerLetter) {
    this.typingFrame = 0;
    this.addLetter();
    return;
  }

  this.typingFrame += 1;
}

DrawableTypedText.prototype.addLetter = function() {
  this.text += this.fullText.substr(this.text.length, 1);
  if (this.text.length === this.fullText.length) {
    this.typingState = DrawableTypedTextState.TYPED;
    this.fn && this.fn();
  }
}
