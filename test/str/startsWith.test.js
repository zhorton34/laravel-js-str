
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should true if string starts with a given substring', () => {
		expect(Str.startsWith('brand new world', 'brand')).to.eql(true);
		expect(Str.startsWith('brand new world of people', ['a', 'brand', 'world'])).to.eql(true);
		expect(Str.startsWith('a brand new world for a group of people', 'a brand ')).to.eql(true);
	});

	it ('Should return false if string does not start with given substring', () => {
		expect(Str.startsWith('brand new world', 'new')).to.eql(false);
		expect(Str.startsWith('a brand new world for a group of people', '  brand')).to.eql(false);
		expect(Str.startsWith('brand new world of people', ['a', 'world', 'people'])).to.eql(false);
	});
};
