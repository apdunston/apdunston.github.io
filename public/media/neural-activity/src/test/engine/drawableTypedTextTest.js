'use strict';

require('../config.js');
var simple = require('simple-mock');
var assert = require('assert');

describe('DrawableTypedText', function () {
  var FRAME_COUNT = 5;

  before(function () {
    this.x = 1;
    this.y = 2;
    this.text = "I am the very model of a modern major general.";
    this.color = "blue";
  });

  describe('#draw', function () {
    it('should draw no text ever if you don\'t call #type', function () {
      text = new DrawableTypedText(this.x, this.y, this.text, this.color);
      // text.type();
      renderer = {};
      simple.mock(renderer, 'drawText');
      for (var i = 0; i < 1000; i++) {
        text.draw(renderer);
      }
      assert.equal(0, renderer.drawText.callCount);
    });

    it('should draw no text for a set of frames', function () {
      text = new DrawableTypedText(this.x, this.y, this.text, this.color);
      text.type();
      renderer = {};
      simple.mock(renderer, 'drawText');
      for (var i = 0; i < FRAME_COUNT; i++) {
        text.draw(renderer);
      }
      assert.equal(0, renderer.drawText.callCount);
    });

    it('should draw a letter for the next set of frames', function () {
      text = new DrawableTypedText(this.x, this.y, this.text, this.color);
      text.type();
      renderer = {};
      simple.mock(renderer, 'drawText');
      for (var i = 0; i < FRAME_COUNT * 2; i++) {
        text.draw(renderer);
      }
      assert.equal(5, renderer.drawText.callCount);
      assert.equal(this.x, renderer.drawText.lastCall.args[0]);
      assert.equal(this.y, renderer.drawText.lastCall.args[1]);
      assert.equal("I", renderer.drawText.lastCall.args[2]);
      assert.equal(this.color, renderer.drawText.lastCall.args[3]);
    });

    it('should draw all letters', function () {
      text = new DrawableTypedText(this.x, this.y, this.text, this.color);
      text.type();
      renderer = {};
      simple.mock(renderer, 'drawText');
      numberOfDraws = (FRAME_COUNT + 1) * (this.text.length + 1);
      for (var i = 0; i < numberOfDraws; i++) {
        text.draw(renderer);
      }

      assert.equal(renderer.drawText.callCount, 277);
      assert.equal(renderer.drawText.lastCall.args[0], this.x);
      assert.equal(renderer.drawText.lastCall.args[1], this.y);
      assert.equal(renderer.drawText.lastCall.args[2], this.text);
      assert.equal(renderer.drawText.lastCall.args[3], this.color);
    });

    it('should draw all letters forever', function () {
      text = new DrawableTypedText(this.x, this.y, this.text, this.color);
      text.type();
      renderer = {};
      simple.mock(renderer, 'drawText');

      for (var i = 0; i < FRAME_COUNT * 1000; i++) {
        text.draw(renderer);
      }

      assert.equal(renderer.drawText.callCount, 4995);
      assert.equal(renderer.drawText.lastCall.args[0], this.x);
      assert.equal(renderer.drawText.lastCall.args[1], this.y);
      assert.equal(renderer.drawText.lastCall.args[2], this.text);
      assert.equal(renderer.drawText.lastCall.args[3], this.color);
    });
  });
});