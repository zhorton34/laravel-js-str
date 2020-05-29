
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return lower case string', () => {
		expect(Str.lower('hey')).to.eql('hey');
		expect(Str.lower('Hey WOrld')).to.eql('hey world');
		expect(Str.lower('Hello_world_earTh')).to.eql('hello_world_earth');
	})
};
