#!/usr/bin/env node
exports.quote = require('./quote');
exports.intern = require('./intern');

// run the intern tests
intern = () => {
  console.log('Loading Kropotkin');
  console.log(' config: %j.js', program.config);
  console.log(' target url: %j.js', program.target);
};
