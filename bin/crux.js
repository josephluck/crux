#!/usr/bin/env node

const fs = require('fs')
const argv = require('argv')
const generate = require('../lib').default

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
  description: 'The relative path to your destination directory for a non-minified bundle',
  example: "'crux --output=./styles.css' or 'crux -o ./styles.css'"
})
argv.option({
  name: 'parameters',
  short: 'p',
  type: 'string',
  description: 'The relative path to your parameters file',
  example: "'crux --parameters=./parameters.json' or 'crux -o ./parameters.json'"
})

function run () {
  const args = argv.run()
  const variablesPath = args.options.variables
  const outputPath = args.options.output
  const minifiedPath = args.options.minify
  const options = args.options.parameters
  const variables = fs.readFileSync(variablesPath, { encoding: 'utf-8' })

  const generateCss = outputPath 
    ? generate(JSON.parse(variables), options).then(css => fs.writeFileSync(outputPath, css)).catch(console.error)
    : Promise.resolve()

  return generateCss
    .then(() => console.log('Crux has popped your css in ' + outputPath))
    .catch(e => console.error(e))
}

run()
