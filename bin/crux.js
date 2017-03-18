#!/usr/bin/env node

var fs = require('fs')
var argv = require('argv')
var generate = require('../dist/index.js').default

argv.option({
  name: 'variables',
  short: 'v',
  type: 'string',
  description: 'The relative path to your variables.json file',
  example: "'crux --variables=./vars.json' or 'crux -v ./vars.json'"
})
argv.option({
  name: 'output',
  short: 'o',
  type: 'string',
  description: 'The relative path to your destination directory',
  example: "'crux --output=./styles.css' or 'crux -o ./styles.css'"
})

function run () {
  try {
    var args = argv.run()
    var variablesPath = args.options.variables
    var outputPath = args.options.output
    var variables = fs.readFileSync(variablesPath, {
      encoding: 'utf-8'
    })
    var css = generate(JSON.parse(variables))
    fs.writeFileSync(outputPath, css)
    console.log('crux has popped your css in ' + outputPath)
  } catch (e) {
    console.error(e)
  }
}

run()
