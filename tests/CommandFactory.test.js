const CommandFactory = require('../src/CommandFactory');
const GetTimelineCommand = require('../src/commands/GetTimelineCommand');
const NewMessageCommand = require('../src/commands/NewMessageCommand');
const FollowUserCommand = require('../src/commands/FollowUserCommand');

describe('CommandFactory', () => {
  it('creates a new getTimeline command', () => {
    const expectedCommandType = GetTimelineCommand;
    const user = 'Alice';
    const commandObject = {
      subject: user,
      verb: '',
      object: '',
    };
    const MockCommandParser = jest.fn(() => ({
      parse: jest.fn().mockReturnValue(commandObject),
    }));
    const commandFactory = new CommandFactory(new MockCommandParser());
    const message = 'some message';

    expect(commandFactory.build(message)).toBeInstanceOf(expectedCommandType);
  });

  it('creates a new message command', () => {
    const expectedCommandType = NewMessageCommand;
    const user = 'Alice';
    const commandObject = {
      subject: user,
      verb: '->',
      object: 'I love the weather today',
    };
    const MockCommandParser = jest.fn(() => ({
      parse: jest.fn().mockReturnValue(commandObject),
    }));
    const commandFactory = new CommandFactory(new MockCommandParser());
    const message = 'some message';

    expect(commandFactory.build(message)).toBeInstanceOf(expectedCommandType);
  });

  it('creates a new follow command', () => {
    const expectedCommandType = FollowUserCommand;
    const follower = 'Alice';
    const followee = 'Bob';
    const commandObject = {
      subject: follower,
      verb: 'follows',
      object: followee,
    };
    const MockCommandParser = jest.fn(() => ({
      parse: jest.fn().mockReturnValue(commandObject),
    }));
    const commandFactory = new CommandFactory(new MockCommandParser());
    const message = 'some message';

    expect(commandFactory.build(message)).toBeInstanceOf(expectedCommandType);
  });
});

