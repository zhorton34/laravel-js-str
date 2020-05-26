
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return the remainder of a string after the first occurrence of a given value', () => {
		expect(Str.afterLast('Hello planet earth, our planet is great.', 'planet ')).to.eql('is great.');
		expect(Str.afterLast('a brand new world', 'a ')).to.eql('brand new world');
		expect(Str.afterLast('hello world', 'new')).to.eql('hello world');
	})
};
