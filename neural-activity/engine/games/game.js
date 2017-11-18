/**
 * Interface Game
 * Interface KeyDownListener
 */
Game = function() {
  var self = this;
  this.displays = [];
  this.keyboardDriver = null;
  this.gameEndListeners = [];
};

Game.prototype.start = function() {
  for (var i = 0; i < this.displays.length; i++) {
    this.displays[i].start();
  }

  this.keyboardDriver.addKeyDownListener(this);
};

Game.prototype.stop = function() {
  for (var i = 0; i < this.displays.length; i++) {
    this.displays[i].clear();
    this.displays[i].stop();
  }

  this.keyboardDriver.removeKeyDownListener(this);
};

Game.prototype.gameLoop = function() {
  // method stuff
};

Game.prototype.keyDown = function() {
  // method stuff
};

Game.prototype.addGameEndListener = function(gameEndListener) {
  this.gameEndListeners.push(gameEndListener);
}

Game.prototype.gameEnd = function(data) {
  for (var i = 0; i < this.gameEndListeners.length; i++) {
    this.gameEndListeners[i].gameEnd(data);
  }
}

