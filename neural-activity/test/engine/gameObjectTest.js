require('../config.js');
var simple = require('simple-mock')
var assert = require('assert');

describe('GameObjectTest', function() {
  var context, canvas;

  before(function() {
    var game = {};
    var drawMap = { horizontalSpaces: []};

    displayObjectClasses = [
      new Maze(drawMap, 20),
      new Entity(10, 10, game, "red"),
      new Firework(10),
      new NonPlayerCharacter(10, 10, {}),
      new Player(10, 10, {})
    ];
  });

  describe('#getDisplayObjects', function() {
    it('should return displayObjects', function() {
      for (var i = 0; i < displayObjectClasses.length; i++) {
        assert(displayObjectClasses[i].getDisplayObjects().length > 0);
      }
    });
  });
});
