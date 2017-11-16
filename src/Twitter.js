const CommandFactory = require('./CommandFactory');

class Twitter {
  constructor(commandFactory = new CommandFactory()) {
    this.commandParser = commandFactory;
  }

  input(commandString) {
    const command = this.commandParser.build(commandString);
    command.execute();
  }
}

module.exports = Twitter;
