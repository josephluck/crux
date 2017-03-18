import * as fs from 'fs'
import generate from './css'

export default function (opts) {
  const css = generate(opts.variables)
  fs.writeFileSync(opts.destination, css)
}
