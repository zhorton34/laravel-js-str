
'use strict';

const { collect } = require('collect.js');
const { empty } = require('locutus/php/var');
const { array_merge } = require('locutus/php/array');
const { preg_match } = require('locutus/php/pcre');
const { str_replace, trim, ltrim, rtrim, implode, explode } = require('locutus/php/strings');

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

module.exports = Stringable;
