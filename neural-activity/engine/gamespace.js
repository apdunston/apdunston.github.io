Gamespace = {
  generateId: function() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  },
  rainbow: ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"],
  UP: "UP",
  DOWN: "DOWN",
  LEFT: "LEFT",
  RIGHT: "RIGHT",
  UP_CODE: 38,
  DOWN_CODE: 40,
  LEFT_CODE: 37,
  RIGHT_CODE: 39,
  oppositeOf: function(direction) {
    switch(direction) {
      case Gamespace.UP:
        return Gamespace.DOWN;
      case Gamespace.DOWN:
        return Gamespace.UP;
      case Gamespace.LEFT:
        return Gamespace.RIGHT;
      case Gamespace.RIGHT:
        return Gamespace.LEFT;
    }
  }
};










