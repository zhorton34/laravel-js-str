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