const readline = require('readline');

class Console {
  constructor(stdin = process.stdin, stdout = process.stdout) {
    this.stdin = stdin;
    this.stdout = stdout;
  }

  run() {
    this.stream = readline.createInterface({
      input: this.stdin,
      output: this.stdout,
    });

    this.stream.question('> ', (answer) => {
      this.stop();
    });
  }

  stop() {
    this.stream.close();
  }
}

module.exports = Console;
