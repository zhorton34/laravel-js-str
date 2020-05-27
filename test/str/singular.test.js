
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return singular string', () => {
		// expect(Str.singular('builders')).to.eql('builder');
		expect(Str.singular('birds')).to.eql('bird');
		expect(Str.singular('sarahs')).to.eql('sarah');
	})
};
