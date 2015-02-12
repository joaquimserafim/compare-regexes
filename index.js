'use strict';

var isRegExp = require('is.regexp');

module.exports = compare;

function compare(regex1, regex2) {
  if (isRegExp(regex1) && isRegExp(regex1)) {
    var props = [
      'global',
      'multiline',
      'ignoreCase',
      'source'
    ];

    for (var i = 0, prop; i < props.length; i++) {
      prop = props[i];
      if (regex1[prop] !== regex2[prop]) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}
