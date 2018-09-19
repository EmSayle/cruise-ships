const Ship = require('../src/ship');

describe('Ship', () => {
  it('returns a ship object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('Ship', () => {
  it('sets the ships starting port', () => {
    const ship = new Ship('Lisbon');
    expect(ship.startingPort).toEqual('Lisbon');
  });
});

describe('ship set sail method', () => {
  const ship = new Ship('Lisbon');
  ship.setSail();
  expect(ship.startingPort).toBeFalsy();
});
