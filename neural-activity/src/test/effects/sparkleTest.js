require('../config.js');
var simple = require('simple-mock')
var assert = require('assert');

describe('Sparkle', function() {
  var context, canvas;

  before(function() {
    context = {};
    canvas = {};
    simple.mock(context, 'fillRect');
    renderer = {};
    simple.mock(renderer, 'drawSquare');
  });

  describe('#isHalfDone()', function() {

    it('should return false when it\'s not', function() {
      var frames = 15;
      var sparkle = new Sparkle(0, 0, 5, frames, 0);
      sparkle.draw(renderer);
      sparkle.draw(renderer);
      assert(!sparkle.isHalfDone());
    });

    it('should return true when it is', function() {
      var frames = 4;
      var sparkle = new Sparkle(0, 0, 5, frames, 0);
      sparkle.draw(renderer);
      sparkle.draw(renderer);
      assert(!sparkle.isHalfDone());
    });
  });

  describe('#isDone()', function() {
    it('should return false when it\'s not', function() {
      var frames = 5;
      var sparkle = new Sparkle(0, 0, 5, frames, 0);
      sparkle.draw(renderer);
      assert(!sparkle.isDone());
      sparkle.draw(renderer);
      assert(!sparkle.isDone());
      sparkle.draw(renderer);
      assert(!sparkle.isDone());
      sparkle.draw(renderer);
      assert(!sparkle.isDone());
    });

    it('should return true when it is', function() {
      var frames = 4;
      var sparkle = new Sparkle(0, 0, 5, frames, 0);
      sparkle.draw(renderer);
      sparkle.draw(renderer);
      sparkle.draw(renderer);
      sparkle.draw(renderer);
      assert(!sparkle.isDone());
    });
  });

  describe('#draw()', function() {
    it('should not exceed max frame count');
    it('should move y+ when not half done and y- when half done');
    it('should set appropriate color');
  });
});