
'use strict';

const { v4: uuidv4 } = 'uuid';
const { preg_match } = require('locutus/php/pcre');
const { ctype_lower } = require('locutus/php/ctype');

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

		if (typeof Str.snakeCache?.[key]?.[delimiter] !== 'undefined') {
			return Str.snakeCache[key][delimiter];
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
