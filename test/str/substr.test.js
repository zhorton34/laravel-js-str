
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return substring based on start index and number of characters', () => {
		expect(Str.substr('hey', 0, 3)).to.eql('hey');
		expect(Str.substr('hello', 1, 4)).to.eql('ello');
	})
};
