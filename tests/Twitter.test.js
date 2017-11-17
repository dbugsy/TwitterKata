const Twitter = require('../src/Twitter');

describe('Twitter', () => {
  it('executes the command', () => {
    const commandString = 'some command';

    const execute = jest.fn();
    const command = newMock({ execute });

    const build = jest.fn().mockReturnValue(command);
    const commandFactory = newMock({ build });

    const messageRepo = jest.fn();

    const twitter = new Twitter(commandFactory, messageRepo);
    const twitterConsole = jest.fn();

    twitter.input(commandString, twitterConsole);

    expect(command.execute).toHaveBeenCalledWith(twitterConsole, messageRepo);
  });

  function newMock(executable) {
    const Constructor = jest.fn(() => (executable));
    return new Constructor();
  }
});
