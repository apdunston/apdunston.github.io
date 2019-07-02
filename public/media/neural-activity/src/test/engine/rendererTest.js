'use strict';

require('../config.js');
var simple = require('simple-mock');
var assert = require('assert');

describe('Renderer', function () {
  var context, canvas;

  before(function () {
    context = {};
    canvas = {};
    simple.mock(context, 'fillRect');
  });

  describe('#drawLine()', function () {

    it('should draw a line minding the startX and startY');
    //   , function() {
    //   var startX = 20;
    //   var startY = 30;
    //   var renderer = new Renderer(startX, startY);
    //   var x = 5;
    //   var y = 6;
    //   var xAddend = 4;
    //   var yAddend = 3;
    //   var squareLength = 10;
    //   renderer.drawLine(canvas, x, y, xAddend, yAddend, squareLength);
    // });
  });
});