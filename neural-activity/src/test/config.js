var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

var filesToLoad = [
  '../engine/enums/alpha.js',
  '../engine/enums/displayConstants.js',
  '../engine/gamespace.js',
  '../engine/gridTranslator.js',
  '../engine/font.js',
  '../engine/keyboardDriver.js',
  '../engine/gamespace.js',
  '../engine/display.js',
  '../engine/lightningDisplay.js',
  '../engine/drawableObject.js',
  '../effects/sparkle.js',
  '../effects/ring.js',
  '../effects/firework.js',
  '../engine/games/game.js',
  '../engine/games/mazeGame.js',
  '../engine/gameObjects/entity.js',
  '../engine/gameObjects/player.js',
  '../engine/gameObjects/maze.js',
  '../engine/generate.js',
  '../otherPeoplesCode/jquery-3.2.1.min.js',
  '../engine/subDisplay.js',
  '../engine/gameMaster.js',
  '../engine/games/splitMazeGame.js',
  '../engine/games/lightningMazeGame.js',
  '../engine/gameObjects/nonPlayerCharacter.js',
  '../engine/games/timedMazeGame.js',
  '../engine/games/chaseMazeGame.js',
  '../engine/neuralActivityGameMaster.js'];


requirejs(filesToLoad,
  function   (foo,   bar) {
      //foo and bar are loaded according to requirejs
      //config, but if not found, then node's require
      //is used to load the module.
});

