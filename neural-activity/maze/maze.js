MazeGame.Maze = function(map) {
  this.map = map;
}

MazeGame.Maze.prototype.isDone = function() { return false; };
MazeGame.Maze.prototype.draw = function(canvas, context) {
  for (var y = 0; y < this.map.length; y += 1) {
    this.drawMazeLine(context, y, this.map[y]);
  }

}

MazeGame.Maze.prototype.drawMazeLine = function(context, y, mazeLine) {
  for (var x = 0; x < mazeLine.length; x += 1) {
    if (mazeLine[x] != " ") {
      context.fillStyle = "blue";
      context.fillRect(x * 20, y * 20, 18, 18);
    }
  }
};

MazeGame.Maze.prototype.wallOccupies = function(x, y) {
  return this.map[y][x] == " ";
};