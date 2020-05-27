
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return string as studly case', () => {
		expect(Str.studly('hello world')).to.eql('HelloWorld');
		expect(Str.studly('hello world earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('hello_world_earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('HelloWorldEarth')).to.eql('HelloWorldEarth');
		expect(Str.studly('hello-world-earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('HelloWorldEarth')).to.eql('HelloWorldEarth');
		expect(Str.studly('Hello world Earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('helloWorldEarth')).to.eql('HelloWorldEarth');
	})
};
