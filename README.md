# compare-regexes

compare if two RegExp Objects are equal

<a href="https://nodei.co/npm/compare-regexes/"><img src="https://nodei.co/npm/compare-regexes.png?downloads=true"></a>

[![Build Status](https://img.shields.io/badge/build-passing-brightgreen.svg?style=flat-square)](https://travis-ci.org/joaquimserafim/compare-regexes)![Code Coverage 100%](https://img.shields.io/badge/code%20coverage-100%25-green.svg?style=flat-square)[![ISC License](https://img.shields.io/badge/license-ISC-blue.svg?style=flat-square)](https://github.com/joaquimserafim/compare-regexes/blob/master/LICENSE)

## API
`var isRegexEqual = require('compare-regexes')`

**isRegexEqual(*RegExp Object*, *RegExp Object*)**

## Usage

```js
var isRegexEqual = require('compare-regexes');

var regex1 = new RegExp('[a-z]', 'i');
var regex2 = /[a-z]/i;
var regex3 = /[a-z]/;

isRegexEqual(regex1, regex2);// should return true
isRegexEqual(regex1, regex3);// should return false
```


## Development

##### this projet has been set up with a precommit that forces you to follow a code style, no jshint issues and 100% of code coverage before commit


to run test
``` js
npm test
```

to run jshint
``` js
npm run jshint
```

to run code style
``` js
npm run code-style
```

to run check code coverage
``` js
npm run check-coverage
```

to open the code coverage report
``` js
npm run open-coverage
```
