
'use strict';

// const { stringable } = require('../Stringable/index.js');

class Str
{
	/**
	 * The cache of snake-cased words
	 *
	 * @var array
	 */
	static snakeCache = [];

	/**
	 * The cache of camel-cased words
	 *
	 * @var array
	 */
	static camelCache = [];

	/**
	 * The cache of studly-cased words
	 *
	 * @var array
	 */
	static studlyCached = [];

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

}

module.exports.Str = Str;
