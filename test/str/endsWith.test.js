
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should true if string ends with a given substring', () => {
		expect(Str.endsWith('brand new world', 'world')).to.eql(true);
		expect(Str.endsWith('brand new world of people', ['a', 'world', 'people'])).to.eql(true);
		expect(Str.endsWith('a brand new world for a group of people', ' of people')).to.eql(true);
	});

	it ('Should return false if string does not end with given substring', () => {
		expect(Str.endsWith('brand new world', 'new')).to.eql(false);
		expect(Str.endsWith('brand new world of people', ['a', 'world', 'brand'])).to.eql(false);
		expect(Str.endsWith('a brand new world for a group of people', ' of peopl')).to.eql(false);
	});
};
