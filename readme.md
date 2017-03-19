# Crux

Crux is a CLI & Node package that generates atomic css from a set of variables.

## Installation

npm install --save-dev crux

## Usage

You can use this in node or from the CLI:

### Node

```javascript
generate({
  colors: {
    primary: 'red',
    secondary: 'blue'
  }
}).then(css => console.log(css))
```

### CLI

```bash
crux -v ./vars.json -o ./styles.css -m ./styles.min.css
```

### Example variables

```javascript
{
  borderWidths: {
    small: '1px',
    medium: '2px',
    large: '3px',
  },
  colors: {
    primary: 'red',
    secondary: 'blue',
  },
  dimensions: {
    1: '1rem',
    2: '2rem',
    3: '4rem',
    4: '8rem',
    5: '16rem',
    6: '32rem',
    7: '64rem',
    8: '128rem',
  },
  fontSizes: {
    small: '0.8rem',
    medium: '1rem',
    large: '1.5rem',
  },
  fontWeights: {
    100: '100',
    200: '200',
    300: '300',
    400: '400',
    500: '500',
  },
  letterSpacings: {
    1: '1px',
    2: '2px',
    3: '3px',
    4: '4px',
  },
  lineHeights: {
    1: '0.8em',
    2: '1em',
    3: '1.2em',
    4: '1.5em',
    5: '2em',
  },
  opacity: {
    10: '0.1',
    20: '0.2',
    30: '0.3',
    40: '0.4',
    50: '0.5',
    60: '0.6',
    70: '0.7',
    80: '0.8',
    90: '0.9',
    100: '1',
  },
  radii: {
    small: '1px',
    medium: '2px',
    large: '3px',
  },
  spacing: {
    1: '1rem',
    2: '2rem',
    3: '3rem',
    4: '4rem',
    5: '5rem',
    6: '6rem',
    7: '7rem',
    8: '8rem',
  },
  media: {
    ns: {
      min: '30em',
    },
    m: {
      min: '30em',
      max: '60em',
    },
    l: {
      min: '60em',
    },
  },
}
```

## Why

Crux will suit you of you have any of the following problems:

- None of the existing CSS libraries suit the style of your app 
- You've tried writing your own homebrew css framework, but it's difficult to maintain, document and lacks structure
- You've heard of OOCSS and/of atomic CSS and like the idea
- You've tried out an atomic css library but you have ended up writing / modifying the library to suit your needs

## Prior Art

[Tachyons](http://tachyons.io)
[Basscss](http://basscss.com)

## Credits

Major shout out to [PostCSS](http://postcss.org/) & [Tachyons](http://tachyons.io) for doing all the hard work.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT