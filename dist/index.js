'use strict';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var _uuid = 'uuid',
    uuidv4 = _uuid.v4;

var pluralize = require('pluralize');

var _require = require('collect.js'),
    collect = _require.collect;

var _require2 = require('locutus/php/var'),
    empty = _require2.empty;

var _require3 = require('locutus/php/pcre'),
    preg_match = _require3.preg_match;

var _require4 = require('locutus/php/ctype'),
    ctype_lower = _require4.ctype_lower;

var _require5 = require('locutus/php/array'),
    array_merge = _require5.array_merge;

var _require6 = require('locutus/php/strings'),
    str_replace = _require6.str_replace,
    trim = _require6.trim,
    ltrim = _require6.ltrim,
    rtrim = _require6.rtrim,
    explode = _require6.explode,
    substr_count = _require6.substr_count;
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
  return !empty(segments) ? collect(segments) : collect();
};
/**
 * Cap a string with a single instance of a given value
 *
 * @param cap
 *
 * @return Stringable
 */


Stringable.prototype.finish = function (cap) {
  return new Stringable(Str.finish(this.value, cap));
};
/**
 * Determine if a given string matches a given pattern
 *
 * @param  pattern
 *
 * @return boolean
 */


Stringable.prototype.is = function (pattern) {
  return Str.is(pattern, this.value);
};
/**
 * Determine if a given string is 7 bit ASCII
 *
 * @return boolean
 */


Stringable.prototype.isAscii = function () {
  return Str.isAscii(this.value);
};
/**
 * Determine if the given string is empty.
 *
 * @return boolean
 */


Stringable.prototype.isEmpty = function () {
  return this.value === '';
};
/**
 * Determine if the given string is empty.
 *
 * @return boolean
 */


Stringable.prototype.isNotEmpty = function () {
  return !this.isEmpty();
};
/**
 * Convert a string to kebab case.
 *
 * @return Stringable
 */


Stringable.prototype.kebab = function () {
  return new Stringable(Str.kebab(this.value));
};
/**
 * Return the length of the given string
 *
 * @param encoding
 *
 * @return int
 */


Stringable.prototype.length = function () {
  var encoding = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return Str.length(this.value, encoding);
};
/**
 * Limit the number of characters in a string.
 *
 * @param limit
 * @param end
 *
 * @return Stringable
 */


Stringable.prototype.limit = function () {
  var limit = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '...';
  return new Stringable(Str.limit(this.value, limit, end));
};
/**
 * Convert the given string to lower-case
 *
 * @return Stringable
 */


Stringable.prototype.lower = function () {
  return new Stringable(Str.lower(this.value));
};
/**
 * Get the string matching the given pattern.
 *
 * @param pattern
 *
 * @return Stringable|null
 */


Stringable.prototype.match = function (pattern) {
  var matches = preg_match(pattern, this.value);

  if (!matches) {
    return new Stringable('');
  }

  return new Stringable(matches[1] || matches[0]);
}; // @TODO matchAll
// /**
//  * Get the string matching the given pattern.
//  *
//  * @param pattern
//  * @return Collection
//  */
// Stringable.prototype.matchAll = function(pattern)
// {
// 	let matches = pattern
// };

/**
 * Parse a Class@method style callback into class and method
 *
 * @param fallback
 *
 * @return array
 */


Stringable.prototype.parseCallback = function (fallback) {
  return Str.parseCallback(this.value, fallback);
};
/**
 * Get the plural form of an English word.
 *
 * @param count
 *
 * @return Stringable
 */


Stringable.prototype.plural = function () {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  return new Stringable(Str.plural(this.value, count));
};
/**
 * Pluralize the last word of an English, studly caps case string.
 *
 * @param  count
 *
 * @return Stringable
 */


Stringable.prototype.pluralStudly = function () {
  var count = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 2;
  return new Stringable(Str.pluralStudly(this.value, count));
};
/**
 * Replace the given value in the given string.
 *
 * @param search
 * @param replace
 *
 * @return Stringable
 */


Stringable.prototype.replace = function (search, replace) {
  return new Stringable(str_replace(search, replace, this.value));
};
/**
 * Replace a given value in the string sequentially with an array.
 *
 * @param search
 * @param replace
 *
 * @return Stringable
 */


