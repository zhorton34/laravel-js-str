
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return upper case of string', () => {
		expect(Str.upper('hello world')).to.eql('HELLO WORLD');
		expect(Str.upper('hello world earth')).to.eql('HELLO WORLD EARTH');
		expect(Str.upper('hello_world_earth')).to.eql('HELLO_WORLD_EARTH');
		expect(Str.upper('HelloWorldEarth')).to.eql('HELLOWORLDEARTH');
		expect(Str.upper('hello-world-earth')).to.eql('HELLO-WORLD-EARTH');
		expect(Str.upper('Hello world Earth')).to.eql('HELLO WORLD EARTH');
		expect(Str.upper('helloWorldEarth')).to.eql('HELLOWORLDEARTH');
	})
};
