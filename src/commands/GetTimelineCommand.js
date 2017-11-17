
class GetTimelineCommand {
  constructor(user) {
    this.user = user;
  }
  execute(twitterConsole, messageRepository) {
    twitterConsole.output('');
  }
}
module.exports = GetTimelineCommand;
