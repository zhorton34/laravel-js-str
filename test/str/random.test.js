
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return random string', () => {
		expect(Str.random(12).length).to.eql(12);
		expect(Str.random(24).length).to.eql(24);
		expect(Str.random(5) !== Str.random(5)).to.eql(true);
		expect(Str.random(16) !== Str.random(16)).to.eql(true);
	})
};
