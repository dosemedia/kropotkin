# Kropotkin - npm package for managing remote intern/leadfoot tests
_in development_
## Installation
`npm install -g <this repo's git remote>`

## Running locally
* assumes your local directory has `intern` and `chromedriver` npm packages installed
`krop test <test_target_url> [-c <config>]` - chromedriver, intern config defaults to ./local.js
`krop test <url> -R -c jenkins` - run against remote selenium with ./jenkins.js
