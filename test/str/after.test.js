
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return the remainder of a string after the first occurrence of a given value', () => {
		expect(Str.after('brand new world', 'new ')).to.eql('world');

		expect(Str.after('a brand new world for a group of people', 'a ')).to.eql('brand new world for a group of people');

		expect(Str.after('hello world', 'new')).to.eql('hello world');
	})
};
