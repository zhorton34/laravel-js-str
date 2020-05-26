
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return the remainder of a string between the at and to occurrences', () => {
		expect(Str.between('brand new world', 'brand ', ' world')).to.eql('new');
		expect(Str.between('a nike brand a under armour brand', 'a ', ' brand')).to.eql('nike brand a under armour');
		expect(Str.between('a brand new world', 'breezy', 'world')).to.eql('a brand new world');
		expect(Str.between('a brand new world', 'brand', 'breezy')).to.eql('a brand new world');
	})
};
