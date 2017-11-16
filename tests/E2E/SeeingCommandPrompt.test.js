const Console = require('../../src/TwitterConsole');
const stream = require('stream');


describe('Twitter', () => {
  let write;
  let twitterConsole;
  let stdin;
  let output;

  beforeEach(async () => {
    output = [];
    const MockWritableStream = stream.Writable;
    const stdout = new MockWritableStream();
    write = (actualOutput) => {
      output.push(stringFromCharCodes(actualOutput));
    };
    stdout._write = write;

    const MockDuplexStream = stream.Duplex;
    stdin = new MockDuplexStream();
    stdin._read = () => {};

    twitterConsole = new Console(stdout, stdin);
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
