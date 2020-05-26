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
     * @var array
     */

    /**
     * The cache of camel-cased words
     *
     * @var array
     */

    /**
     * The cache of studly-cased words
     *
     * @var array
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
  }]);

  return Str;
}();

Str.snakeCache = [];
Str.camelCache = [];
Str.studlyCached = [];
module.exports.Str = Str;