const CommandParser = require('./CommandParser');
const GetTimeLineCommand = require('./commands/GetTimelineCommand');
const NewMessageCommand = require('./commands/NewMessageCommand');
const FollowUserCommand = require('./commands/FollowUserCommand');


class CommandFactory {
  constructor(commandParser = CommandParser) {
    this.commandFactory = commandParser;
  }

  build(input) {
    const instructions = this.commandFactory.parse(input);
    switch (instructions.verb) {
      case 'follows':
        return new FollowUserCommand(instructions.subject, instructions.object);
      case '->':
        return new NewMessageCommand(instructions.subject, instructions.object);
      default:
        return new GetTimeLineCommand(instructions.subject);
    }
  }
}
module.exports = CommandFactory;
