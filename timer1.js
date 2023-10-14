/**Simple Timer 
 * which will beep after a specified amount of time has passed. 
 * The user can specify an unlimited number of alarms using command line arguments.
 * Will not run if no numbers are provided, input is a negative number or is not a number. 
 * */
const arg = process.argv.slice(2);

const beep = function() {
  process.stdout.write('\x07');
};

for (let time of arg) {
  if (time >= 0 && time !== isNaN) {
    setTimeout(beep, Number(time) * 1000)
  }
};