
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should limit string length and append an end', () => {
		expect(Str.limit('hey', 10, '...')).to.eql('hey');
		expect(Str.limit('hey', 2)).to.eql('he...');
		expect(Str.limit('hey', 2, ' ~')).to.eql('he ~');
	})
};
