/**
 * Interface GameObject
 * Interface DisplayObject
 */
Maze = function(drawMap, squareLength) {
  this.drawMap = drawMap;
  this.squareLength = squareLength;
  this.gridLength = this.drawMap.horizontalSpaces.length - 1;
}

Maze.prototype.constructor = Maze;

Maze.prototype.isDone = function() { return false; };

Maze.prototype.getDisplayObjects = function() {
  return [this];
}

Maze.prototype.draw = function(canvas, context) {
  for (var i = 0; i < this.drawMap.horizontalSpaces.length; i += 1) {
    MazeGame.Render.drawHorizontalRow(i, this.drawMap.horizontalSpaces[i], canvas, this.squareLength);
  }

  for (var i = 0; i < this.drawMap.verticalSpaces.length; i += 1) {
    MazeGame.Render.drawVerticalRow(i, this.drawMap.verticalSpaces[i], canvas, this.squareLength);
  }
}

/**
 * Note that we're converting drawMap player location to drawMap spaces. This reverses x and y.
 */
Maze.prototype.validMove = function(x, y, direction) {
  switch(direction) {
    case Gamespace.UP:
      return this.drawMap.horizontalSpaces[y][x];
    case Gamespace.DOWN:
      return this.drawMap.horizontalSpaces[y+1][x];
    case Gamespace.LEFT:
      return this.drawMap.verticalSpaces[y][x];
    case Gamespace.RIGHT:
      return this.drawMap.verticalSpaces[y][x+1];
  }
  return false;
}