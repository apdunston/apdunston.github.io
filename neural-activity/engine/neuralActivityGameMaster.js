/**
 * Interface GameMaster
 */
NeuralActivityGameMaster = function(canvas1, canvas2, canvas3, canvas4, keyboardDriver, soundDriver) {
  GameMaster.call(this); // super()
  // var gridLength = 3;
  var gridLength = 20;
  var squareLength = 20;

  displaySpeed = 100;
  display1 = new Display(canvas1, displaySpeed);
  display1.setColor("black");
  display2 = new Display(canvas2, displaySpeed);
  display2.setColor("black");
  display3 = new Display(canvas3, displaySpeed);
  display3.setColor("black");
  display4 = new Display(canvas4, displaySpeed);
  display4.setColor("black");
  lightningDisplay = new LightningDisplay(canvas1, displaySpeed);

  this.addGame(new MazeGame(keyboardDriver, display1, display3, gridLength, squareLength));  
  this.addGame(new MazeGame.SplitMazeGame(keyboardDriver, display1, display2, display3, gridLength, squareLength));
  this.addGame(new MazeGame.LightningMazeGame(keyboardDriver, lightningDisplay, display3, gridLength, squareLength));
  // gridLength = 16;
  this.addGame(new ChaseMazeGame(keyboardDriver, display1, display3, gridLength, squareLength));  
  this.start();
}

NeuralActivityGameMaster.prototype = Object.create(GameMaster.prototype);
NeuralActivityGameMaster.prototype.constructor = NeuralActivityGameMaster;

