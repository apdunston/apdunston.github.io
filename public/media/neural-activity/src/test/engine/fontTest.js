'use strict';

require('../config.js');
var simple = require('simple-mock');
var assert = require('assert');

describe('Font', function () {
  var context, canvas;

  before(function () {});

  describe('#isValid', function () {

    it('should return true for all valid fonts', function () {
      assert(Font.isValid(Font.ARIAL));
      assert(Font.isValid(Font.TIMES_NEW_ROMAN));
      assert(Font.isValid("Courier New"));
    });

    it('should return false for all else', function () {
      assert(!Font.isValid(Font.FOO));
      assert(!Font.isValid("HAHAHA"));
      assert(!Font.isValid(Font.Arial));
    });
  });
});