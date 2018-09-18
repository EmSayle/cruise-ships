const Ship = require('../src/ship');

describe('Ship', () => {
  it('returns a ship object', () => {
    expect(new Ship()).toBeInstanceOf(Object);
  });
});

describe('Ship', () => {
  it('sets the name propety with a new ship name', () => {
    const ship = new Ship('HMS Scream');
    expect(ship.name).toEqual('HMS Scream');
  })
  it('sets the ships starting port', () => {
    const ship = new Ship('HMS Scream', 'Lisbon');
    expect(ship.startingPort).toEqual('Lisbon');
  })
})
