#!/usr/bin/env node
// CLI setup
var program = require('commander');
var commands = require('../commands');

var version = require('../package.json').version;

program
  .version(version)
  .usage('<command>');

program
  .command('test <target>')
  .description('run intern tests against <target>')
  .action(commands.intern)
    // .description('run intern tests')
    // config file defaults to ./intern.js
    .option('-c, --config [file]',
      'AMD path to intern config file - [path/to/file].js',
      'intern')
    // TODO - local testing with chromedriver
    .option('-l, --local [webdriver]',
      'Run tests locally with [chromedriver] instance',
      'chromedriver');

  program
  .command('quote [name]')
  .description('print a random quote by 19th-century philosopher Piotr Kropotkin')
  .action(commands.quote);

program
  .parse(process.argv);

if (!program.args.length) {
  program.help();
}
