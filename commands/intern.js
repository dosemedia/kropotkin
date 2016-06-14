#!/usr/bin/env node
// Intern Test Command
//

exports.intern = (target, command) => {
  var targetUrl = parseTarget(target);
  console.log('Loading Kropotkin');
  console.log(' config: %j.js', program.config);
  console.log("target: %j", targetUrl);
  // console.log(program.args);
};

function parseTarget(target) {
  var matchData = /^(https?.*[^\/])(?:\/?$)/i.match(target);
  if (matchData) return matchData[1];
  throw new Error('<target> must be a valid url');
}
