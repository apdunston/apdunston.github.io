require('../config.js');
var simple = require('simple-mock')
var assert = require('assert');

describe('Sparkle', function() {
  var context, canvas;

  before(function() {
    context = {};
    canvas = {};
    simple.mock(context, 'fillRect');
  });

  describe('#isHalfDone()', function() {

    it('should return false when it\'s not', function() {
      var frames = 15;
      var sparkle = new Sparkle(0, 0, 5, frames, 0);
      sparkle.draw(canvas, context);
      sparkle.draw(canvas, context);
      assert(!sparkle.isHalfDone());
    });

    it('should return true when it is', function() {
      var frames = 4;
      var sparkle = new Sparkle(0, 0, 5, frames, 0);
      sparkle.draw(canvas, context);
      sparkle.draw(canvas, context);
      assert(!sparkle.isHalfDone());
    });
  });

  describe('#isDone()', function() {
    it('should return false when it\'s not', function() {
      var frames = 5;
      var sparkle = new Sparkle(0, 0, 5, frames, 0);
      sparkle.draw(canvas, context);
      assert(!sparkle.isDone());
      sparkle.draw(canvas, context);
      assert(!sparkle.isDone());
      sparkle.draw(canvas, context);
      assert(!sparkle.isDone());
      sparkle.draw(canvas, context);
      assert(!sparkle.isDone());
    });

    it('should return true when it is', function() {
      var frames = 4;
      var sparkle = new Sparkle(0, 0, 5, frames, 0);
      sparkle.draw(canvas, context);
      sparkle.draw(canvas, context);
      sparkle.draw(canvas, context);
      sparkle.draw(canvas, context);
      assert(!sparkle.isDone());
    });
  });
});