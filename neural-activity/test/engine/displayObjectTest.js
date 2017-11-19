require('../config.js');
var simple = require('simple-mock')
var assert = require('assert');

describe('DisplayObjectTest', function() {
  var context, canvas;

  before(function() {
    var game = {};
    var drawMap = { horizontalSpaces: []};

    this.displayObjectClasses = [
      new DrawableSquare(1, 1, 1, "red"),
      new DrawableCircle(1, 1, 1, "red"),
      new DrawableText(1, 1, "haha", "red"),
      new Maze(drawMap, 20),
      new Entity(10, 10, game, "red"),
      new Firework(10),
      new NonPlayerCharacter(10, 10, {}),
      new Player(10, 10, {})
    ];
  });

  describe('#getDisplayObjects', function() {
    it('should return displayObjects', function() {
      for (var i = 0; i < this.displayObjectClasses.length; i++) {
        assert(this.displayObjectClasses[i].getDisplayObjects().length > 0);
      }
    });
  });
});
