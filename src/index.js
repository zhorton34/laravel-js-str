
'use strict';

const { v4: uuidv4 } = 'uuid';
const pluralize = require('pluralize');
const { collect } = require('collect.js');
const { empty } = require('locutus/php/var');
const { preg_match } = require('locutus/php/pcre');
const { ctype_lower } = require('locutus/php/ctype');
const { array_merge } = require('locutus/php/array');
const { str_replace, trim, ltrim, rtrim, explode, substr_count } = require('locutus/php/strings');

/**
 * @return {string}
 */
function Stringable (value) {
	this.value = value;

	return `${this.value}`;
}

/**
 * Return the remainder of a string after the first occurrence of a given value
 *
 * @param search
 *
 * @return Stringable
 */
Stringable.prototype.after = function(search = '')
{
	return (new Stringable(Str.after(this.value, search)));
};

/**
 * Returns the remainder of a string after the last occurrence of a given value
 *
 * @param subject
 * @param search
 *
 * @return Stringable
 */
Stringable.prototype.afterLast = function(subject, search = '')
{
	return new Stringable(Str.afterLast(this.value, search));
};

/**
 * Append the given values to the string.
 *
 * @param values
 *
 * @return Stringable
 */
Stringable.prototype.append = function(...values)
{
	return new Stringable(this.value + values.join(''));
};

/**
 * Transliterate a UTF-8 value to ASCII.
 *
 * @param language
 *
 * @return Stringable
 */
Stringable.prototype.ascii = function(language = 'en')
{
	return new Stringable(Str.ascii(this.value, language));
};

/**
 * Get the portion of a string before the first occurrence of a given value
 *
 * @param search
 *
 * @return Stringable
 */
Stringable.prototype.before = function(search = '')
{
	return new Stringable(Str.before(this.value, search));
};

/**
 * Get the portion of a string before the last occurrence of a given value
 *
 * @param search
 *
 * @return Stringable
 */
