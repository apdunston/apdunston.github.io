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
    this.limit = 99;
    this.player = new MazeGame.Player(this.limit+1, 10, game);
  });

  describe('#up()', function() {
    it('should move up', function() {
      this.player.setPosition(10, 10);
      this.player.up();
      assert(9 == this.player.getY());
    });

    it('should wrap', function() {
      this.player.setPosition(10, 0);
      this.player.up();
      assert(this.limit == this.player.getY());
    });
  });

  describe('#down()', function() {
    it('should move down', function() {
      this.player.setPosition(10, 10);
      this.player.down();
      assert(11 == this.player.getY());
    });

    it('should wrap', function() {
      this.player.setPosition(10, this.limit);
      this.player.down();
      assert(0 == this.player.getY());
    });
  });

  describe('#left()', function() {
    it('should move left', function() {
      this.player.setPosition(10, 10);
      this.player.left();
      assert(9 == this.player.getX());
    });

    it('should wrap', function() {
      this.player.setPosition(0, 10);
      this.player.left();
      assert(this.limit == this.player.getX());
    });
  });

  describe('#right()', function() {
    it('should move right', function() {
      this.player.setPosition(10, 10);
      this.player.right();
      assert(11 == this.player.getX());
    });

    it('should wrap', function() {
      this.player.setPosition(this.limit, 10);
      this.player.right();
      assert(0 == this.player.getX());
    });
  });
});