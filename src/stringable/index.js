
'use strict';

const { collect } = require('collect.js');
const { Str } = require('../str/index.js');
const { explode } = require('locutus/php/strings');

class Stringable
{
	constructor(value)
	{
		this.value = String(value);
	}

	/**
	 * Return the remainder of a string after the first occurrence of a given value
	 *
	 * @param search
	 *
	 * @return Stringable
	 */
	after(search = '')
	{
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
	afterLast(subject, search = '')
	{
		return new Stringable(Str.afterLast(this.value, search));
	}

	/**
	 * Append the given values to the string.
	 *
	 * @param values
	 *
	 * @return Stringable
	 */
	append(...values)
	{
		return new Stringable(this.value + values.join(''));
	}

	/**
	 * Transliterate a UTF-8 value to ASCII.
	 *
	 * @param language
	 *
	 * @return Stringable
	 */
	ascii(language = 'en')
	{
		return new Stringable(Str.ascii(this.value, language));
	}

	/**
	 * Get the portion of a string before the first occurrence of a given value
	 *
	 * @param search
	 *
	 * @return Stringable
	 */
	before(search = '')
	{
		return new Stringable(Str.before(this.value, search));
	}

	/**
	 * Get the portion of a string before the last occurrence of a given value
	 *
	 * @param search
	 *
	 * @return Stringable
	 */
	beforeLast(search = '')
	{
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
	between(at = '', to = '')
	{
		return new Stringable(Str.between(this.value, at, to));
	}

	/**
	 * Convert a value to camel case.
	 *
	 * @return Stringable
	 */
	camel()
	{
		return new Stringable(Str.camel(this.value));
	}

	/**
	 * Determine if a given string contains a given substring.
	 *
	 * @param needles
	 *
	 * @return boolean
	 */
	contains(needles = [])
	{
		return Str.contains(this.value, needles);
	}

	/**
	 * Determine if a given string contains all array values
	 *
	 * @param needles[]
	 *
	 * @return boolean
	 */
	containsAll(needles = [])
	{
		return Str.containsAll(this.value, needles);
	}

	/**
	 * Determine if a given string ends with a given substring
	 *
	 * @param needles
	 *
	 * @return boolean
	 */
	endsWith(needles = [])
	{
		return Str.endsWith(this.value, needles);
	}

	/**
	 * Cap a string with a single instance of a given value if it doesnt already end with it
	 *
	 * @param cap
	 *
	 * @return Stringable
	 */
	finish(cap)
	{
		return new Stringable(Str.finish(this.value, cap));
	}

	/**
	 * Determine if the string is an exact match with the given value.
	 *
	 * @param value
	 *
	 * @return boolean
	 */
	exactly(value)
	{
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
	explode(delimiter, limit = Number.MAX_SAFE_INTEGER)
	{
		return collect(explode(delimiter, this.value, limit));
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
	split(pattern, limit = -1, flags = 0)
	{
		let segments = this.value.split(new RegExp(pattern));
	}



	/**
	 * Resolve the value when the object is called directly
	 *
	 * @returns {string}
	 */
	valueOf()
	{
		return this.value;
	}
}

module.exports.Stringable = Stringable;
