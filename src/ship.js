function Ship(startingPort) {
  this.startingPort = startingPort;
}

// create a setSail function that moves the ships from startingPort
Ship.prototype.setSail = function () {
  this.startingPort = false;
}
// when the ship setSail function is called the ship is no longer at the startingPort

module.exports = Ship;
