
const stdin = process.stdin;
const stdout = process.stdout;
const chalk = require('chalk');

stdin.setRawMode(true);
stdin.setEncoding("utf8");

// Function to center text
function centerText(text) {
  const columns = process.stdout.columns;
  const padding = Math.max(0, Math.floor((columns - text.length) / 2));
  return ' '.repeat(padding) + text;
}

const welcomeMessage1 = `\n⏳⏳⏳ Welcome to the interactive timer! ⏳⏳⏳\n`
const welcomeMessage2 = `\nHit 'b' for a beep \nOr set a timer between 1-9 seconds\n`
const welcomeMessage3 = `\n${chalk.yellow("CTRL + C to exit 🏃‍♂️")}\n`
stdout.write(centerText(`${chalk.underline.bgBlackBright(welcomeMessage1)}`));
stdout.write(centerText(`${chalk.bold(welcomeMessage2)}`));
stdout.write(centerText(welcomeMessage3));

// Output beep function
const beep = function() {
  stdout.write('\x07');
  stdout.write(`${chalk.red("Beep! 🚨\r")}`)
  setTimeout(() => {
    stdout.clearLine();
  }, 500);
  
};

// Input termination command is ctrl + C
stdin.on("data", (key) => {
  if (key === '\u0003') {
    const terminationMessage = `\nThanks for using me, ciao!✨\n`
    stdout.write(`${chalk.bold(terminationMessage)}`);
    process.exit();
  }

  if (key === 'b') {
    beep();
  }

  if (key > 0 && key < 10) {
    stdout.write(`${chalk.yellowBright(`\nSetting Timer for ${key} seconds...`)}`);
    setTimeout(() => {
      stdout.write('\x07');
      stdout.write(`\n${chalk.red("Time is up!")}\n`);
    }, key * 1000);
  }

});


// const emoji = require('node-emoji')
// const clock = emoji.get('clock');

// console.log(clock)