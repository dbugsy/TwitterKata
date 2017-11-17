const GetTimeLineCommand = require('../src/commands/GetTimelineCommand');

describe('GetTimelineCommand', () => {
  it('when there are no messages, no messages will be sent to the console', () => {
    const userName = 'some user name';
    const expectedMessage = '';
    const command = new GetTimeLineCommand(userName);
    const twitterConsole = newMockToReturn({ output: jest.fn() });
    const noMessages = [];
    const messagesFor = jest.fn().mockReturnValue(noMessages);
    const messageRepository = newMockToReturn({ messagesFor });

    command.execute(twitterConsole, messageRepository);

    expect(twitterConsole.output).toBeCalledWith(expectedMessage);
  });

  function newMockToReturn(returnFunction) {
    const MockRepository = jest.fn(() => (returnFunction));
    return new MockRepository();
  }
});
