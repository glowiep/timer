const stdin = process.stdin;
const stdout = process.stdout;
const chalk = require('chalk');

stdin.setRawMode(true);
stdin.setEncoding("utf8");

const welcomeMessage1 = `\n⏳⏳⏳ Welcome to the interactive timer! ⏳⏳⏳\n`;
const welcomeMessage2 = `\nHit 'b' for a beep \nOr set a timer between 1-9 seconds\n`;
const welcomeMessage3 = `\n${chalk.yellow("CTRL + C to exit 🏃‍♂️")}\n`;
stdout.write(`${chalk.underline.bgBlackBright(welcomeMessage1)}`);
stdout.write(`${chalk.bold(welcomeMessage2)}`);
stdout.write(welcomeMessage3);

// Output beep function
const beep = function() {
  stdout.write('\x07');
  stdout.write(`${chalk.red("Beep! 🚨\r")}`);
  setTimeout(() => {
    stdout.clearLine();
  }, 500);
  
};

stdin.on("data", (key) => {
  // Input termination command is ctrl + C
  if (key === '\u0003') {
    const terminationMessage = `\nThanks for using me, ciao!✨\n`;
    stdout.write(`${chalk.bold(terminationMessage)}`);
    process.exit();
  }

  // Beep if input is 'b' key
  if (key === 'b') {
    beep();
  }

  // Timer between 1 and 9 seconds
  if (key > 0 && key < 10) {
    stdout.write(`${chalk.yellowBright(`\nSetting Timer for ${key} seconds...\n`)}`);
    
    const interval = 500;     // 500 ms
    const items = ['|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   ', '/   ', '-   ', '\\   ', '|   \n'];
    let index = 0;
    // Interval function to print every 400ms
    const intervalID = setInterval(() => {
      if (index < items.length) {
      stdout.write(`\r${items[index]}`);
      index++
      }
    }, interval)

    
    setTimeout(() => {
      clearInterval(intervalID);    // Clear interval when timeout completes
      stdout.write('\x07');
      stdout.write(`\r${chalk.red("Time is up!")}\n`);
    }, key * 1000);

  }
});