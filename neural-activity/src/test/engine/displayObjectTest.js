'use strict';

require('../config.js');
var simple = require('simple-mock');
var assert = require('assert');

describe('DisplayObjectTest', function () {
  var context, canvas;

  beforeEach(function () {
    var game = {};
    var drawMap = { horizontalSpaces: [], verticalSpaces: [] };

    displayDriver = {};
    simple.mock(displayDriver, 'drawRectangle');
    simple.mock(displayDriver, 'drawSquare');
    simple.mock(displayDriver, 'drawCircle');
    simple.mock(displayDriver, 'drawText');
    simple.mock(displayDriver, 'drawLine');

    displayObjectClasses = [new DrawableSquare(1, 1, 1, "red"), new DrawableCircle(1, 1, 1, "red"), new DrawableText(1, 1, "haha", "red"), new Maze(drawMap, 20), new Firework(10), new Ring(1, 1, 1, 1, 1), new Sparkle(1, 1, 1, 1, 1)];
  });

  describe('#draw', function () {
    it('should draw', function () {
      for (var i = 0; i < displayObjectClasses.length; i++) {
        displayObjectClasses[i].draw(displayDriver);
      }
    });
  });

  describe('#isDone', function () {
    it('shouldn\'t start out done', function () {
      for (var i = 0; i < displayObjectClasses.length; i++) {
        assert.equal(false, displayObjectClasses[i].isDone(), displayObjectClasses[i].constructor + " is done");
      }
    });
  });
});