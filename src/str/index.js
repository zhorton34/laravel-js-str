
'use strict';

// const { stringable } = require('../Stringable/index.js');

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
}

module.exports.Str = Str;
