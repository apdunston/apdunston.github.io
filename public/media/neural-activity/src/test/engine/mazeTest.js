'use strict';

require('../config.js');
var simple = require('simple-mock');
var assert = require('assert');

describe('Maze', function () {
  var context, canvas;

  before(function () {});

  describe('#getDisplayObjects', function () {
    it('should return one displayObject', function () {
      var game = {};
      var drawMap = { horizontalSpaces: [] };
      var displayObjects = new Maze(drawMap, 20).getDisplayObjects();
      assert.equal(1, displayObjects.length);
      assert.equal(Maze, displayObjects[0].constructor);
    });
  });
});