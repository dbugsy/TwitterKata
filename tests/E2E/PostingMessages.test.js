const Console = require('../../src/Console');
const stream = require('stream');

const stringFromCharCodes = chars => chars.reduce((string, charCode) => string + String.fromCharCode(charCode), '');

describe('Twitter', () => {
  let write;
  let console;
  let output;


  beforeEach(async () => {
    const stdin = new stream.Readable();
    stdin._read = (_) => { };

    const MockWritableStream = stream.Writable;
    const stdout = new MockWritableStream();
    write = (actualOutput) => {
      output = actualOutput;
    };
    stdout._write = write;


    console = new Console(stdin, stdout);
    await console.run();
    output = stringFromCharCodes(output);
  });

  afterEach(() => {
    console.stop();
  });

  it('sends a command prompt', () => {
    const prompt = '> ';

    expect(output).toBe(prompt);
  });

});
