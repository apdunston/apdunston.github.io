MazeGame = function(display1, display2, map) {
  this.gridLength = 20;
  this.squareLength = 20;
  this.maze = new MazeGame.Maze(map);
  this.player = new MazeGame.Player(this.gridLength, this.squareLength, this);
  this.display1 = display1;
  this.display2 = display2;
  display1.addObject(this.maze);
  display1.addObject(this.player);  
  display1.start();
  display2.start();
}

MazeGame.prototype.stop = function() {
  this.display1.stop();
  this.display2.stop();
}

MazeGame.prototype.wallOccupies = function(x, y) { return this.maze.wallOccupies(x, y); };

MazeGame.prototype.getPlayer = function() { return this.player; };

MazeGame.prototype.keyPush = function(evt) {
  switch(evt.keyCode) {
    case 37:
      this.player.left();
      break;
    case 38:
      this.player.up();
      break;
    case 39:
      this.player.right();
      break;
    case 40:
      this.player.down();
      break;
  }
};

MazeGame.prototype.drawLoop = function() {
  drawBackground(ctx, canv);
  drawBackground(ctx2, canv2);
  drawMaze(ctx, maze);
  drawXYColorObject(ctx, this.player);
  drawApple(ctx2);
  firework.draw(ctx2);
};

MazeGame.prototype.firework = function() {
  display2.addObject(new Gamespace.Firework(display2.getLength()));
};