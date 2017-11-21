HallGame = function(keyboardDriver, display, gridLength, hallLength, squareLength) {
    var self = this;
    Game.call(self);
    this.gridLength = gridLength;
    this.hallLength = hallLength;
    this.squareLength = squareLength;
    this.display = display;
    this.gameLoopsPerSecond = 8;
    this.displays = [display];
    this.keyboardDriver = keyboardDriver;
  }

HallGame.prototype = Object.create(Game.prototype);
HallGame.prototype.constructor = HallGame;

HallGame.prototype.reset = function() {
  this.player = new MazeGame.Player(this.hallLength, this.squareLength, this);
  var x = this.gridLength / 2 - this.hallLength / 2;
  var y = this.gridLength / 2;
  this.player.setPosition(x, y);
  this.display.clear();
  this.display.addObject(this.player);
  this.display.render();
}

HallGame.prototype.keyDown = function(evt) {
  switch(evt.keyCode) {
    case Gamespace.LEFT_CODE:
      this.player.left();
      break;
    case Gamespace.UP_CODE:
      this.player.up();
      break;
    case Gamespace.RIGHT_CODE:
      this.player.right();
      break;
    case Gamespace.DOWN_CODE:
      this.player.down();
      break;
  }

  this.display.render();
};


