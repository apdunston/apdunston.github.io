ExampleClass = function() {
  // constructor stuff 
};

ExampleClass.prototype.constructor = ExampleClass;

ExampleClass.prototype.exampleMethod = function() {
  // method stuff
};

ExampleSubclass = function() {
  ExampleClass.call(this); // super()
  // subclass constructor stuff
}

ExampleSubclass.prototype = Object.create(ExampleClass.prototype);
ExampleSubclass.prototype.constructor = ExampleSubclass;

SubclassWithPrivateMethods = function() {

  var _privateMethod = function() {
    // method stuff
  }


  SubclassWithPrivateMethods = function() {
    ExampleClass.call(this);
    _privateMethod();
    // subclass constructor stuff
  }

  SubclassWithPrivateMethods.prototype = Object.create(ExampleClass.prototype);

  return SubclassWithPrivateMethods;
}();