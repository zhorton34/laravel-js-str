
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return format a string to kebab case', () => {
		expect(Str.kebab('hello world')).to.eql('hello-world');
		expect(Str.kebab('hello world earth')).to.eql('hello-world-earth');
		expect(Str.kebab('hello_world_earth')).to.eql('hello-world-earth');
		expect(Str.kebab('HelloWorldEarth')).to.eql('hello-world-earth');
		expect(Str.kebab('hello-world-earth')).to.eql('hello-world-earth');
		expect(Str.kebab('HelloWorldEarth')).to.eql('hello-world-earth');
		expect(Str.kebab('Hello world Earth')).to.eql('hello-world-earth');
		expect(Str.kebab('helloWorldEarth')).to.eql('hello-world-earth');
	})
};
