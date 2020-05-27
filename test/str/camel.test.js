
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return format a string to camel case', () => {
		expect(Str.camel('hello world')).to.eql('helloWorld');
		expect(Str.camel('hello world earth')).to.eql('helloWorldEarth');
		expect(Str.camel('hello_world_earth')).to.eql('helloWorldEarth');
		expect(Str.camel('HelloWorldEarth')).to.eql('helloWorldEarth');
		expect(Str.camel('hello-world-earth')).to.eql('helloWorldEarth');
		expect(Str.camel('HelloWorldEarth')).to.eql('helloWorldEarth');
		expect(Str.camel('Hello world Earth')).to.eql('helloWorldEarth');
		expect(Str.camel('helloWorldEarth')).to.eql('helloWorldEarth');
	})
};
