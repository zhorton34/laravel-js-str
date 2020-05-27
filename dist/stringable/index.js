'use strict';

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var _require = require('collect.js'),
    collect = _require.collect;

var _require2 = require('../str/index.js'),
    Str = _require2.Str;

var _require3 = require('locutus/php/strings'),
    _explode = _require3.explode;

var Stringable = /*#__PURE__*/function () {
  function Stringable(value) {
    _classCallCheck(this, Stringable);

    this.value = String(value);
  }
  /**
   * Return the remainder of a string after the first occurrence of a given value
   *
   * @param search
   *
   * @return Stringable
   */


  _createClass(Stringable, [{
    key: "after",
    value: function after() {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return new Stringable(Str.after(this.value, search));
    }
    /**
     * Returns the remainder of a string after the last occurrence of a given value
     *
     * @param subject
     * @param search
     *
     * @return Stringable
     */

  }, {
    key: "afterLast",
    value: function afterLast(subject) {
      var search = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return new Stringable(Str.afterLast(this.value, search));
    }
    /**
     * Append the given values to the string.
     *
     * @param values
     *
     * @return Stringable
     */

  }, {
    key: "append",
    value: function append() {
      for (var _len = arguments.length, values = new Array(_len), _key = 0; _key < _len; _key++) {
        values[_key] = arguments[_key];
      }

      return new Stringable(this.value + values.join(''));
    }
    /**
     * Transliterate a UTF-8 value to ASCII.
     *
     * @param language
     *
     * @return Stringable
     */

  }, {
    key: "ascii",
    value: function ascii() {
      var language = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'en';
      return new Stringable(Str.ascii(this.value, language));
    }
    /**
     * Get the portion of a string before the first occurrence of a given value
     *
     * @param search
     *
     * @return Stringable
     */

  }, {
    key: "before",
    value: function before() {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return new Stringable(Str.before(this.value, search));
    }
    /**
     * Get the portion of a string before the last occurrence of a given value
     *
     * @param search
     *
     * @return Stringable
     */

  }, {
    key: "beforeLast",
    value: function beforeLast() {
      var search = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      return new Stringable(Str.beforeLast(this.value, search));
    }
    /**
     * Get the portion of a string between two given values
     *
     * @param at
     * @param to
     *
     * @return Stringable
     */

  }, {
    key: "between",
    value: function between() {
      var at = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
      var to = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      return new Stringable(Str.between(this.value, at, to));
    }
    /**
     * Convert a value to camel case.
     *
     * @return Stringable
     */

  }, {
    key: "camel",
    value: function camel() {
      return new Stringable(Str.camel(this.value));
    }
    /**
     * Determine if a given string contains a given substring.
     *
     * @param needles
     *
     * @return boolean
     */

  }, {
    key: "contains",
    value: function contains() {
      var needles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return Str.contains(this.value, needles);
    }
    /**
     * Determine if a given string contains all array values
     *
     * @param needles[]
     *
     * @return boolean
     */

  }, {
    key: "containsAll",
    value: function containsAll() {
      var needles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return Str.containsAll(this.value, needles);
    }
    /**
     * Determine if a given string ends with a given substring
     *
     * @param needles
     *
     * @return boolean
     */

  }, {
    key: "endsWith",
    value: function endsWith() {
      var needles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      return Str.endsWith(this.value, needles);
    }
    /**
     * Cap a string with a single instance of a given value if it doesnt already end with it
     *
     * @param cap
     *
     * @return Stringable
     */

  }, {
    key: "finish",
    value: function finish(cap) {
      return new Stringable(Str.finish(this.value, cap));
    }
    /**
     * Determine if the string is an exact match with the given value.
     *
     * @param value
     *
     * @return boolean
     */

  }, {
    key: "exactly",
    value: function exactly(value) {
      return this.value === value;
    }
    /**
     * Explode the string into an array.
     *
     * @param delimiter
     * @param limit
     *
     * @return Collection
     */

  }, {
    key: "explode",
    value: function explode(delimiter) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Number.MAX_SAFE_INTEGER;
      return collect(_explode(delimiter, this.value, limit));
    }
    /**
     * Split a string using a regular expression.
     *
     * @param pattern
     * @param limit
     * @param flags
     *
     * @return Collection
     */

  }, {
    key: "split",
    value: function split(pattern) {
      var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      var flags = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var segments = this.value.split(new RegExp(pattern));
    }
    /**
     * Resolve the value when the object is called directly
     *
     * @returns {string}
     */

  }, {
    key: "valueOf",
    value: function valueOf() {
      return this.value;
    }
  }]);

  return Stringable;
}();

module.exports.Stringable = Stringable;