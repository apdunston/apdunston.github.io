MazeGame.ChaseMazeGame = function() {
  ChaseMazeGame = function(document, mazeDisplay, neuralDisplay, gridLength, squareLength) {
    this.npcCount = 2;
    TimedMazeGame.call(this, document, mazeDisplay, neuralDisplay, gridLength, squareLength);
    this.startGameLoop();

    text = new DrawableText(10, 30, "WARNING: Bad thoughts approaching.", "white");
    neuralDisplay.addObject(text);
  };

  // Explicit Inheritance
  ChaseMazeGame.prototype = Object.create(TimedMazeGame.prototype);

  ChaseMazeGame.prototype.constructor = ChaseMazeGame;

  ChaseMazeGame.prototype.end = function() {
    var self = this;
    this.mazeDisplay.flash("red", 500, function() { self.reset(); });
  }

  ChaseMazeGame.prototype.keyPush = function(evt) {
    MazeGame.prototype.keyPush.call(this, evt);
    this.collisionCheck();
  }

  ChaseMazeGame.prototype.reset = function() {
    this.won && (this.npcCount += 2);
    TimedMazeGame.prototype.reset.call(this);
    positions = [[5, 5], [5, 15], [15, 5], [15, 15], [10, 10], [5, 10], [10, 5], [10, 15], [15, 10]];
    this.npcCount >= positions.length && (this.npcCount -= 1);

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

  return ChaseMazeGame;
}();