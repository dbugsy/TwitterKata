const getWordNumberFrom = (string, index) => (string.split(' ')[index] || '');
const subjectFrom = commandString => (getWordNumberFrom(commandString, 0));
const verbFrom = commandString => (getWordNumberFrom(commandString, 1));
const objectFrom = commandString => (commandString.split(' ').slice(2).join(' '));

const CommandParser = {

  parse: commandString => ({
    subject: subjectFrom(commandString),
    verb: verbFrom(commandString),
    object: objectFrom(commandString)
  }),
};

module.exports = CommandParser;
