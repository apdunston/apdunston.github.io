MazeGame.SubDisplay = function(drawMap, squareLength) {
  this.drawMap = drawMap;
  this.squareLength = squareLength;
  this.gridTranslator = new GridTranslator(0, 0, squareLength);
}

MazeGame.SubDisplay.prototype.constructor = MazeGame.SubDisplay;

MazeGame.SubDisplay.prototype.draw = function(renderer) {
  for (var i = 0; i < this.spacesArray.length; i += 1) {
    this.displayFunction(i, this.spacesArray[i], renderer, this.squareLength);
  }
}

MazeGame.SubDisplay.prototype.isDone = function() { return false; }


MazeGame.HorizontalDisplay = function(drawMap, squareLength) {
  var self = this;
  MazeGame.SubDisplay.call(this, drawMap, squareLength);
  this.displayFunction = function(one, two, three) {self.gridTranslator.drawHorizontalRow(one, two, three)};
  this.spacesArray = this.drawMap.horizontalSpaces;
}
MazeGame.HorizontalDisplay.prototype = Object.create(MazeGame.SubDisplay.prototype);
MazeGame.HorizontalDisplay.prototype.constructor = MazeGame.SubDisplay;



MazeGame.VerticalDisplay = function(drawMap, squareLength) {
  var self = this;
  MazeGame.SubDisplay.call(this, drawMap, squareLength);
  this.displayFunction = function(one, two, three) {self.gridTranslator.drawVerticalRow(one, two, three)};
  this.spacesArray = this.drawMap.verticalSpaces;
}
MazeGame.VerticalDisplay.prototype = Object.create(MazeGame.SubDisplay.prototype);
MazeGame.VerticalDisplay.prototype.constructor = MazeGame.SubDisplay;


