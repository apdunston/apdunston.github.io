"use strict";

/**
 * Interface GameObject
 * Interface DisplayObject
 */

var Hall = function Hall(squareLength, hallLength, gridTranslator) {
  this.hallLength = hallLength;
  Maze.call(this, this.makeDrawMap(), squareLength, gridTranslator); // super()
};

Hall.prototype = Object.create(Maze.prototype);
Hall.prototype.constructor = Hall;

Hall.prototype.makeDrawMap = function () {
  horizontalSpaces = [];
  verticalSpaces = [[], []];

  for (var i = 0; i < this.hallLength; i++) {
    horizontalSpaces.push(false);
    verticalSpaces[0].push(true);
    verticalSpaces[1].push(true);
  }

  horizontalSpaces = [horizontalSpaces, horizontalSpaces];
  verticalSpaces[0].push(false);
  verticalSpaces[0][0] = false;

  return {
    horizontalSpaces: horizontalSpaces,
    verticalSpaces: verticalSpaces
  };
};