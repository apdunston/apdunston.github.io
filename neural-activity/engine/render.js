/**
 * Interface Renderer
 */
MazeGame.Render = function() { return {}; }();

MazeGame.Render.drawLine = function(renderer, x, y, xAddend, yAddend, squareLength) {
  x = x * squareLength;
  y = y * squareLength;
  renderer.drawLine(x, y, x + xAddend, y + yAddend, "blue", 2);
}

MazeGame.Render.drawHorizontalLine = function(x, y, renderer, squareLength) {
  MazeGame.Render.drawLine(renderer, x, y, squareLength, 0, squareLength);
}

MazeGame.Render.drawVerticalLine = function(x, y, renderer, squareLength) {
  MazeGame.Render.drawLine(renderer, x, y, 0, squareLength, squareLength);
}

MazeGame.Render.drawHorizontalRow = function(y, row, renderer, squareLength) {
  for (var x = 0; x < row.length; x += 1) {
    if (!row[x]) {
      MazeGame.Render.drawHorizontalLine(x, y, renderer, squareLength);
    }
  }
}

MazeGame.Render.drawVerticalRow = function(y, row, renderer, squareLength) {
  for (var x = 0; x < row.length; x += 1) {
    if (!row[x]) {
      MazeGame.Render.drawVerticalLine(x, y, renderer, squareLength);
    }
  }
}
