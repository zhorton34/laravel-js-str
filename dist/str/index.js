'use strict'; // const { stringable } = require('../Stringable/index.js');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Str = /*#__PURE__*/function () {
  function Str() {
    _classCallCheck(this, Str);
  }

  _createClass(Str, null, [{
    key: "after",

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
    // /**
    //  * Get a new stringable object from the given string.
    //  *
    //  * @param string string
    //  * @return Stringable
    //  */
    // static of(string)
    // {
    // 	return new Stringable(string);
    // }

    /**
     * Return the remainder of a string after the first occurrence of a given value
     *
     * @param subject
     * @param search
     *
     * @return string
     */
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
  }]);

  return Str;
}();

Str.snakeCache = {};
Str.camelCache = {};
Str.studlyCache = {};
module.exports.Str = Str;