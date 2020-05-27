
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return format a string to studly case', () => {
		expect(Str.studly('hello world')).to.eql('HelloWorld');
		expect(Str.studly('hello world earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('hello_world_earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('Hello World Earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('hello-world-earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('Hello world_Earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('Hello world Earth')).to.eql('HelloWorldEarth');
		expect(Str.studly('hello World Earth')).to.eql('HelloWorldEarth');
	})
};
