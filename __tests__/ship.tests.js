/* globals describe it expect */

const Port = require('../src/port');
const Ship = require('../src/ship');

describe('Ship', () => {
  it('returns a ship object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('Ship', () => {
  it('sets the ships starting port', () => {
    const port = new Port('Lisbon');
    const ship = new Ship(port);
    expect(ship.currentPort).toEqual(port);
  });
});

describe('Set sail method', () => {
  it('tests the shipSail method', () => {
    const port = new Port('Lisbon');
    const ship = new Ship(port);
    ship.setSail();
    expect(ship.currentPort).toBeFalsy();
  });
});

describe('Dock method', () => {
  it('tests the dock method', () => {
    const port = new Port('Lisbon');
    const ship = new Ship(port);
    const seville = new Port('Seville');
    ship.dock(seville);
    expect(ship.currentPort).toEqual(seville);
  });
});
