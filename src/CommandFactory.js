const GetTimeLineCommand = require('./commands/GetTimelineCommand');

class CommandFactory {
  getTimelineCommand(user) { // eslint-disable-line class-methods-use-this
    return new GetTimeLineCommand(user);
  }
}
module.exports = CommandFactory;
