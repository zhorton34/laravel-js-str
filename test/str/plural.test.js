
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return plural string', () => {
		expect(Str.plural('mother')).to.eql('mothers');
		expect(Str.plural('bird')).to.eql('birds');
		expect(Str.plural('sarah')).to.eql('sarahs');
	})
};
