
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return true if pattern matches exact value or is a match', () => {
		expect(Str.is('foo', 'foo')).to.eql(true);
		expect(Str.is('foo*', 'foobar')).to.eql(true);
	});

	it('Should return false if string does not match value or pattern', () => {
		expect(Str.is('foobar', 'foo')).to.eql(false);
		expect(Str.is('*foobar*', 'foeds')).to.eql(false);
	})
};
