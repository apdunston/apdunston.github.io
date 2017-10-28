var Gamespace = function() {
  function generateId() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' +
      s4() + '-' + s4() + s4() + s4();
  }


  return {
    generateId: generateId,
    rainbow: ["#9400D3", "#4B0082", "#0000FF", "#00FF00", "#FFFF00", "#FF7F00", "#FF0000"],
  };
}();


Gamespace.UP = "UP";
Gamespace.DOWN = "DOWN";
Gamespace.LEFT = "LEFT";
Gamespace.RIGHT = "RIGHT";

Gamespace.UP_CODE = 38;
Gamespace.DOWN_CODE = 40;
Gamespace.LEFT_CODE = 37;
Gamespace.RIGHT_CODE = 39;