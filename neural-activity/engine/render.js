/**
 * Interface Renderer
 */
MazeGame.Render = function() { return {}; }();

MazeGame.Render.drawLine = function(renderer, x, y, xAddend, yAddend, squareLength, alpha) {
  x = x * squareLength;
  y = y * squareLength;
  renderer.drawLine(x, y, x + xAddend, y + yAddend, "blue", 2, alpha);
}

MazeGame.Render.drawHorizontalLine = function(x, y, renderer, squareLength, alpha) {
  MazeGame.Render.drawLine(renderer, x, y, squareLength, 0, squareLength, alpha);
}

MazeGame.Render.drawVerticalLine = function(x, y, renderer, squareLength, alpha) {
  MazeGame.Render.drawLine(renderer, x, y, 0, squareLength, squareLength, alpha);
}

MazeGame.Render.drawHorizontalRow = function(y, row, renderer, squareLength, alpha) {
  for (var x = 0; x < row.length; x += 1) {
    if (!row[x]) {
      MazeGame.Render.drawHorizontalLine(x, y, renderer, squareLength, alpha);
    }
  }
}

MazeGame.Render.drawVerticalRow = function(y, row, renderer, squareLength, alpha) {
  for (var x = 0; x < row.length; x += 1) {
    if (!row[x]) {
      MazeGame.Render.drawVerticalLine(x, y, renderer, squareLength, alpha);
    }
  }
}
