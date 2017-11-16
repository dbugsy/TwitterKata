const Console = require('../../src/Console');
const stream = require('stream');


describe.skip('Twitter', () => {
  let write;
  let twitterConsole;
  let output;

  beforeEach(async () => {
    output = [];
    const MockWritableStream = stream.Writable;
    const stdout = new MockWritableStream();
    write = (actualOutput) => {
      output.push(stringFromCharCodes(actualOutput));
    };
    stdout._write = write;

    twitterConsole = new Console(stdout);
    await twitterConsole.run();
  });

  afterEach(async () => {
    await twitterConsole.stop();
  });

  it('sends a command prompt', async () => {
    const prompt = '> ';

    await twitterConsole.prompt();

    expect(output[0]).toBe(prompt);
  });

  function stringFromCharCodes(chars) {
    return chars.reduce((string, charCode) => string + String.fromCharCode(charCode), '');
  }
});
