const Twitter = require('../src/Twitter');

describe('Twitter', () => {
  it('executes the command', () => {
    const commandString = 'some command';

    const execute = jest.fn();
    const command = newMock({ execute });

    const build = jest.fn().mockReturnValue(command);
    const commandFactory = newMock({ build });

    const twitter = new Twitter(commandFactory);

    twitter.input(commandString);

    expect(command.execute).toHaveBeenCalled();
  });

  function newMock(executable) {
    const Constructor = jest.fn(() => (executable));
    return new Constructor();
  }
});
