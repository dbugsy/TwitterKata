const CommandFactory = require('../src/CommandFactory');
const GetTimelineCommand = require('../src/commands/GetTimelineCommand');

describe('CommandFactory', () => {
  it('creates a new getTimeline command', () => {
    const expectedCommandType = GetTimelineCommand;
    const commandFactory = new CommandFactory();
    const user = 'some user';
    expect(commandFactory.getTimelineCommand(user)).toBeInstanceOf(expectedCommandType);
  });
});