Stringable.prototype.replaceArray = function (search) {
  var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
  return new Stringable(Str.replaceArray(search, replace, this.value));
};
/**
 * Replace the first occurrence of a given value in the string.
 *
 * @param search
 * @param replace
 *
 * @return Stringable
 */


Stringable.prototype.replaceFirst = function (search, replace) {
  return new Stringable(Str.replaceFirst(search, replace, this.value));
};
/**
 * Replace the last occurrence of a given value in the string.
 *
 * @param search
 * @param replace
 *
 * @return Stringable
 */


Stringable.prototype.replaceLast = function (search, replace) {
  return new Stringable(Str.replaceLast(search, replace, this.value));
}; // /** @TODO Add replaceMatches method
//  * Replace the patterns matching the given regular expression.
//  *
//  * @param  string  $pattern
//  * @param  \Closure|string  $replace
//  * @param  int  $limit
//  * @return static
//  */
// Stringable.prototype.replaceMatches = function (pattern, replace, limit = -1)
// {
//
// };

/**
 * Begin a string with a single instance of a given value
 *
 * @param  prefix
 *
 * @return Stringable
 */


Stringable.prototype.start = function (prefix) {
  return new Stringable(Str.start(this.value, prefix));
};
/**
 * Convert the given string to upper-case.
 *
 * @return Stringable
 */


Stringable.prototype.upper = function () {
  return new Stringable(Str.upper(this.value));
};
/**
 * Convert the given string to title case.
 *
 * @return Stringable
 */


Stringable.prototype.title = function () {
  return new Stringable(Str.title(this.value));
};
/**
 * Get the singular form of an English word.
 *
 * @return Stringable
 */


Stringable.prototype.singular = function () {
  return new Stringable(Str.singular(this.value));
};
/**
 *
 * @param separator
 * @param language
 *
 * @returns Stringable
 */


Stringable.prototype.slug = function () {
  var separator = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '-';
  var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
  return new Stringable(Str.slug(this.value, separator, language));
};
/**
 * Convert a string to snake case.
 *
 * @param delimiter
 *
 * @return Stringable
 */


Stringable.prototype.snake = function snake() {
  var delimiter = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '_';
  return new Stringable(Str.snake(this.value, delimiter));
};
/**
 * Determine if a given string starts with a given substring.
 *
 * @param needles
 *
 * @return boolean
 */


Stringable.prototype.startsWith = function (needles) {
  return Str.startsWith(this.value, needles);
};
/**
 * Convert a value to studly caps case.
 *
 * @return Stringable
 */


Stringable.prototype.studly = function () {
  return new Stringable(Str.studly(this.value));
};
/**
 * Returns the portion of string specified by the start and length parameters.
 *
 * @param start
 * @param length
 *
 * @return Stringable
 */


Stringable.prototype.substr = function (start) {
  var length = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return new Stringable(Str.substr(this.value, start, length));
};
/**
 * Returns the number of substring occurrences.
 *
 * @param needle
 * @param offset
 * @param length
 *
 * @return int
 */


Stringable.prototype.substrCount = function (needle) {
  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  return Str.substrCount(this.value, needle, offset, length);
};
/**
 * Trim the string of the given characters.
 *
 * @param characters
 *
 * @returns Stringable
 */


Stringable.trim = function () {
  var characters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return new Stringable(trim.apply(void 0, _toConsumableArray(array_merge([this.value], arguments))));
};
/**
 * Left trim the string of given characters.
 *
 * @param characters
 *
 * @return Stringable
 */


Stringable.ltrim = function () {
  var characters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return new Stringable(ltrim.apply(void 0, _toConsumableArray(array_merge([this.value], arguments))));
};
/**
 * Right trim the string of given characters.
 *
 * @param characters
 *
 * @return Stringable
 */


Stringable.rtrim = function () {
  var characters = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  return new Stringable(rtrim.apply(void 0, _toConsumableArray(array_merge([this.value], arguments))));
};
/**
 * Make a string's first character uppercase.
 *
 * @return Stringable
 */


Stringable.prototype.whenEmpty = function (callback) {
  if (this.isEmpty()) {
    var result = callback(this);
    return result === null || typeof result === 'undefined' ? this : result;
  }

  return this;
};
/**
 * Limit the number of words in a string.
 *
 * @param words
 * @param end
 *
 * @return Stringable
 */


