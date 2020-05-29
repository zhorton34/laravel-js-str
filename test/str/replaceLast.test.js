
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should replace last occurrence', () => {
		expect(Str.replaceLast('planet', 'place', 'earth is a cool planet')).to.eql('earth is a cool place');
		expect(Str.replaceLast('a ', 'the ', 'a dog has a name of dug')).to.eql('a dog has the name of dug');
		expect(Str.replaceLast('earth', 'mars', 'hello_world_earth')).to.eql('hello_world_mars');
	})
};
