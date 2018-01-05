require('../config.js');
var simple = require('simple-mock')
var assert = require('assert');

describe('KeyboardDriver', function() {
  var context, canvas;

  beforeEach(function() {
    document = {};
    simple.mock(document, 'addEventListener');
    keyboardDriver = new KeyboardDriver(document);
  });

  describe('#addKeyDownListener', function() {
    it('should add and remove', function() {
      var myObject = { name: "MyObject" };
      var myObject2 = { name: "MyObject2" };
      assert.equal(0, keyboardDriver.getKeyDownListeners().length);
      keyboardDriver.addKeyDownListener(myObject);
      assert.equal(1, keyboardDriver.getKeyDownListeners().length);
      assert.equal(myObject, keyboardDriver.getKeyDownListeners()[0]);
      keyboardDriver.addKeyDownListener(myObject2);
      assert.equal(2, keyboardDriver.getKeyDownListeners().length);
      assert.equal(myObject, keyboardDriver.getKeyDownListeners()[0]);
      assert.equal(myObject2, keyboardDriver.getKeyDownListeners()[1]);
    });
  });

  describe('#removeKeyDownListener', function() {
    it('should remove objects', function() {
      var myObject = { name: "MyObject" };
      var myObject2 = { name: "MyObject2" };
      keyboardDriver.addKeyDownListener(myObject);
      keyboardDriver.addKeyDownListener(myObject2);

      keyboardDriver.removeKeyDownListener(myObject);
      assert.equal(1, keyboardDriver.getKeyDownListeners().length);
      assert.equal(myObject2, keyboardDriver.getKeyDownListeners()[0]);
      keyboardDriver.removeKeyDownListener(myObject2);
      assert.equal(0, keyboardDriver.getKeyDownListeners().length);
    });
  });

  describe('#keyDown', function() {
    it('should call keyDown on added listeners', function() {
      var myObject = { name: "MyObject" };
      var myObject2 = { name: "MyObject2" };
      simple.mock(myObject, 'keyDown');
      simple.mock(myObject2, 'keyDown');

      keyboardDriver.addKeyDownListener(myObject);
      keyboardDriver.addKeyDownListener(myObject2);

      keyboardDriver.keyDown();
      assert.equal(1, myObject.keyDown.callCount);
      assert.equal(1, myObject2.keyDown.callCount);
    });
    it('should not call keyDown on removed listeners', function() {
      var myObject = { name: "MyObject" };
      var myObject2 = { name: "MyObject2" };
      simple.mock(myObject, 'keyDown');
      simple.mock(myObject2, 'keyDown');

      keyboardDriver.addKeyDownListener(myObject);
      keyboardDriver.addKeyDownListener(myObject2);
      keyboardDriver.removeKeyDownListener(myObject2);

      keyboardDriver.keyDown();
      assert.equal(1, myObject.keyDown.callCount);
      assert.equal(0, myObject2.keyDown.callCount);
    });
  });

});
