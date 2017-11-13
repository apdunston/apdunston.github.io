var bot = {
  path: 'drdldrdldrdldrdldrdldrdldrdldrdldrdldrdldrdldrdl',
  positions: [[3, 3], [3, 4], [4, 4], [4, 5], [3, 5],
    [3, 6], [4, 6], [4, 7], [3, 7], [3, 8], [4, 8], [4, 9]],
  player: null, 
  interval: null,
  numSteps: 0,
  lastStep: null,

  assertions: function() {
    console.log("yay!");
    console.log(player.x + " " + player.y);
  },

  checkPosition: function(position) {
    var message;
    if(this.player.x != position[0] || this.player.y != position[1]) {
      this.stop();
      message = "Expected position (" + position[0] + ", " + position[1] + 
        ") Actual position (" + this.player.x + ", " + this.player.y + ") " + 
        "Step: " + this.numSteps + " Last step: " + this.lastStep;
      alert(message);
      return false;
    }
    return true;
  },

  step: function(player, assertions) {
    console.log("bot step");

    if (this.positions.length > 0) {
      position = this.positions.shift();
      if (!this.checkPosition(position)) {
        return;
      }
    }

    if (this.path.length == 0) {
      assertions(this.player);
      this.stop();
    }
    
    var current = this.path.slice(0, 1);
    this.path = this.path.slice(1, -1);
    switch(current) {
      case 'u': player.up(); break;
      case 'd': player.down(); break;
      case 'l': player.left(); break;
      case 'r': player.right(); break;
    }

    this.numSteps += 1;
    this.lastStep = current;
  },
  stop: function() {
    clearInterval(this.interval);
  },
  go: function() {
    var self = this;
    this.interval = setInterval(function() { self.step(self.player, self.assertions); }, 1000/5);
  },
};

