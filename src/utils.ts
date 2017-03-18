export function objectToString (obj, indent = 0) {
  const indentChars = Array(indent + 1).join(' ')
  return Object.keys(obj).reduce((prev, key) => {
    return prev.concat(`${indentChars}${key} ${obj[key]}`)
  }, '')
}

export function generateKeysAndValues (prefix, variables = {}, suffix?: string) {
  return Object.keys(variables).reduce((prev, name) => {
    const key = suffix ? `${prefix}-${name}-${suffix}` : `${prefix}-${name}`
    const variable = variables[name]
    return Object.assign({}, prev, {
      [key]: variable,
    })
  }, {})
}

export function generateCssAttributes (propertyName, classes, indent?: number): any {
  const objOfClassNameToValue = Object.keys(classes).reduce((prev, className) => {
    const key = `.${className}`
    const value = classes[className]
    return Object.assign({}, prev, {
      [key]: `{ ${propertyName}: ${value}; }\n`,
    })
  }, {})
  return objectToString(objOfClassNameToValue, indent)
}

export function wrapInMedia (css, min, max) {
  return [
    `@media screen and (min-width: ${min}) and (max-width: ${max}) {`,
    `${css}}`,
    ``,
  ].join('\n')
}