Stringable.prototype.words = function () {
  var words = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 100;
  var end = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '...';
  return new Stringable(Str.words(this.value, words, end));
};
/**
 * Dump the string.
 *
 * @return this
 */


Stringable.prototype.dump = function () {
  console.log(this);
  return this;
};
/**
 * Dump the string then die.
 *
 * @return void
 */


Stringable.prototype.dd = function () {
  this.dump();

  if (typeof process !== 'undefined') {
    if (typeof process.exit !== 'undefined') {
      process.exit(1);
    }
  }
};
/**
 * Proxy dynamic properties properties onto methods.
 *
 * @param key
 *
 * @return mixed
 */


Stringable.prototype.get = function (key) {
  return this[key]();
};
/**
 * Stringable.dirname
 */

/**
 * Used when returning as a string operation
 *
 * @returns string
 */


Stringable.prototype.toLocaleString = function () {
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
  return this.toString();
};
/**
 * Used when returning as a value operation
 *
 * @returns string
 */


Stringable.prototype.valueOf = function () {
  return "".concat(this.value);
};

var Pluralizer = /*#__PURE__*/function () {
  function Pluralizer() {
    _classCallCheck(this, Pluralizer);
  }

  _createClass(Pluralizer, null, [{
    key: "plural",

    /**
     * Get the plural form of an English word.
     *
     * @param value
     * @param count
     *
     * @return string
     */
    value: function plural(value) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      if (Math.abs(count) === 1 || Pluralizer.uncountable(value)) {
        return value;
      }

      var plural = Pluralizer.inflector().plural(value);
      return Pluralizer.matchCase(plural, value);
    }
    /**
     * Get the singular form of an English word.
     *
     * @param value
     *
     * @return string
     */

  }, {
    key: "singular",
    value: function singular(value) {
      var single = Pluralizer.inflector().singular(value);
      return Pluralizer.matchCase(single, value);
    }
    /**
     * Determine if the given value is uncountable.
     *
     * @param value
     *
     * @returns boolean
     */

  }, {
    key: "uncountable",
    value: function uncountable(value) {
      return Pluralizer.rules.uncountable.includes(value.toLowerCase());
    }
    /**
     * Determine if the given value is plural.
     *
     * @param value
     *
     * @returns boolean
     */

  }, {
    key: "isPlural",
    value: function isPlural() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return Pluralizer.inflector().isPlural(value);
    }
    /**
     * Determine if the given value is singular.
     *
     * @param value
     *
     * @returns boolean
     */

  }, {
    key: "isSingular",
    value: function isSingular() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return Pluralizer.inflector().isSingular(value);
    }
    /**
     * Attempt to match the case on two strings
     *
     * @param  value
     * @param comparison
     *
     * @return string
     */

  }, {
    key: "matchCase",
    value: function matchCase(value, comparison) {
      if (comparison.toLowerCase() === comparison) {
        return value.toLowerCase();
      }

      if (comparison.toUpperCase() === comparison) {
        return value.toUpperCase();
      }

      if (comparison[0].toUpperCase() + comparison.slice(1) === comparison) {
        return value[0].toUpperCase() + value.slice(1);
      }

      return value;
    }
    /**
     * Get the pluralize instance
     *
     * @return Pluralizer.inflection
     */

  }, {
    key: "inflector",
    value: function inflector() {
      if (typeof Pluralizer.inflection === 'undefined') {
        Pluralizer.inflection = pluralize;
        Pluralizer.rules.uncountable.forEach(function (uncountable) {
          return Pluralizer.inflection.addUncountableRule(uncountable);
        });
        Object.entries(Pluralizer.rules.plural).forEach(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              plural = _ref2[0],
              rule = _ref2[1];

          return Pluralizer.inflection.addIrregularRule(rule, plural);
        });
        Object.entries(Pluralizer.rules.singular).forEach(function (_ref3) {
          var _ref4 = _slicedToArray(_ref3, 2),
              singular = _ref4[0],
              rule = _ref4[1];

          return Pluralizer.inflection.addIrregularRule(rule, singular);
        });
        Object.entries(Pluralizer.rules.irregular).forEach(function (_ref5) {
          var _ref6 = _slicedToArray(_ref5, 2),
              irregularity = _ref6[0],
              rule = _ref6[1];

          return Pluralizer.inflection.addIrregularRule(rule, irregularity);
        });
      }

      return Pluralizer.inflection;
    }
  }]);

  return Pluralizer;
}();

