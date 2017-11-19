require('../config.js');
var simple = require('simple-mock')
var assert = require('assert');

describe('Entity', function() {
  var context, canvas;

  before(function() {
  });

  describe('#getDisplayObjects', function() {
    it('should return one displayObject', function() {
      var game = {};
      var displayObjects = new Entity(10, 10, game, "red").getDisplayObjects();
      assert.equal(1, displayObjects.length);
      assert.equal(DrawableSquare, displayObjects[0].constructor);
    });
  });
});
