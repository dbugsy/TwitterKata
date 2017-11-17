const Twitter = require('../../src/Twitter');
const User = require('../../src/User');

describe('returning and empty timeline', () => {
  xit('returns a new prompt with no additional output', () => {
    const userOne = new User('Alice');
    const prompt = jest.fn();
    const output = jest.fn();
    const TwitterConsole = jest.fn(() => ({
      prompt,
      output,
    }));
    const twitterConsole = new TwitterConsole();

    const twitter = new Twitter();
    twitter.input(userOne.name, twitterConsole);

    expect(twitterConsole.output).toBeCalledWith('');
    expect(twitterConsole.prompt).toBeCalled();
  });
});
