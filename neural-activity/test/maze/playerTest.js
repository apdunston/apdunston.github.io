require('../config.js');
var simple = require('simple-mock')
var assert = require('assert');

describe('MazeGame.Player', function() {
  var context, canvas;

  before(function() {
    game = {};
    // canvas = {};
    simple.mock(game, 'validMove').returnWith(true);
    simple.mock(game, 'firework');
    limit = 99;
    player = new MazeGame.Player(limit+1, 10, game);
  });

  describe('#up()', function() {
    it('should move up', function() {
      player.setPosition(10, 10);
      player.up();
      assert(9 == player.getY());
    });

    it('should wrap', function() {
      player.setPosition(10, 0);
      player.up();
      assert(limit == player.getY());
    });
  });

  describe('#down()', function() {
    it('should move down', function() {
      player.setPosition(10, 10);
      player.down();
      assert(11 == player.getY());
    });

    it('should wrap', function() {
      player.setPosition(10, limit);
      player.down();
      assert(0 == player.getY());
    });
  });

  describe('#left()', function() {
    it('should move left', function() {
      player.setPosition(10, 10);
      player.left();
      assert(9 == player.getX());
    });

    it('should wrap', function() {
      player.setPosition(0, 10);
      player.left();
      assert(limit == player.getX());
    });
  });

  describe('#right()', function() {
    it('should move right', function() {
      player.setPosition(10, 10);
      player.right();
      assert(11 == player.getX());
    });

    it('should wrap', function() {
      player.setPosition(limit, 10);
      player.right();
      assert(0 == player.getX());
    });
  });
});