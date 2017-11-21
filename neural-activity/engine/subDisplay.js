MazeGame.SubDisplay = function(drawMap, squareLength) {
  this.drawMap = drawMap;
  this.squareLength = squareLength;  
}

MazeGame.SubDisplay.prototype.constructor = MazeGame.SubDisplay;

MazeGame.SubDisplay.prototype.draw = function(renderer) {
  for (var i = 0; i < this.spacesArray.length; i += 1) {
    this.displayFunction(i, this.spacesArray[i], renderer, this.squareLength);
  }
}

MazeGame.SubDisplay.prototype.isDone = function() { return false; }


MazeGame.HorizontalDisplay = function(drawMap, squareLength) {
  MazeGame.SubDisplay.call(this, drawMap, squareLength);
  this.displayFunction = MazeGame.Render.drawHorizontalRow;
  this.spacesArray = this.drawMap.horizontalSpaces;
}
MazeGame.HorizontalDisplay.prototype = Object.create(MazeGame.SubDisplay.prototype);
MazeGame.HorizontalDisplay.prototype.constructor = MazeGame.SubDisplay;



MazeGame.VerticalDisplay = function(drawMap, squareLength) {
  MazeGame.SubDisplay.call(this, drawMap, squareLength);
  this.displayFunction = MazeGame.Render.drawVerticalRow;
  this.spacesArray = this.drawMap.verticalSpaces;
}
MazeGame.VerticalDisplay.prototype = Object.create(MazeGame.SubDisplay.prototype);
MazeGame.VerticalDisplay.prototype.constructor = MazeGame.SubDisplay;


