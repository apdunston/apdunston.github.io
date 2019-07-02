"use strict";

var BlinkingCursor = function BlinkingCursor(x, y, color, blinkFrame) {
  DrawableSquare.call(this, x, y, DisplayConstants.TEXT_SIZE, color);
  this.frame = 0;
  this.blinkFrame = blinkFrame || 50;
  this.alpha = Alpha.INVISIBLE;
};

BlinkingCursor.prototype = Object.create(DrawableSquare.prototype);
BlinkingCursor.prototype.constructor = BlinkingCursor;

BlinkingCursor.prototype.draw = function (renderer) {
  this.frame += 1;
  if (this.frame >= this.blinkFrame) {
    this.frame = 0;
    this.alpha = this.alpha == Alpha.OPAQUE ? Alpha.INVISIBLE : Alpha.OPAQUE;
  }

  DrawableSquare.prototype.draw.call(this, renderer);
};