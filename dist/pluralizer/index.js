'use strict';

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var pluralize = require('pluralize');

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
module.exports.Pluralizer = Pluralizer;