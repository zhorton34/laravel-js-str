
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return string with first letter upper cased', () => {
		expect(Str.ucfirst('hello world')).to.eql('Hello world');
		expect(Str.ucfirst('hello world earth')).to.eql('Hello world earth');
		expect(Str.ucfirst('hello_world_earth')).to.eql('Hello_world_earth');
		expect(Str.ucfirst('HelloWorldEarth')).to.eql('HelloWorldEarth');
		expect(Str.ucfirst('hello-world-earth')).to.eql('Hello-world-earth');
		expect(Str.ucfirst('HelloWorldEarth')).to.eql('HelloWorldEarth');
		expect(Str.ucfirst('Hello world Earth')).to.eql('Hello world Earth');
		expect(Str.ucfirst('helloWorldEarth')).to.eql('HelloWorldEarth');
	})
};
