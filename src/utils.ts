export function objectToString (obj) {
  return Object.keys(obj).reduce((prev, key) => {
    return prev.concat(`${key} ${obj[key]}`)
  }, '')
}

export function generateKeysAndValues (prefix, variables = {}) {
  return Object.keys(variables).reduce((prev, name) => {
    const key = `${prefix}-${name}`
    const variable = variables[name]
    return Object.assign({}, prev, {
      [key]: variable,
    })
  }, {})
}

export function generateCssAttributes (propertyName, classes): any {
  const objOfClassNameToValue = Object.keys(classes).reduce((prev, className) => {
    const key = `.${className}`
    const value = classes[className]
    return Object.assign({}, prev, {
      [key]: `{ ${propertyName}: ${value}; }\n`,
    })
  }, {})
  return objectToString(objOfClassNameToValue)
}
