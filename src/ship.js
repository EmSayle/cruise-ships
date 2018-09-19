function Ship(currentPort) {
  this.currentPort = currentPort;
}

// create a setSail function that moves the ships from currentPort
Ship.prototype.setSail = function setSail() {
  this.currentPort = false;
};
// when the ship setSail function is called the ship is no longer at the currentPort

Ship.prototype.dock = function dock(port) {
  this.currentPort = port;
};

module.exports = Ship;
