# paramcase-keys

> Convert object keys to paramCase using [`param-case`](https://github.com/blakeembrey/param-case)

## Install

```
$ npm install paramcase-keys
```

## Usage

```js
const paramcaseKeys = require("paramcase-keys")

// Convert an object
paramcaseKeys({ fooBar: true })
//=> { "foo-bar": true }

// Convert an array of objects
paramcaseKeys([{ fooBar: true }, { barFoo: false }])
//=> [{ "foo-bar": true }, { "bar-foo": false }]

paramcaseKeys({ fooBar: true, nested: { unicorn_rainbow: true } }, { deep: true })
//=> { "foo-bar": true, nested: { "unicorn-rainbow": true } }
```

## API

### paramcaseKeys(input, [options])

#### input

Type: `Object` `Object[]`

Object or array of objects to paramCase.

#### options

Type: `Object`

##### exclude

Type: `Array<string|RegExp>`<br>
Default: `[]`

Exclude keys from being paramCased.

##### deep

Type: `boolean`<br>
Default: `false`

Recurse nested objects and objects in arrays.

## Related

- [camelcase-keys](https://github.com/sindresorhus/camelcase-keys)
- [snakecase-keys](https://github.com/bendrucker/snakecase-keys)

## License

MIT
