'use strict';

var test = require('tape');
var compare = require('./');

var fn = function(val) {return val;};

test('should be equal the two RegExp Objects', function(assert) {
  assert.deepEqual(compare(/[a-z]/, new RegExp('[a-z]')), true);
  assert.deepEqual(compare(/[a-z]/i, new RegExp('[a-z]', 'i')), true);
  assert.deepEqual(compare(/[a-z]/m, new RegExp('[a-z]', 'm')), true);
  assert.deepEqual(compare(/[a-z]/g, new RegExp('[a-z]', 'g')), true);
  assert.deepEqual(compare(/[a-z]/img, new RegExp('[a-z]', 'img')), true);
  assert.deepEqual(compare(fn(/[a-z]/img), new RegExp('[a-z]', 'img')), true);
  assert.end();
});

test('shouldn\'t be equal the two RegExp Objects', function(assert) {
  assert.deepEqual(compare(/[a-z]/, new RegExp('[a-z]', 'i')), false);
  assert.deepEqual(compare(/[a-z]/g, new RegExp('[a-z]', 'i')), false);
  assert.deepEqual(compare(/[a-z]/m, new RegExp('[a-z]', 'img')), false);
  assert.deepEqual(compare(/[a-zA-Z]/, new RegExp('[a-z]')), false);
  assert.deepEqual(compare(fn(/[a-z]/i), new RegExp('[a-z]')), false);
  assert.end();
});

test('bad RegExp', function(assert) {
  assert.deepEqual(compare(null, new RegExp('[a-z]')), false);
  assert.deepEqual(compare(undefined, new RegExp('[a-z]')), false);
  assert.deepEqual(compare(Object, new RegExp('[a-z]')), false);
  assert.deepEqual(compare(Function, new RegExp('[a-z]')), false);
  assert.deepEqual(compare([], new RegExp('[a-z]')), false);
  assert.deepEqual(compare({}, new RegExp('[a-z]')), false);
  assert.deepEqual(compare('[a-z]', new RegExp('[a-z]')), false);
  assert.deepEqual(compare('', new RegExp('[a-z]')), false);
  assert.deepEqual(compare(1, new RegExp('[a-z]')), false);
  assert.deepEqual(compare(fn, new RegExp('[a-z]')), false);
  assert.deepEqual(compare(fn(), new RegExp('[a-z]')), false);
  assert.deepEqual(compare(fn('[a-z]'), new RegExp('[a-z]')), false);
  assert.end();
});
