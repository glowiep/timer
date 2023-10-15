const stdin = process.stdin;
const stdout = process.stdout;

stdin.setRawMode(true);
stdin.setEncoding("utf8");
stdin.write(`\nWelcometo the interactive timer!\nHit 'b' for a beep, or set a timer between 1-9 seconds
CTRL + C to exit`);
// Output beep function
const beep = function() {
  stdout.write('\x07');
};

// Input termination command is ctrl + C
stdin.on("data", (key) => {
  if (key === '\u0003') {
    stdout.write(`\nThanks for using me, ciao!\n`);
    process.exit();
  }

  if (key === 'b') {
    beep();
  }

  if (key > 0 && key < 10) {
    stdout.write(`Setting Timer for ${key} seconds...`);
    setTimeout(() => {
      stdout.write('\x07');
      stdout.write(`\nTime is up!\n`);
    }, key * 1000);
  }

});
