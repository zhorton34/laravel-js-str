
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should replace first occurrence', () => {
		expect(Str.replaceFirst('planet', 'place', 'earth is a cool planet')).to.eql('earth is a cool place');
		expect(Str.replaceFirst('a', 'the', 'a dog has a name of dug')).to.eql('the dog has a name of dug');
		expect(Str.replaceFirst('earth', 'mars', 'hello_world_earth')).to.eql('hello_world_mars');
	})
};
