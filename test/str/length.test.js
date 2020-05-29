
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return string length', () => {
		expect(Str.length('hey')).to.eql(3);
		expect(Str.length('')).to.eql(0);
		expect(Str.length('hello_world_earth')).to.eql(17);
	})
};
