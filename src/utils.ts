import {
  MultipleVariables,
} from './'

export function objectToString (
  obj: any,
  indent: number = 0,
): string {
  const indentChars = Array(indent + 1).join(' ')
  return Object.keys(obj).reduce((prev, key) => {
    return prev.concat(`${indentChars}${key} ${obj[key]}`)
  }, '')
}

export function generateKeysAndValues (
  prefix: string,
  variables: MultipleVariables | string,
) {
  if (typeof variables === 'string') {
    return {
      [prefix]: variables,
    }
  } else {
    return Object.keys(variables).reduce((prev, name) => {
      const key = `${prefix}-${name}`
      const variable = variables[name]
      return Object.assign({}, prev, {
        [key]: variable,
      })
    }, {})
  }
}

export function isNode () {
  return typeof window === 'undefined'
}
