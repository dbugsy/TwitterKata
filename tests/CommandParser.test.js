const CommandParser = require('../src/CommandParser');

describe('CommandParser', () => {
  it('parses a timeline command with just a name', () => {
    const user = { name: 'Alice' };
    const getTimelineString = `${user.name}`;
    const expectedCommandObject = { subject: user.name, verb: '', object: '' };

    expect(CommandParser.parse(getTimelineString)).toEqual(expectedCommandObject);
  });

  it('parses a post message command with a name and "->"', () => {
    const user = { name: 'Alice' };
    const postCommand = '->';
    const message = 'I love the weather today';
    const getTimelineString = `${user.name} ${postCommand} ${message}`;
    const expectedCommandObject = { subject: user.name, verb: postCommand, object: message };

    expect(CommandParser.parse(getTimelineString)).toEqual(expectedCommandObject);
  });
});
