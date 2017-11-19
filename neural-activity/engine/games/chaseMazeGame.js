/**
 * Interface Game
 * Interface KeyPushListener
 */
MazeGame.ChaseMazeGame = function() {
  ChaseMazeGame = function(keyboardDriver, mazeDisplay, neuralDisplay, gridLength, squareLength) {
    var self = this;
    Game.call(self);
    this.displays = [mazeDisplay, neuralDisplay];
    this.keyboardDriver = keyboardDriver;
    this.npcCount = 2;
    TimedMazeGame.call(this, keyboardDriver, mazeDisplay, neuralDisplay, gridLength, squareLength);
  };

  // Explicit Inheritance
  ChaseMazeGame.prototype = Object.create(TimedMazeGame.prototype);

  ChaseMazeGame.prototype.constructor = ChaseMazeGame;

  ChaseMazeGame.prototype.start = function() {
    var self = this;
    Game.prototype.start.call(self);
    this.reset();
    this.mazeDisplay.start();    
    this.startGameLoop();

    text = new DrawableText(10, 30, "WARNING: Bad thoughts approaching.", "white");
    this.neuralDisplay.addObject(text);
  }

  ChaseMazeGame.prototype.stop = function() {
    var self = this;
    Game.prototype.stop.call(self);
    this.stopGameLoop();
  }

  ChaseMazeGame.prototype.end = function() {
    var self = this;
    this.mazeDisplay.flash("red", 500, function() { self.reset(); });
  }

  ChaseMazeGame.prototype.keyDown = function(evt) {
    MazeGame.prototype.keyDown.call(this, evt);
    this.collisionCheck();
  }

  ChaseMazeGame.prototype.reset = function() {
    console.log("ChaseMazeGame.reset");
    console.trace();
    this.won && (this.npcCount += 2);
    TimedMazeGame.prototype.reset.call(this);
    positions = [[5, 5], [5, 15], [15, 5], [15, 15], [10, 10], [5, 10], [10, 5], [10, 15], [15, 10]];
    
    if (this.npcCount >= positions.length) {
      this.gameEnd({won: true});
    }

    for (var i = 0; i < this.npcCount; i++) {
      npc = new MazeGame.NonPlayerCharacter(this.gridLength, this.squareLength, this);
      npc.setPosition(positions[i][0], positions[i][1]);
      this.addObject(npc);
      this.mazeDisplay.addObject(npc);    
    }
  }

  ChaseMazeGame.prototype.collisionCheck = function() {
    for (var i = 0; i < this.objects.length; i++) {
      this.player.collidesWith(this.objects[i]) && this.end();
    }
  };

  ChaseMazeGame.prototype.win = function() {
    var self = this;
    this.won = true;
    this.mazeDisplay.flash("blue", 500, function() { self.reset(); });
  }

  return ChaseMazeGame;
}();