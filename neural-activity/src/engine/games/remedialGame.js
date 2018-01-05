RemedialGameStates = {
  BEGINNING: 1,
  MIDDLE: 2,
  END: 3
}

RemedialGame = function(keyboardDriver, mazeDisplay, statusDisplay, gridLength, hallLength, squareLength) {
    var self = this;
    Game.call(self);
    this.statusDisplay = statusDisplay;
    this.gridLength = gridLength;
    this.hallLength = hallLength;
    this.squareLength = squareLength;
    this.mazeDisplay = mazeDisplay;
    this.gameLoopsPerSecond = 8;
    this.keyboardDriver = keyboardDriver;
    this.displays = [mazeDisplay, statusDisplay];
    xOffset = this.gridLength * this.squareLength / 2 - this.hallLength * this.squareLength / 2;
    yOffset = this.gridLength * this.squareLength / 2 - this.squareLength / 2;
    this.gridTranslator = new GridTranslator(xOffset, yOffset, squareLength);
    this.numberOfMessages = 0;
  }

RemedialGame.prototype = Object.create(Game.prototype);
RemedialGame.prototype.constructor = RemedialGame;

RemedialGame.prototype.start = function() {
  var self = this;
  console.log("remedialGameStart");
  Game.prototype.start.call(this);
  this.state = RemedialGameStates.BEGINNING;
  var margin = DisplayConstants.TEXT_MARGIN;
  var textSize = DisplayConstants.TEXT_SIZE;
  this.blinkingCursor = new BlinkingCursor(margin * 2 + 12 * textSize, margin * 1.3, "white");
  this.typeMessage("*** CONNECTION ESTABLISHED ***", function() {setTimeout(function() {self.typeMessage("> Move white square to green circle")}, 500);});  
  console.log("stuff added");
}

RemedialGame.prototype.typeMessage = function(text, fn) {
  yPosition = (2 + this.numberOfMessages) * DisplayConstants.TEXT_MARGIN;
  drawableText = new DrawableTypedText(DisplayConstants.TEXT_MARGIN, yPosition, text, "white");  
  this.statusDisplay.addObject(drawableText);
  drawableText.type(fn);
  this.numberOfMessages += 1;
}

RemedialGame.prototype.proceedToMiddle = function() {
  var self = this;
  this.state = RemedialGameStates.MIDDLE;
  this.blinkingCursor.setIsDone(true);
  this.player = new MazeGame.Player(this.hallLength, this.squareLength, this, this.gridTranslator);
  this.player.setPosition(0, 0);
  this.mazeDisplay.clear();
  this.mazeDisplay.addObject(this.player);
  setTimeout(function() { self.proceedToEnd() }, 500);
}

RemedialGame.prototype.proceedToEnd = function() {
  var self = this;
  var margin = DisplayConstants.TEXT_MARGIN;
  var textSize = DisplayConstants.TEXT_SIZE;
  text = new DrawableTypedText(margin, 3 * margin, "> Move white square to green circle", "white");
  text.type();
  this.statusDisplay.addObject(text);
  this.state = RemedialGameStates.END;
  this.maze = new Hall(this.squareLength, this.hallLength, this.gridTranslator);
  this.maze.setAlpha(Alpha.INVISIBLE);
  this.mazeDisplay.addObject(this.maze);
  this.maze.fadeIn();

  this.placeGoalObject();
  setTimeout(function() { self.goalObject.fadeIn() }, 500);
}

RemedialGame.prototype.placeGoalObject = function() {
  var x = this.gridTranslator.xInPixels(this.hallLength) - this.squareLength / 2;
  var y = this.gridTranslator.yInPixels(1) - this.squareLength / 2;
  this.goalObject = new DrawableCircle(x, y, this.squareLength / 4, "green");
  this.goalObject.setAlpha(Alpha.INVISIBLE);
  this.mazeDisplay.addObject(this.goalObject);  
}

RemedialGame.prototype.keyDown = function(evt) {
  if (this.state === RemedialGameStates.END) {
    return this.keyDownEndState(evt);
  }

  switch(evt.keyCode) {
    case Gamespace.LEFT_CODE:
    case Gamespace.UP_CODE:
    case Gamespace.RIGHT_CODE:
    case Gamespace.DOWN_CODE:
      this.advanceState();
  }
};

RemedialGame.prototype.advanceState = function() {
  if (this.state === RemedialGameStates.BEGINNING) {
    this.proceedToMiddle();
    return;
  }

  if (this.state === RemedialGameStates.MIDDLE) {
    this.proceedToEnd();
  }  
}

RemedialGame.prototype.keyDownEndState = function(evt) {
  switch(evt.keyCode) {
    case Gamespace.LEFT_CODE:
      if (this.player.getX() !== 0) { this.player.left(); }
      break;
    case Gamespace.UP_CODE:
      // this.player.up();
      break;
    case Gamespace.RIGHT_CODE:
      this.player.right();
      break;
    case Gamespace.DOWN_CODE:
      // this.player.down();
      break;
  }

  if(this.winCondition()) {
    this.win();
  }
}

RemedialGame.prototype.winCondition = function() {
  return this.player.getX() === this.hallLength - 1;
}

RemedialGame.prototype.win = function() {
  var self = this;
  this.won = true;
  this.mazeDisplay.flash("blue", 500, function() { self.gameEnd({won: true}); });
}
