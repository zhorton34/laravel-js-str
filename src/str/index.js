
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
}

module.exports.Str = Str;
