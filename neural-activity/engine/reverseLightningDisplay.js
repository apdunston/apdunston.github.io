ReverseLightningDisplay = function(renderer, framesPerSecond) {
  LightningDisplay.call(this, renderer, framesPerSecond);
  this.startingAlpha = Alpha.INVISIBLE;
  this.endingAlpha = Alpha.FULLY_VISIBLE;
  this.currentAlpha = this.endingAlpha;
}

ReverseLightningDisplay.prototype = Object.create(LightningDisplay.prototype);
ReverseLightningDisplay.prototype.constructor = ReverseLightningDisplay;

ReverseLightningDisplay.prototype.applyDelta = function() {
  this.currentAlpha += this.delta;  
}

ReverseLightningDisplay.prototype.lightningDoneCondition = function() {
  this.currentAlpha >= this.endingAlpha;
}
