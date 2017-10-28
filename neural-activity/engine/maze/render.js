MazeGame.Render = function() { return {}; }();

MazeGame.Render.drawLine = function(canvas, x, y, xAddend, yAddend, squareLength) {
  var context=canvas.getContext("2d");
  context.strokeStyle = "blue";
  context.lineWidth = 2;
  context.beginPath();
  x = x * squareLength;
  y = y * squareLength;
  context.moveTo(x, y);
  context.lineTo(x + xAddend, y + yAddend);
  context.stroke();
  return context;
}

MazeGame.Render.drawHorizontalLine = function(x, y, canvas, squareLength) {
  MazeGame.Render.drawLine(canvas, x, y, squareLength, 0, squareLength);
}

MazeGame.Render.drawVerticalLine = function(x, y, canvas, squareLength) {
  MazeGame.Render.drawLine(canvas, x, y, 0, squareLength, squareLength);
}

MazeGame.Render.drawHorizontalRow = function(y, row, canvas, squareLength) {
  for (var x = 0; x < row.length; x += 1) {
    if (!row[x]) {
      MazeGame.Render.drawHorizontalLine(x, y, canvas, squareLength);
    }
  }
}

MazeGame.Render.drawVerticalRow = function(y, row, canvas, squareLength) {
  for (var x = 0; x < row.length; x += 1) {
    if (!row[x]) {
      MazeGame.Render.drawVerticalLine(x, y, canvas, squareLength);
    }
  }
}
