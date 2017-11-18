require('../config.js');
var simple = require('simple-mock')
var assert = require('assert');

describe('Fonts', function() {
  var context, canvas;

  before(function() {
  });

  describe('#isValid', function() {

    it('should return true for all valid fonts', function() {
      assert(Fonts.isValid(Fonts.ARIAL));
      assert(Fonts.isValid(Fonts.TIMES_NEW_ROMAN));
      assert(Fonts.isValid("Courier New"));
    });

    it('should return false for all else', function() {
      assert(!Fonts.isValid(Fonts.FOO));
      assert(!Fonts.isValid("HAHAHA"));
      assert(!Fonts.isValid(Fonts.Arial));
    });
  });
});
