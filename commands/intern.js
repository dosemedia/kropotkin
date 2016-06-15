#!/usr/bin/env node
// Intern Test Command
//

/**
 * execute the intern tests.
 */
module.exports = (target, command) => {
  var targetUrl = parseTarget(target);
  console.log('Loading Kropotkin');
  console.log(' config: %s.js', command.config);
  console.log(" target: %s", targetUrl);
  if (command.local) console.log(' local webdriver: %s', command.local);
  require('intern/runner');
  // console.log(program.args);
};

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
