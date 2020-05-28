
'use strict';

const { collect } = require('collect.js');
const { explode } = require('locutus/php/strings');

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

// /**
//  * Split a string using a regular expression.
//  *
//  * @param pattern
//  * @param limit
//  * @param flags
//  *
//  * @return Collection
//  */
// Stringable.prototype.split = function(pattern, limit = -1, flags = 0)
// {
// 	let segments = this.value.split(new RegExp(pattern));
// };

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
	return `${this.value}`;
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
