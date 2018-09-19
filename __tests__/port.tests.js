const Port = require('../src/port');

describe('Port', () => {
  it('returns a new port object', () => {
    expect(new Port()).toBeInstanceOf(Object);
  });
});

describe('Port', () => {
  it('checks that the port has a name', () => {
    const port = new Port('Saville');
    expect(port.name).toEqual('Saville');
  });
});
