
'use strict';

const pluralize = require('pluralize');

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

module.exports.Pluralizer = Pluralizer;
