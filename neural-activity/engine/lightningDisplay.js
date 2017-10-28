/**
 * The first object added (not the background) is only drawn as lightning flashes.
 */
Gamespace.LightningDisplay = function(canvas, framesPerSecond) {
  "use strict";
  this.flashProgressions = [
    [190],
    [110, 160, 175],
    [50, 75, 160, 210, 260],
    [100, 150, 165, 215, 225]
  ];
  this.stopFrame = 300;
  this.color = "black";
  this.context = canvas.getContext("2d");
  this.canvas = canvas;
  this.framesPerSecond = framesPerSecond;
  this.objects = [];
  this.lightningObjects = [];
  this.currentAlpha = 1.0;
  this.backgroundObject = new Gamespace.DrawableSquare(0, 0, canvas.width, this.color);
  this.addObject(this.backgroundObject);
  this.resetLightning();
};

// Explicit Inheritance
Gamespace.LightningDisplay.prototype = Object.create(Gamespace.Display.prototype);
Gamespace.LightningDisplay.prototype.constructor = Gamespace.Display;

Gamespace.Display.prototype.clear = function() {
  this.lightningObjects = [];
  this.objects = [];
  this.addObject(this.backgroundObject);
};


Gamespace.LightningDisplay.prototype.drawLoop = function() {
  var x;
  this.objects[0].draw(this.canvas, this.context);

  if (this.lightningObjects.length > 0 && this.flashing && !this.won) {
    this.advanceLightning();
  } else {
    if (Math.floor(Math.random() * 200) === 1) {
      this.goLightning();
    }
  }

  for (x = 1; x < this.objects.length; x+=1) {
    this.objects[x].draw(this.canvas, this.context);
    if (this.objects[x].isDone()) {
      this.objects.splice(x, 1);
    }
  }
};

Gamespace.LightningDisplay.prototype.advanceLightning = function() {
    this.currentFlashFrame += 1;
    this.drawLightning();

    if (this.flashFrames.includes(this.currentFlashFrame)) {
      this.currentAlpha = 0.4;
    }

    if (this.currentFlashFrame >= this.stopFrame) {
      this.resetLightning();
    }
}

Gamespace.LightningDisplay.prototype.grabFlashFrames = function() {
  var index = Math.floor(Math.random() * this.flashProgressions.length);
  this.flashFrames = this.flashProgressions[index];
}

Gamespace.LightningDisplay.prototype.drawLightning = function() {
  if (this.currentAlpha >= 1.0) {
    return;
  }

  for (x = 0; x < this.lightningObjects.length; x+=1) {
    this.lightningObjects[x].draw(this.canvas, this.context);
    if (this.lightningObjects[x].isDone()) {
      this.lightningObjects.splice(x, 1);
    }
  }

  // Draw translucent background
  this.context.globalAlpha = this.currentAlpha;
  this.objects[0].draw(this.canvas, this.context);
  this.context.globalAlpha = 1.0;
  this.currentAlpha += 0.01;
}

Gamespace.LightningDisplay.prototype.resetLightning = function() {
      this.flashing = false;
      this.currentFlashFrame = 0;
}

Gamespace.LightningDisplay.prototype.goLightning = function() {
  var self = this;
  this.grabFlashFrames();
  this.currentAlpha = 0.0;
  this.flashing = true;
}

Gamespace.LightningDisplay.prototype.addFlashObject = function(object) {
  this.lightningObjects.push(object);
}