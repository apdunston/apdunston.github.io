"use strict";

var OffsetRenderer = function () {

  var OffsetRenderer = function OffsetRenderer(renderer, xOffset, yOffset) {
    this.renderer = renderer;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
  };

  OffsetRenderer.prototype.constructor = OffsetRenderer;

  OffsetRenderer.prototype.getWidth = function () {
    return this.renderer.getWidth();
  };

  OffsetRenderer.prototype.drawRectangle = function (x, y, xLength, yWidth, color, alpha) {
    this.renderer.drawRectangle(x + xOffset, y + yOffset, xLength, yWidth, color, alpha);
  };

  OffsetRenderer.prototype.drawSquare = function (x, y, length, color, alpha) {
    this.drawRectangle(x, y, length, length, color, alpha);
  };

  OffsetRenderer.prototype.drawCircle = function (x, y, radius, color, alpha) {
    this.renderer.drawCircle(x + xOffset, y + yOffset, radius, color, alpha);
  };

  OffsetRenderer.prototype.drawText = function (x, y, text, color, size, font, alpha) {
    this.renderer.drawText(x + xOffset, y + yOffset, text, color, size, font, alpha);
  };

  OffsetRenderer.prototype.drawLine = function (x1, y1, x2, y2, color, width, alpha) {
    this.renderer.drawLine(x1 + xOffset, y1 + yOffset, x2 + xOffset, y2 + yOffset, color, width, alpha);
  };

  return OffsetRenderer;
}();