const CommandParser = require('./CommandParser');
const GetTimeLineCommand = require('./commands/GetTimelineCommand');
const NewMessageCommand = require('./commands/NewMessageCommand');
const FollowUserCommand = require('./commands/FollowUserCommand');


class CommandFactory {
  constructor(commandParser = CommandParser) {
    this.commandParser = commandParser;
  }

  build(input) {
    const instructions = this.commandParser.parse(input);
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
