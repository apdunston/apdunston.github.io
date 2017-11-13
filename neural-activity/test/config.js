var requirejs = require('requirejs');

requirejs.config({
    //Pass the top-level main.js/index.js require
    //function to requirejs so that node modules
    //are loaded relative to the top-level JS file.
    nodeRequire: require
});

var filesToLoad = [
  '../engine/gamespace.js',
  '../engine/maze/mazeGame.js',
  '../engine/maze/entity.js',
  '../engine/maze/player.js',
  '../engine/drawableObject.js',
  '../effects/sparkle.js'];

requirejs(filesToLoad,
  function   (foo,   bar) {
      //foo and bar are loaded according to requirejs
      //config, but if not found, then node's require
      //is used to load the module.
});