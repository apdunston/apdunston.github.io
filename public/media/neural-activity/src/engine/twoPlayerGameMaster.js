var GameMaster = require("gameMaster.js");

var TwoPlayerGameMaster = function TwoPlayerGameMaster(canvas1, canvas2, keyboardDriver, soundDriver) {
  GameMaster.call(this); // super()
  var gridLength = 10;
  var squareLength = 20;
  var hallLength = 6;

  displaySpeed = 100;
  display1 = new Display(new DisplayDriver(canvas1), displaySpeed);
  display1.setColor("black");
  display2 = new Display(new DisplayDriver(canvas2), displaySpeed);
  display2.setColor("black");
  this.addGame(new TwoPlayerMazeGame(keyboardDriver, display1, display2, gridLength, squareLength));
  this.start();
}; /**
    * Interface GameMaster
    */

TwoPlayerGameMaster.prototype = Object.create(_gameMaster.GameMaster.prototype);
TwoPlayerGameMaster.prototype.constructor = TwoPlayerGameMaster;

TwoPlayerGameMaster.prototype.next = function () {
  this.stopCurrentGame();
  this.startCurrentGame();
};