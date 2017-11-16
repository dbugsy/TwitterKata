const readline = require('readline');
const TwitterController = require('./TwitterController');

class TwitterConsole {
  constructor(
    stdout = process.stdout,
    stdin = process.stdin,
    controller = new TwitterController(),
  ) {
    this.stdin = stdin;
    this.stdout = stdout;
    this.controller = controller;
  }

  run() {
    this.stream = readline.createInterface({
      input: this.stdin,
      output: this.stdout,
    });

    this.stream.on('line', (line) => {
      console.log(line);
    });
  }

  stop() {
    this.stream.close();
  }

  prompt() {
    this.stream.question('> ', (answer) => {
      this.controller.input(answer);
    });
  }

  output(message) {
    console.log(message);
  }
}

module.exports = TwitterConsole;
