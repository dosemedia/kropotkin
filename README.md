# Kropotkin - npm package for managing remote intern/leadfoot tests
_beta_

## Summary
Kropotkin is a simple CLI helper wrapper for the [intern](https://theintern.github.io/intern/#what-is-intern) testing framework. While intern does have its own CLI, Kropotkin extends this by managing a local instance of your webdriver (currently only chromedriver is supported).

This package was created primarily to allow developers to quickly run functional tests against a development environment.

## Installation
`npm install -g <this repo's git remote>`

## Running locally
* assumes your local directory has `intern` and `chromedriver` npm packages installed
`krop test <test_target_url> [-c <config>]` - chromedriver, intern config defaults to `./local.js`
`krop test <url> -R -c jenkins` - run against remote selenium with ``./jenkins.js` as your intern config
