
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return the remainder of a string before the first occurrence of a given value', () => {
		expect(Str.before('brand new world', ' world')).to.eql('brand new');
		expect(Str.before('a brand new world for a group of people', 'a ')).to.eql('');
		expect(Str.before('hello world', 'new')).to.eql('hello world');
	})
};
