
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return format a string to title case', () => {
		expect(Str.title('hello world')).to.eql('Hello World');
		expect(Str.title('hello world earth')).to.eql('Hello World Earth');
		expect(Str.title('hello_world_earth')).to.eql('Hello World Earth');
		expect(Str.title('HelloWorldEarth')).to.eql('Hello World Earth');
		expect(Str.title('hello-world-earth')).to.eql('Hello World Earth');
		expect(Str.title('HelloWorldEarth')).to.eql('Hello World Earth');
		expect(Str.title('Hello world Earth')).to.eql('Hello World Earth');
		expect(Str.title('helloWorldEarth')).to.eql('Hello World Earth');
	})
};
