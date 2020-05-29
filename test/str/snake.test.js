
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return format a string to snake case', () => {
		expect(Str.snake('hello world')).to.eql('hello_world');
		expect(Str.snake('hello world earth')).to.eql('hello_world_earth');
		expect(Str.snake('hello_world_earth')).to.eql('hello_world_earth');
		expect(Str.snake('HelloWorldEarth')).to.eql('hello_world_earth');
		expect(Str.snake('hello-world-earth')).to.eql('hello_world_earth');
		expect(Str.snake('HelloWorldEarth')).to.eql('hello_world_earth');
		expect(Str.snake('Hello world Earth')).to.eql('hello_world_earth');
		expect(Str.snake('helloWorldEarth')).to.eql('hello_world_earth');
	})
};
