'use strict';

var _require = require('collect.js'),
    collect = _require.collect;

var _require2 = require('locutus/php/strings'),
    explode = _require2.explode;

var toString = Object.prototype.toString;
/**
 * @return {string}
 */

function Stringable(value) {
  this.value = value;
  return "".concat(this.value);
}
/**
 * Return the remainder of a string after the first occurrence of a given value
 *
 * @param search
 *
 * @return Stringable
 */


Stringable.prototype.after = function () {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return new Stringable(Str.after(this.value, search));
};
/**
 * Returns the remainder of a string after the last occurrence of a given value
 *
 * @param subject
 * @param search
 *
 * @return Stringable
 */


Stringable.prototype.afterLast = function (subject) {
  var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new Stringable(Str.afterLast(this.value, search));
};
/**
 * Append the given values to the string.
 *
 * @param values
 *
 * @return Stringable
 */


Stringable.prototype.append = function () {
  for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
    values[_key] = arguments[_key];
  }

  return new Stringable(this.value + values.join(''));
};
/**
 * Transliterate a UTF-8 value to ASCII.
 *
 * @param language
 *
 * @return Stringable
 */


Stringable.prototype.ascii = function () {
  var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
  return new Stringable(Str.ascii(this.value, language));
};
/**
 * Get the portion of a string before the first occurrence of a given value
 *
 * @param search
 *
 * @return Stringable
 */


Stringable.prototype.before = function () {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return new Stringable(Str.before(this.value, search));
};
/**
 * Get the portion of a string before the last occurrence of a given value
 *
 * @param search
 *
 * @return Stringable
 */


Stringable.prototype.beforeLast = function () {
  var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  return new Stringable(Str.beforeLast(this.value, search));
};
/**
 * Get the portion of a string between two given values
 *
 * @param at
 * @param to
 *
 * @return Stringable
 */


Stringable.prototype.between = function () {
  var at = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  return new Stringable(Str.between(this.value, at, to));
};
/**
 * Convert a value to camel case.
 *
 * @return Stringable
 */


Stringable.prototype.camel = function () {
  return new Stringable(Str.camel(this.value));
};
/**
 * Determine if a given string contains a given substring.
 *
 * @param needles
 *
 * @return boolean
 */


Stringable.prototype.contains = function () {
  var needles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Str.contains(this.value, needles);
};
/**
 * Determine if a given string contains all array values
 *
 * @param needles[]
 *
 * @return boolean
 */


Stringable.prototype.containsAll = function () {
  var needles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Str.containsAll(this.value, needles);
};
/**
 * Determine if a given string ends with a given substring
 *
 * @param needles
 *
 * @return boolean
 */


Stringable.prototype.endsWith = function () {
  var needles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  return Str.endsWith(this.value, needles);
};
/**
 * Cap a string with a single instance of a given value if it doesnt already end with it
 *
 * @param cap
 *
 * @return Stringable
 */


Stringable.prototype.finish = function (cap) {
  return new Stringable(Str.finish(this.value, cap));
};
/**
 * Determine if the string is an exact match with the given value.
 *
 * @param value
 *
 * @return boolean
 */


Stringable.prototype.exactly = function (value) {
  return this.value === value;
};
/**
 * Explode the string into an array.
 *
 * @param delimiter
 * @param limit
 *
 * @return Collection
 */


Stringable.prototype.explode = function (delimiter) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_SAFE_INTEGER;
  return collect(explode(delimiter, this.value, limit));
};
/**
 * Split a string using a regular expression.
 *
 * @param pattern
 * @param limit
 * @param flags
 *
 * @return Collection
 */


Stringable.prototype.split = function (pattern) {
  var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
  var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  var segments = this.value.split(new RegExp(pattern));
};
/**
 * Used when returning as a string operation
 *
 * @returns string
 */


Stringable.prototype.toLocaleString = function () {
  console.log('to locale string');
  return "".concat(this.value);
};
/**
 * Used when returning as a string operation
 *
 * @returns string
 */


Stringable.prototype.toString = function () {
  return "".concat(this.value);
};
/**
 * Used when JSON.stringify is called
 */


Stringable.prototype.toJSON = function () {
  return "".concat(this.value);
};
/**
 * Used when returning as a value operation
 *
 * @returns string
 */


Stringable.prototype.valueOf = function () {
  return "".concat(this.value);
}; // const handler = {
// 	get: function (target, prop, receiver) {
// 		if ()
// 	}
// };


module.exports = Stringable;