
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return the substring count', () => {
		expect(Str.substrCount('hello planet earth', 'planet')).to.eql(1);
		expect(Str.substrCount('', 'planet')).to.eql(0);
		expect(Str.substrCount('planet earth is my favorite planet to live on. Go earth. Great planet', 'planet')).to.eql(3);
	})
};