Stringable.prototype.beforeLast = function(search = '')
{
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
Stringable.prototype.between = function(at = '', to = '')
{
	return new Stringable(Str.between(this.value, at, to));
};

/**
 * Convert a value to camel case.
 *
 * @return Stringable
 */
Stringable.prototype.camel = function()
{
	return new Stringable(Str.camel(this.value));
};

/**
 * Determine if a given string contains a given substring.
 *
 * @param needles
 *
 * @return boolean
 */
Stringable.prototype.contains = function(needles = [])
{
	return Str.contains(this.value, needles);
};

/**
 * Determine if a given string contains all array values
 *
 * @param needles[]
 *
 * @return boolean
 */
Stringable.prototype.containsAll = function(needles = [])
{
	return Str.containsAll(this.value, needles);
};

/**
 * Determine if a given string ends with a given substring
 *
 * @param needles
 *
 * @return boolean
 */
Stringable.prototype.endsWith = function(needles = [])
{
	return Str.endsWith(this.value, needles);
};

/**
 * Cap a string with a single instance of a given value if it doesnt already end with it
 *
 * @param cap
 *
 * @return Stringable
 */
Stringable.prototype.finish = function(cap)
{
	return new Stringable(Str.finish(this.value, cap));
};

/**
 * Determine if the string is an exact match with the given value.
 *
 * @param value
 *
 * @return boolean
 */
Stringable.prototype.exactly = function(value)
{
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
Stringable.prototype.explode = function(delimiter, limit = Number.MAX_SAFE_INTEGER)
{
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
Stringable.prototype.split = function(pattern, limit = -1, flags = 0)
{
	let segments = this.value.split(new RegExp(pattern));

	return ! empty(segments) ? collect(segments) : collect();
};

/**
 * Cap a string with a single instance of a given value
 *
 * @param cap
 *
 * @return Stringable
 */
Stringable.prototype.finish = function(cap)
{
	return new Stringable(Str.finish(this.value, cap));
};

/**
 * Determine if a given string matches a given pattern
 *
 * @param  pattern
 *
 * @return boolean
 */
Stringable.prototype.is = function(pattern)
{
	return Str.is(pattern, this.value);
};

/**
 * Determine if a given string is 7 bit ASCII
 *
 * @return boolean
 */
Stringable.prototype.isAscii = function()
{
	return Str.isAscii(this.value);
};

/**
 * Determine if the given string is empty.
 *
 * @return boolean
 */
Stringable.prototype.isEmpty = function()
{
	return this.value === '';
};

/**
 * Determine if the given string is empty.
 *
 * @return boolean
 */
Stringable.prototype.isNotEmpty = function()
{
	return ! this.isEmpty();
};


/**
 * Convert a string to kebab case.
 *
 * @return Stringable
 */
Stringable.prototype.kebab = function()
{
	return new Stringable(Str.kebab(this.value));
};

/**
 * Return the length of the given string
 *
 * @param encoding
 *
 * @return int
 */
Stringable.prototype.length = function(encoding = null)
{
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
Stringable.prototype.limit = function(limit = 100, end = '...')
{
	return new Stringable(Str.limit(this.value, limit, end));
};

/**
 * Convert the given string to lower-case
 *
 * @return Stringable
 */
Stringable.prototype.lower = function()
{
	return new Stringable(Str.lower(this.value));
};

/**
 * Get the string matching the given pattern.
 *
 * @param pattern
 *
 * @return Stringable|null
 */
Stringable.prototype.match = function(pattern)
{
	let matches = preg_match(pattern, this.value);

	if (! matches) {
		return new Stringable('');
	}

	return new Stringable(matches[1] || matches[0]);
};

// @TODO matchAll
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
Stringable.prototype.parseCallback = function(fallback)
{
	return Str.parseCallback(this.value, fallback);
};

/**
 * Get the plural form of an English word.
 *
 * @param count
 *
 * @return Stringable
 */
Stringable.prototype.plural = function(count = 2)
{
	return new Stringable(Str.plural(this.value, count));
};

/**
 * Pluralize the last word of an English, studly caps case string.
 *
 * @param  count
 *
 * @return Stringable
 */
Stringable.prototype.pluralStudly = function(count = 2)
{
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
Stringable.prototype.replace = function (search, replace)
{
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
Stringable.prototype.replaceArray = function (search, replace = [])
{
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
Stringable.prototype.replaceFirst = function (search, replace)
{
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
Stringable.prototype.replaceLast = function (search, replace)
{
	return new Stringable(Str.replaceLast(search, replace, this.value));
};

// /** @TODO Add replaceMatches method
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
Stringable.prototype.start = function(prefix)
{
	return new Stringable(Str.start(this.value, prefix));
};

/**
 * Convert the given string to upper-case.
 *
 * @return Stringable
 */
Stringable.prototype.upper = function()
{
	return new Stringable(Str.upper(this.value));
};

/**
 * Convert the given string to title case.
 *
 * @return Stringable
 */
Stringable.prototype.title = function()
{
	return new Stringable(Str.title(this.value));
};

/**
 * Get the singular form of an English word.
 *
 * @return Stringable
 */
Stringable.prototype.singular = function()
{
	return new Stringable(Str.singular(this.value));
};

/**
 *
 * @param separator
 * @param language
 *
 * @returns Stringable
 */
Stringable.prototype.slug = function(separator = '-', language = 'en')
{
	return new Stringable(Str.slug(this.value, separator, language));
};

/**
 * Convert a string to snake case.
 *
 * @param delimiter
 *
 * @return Stringable
 */
Stringable.prototype.snake = function snake(delimiter = '_')
{
	return new Stringable(Str.snake(this.value, delimiter));
};

/**
 * Determine if a given string starts with a given substring.
 *
 * @param needles
 *
 * @return boolean
 */
Stringable.prototype.startsWith = function(needles)
{
	return Str.startsWith(this.value, needles);
};

/**
 * Convert a value to studly caps case.
 *
 * @return Stringable
 */
Stringable.prototype.studly = function ()
{
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
Stringable.prototype.substr = function(start, length = null)
{
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
Stringable.prototype.substrCount = function(needle, offset = null, length = null)
{
	return Str.substrCount(this.value, needle, offset, length);
};

/**
 * Trim the string of the given characters.
 *
 * @param characters
 *
 * @returns Stringable
 */
Stringable.trim = function(characters = null)
{
	return new Stringable(trim(...array_merge([this.value], arguments)));
};

/**
 * Left trim the string of given characters.
 *
 * @param characters
 *
 * @return Stringable
 */
Stringable.ltrim = function(characters = null)
{
	return new Stringable(ltrim(...array_merge([this.value], arguments)));
};

/**
 * Right trim the string of given characters.
 *
 * @param characters
 *
 * @return Stringable
 */
Stringable.rtrim = function(characters = null)
{
	return new Stringable(rtrim(...array_merge([this.value], arguments)));
};

/**
 * Make a string's first character uppercase.
 *
 * @return Stringable
 */
Stringable.prototype.whenEmpty = function(callback)
{
	if (this.isEmpty()) {
		let result = callback(this);

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
Stringable.prototype.words = function(words = 100, end = '...')
{
	return new Stringable(Str.words(this.value, words, end));
};

/**
 * Dump the string.
 *
 * @return this
 */
Stringable.prototype.dump = function()
{
	console.log(this);

	return this;
};

/**
 * Dump the string then die.
 *
 * @return void
 */
Stringable.prototype.dd = function ()
{
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
Stringable.prototype.get = function(key)
{
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
Stringable.prototype.toLocaleString = function()
{
	return `${this.value}`;
};

/**
 * Used when returning as a string operation
 *
 * @returns string
 */
Stringable.prototype.toString = function()
{
	return `${this.value}`;
};

/**
 * Used when JSON.stringify is called
 */
Stringable.prototype.toJSON = function()
{
	return this.toString();
};

/**
 * Used when returning as a value operation
 *
 * @returns string
 */
Stringable.prototype.valueOf = function()
{
	return `${this.value}`;
};

class Pluralizer
{
	static inflection;

	static rules = {
		plural: {},
		singular: {},
		irregular: {},
		uncountable: [
			'audio',
			'bison',
			'cattle',
			'chassis',
			'compensation',
			'coreopsis',
			'data',
			'deer',
			'education',
			'emoji',
			'equipment',
			'evidence',
			'feedback',
			'firmware',
			'fish',
			'furniture',
			'gold',
			'hardware',
			'information',
			'jedi',
			'kin',
			'knowledge',
			'love',
			'metadata',
			'money',
			'moose',
			'news',
			'nutrition',
			'offspring',
			'plankton',
			'pokemon',
			'police',
			'rain',
			'recommended',
			'related',
			'rice',
			'series',
			'sheep',
			'software',
			'species',
			'swine',
			'traffic',
			'wheat'
		]
	};


	/**
	 * Get the plural form of an English word.
	 *
	 * @param value
	 * @param count
	 *
	 * @return string
	 */
	static plural(value, count = 2)
	{
		if (Math.abs(count) === 1 || Pluralizer.uncountable(value)) {
			return value;
		}

		const plural = Pluralizer.inflector().plural(value);

		return Pluralizer.matchCase(plural, value);
	}

	/**
	 * Get the singular form of an English word.
	 *
	 * @param value
	 *
	 * @return string
	 */
	static singular(value)
	{
		let single = Pluralizer.inflector().singular(value);

		return Pluralizer.matchCase(single, value);
	}

	/**
	 * Determine if the given value is uncountable.
	 *
	 * @param value
	 *
	 * @returns boolean
	 */
	static uncountable(value)
	{
		return Pluralizer.rules.uncountable.includes(value.toLowerCase());
	}

	/**
	 * Determine if the given value is plural.
	 *
	 * @param value
	 *
	 * @returns boolean
	 */
	static isPlural(value = '')
	{
		return Pluralizer.inflector().isPlural(value);
	}

	/**
	 * Determine if the given value is singular.
	 *
	 * @param value
	 *
	 * @returns boolean
	 */
	static isSingular(value = '')
	{
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
	static matchCase(value, comparison)
	{
		if (comparison.toLowerCase() === comparison) {
			return value.toLowerCase();
		}

		if (comparison.toUpperCase() === comparison) {
			return value.toUpperCase();
		}

		if ((comparison[0].toUpperCase() + comparison.slice(1)) === comparison) {
			return value[0].toUpperCase() + value.slice(1);
		}

		return value;
	}

	/**
	 * Get the pluralize instance
	 *
	 * @return Pluralizer.inflection
	 */
	static inflector()
	{
		if (typeof Pluralizer.inflection === 'undefined') {
			Pluralizer.inflection = pluralize;

			Pluralizer.rules.uncountable.forEach(uncountable => Pluralizer.inflection.addUncountableRule(uncountable));
			Object.entries(Pluralizer.rules.plural).forEach(([plural, rule]) => Pluralizer.inflection.addIrregularRule(rule, plural));
			Object.entries(Pluralizer.rules.singular).forEach(([singular, rule]) => Pluralizer.inflection.addIrregularRule(rule, singular));
			Object.entries(Pluralizer.rules.irregular).forEach(([irregularity, rule]) => Pluralizer.inflection.addIrregularRule(rule, irregularity));
		}

		return Pluralizer.inflection;
	}
}

class Str
{
	/**
	 * The cache of snake-cased words
	 *
	 * @var object
	 */
	static snakeCache = {};

	/**
	 * The cache of camel-cased words
	 *
	 * @var object
	 */
	static camelCache = {};

	/**
	 * The cache of studly-cased words
	 *
	 * @var object
	 */
	static studlyCache = {};

	/**
	 * The callback that should be used to generate UUIDs.
	 *
	 * @var callback
	 */
	static uuidFactory;

	/**
	 * Get a new stringable object from the given string.
	 *
	 * @param string string
	 * @return Stringable
	 */
	static of(string)
	{
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
	static after(subject, search = '')
	{
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
	static afterLast(subject, search = '')
	{
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
	static ascii(value = '', language = 'en')
	{
		return String.fromCharCode(...value.split('').map(character => character.charCodeAt(0)));
	}

	/**
	 * Get the portion of a string before the first occurrence of a given value
	 *
	 * @param subject
	 * @param search
	 *
	 * @return string
	 */
	static before(subject, search = '')
	{
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
	static beforeLast(subject, search = '')
	{
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
	static between(subject, at = '', to = '')
	{
		return subject.indexOf(at) === -1 || subject.indexOf(to) === -1 ? subject : Str.beforeLast(Str.after(subject, at), to);
	}

	/**
	 * Convert a value to camel case.
	 *
	 * @param value
	 *
	 * @return string
	 */
	static camel(value = '')
	{
		if (typeof Str.camelCache[value] !== 'undefined') {
			return Str.camelCache[value];
		}

		let studly = Str.studly(value);

		return Str.camelCache[value] = `${studly[0].toLowerCase()}${studly.slice(1)}`;
	}

	/**
	 * Determine if a given string contains a given substring.
	 *
	 * @param haystack
	 * @param needles
	 *
	 * @return boolean
	 */
	static contains(haystack, needles = [])
	{
		return Array.isArray(needles) ? needles.some(needle => haystack.includes(needle)) : haystack.includes(needles);
	}

	/**
	 * Determine if a given string contains all array values
	 *
	 * @param haystack
	 * @param needles[]
	 *
	 * @return boolean
	 */
	static containsAll(haystack, needles = [])
	{
		return needles.every(needle => haystack.includes(needle));
	}

	/**
	 * Determine if a given string ends with a given substring
	 *
	 * @param haystack
	 * @param needles
	 *
	 * @return boolean
	 */
	static endsWith(haystack, needles = [])
	{
		return Array.isArray(needles)
			? needles.some(needle => haystack.substr(-needle.length) === needle)
			: haystack.substr(-needles.length) === needles;
	}

	/**
	 * Cap a string with a single instance of a given value if it doesnt already end with it
	 *
	 * @param value
	 * @param cap
	 *
	 * @return string
	 */
	static finish(value, cap)
	{
		return Str.endsWith(value, cap) ? value : `${value}${cap}`;
	}

	/**
	 * Determine if a given string matches a given pattern
	 *
	 * @param pattern
	 * @param value
	 *
	 * @return boolean
	 */
	static is(pattern, value)
	{
		let patterns = Array.isArray(pattern) ? pattern : [pattern];

		return patterns.some(pattern => {
			if (value === pattern) return true;
			else if (pattern.includes('*') === false) return (new RegExp(pattern).test(value));
			else if (pattern.includes('*')) return (new RegExp(pattern.replace(/\*/g, '.*'))).test(value);
		});
	}

	/**
	 * Determine if a given string is 7 bit ASCII
	 *
	 * @param value
	 * @returns boolean
	 */
	static isAscii(value) {
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
	static isUuid(value)
	{
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
	static kebab(value)
	{
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
	static snake(value, delimiter = '_')
	{
		let key = value;

		if (typeof Str.snakeCache !== 'undefined') {
			if (typeof Str.snakeCache[delimiter] !== 'undefined') {
				return Str.snakeCache[key][delimiter];
			}
		}

		if (! ctype_lower(value)) {
			Str.snakeCache[key] = {
				...(Str.snakeCache[key] || {}),
				[delimiter]: value.match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g).map(x => x.toLowerCase()).join(delimiter),
			};

			return Str.snakeCache[key][delimiter];
		}

		Str.snakeCache[key] = {
			...(Str.snakeCache[key] || {}),
			[delimiter]: value,
		};

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
	static length(value = '', encoding = null)
	{
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
	static limit(value = '', limit = 100, end = '...')
	{
		return value.length < limit ? value : value.slice(0, limit) + end;
	}

	/**
	 * Convert the given string to lower-case.
	 *
	 * @param value
	 *
	 * @return string
	 */
	static lower(value = '')
	{
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
	static words(value = '', words = 100, end = '...')
	{
		let word = value.split(' ');

		return word.length <= words ? value : word.slice(0, words).join(" ") + end;
	}

	/**
	 * Parse a Class[@]method style callback into class and method.
	 *
	 * @param callback
	 * @param fallback
	 *
	 * @return array
	 */
	static parseCallback(callback, fallback = null)
	{
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
	static plural(value, count = 2)
	{
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
	static pluralStudly(value, count = 2)
	{
		const [until, last_word] = value.split(/(?=[A-Z][^A-Z]+$)/);

		return until + Str.plural(last_word, count);
	}

	/**
	 * Generate a more truly "random" alpha-numeric string.
	 *
	 * @param length
	 *
	 * @return string
	 */
	static random(length = 16)
	{
		let random = '';
		let alpha_numeric = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";

		for (let i = 0; i < length; i++) {
			let character_index = Math.floor(Math.random() * Math.floor(alpha_numeric.length));

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
	static replaceArray(search, replace = [], subject)
	{
		if (Array.isArray(replace) === false) {
			throw Error("Str.replaceArray requires that parameter two (replace) is an array. Passed In: " + JSON.stringify(replace));
		}

		return replace.reduce((value, replacer) => value.replace(search, replacer), subject);
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
	static replaceFirst(search, replace, subject)
	{
		if (search === '') {
			return subject;
		}

		const search_index = subject.indexOf(search);

		if (search_index === -1) {
			return subject;
		}

		const start = subject.substr(0, search_index);
		const after = subject.substr(search_index + search.length, subject.length);

		return `${start}${replace}${after}`;
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
	static replaceLast(search, replace, subject)
	{
		if (search === '') {
			return subject;
		}

		const search_index = subject.lastIndexOf(search);

		if (search_index === -1) {
			return subject;
		}

		const start = subject.substr(0, search_index);
		const after = subject.substr(search_index + search.length, subject.length);

		return `${start}${replace}${after}`;
	}

	/**
	 * Begin a string with a single instance of a given value.
	 *
	 * @param value
	 * @param prefix
	 *
	 * @return string
	 */
	static start(value, prefix)
	{
		return Str.startsWith(value, prefix) ? value : `${prefix}${value}`;
	}

	/**
	 * Convert a value to studly caps case
	 *
	 * @param value
	 *
	 * @return string
	 */
	static studly(value)
	{
		const key = value;

		if (typeof Str.studlyCache[key] !== 'undefined') {
			return Str.studlyCache[key];
		}

		return Str.studlyCache[key] = value
			.replace(/_/g, ' ')
			.replace(/-/g, ' ')
			.split(' ')
			.reduce((str, word) => `${str}${word[0].toUpperCase()}${word.slice(1)}`, '');
	}

	/**
	 * Convert the given string to upper-case
	 *
	 * @param value
	 *
	 * @return string
	 */
	static upper(value)
	{
		return value.toLocaleUpperCase();
	}

	/**
	 * Convert the given string to title case.
	 *
	 * @param value
	 *
	 * @return string
	 */
	static title(value)
	{
		return Str.snake(value).split('_').map(word => Str.ucfirst(word)).join(' ');
	}

	/**
	 * Get the singular form of an English word.
	 *
	 * @param value
	 * @return string
	 */
	static singular(value)
	{
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
	static slug(title, separator = '-', language = 'en')
	{
		title = title.toLocaleString();

		let slug = Str.snake(title.replace(/@/g, '_at_'))
			.replace(/_/g, separator)
			.trim();

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
	static startsWith(haystack, needles = [])
	{
		return Array.isArray(needles)
			? needles.some(needle => haystack.startsWith(needle))
			: haystack.substr(0, needles.length) === needles;
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
	static substr(string, start, length = null)
	{
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
	static substrCount(haystack, needle, offset, length = null)
	{
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
	static ucfirst(value = '')
	{
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
	static uuid()
	{
		return typeof Str.uuidFactory === 'undefined'
			? uuidv4()
			: Str.uuidFactory();
	}



	/**
	 * Set the callable that will be used to generate UUIDs.
	 *
	 * @param factory
	 *
	 * @return void
	 */
	static createUuidsUsing(factory = null)
	{
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
	static createUuidsNormally()
	{
		Str.uuidFactory = null;
	}
}

module.exports.Str = Str;
