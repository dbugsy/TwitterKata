const TwitterController = require('../../src/Twitter');
const User = require('../../src/User');

describe('returning and empty timeline', () => {
  it('returns a new prompt with no additional output', () => {
    const userOne = new User('Alice');
    const prompt = jest.fn();
    const twitterConsole = jest.fn(() => ({
      prompt,
    }));

    const twitter = new TwitterController();
    twitter.input(userOne.name);

    expect(twitterConsole.output).toBeCalledWith('');
    expect(twitterConsole.prompt).toBeCalled();
  });
});
