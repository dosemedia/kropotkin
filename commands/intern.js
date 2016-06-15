#!/usr/bin/env node
// Intern Test Command
//

module.exports = (target, command) => {
  var targetUrl = parseTarget(target);
  console.log('Loading Kropotkin');
  console.log(' config: %s.js', command.config);
  console.log(" target: %s", targetUrl);
  // console.log(program.args);
};

function parseTarget(target) {
  var re = /^(https?.*[^\/])(?:\/?$)/i;
  var matchData = target.match(re);
  if (matchData) return matchData[1];
  throw new Error('<target> must be a valid url');
}
