
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return the remainder of a string before the last occurrence of a given value', () => {
		expect(Str.beforeLast('Hello planet earth, our planet is great.', ' planet')).to.eql('Hello planet earth, our');
		expect(Str.beforeLast('a brand new world', ' new')).to.eql('a brand');
		expect(Str.beforeLast('hello world', 'new')).to.eql('hello world');
	})
};
