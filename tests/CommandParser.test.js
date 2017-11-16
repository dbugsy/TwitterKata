const CommandParser = require('../src/CommandParser');

describe('CommandParser', () => {
  it('parses a timeline command with just a name', () => {
    const user = 'Alice';
    const getTimelineString = `${user}`;
    const expectedCommandObject = { subject: user, verb: '', object: '' };

    expect(CommandParser.parse(getTimelineString)).toEqual(expectedCommandObject);
  });

  it('parses a post message command with a name and "->"', () => {
    const user = 'Alice';
    const postCommand = '->';
    const message = 'I love the weather today';
    const getTimelineString = `${user} ${postCommand} ${message}`;
    const expectedCommandObject = { subject: user, verb: postCommand, object: message };

    expect(CommandParser.parse(getTimelineString)).toEqual(expectedCommandObject);
  });

  it('parses a follow message command with a follower and a followee', () => {
    const follower = 'Alice';
    const followee = 'Bob';
    const followCommand = 'follow';
    const getTimelineString = `${follower} ${followCommand} ${followee}`;
    const expectedCommandObject = {
      subject: follower,
      verb: followCommand,
      object: followee,
    };

    expect(CommandParser.parse(getTimelineString)).toEqual(expectedCommandObject);
  });
});
