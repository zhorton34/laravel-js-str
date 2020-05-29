
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return slug case', () => {
		expect(Str.slug('hello world earth')).to.eql('hello-world-earth');
		expect(Str.slug('hello_world_earth')).to.eql('hello-world-earth');
		expect(Str.slug('HelloWorldEarth')).to.eql('hello-world-earth');
		expect(Str.slug('hello-world-earth')).to.eql('hello-world-earth');
		expect(Str.slug('Action@HelloWorldEarth')).to.eql('action-at-hello-world-earth');
		expect(Str.slug('Hello world Earth')).to.eql('hello-world-earth');
		expect(Str.slug('helloWorldEarth')).to.eql('hello-world-earth');
	})
};
