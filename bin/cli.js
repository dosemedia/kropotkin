// #!/usr/bin/env node
// // CLI setup
// require('../commands/index');
// var version = require('../package.json').version;
// var program = require('commander');
//
// program
//   .version(version)
//   .usage('<command> [options]');
//
// // // define options
// // program
// //   .command('test <target>', 'run intern tests')
// //     .description('run intern tests')
// //     // config file defaults to ./intern.js
// //     .option('-c, --config [file]',
// //       'AMD path to intern config file - [path/to/file].js',
// //       'intern')
// //     // regex 3rd arg functions as as a validator- I want a url with no trailing slash.
// //     // We could also use a function
// //     .option('-t, --target <url>',
// //       'System Target Url',
// //       /^(https?.*[^\/])(?:\/?$)/i);
// //
// // program
// //   .command('quote')
// //     .description('print a random quote by the 19th-century philosopher Piotr Kropotkin')
// //     .action(() => {console.log(sample(quotes));});
//
// program
//   .parse(process.argv);
//
// if (!program.args.length) {
//   program.help();
// }
