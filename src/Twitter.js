const CommandFactory = require('./CommandFactory');
const MessageRepository = require('./MessageRepository');

class Twitter {
  constructor(commandFactory, messageRepository) {
    this.commandFactory = commandFactory || new CommandFactory();
    this.messageRepository = messageRepository || new MessageRepository();
  }

  input(commandString, console) {
    const command = this.commandFactory.build(commandString);
    command.execute(console, this.messageRepository);
  }
}

module.exports = Twitter;
