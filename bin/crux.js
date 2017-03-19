#!/usr/bin/env node

const fs = require('fs')
const argv = require('argv')
const generate = require('../').default

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
  name: 'minify',
  short: 'm',
  type: 'string',
  description: 'The relative path to your destination directory for a minified bundle',
  example: "'crux --minify=./styles.min.css' or 'crux -m ./styles.min.css'"
})

function run () {
  const args = argv.run()
  const variablesPath = args.options.variables
  const outputPath = args.options.output
  const minifiedPath = args.options.minify
  const variables = fs.readFileSync(variablesPath, { encoding: 'utf-8' })

  const generateCss = outputPath 
    ? generate(JSON.parse(variables), false).then(css => fs.writeFileSync(outputPath, css)).catch(console.error)
    : Promise.resolve()

  const generateMin = minifiedPath 
    ? generate(JSON.parse(variables), true).then(css => fs.writeFileSync(minifiedPath, css)).catch(console.error)
    : Promise.resolve()

  return Promise.all([ generateCss, minifiedPath ])
    .then(() => console.log('Crux has popped your css in ' + outputPath))
    .catch(e => console.error(e))
}

run()
