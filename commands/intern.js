#!/usr/bin/env node
var spawn = require('child_process').spawn;
var fs = require('fs');
var path = require('path');

/**
 * execute the intern tests.
 */
module.exports = (target, command) => {
  var internRunner = npmBinPath('intern-runner');
  var targetUrl = parseTarget(target);
  var test;
  process.env.URL = targetUrl;

  console.log('Loading Kropotkin');
  console.log(' config: %s.js', command.config);
  console.log(" target: %s", targetUrl);

  if (command.remote) {

    console.log(' Running on remote Selenium');
    test = spawn(internRunner, [`config=${command.config}`]);
    test.stdout.on('data', (data) => console.log(String(data)));
    test.stderr.on('data', (data) => console.log(`error: ${data}`));
    test.on('close', (code) => {
      console.log(`exiting: ${code}`);
      process.exit(code);
    });

  } else {
    console.log(' webdriver: %s', command.webdriver);
    var chromeDriver;
    startChromedriver();
    test = spawn(internRunner, [`config=${command.config}`]);
    test.stdout.on('data', (data) => console.log(String(data)));
    test.stderr.on('data', (data) => console.log(`error: ${data}`));
    test.on('close', (code) => {
      stopChromedriver();
      process.exit(code);
    });
  }
};


function startChromedriver() {
  var driverArgs = ['--port=4444', '--url-base=wd/hub'];
  chromeDriver = require('chromedriver');
  if (chromeDriver.start(driverArgs)) {
    console.log('Chromedriver started');
    return chromeDriver;
  }
  throw new Error('wtf');
}

function stopChromedriver() {
  chromeDriver.stop();
  console.log('Chromedriver stopped');
}

/**
 * Get the absolute location of the intern-runner executable.
 * @param {String} executable name in node_modules/.bin
 * @return {String} absolute path to executable
 */
function npmBinPath (executableName) {
  // console.log(bin);
  var bin = path.resolve('./node_modules/.bin', executableName);
  // test whether file exists (whether intern is installed) TODO
  return bin;
}

/**
 * parse the target as a valid url, removing trailing slash
 * @param {string} target url
 * @return {string} parsed target url
 */
function parseTarget(target) {
  var re = /^(https?.*[^\/])(?:\/?$)/i;
  var matchData = target.match(re);
  if (matchData) return matchData[1];
  throw new Error('<target> must be a valid url');
}
