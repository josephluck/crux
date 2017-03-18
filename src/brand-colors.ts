import * as materialColors from 'material-colors'

export type MaterialColor = 'red' | 'pink' | 'purple' | 'deepPurple' | 'indigo' | 'blue' | 'lightBlue' | 'cyan' | 'teal' | 'green' | 'lightGreen' | 'lime' | 'yellow' | 'amber' | 'orange' | 'deepOrange' | 'brown' | 'grey' | 'blueGrey' | 'darkText' | 'lightText' | 'darkIcons' | 'lightIcons' | 'white' | 'black'

function getColorObject (name: string, color: MaterialColor) {
  return Object.keys(materialColors[color]).reduce((colors, shade) => {
    return {...colors, [`${name}-${shade}`]: materialColors[color][shade]}
  }, {})
}

export default function brandColors (primary: MaterialColor, accent: MaterialColor) {
  return {
    ...getColorObject('primary', primary),
    ...getColorObject('accent', accent),
    ...getColorObject('grey', 'grey'),
  }
}
