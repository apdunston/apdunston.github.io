var mazeGame;
import {Display} from "engine/display.js";

window.onload=function() {
  var canv = document.getElementById("canvas1");
  var display1 = new Display(canv, 0);
  display1.setColor("black");

  var displaySpeed = 100;
  canv=document.getElementById("canvas2");
  display2 = new Display(canv, displaySpeed);
  display2.setColor("black");

  var squareLength, gridLength;
  squareLength = gridLength = 20;
  mazeGame = new MazeGame(document, display1, display2, gridLength, squareLength);
}