Pluralizer.rules = {
  plural: {},
  singular: {},
  irregular: {},
  uncountable: ['audio', 'bison', 'cattle', 'chassis', 'compensation', 'coreopsis', 'data', 'deer', 'education', 'emoji', 'equipment', 'evidence', 'feedback', 'firmware', 'fish', 'furniture', 'gold', 'hardware', 'information', 'jedi', 'kin', 'knowledge', 'love', 'metadata', 'money', 'moose', 'news', 'nutrition', 'offspring', 'plankton', 'pokemon', 'police', 'rain', 'recommended', 'related', 'rice', 'series', 'sheep', 'software', 'species', 'swine', 'traffic', 'wheat']
};

var Str = /*#__PURE__*/function () {
  function Str() {
    _classCallCheck(this, Str);
  }

  _createClass(Str, null, [{
    key: "of",

    /**
     * The cache of snake-cased words
     *
     * @var object
     */

    /**
     * The cache of camel-cased words
     *
     * @var object
     */

    /**
     * The cache of studly-cased words
     *
     * @var object
     */

    /**
     * The callback that should be used to generate UUIDs.
     *
     * @var callback
     */

    /**
     * Get a new stringable object from the given string.
     *
     * @param string string
     * @return Stringable
     */
    value: function of(string) {
      return new Stringable(string);
    }
    /**
     * Return the remainder of a string after the first occurrence of a given value
     *
     * @param subject
     * @param search
     *
     * @return string
     */

  }, {
    key: "after",
    value: function after(subject) {
      var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return search === '' || subject.indexOf(search) === -1 ? subject : subject.substr(subject.indexOf(search) + search.length);
    }
    /**
     * Returns the remainder of a string after the last occurrence of a given value
     *
     * @param subject
     * @param search
     *
     * @return string
     */

  }, {
    key: "afterLast",
    value: function afterLast(subject) {
      var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return search === '' || subject.indexOf(search) === -1 ? subject : subject.substr(subject.lastIndexOf(search) + search.length);
    }
    /**
     * Transliterate a UTF-8 value to ASCII.
     *
     * @param value
     * @param language
     *
     * @return string
     */

  }, {
    key: "ascii",
    value: function ascii() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var language = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'en';
      return String.fromCharCode.apply(String, _toConsumableArray(value.split('').map(function (character) {
        return character.charCodeAt(0);
      })));
    }
    /**
     * Get the portion of a string before the first occurrence of a given value
     *
     * @param subject
     * @param search
     *
     * @return string
     */

  }, {
    key: "before",
    value: function before(subject) {
      var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return search === '' || subject.indexOf(search) === -1 ? subject : subject.substr(0, subject.indexOf(search));
    }
    /**
     * Get the portion of a string before the last occurrence of a given value
     *
     * @param subject
     * @param search
     *
     * @return string
     */

  }, {
    key: "beforeLast",
    value: function beforeLast(subject) {
      var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return search === '' || subject.indexOf(search) === -1 ? subject : subject.substr(0, subject.lastIndexOf(search));
    }
    /**
     * Get the portion of a string between two given values
     *
     * @param subject
     * @param at
     * @param to
     *
     * @return string
     */

  }, {
    key: "between",
    value: function between(subject) {
      var at = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var to = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
      return subject.indexOf(at) === -1 || subject.indexOf(to) === -1 ? subject : Str.beforeLast(Str.after(subject, at), to);
    }
    /**
     * Convert a value to camel case.
     *
     * @param value
     *
     * @return string
     */

  }, {
    key: "camel",
    value: function camel() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      if (typeof Str.camelCache[value] !== 'undefined') {
        return Str.camelCache[value];
      }

      var studly = Str.studly(value);
      return Str.camelCache[value] = "".concat(studly[0].toLowerCase()).concat(studly.slice(1));
    }
    /**
     * Determine if a given string contains a given substring.
     *
     * @param haystack
     * @param needles
     *
     * @return boolean
     */

  }, {
    key: "contains",
    value: function contains(haystack) {
      var needles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return Array.isArray(needles) ? needles.some(function (needle) {
        return haystack.includes(needle);
      }) : haystack.includes(needles);
    }
    /**
     * Determine if a given string contains all array values
     *
     * @param haystack
     * @param needles[]
     *
     * @return boolean
     */

  }, {
    key: "containsAll",
    value: function containsAll(haystack) {
      var needles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return needles.every(function (needle) {
        return haystack.includes(needle);
      });
    }
    /**
     * Determine if a given string ends with a given substring
     *
     * @param haystack
     * @param needles
     *
     * @return boolean
     */

  }, {
    key: "endsWith",
    value: function endsWith(haystack) {
      var needles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return Array.isArray(needles) ? needles.some(function (needle) {
        return haystack.substr(-needle.length) === needle;
      }) : haystack.substr(-needles.length) === needles;
    }
    /**
     * Cap a string with a single instance of a given value if it doesnt already end with it
     *
     * @param value
     * @param cap
     *
     * @return string
     */

  }, {
    key: "finish",
    value: function finish(value, cap) {
      return Str.endsWith(value, cap) ? value : "".concat(value).concat(cap);
    }
    /**
     * Determine if a given string matches a given pattern
     *
     * @param pattern
     * @param value
     *
     * @return boolean
     */

  }, {
    key: "is",
    value: function is(pattern, value) {
      var patterns = Array.isArray(pattern) ? pattern : [pattern];
      return patterns.some(function (pattern) {
        if (value === pattern) return true;else if (pattern.includes('*') === false) return new RegExp(pattern).test(value);else if (pattern.includes('*')) return new RegExp(pattern.replace(/\*/g, '.*')).test(value);
      });
    }
    /**
     * Determine if a given string is 7 bit ASCII
     *
     * @param value
     * @returns boolean
     */

  }, {
    key: "isAscii",
    value: function isAscii(value) {
      // extended Ascii pattern /^[\x00-\xFF]*$/
      // 128 char Ascii pattern /^[\x00-\x7F]*$/
      return /^[\x00-\xFF]*$/.test(String(value));
    }
    /**
     * Determine if a given string is valid UUID.
     *
     * @param value
     *
     * @return boolean
     */

  }, {
    key: "isUuid",
    value: function isUuid(value) {
      if (typeof value !== 'string') {
        return false;
      }

      return preg_match('/^[\da-f]{8}-[\da-f]{4}-[\da-f]{4}-[\da-f]{4}-[\da-f]{12}$/iD', value) > 0;
    }
    /**
     * Convert a string to kebab case.
     *
     * @param value
     *
     * @return string
     */

  }, {
    key: "kebab",
    value: function kebab(value) {
      return Str.snake(value, '-');
    }
    /**
     * Convert a string to snake case.
     *
     * @param value
     * @param delimiter
     *
     * @return string
     */

  }, {
    key: "snake",
    value: function snake(value) {
      var delimiter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '_';
      var key = value;

      if (typeof Str.snakeCache !== 'undefined') {
        if (typeof Str.snakeCache[delimiter] !== 'undefined') {
          return Str.snakeCache[key][delimiter];
        }
      }

      if (!ctype_lower(value)) {
        Str.snakeCache[key] = _objectSpread(_objectSpread({}, Str.snakeCache[key] || {}), {}, _defineProperty({}, delimiter, value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(function (x) {
          return x.toLowerCase();
        }).join(delimiter)));
        return Str.snakeCache[key][delimiter];
      }

      Str.snakeCache[key] = _objectSpread(_objectSpread({}, Str.snakeCache[key] || {}), {}, _defineProperty({}, delimiter, value));
      return Str.snakeCache[key][delimiter];
    }
    /**
     * Return the length of the given string
     *
     * @param value
     * @param encoding
     *
     * @return int
     *
     * @TODO add encoding option
     */

  }, {
    key: "length",
    value: function length() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var encoding = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return value.length;
    }
    /**
     * Limit the number of characters in a string
     *
     * @param value
     * @param limit
     * @param end
     *
     * @return string
     */

  }, {
    key: "limit",
    value: function limit() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var _limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
      return value.length < _limit ? value : value.slice(0, _limit) + end;
    }
    /**
     * Convert the given string to lower-case.
     *
     * @param value
     *
     * @return string
     */

  }, {
    key: "lower",
    value: function lower() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return value.toLocaleLowerCase();
    }
    /**
     * Limit the number of words in a string.
     *
     * @param value
     * @param words
     * @param end
     *
     * @return string
     */

  }, {
    key: "words",
    value: function words() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

      var _words = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;

      var end = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '...';
      var word = value.split(' ');
      return word.length <= _words ? value : word.slice(0, _words).join(" ") + end;
    }
    /**
     * Parse a Class[@]method style callback into class and method.
     *
     * @param callback
     * @param fallback
     *
     * @return array
     */

  }, {
    key: "parseCallback",
    value: function parseCallback(callback) {
      var fallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      return Str.contains(callback, '@') ? explode('@', callback, 2) : [callback, fallback];
    }
    /**
     * Get the plural form of an english word
     *
     * @param value
     * @param count
     *
     * @return string
     */

  }, {
    key: "plural",
    value: function plural(value) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;
      return Pluralizer.plural(value, count);
    }
    /**
     * Pluralize the last word of an English, studly caps case string.
     *
     * @param value
     * @param count
     *
     * @return string
     */

  }, {
    key: "pluralStudly",
    value: function pluralStudly(value) {
      var count = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 2;

      var _value$split = value.split(/(?=[A-Z][^A-Z]+$)/),
          _value$split2 = _slicedToArray(_value$split, 2),
          until = _value$split2[0],
          last_word = _value$split2[1];

      return until + Str.plural(last_word, count);
    }
    /**
     * Generate a more truly "random" alpha-numeric string.
     *
     * @param length
     *
     * @return string
     */

  }, {
    key: "random",
    value: function random() {
      var length = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 16;
      var random = '';
      var alpha_numeric = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

      for (var i = 0; i < length; i++) {
        var character_index = Math.floor(Math.random() * Math.floor(alpha_numeric.length));
        random += alpha_numeric.slice(character_index, character_index + 1);
      }

      return random;
    }
    /**
     * Replace a given value in the string sequentially with an array.
     *
     * @param search
     * @param replace
     * @param subject
     *
     * @return string
     */

  }, {
    key: "replaceArray",
    value: function replaceArray(search) {
      var replace = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var subject = arguments.length > 2 ? arguments[2] : undefined;

      if (Array.isArray(replace) === false) {
        throw Error("Str.replaceArray requires that parameter two (replace) is an array. Passed In: " + JSON.stringify(replace));
      }

      return replace.reduce(function (value, replacer) {
        return value.replace(search, replacer);
      }, subject);
    }
    /**
     * Replace the first occurrence of a given value in the string.
     *
     * @param search
     * @param replace
     * @param subject
     *
     * @return string
     */

  }, {
    key: "replaceFirst",
    value: function replaceFirst(search, replace, subject) {
      if (search === '') {
        return subject;
      }

      var search_index = subject.indexOf(search);

      if (search_index === -1) {
        return subject;
      }

      var start = subject.substr(0, search_index);
      var after = subject.substr(search_index + search.length, subject.length);
      return "".concat(start).concat(replace).concat(after);
    }
    /**
     * Replace the last occurrence of a given value in the string
     *
     * @param search
     * @param replace
     * @param subject
     *
     * @returns string
     */

  }, {
    key: "replaceLast",
    value: function replaceLast(search, replace, subject) {
      if (search === '') {
        return subject;
      }

      var search_index = subject.lastIndexOf(search);

      if (search_index === -1) {
        return subject;
      }

      var start = subject.substr(0, search_index);
      var after = subject.substr(search_index + search.length, subject.length);
      return "".concat(start).concat(replace).concat(after);
    }
    /**
     * Begin a string with a single instance of a given value.
     *
     * @param value
     * @param prefix
     *
     * @return string
     */

  }, {
    key: "start",
    value: function start(value, prefix) {
      return Str.startsWith(value, prefix) ? value : "".concat(prefix).concat(value);
    }
    /**
     * Convert a value to studly caps case
     *
     * @param value
     *
     * @return string
     */

  }, {
    key: "studly",
    value: function studly(value) {
      var key = value;

      if (typeof Str.studlyCache[key] !== 'undefined') {
        return Str.studlyCache[key];
      }

      return Str.studlyCache[key] = value.replace(/_/g, ' ').replace(/-/g, ' ').split(' ').reduce(function (str, word) {
        return "".concat(str).concat(word[0].toUpperCase()).concat(word.slice(1));
      }, '');
    }
    /**
     * Convert the given string to upper-case
     *
     * @param value
     *
     * @return string
     */

  }, {
    key: "upper",
    value: function upper(value) {
      return value.toLocaleUpperCase();
    }
    /**
     * Convert the given string to title case.
     *
     * @param value
     *
     * @return string
     */

  }, {
    key: "title",
    value: function title(value) {
      return Str.snake(value).split('_').map(function (word) {
        return Str.ucfirst(word);
      }).join(' ');
    }
    /**
     * Get the singular form of an English word.
     *
     * @param value
     * @return string
     */

  }, {
    key: "singular",
    value: function singular(value) {
      return Pluralizer.singular(value);
    }
    /**
     * Generate a URL friendly "slug" from a given string.
     *
     * @param  title
     * @param  separator
     * @param  language
     *
     * @return string
     */

  }, {
    key: "slug",
    value: function slug(title) {
      var separator = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '-';
      var language = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en';
      title = title.toLocaleString();
      var slug = Str.snake(title.replace(/@/g, '_at_')).replace(/_/g, separator).trim();
      return slug[0] === separator ? slug.slice(1, slug.length) : slug;
    }
    /**
     * Determine if a given string starts with a given substring
     *
     * @param haystack
     * @param needles
     *
     * @return boolean
     */

  }, {
    key: "startsWith",
    value: function startsWith(haystack) {
      var needles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      return Array.isArray(needles) ? needles.some(function (needle) {
        return haystack.startsWith(needle);
      }) : haystack.substr(0, needles.length) === needles;
    }
    /**
     * Returns the portion of string specified by the start and length parameters
     *
     * @param string
     * @param start
     * @param length
     *
     * @return string
     */

  }, {
    key: "substr",
    value: function substr(string, start) {
      var length = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      return string.slice(start, start + length);
    }
    /**
     * Returns the number of substring occurrences
     *
     * @param haystack
     * @param needle
     * @param offset
     * @param length
     *
     * @return int
     */

  }, {
    key: "substrCount",
    value: function substrCount(haystack, needle, offset) {
      var length = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;

      if (length === null) {
        return substr_count(haystack, needle, offset);
      } else {
        return substr_count(haystack, needle, offset, length);
      }
    }
    /**
     * Make a strings first character upper case.
     *
     * @param value
     *
     * @return value
     */

  }, {
    key: "ucfirst",
    value: function ucfirst() {
      var value = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      if (value.length === 0) return value;
      if (value.length === 1) return value[0].toUpperCase();
      return value[0].toUpperCase() + value.slice(1);
    }
    /**
     * @TODO orderedUUID
     * (Datetime > Decimal > Hex)-(variant)->(uuidv4 version)-(uuidv4 variant)
     * @see https://itnext.io/laravel-the-mysterious-ordered-uuid-29e7500b4f8
     **/
    //
    // /**
    //  * Generate a time-ordered UUID (version 4).
    //  *
    //  * @return uuid
    //  */
    // static orderedUuid() {
    // 	if (typeof Str.uuidFactory !== 'undefined') {
    // 		return Str.uuidFactory();
    // 	}
    // }

    /**
     * Generate a UUID (version 4).
     *
     * @return string
     */

  }, {
    key: "uuid",
    value: function uuid() {
      return typeof Str.uuidFactory === 'undefined' ? uuidv4() : Str.uuidFactory();
    }
    /**
     * Set the callable that will be used to generate UUIDs.
     *
     * @param factory
     *
     * @return void
     */

  }, {
    key: "createUuidsUsing",
    value: function createUuidsUsing() {
      var factory = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

      if (typeof factory !== 'function' && factory !== null) {
        throw Error('create uuidsUsing only excepts functions.');
      }

      Str.uuidFactory = factory;
    }
    /**
     * Indicate that UUIDs should be created normally and not using a custom factory.
     *
     * @return void
     */

  }, {
    key: "createUuidsNormally",
    value: function createUuidsNormally() {
      Str.uuidFactory = null;
    }
  }]);

  return Str;
}();

Str.snakeCache = {};
Str.camelCache = {};
Str.studlyCache = {};
module.exports.Str = Str;