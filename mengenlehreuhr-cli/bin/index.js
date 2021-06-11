#!/usr/bin/env node

const chalk = require("chalk");
const boxen = require('boxen');

// use npm package
const ansiEscapes = require("ansi-escapes");

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question(chalk.blue.bold("Press enter to exit "), function(name) {
  rl.close();
});

rl.on("close", function() {
  console.log("\nBYE BYE !!!");
  process.exit(0);
});


process.stdout.write("\n");
process.stdout.write("\n");
process.stdout.write("\n");
process.stdout.write("\n");
process.stdout.write("\n");
process.stdout.write("\n");
process.stdout.write("\n");
process.stdout.write("\n");
process.stdout.write("\n");
process.stdout.write("\n");
process.stdout.write("\n");

const BerlinClock = require("../src/berlin_clock.js");

/*
╔═══════╤═════╤═══════╗
║       │ OOO │       ║
╟────┬┬─┴──┬──┴─┬┬────╢
║ OO ││ OO │ OO ││ OO ║
╟────┼┼────┼────┼┼────╢
║ OO ││ OO │ OO ││ OO ║
╟─┬─┬┴┼─┬─┬┴┬─┬─┼┴┬─┬─╢
║ │ │ │ │ │ │ │ │ │ │ ║
╟─┴─┴┬┼─┴─┴┬┴─┴─┼┬┴─┴─╢
║ OO ││ OO │ OO ││ OO ║
╚════╧╧════╧════╧╧════╝
*/

setInterval(() => {
  const berlinClock = new BerlinClock(simpleClock(getTime()));//"13:47:59" format
  const jsonClock = berlinClock.asJson()

  var seconds = '';
  if (jsonClock.second == "Y")
    seconds = seconds + chalk.bgYellow('   ')
  else 
    seconds = seconds + chalk.bgBlackBright('   ')

  var fiveHours = getBlockRow(jsonClock.five_hours)
  var hours = getBlockRow(jsonClock.hours)
  var quarters = getLinesRow(jsonClock.quarters)
  var minutes = getBlockRow(jsonClock.minutes)
  console.log(ansiEscapes.eraseLines(12) + chalk.green("╔═══════╤═════╤═══════╗"))
  console.log(chalk.green("║       │ ") + seconds + chalk.green(" │       ║"));
  console.log(chalk.green("╟────┬┬─┴──┬──┴─┬┬────╢"))
  console.log(fiveHours);
  console.log(chalk.green("╟────┼┼────┼────┼┼────╢"))
  console.log(hours);
  console.log(chalk.green("╟─┬─┬┴┼─┬─┬┴┬─┬─┼┴┬─┬─╢"))
  console.log(chalk.green("║") + quarters + chalk.green("║"));
  console.log(chalk.green("╟─┴─┴┬┼─┴─┴┬┴─┴─┼┬┴─┴─╢"))
  console.log(minutes);
  console.log(chalk.green("╚════╧╧════╧════╧╧════╝"))
}, 100);

process.stdout.write("\n");

/*
    59
[] [] [] []
[] 12 [] []
|||||||||||
[] 47 [] []

*/
function getBlockColored(block) {
  switch(block) {
    case 'R':
      return chalk.bgRed('  ');
    case 'Y':
      return chalk.bgYellow('  ')
    case 'B':
      return chalk.bgBlackBright('  ')
  }
}

function getBlockArr(jsonRow) {
  return jsonRow.map(x =>getBlockColored(x))
}

function getBlockRow(jsonRow) {
  /*var row = getBlockColored(jsonRow[0])
  row = row + ' ' + getBlockColored(jsonRow[1])
  row = row + ' ' + getBlockColored(jsonRow[2])
  row = row + ' ' + getBlockColored(jsonRow[3])
  return */
  return chalk.green("║ ") + getBlockColored(jsonRow[0]) + 
  chalk.green(" ││ ") + getBlockColored(jsonRow[1]) + 
  chalk.green(" │ ") + getBlockColored(jsonRow[2]) + 
  chalk.green(" ││ ") + getBlockColored(jsonRow[3]) + chalk.green(" ║")
}

function getLineColored(block) {
  switch(block) {
    case 'R':
      return chalk.bgRed(' ');
    case 'Y':
      return chalk.bgYellow(' ')
    case 'B':
      return chalk.bgBlackBright(' ')
  }
}

function getLinesRow(jsonRow) {
  return jsonRow.map(x => getLineColored(x)).join('│')
}

// pad leading zero when necessary
// also convert integer to a string
function leftPad(number) {
  if (number < 10) {
    return "0" + number;
  } else {
    return String(number);
  }
}

function getTime() {
  const date = new Date();

  return {
    hour: date.getHours(),
    minute: date.getMinutes(),
    second: date.getSeconds()
  };
}

function simpleClock(time) {
  const { hour, minute, second } = time;

  return leftPad(hour) + ":" + leftPad(minute) + ":" + leftPad(second);
}