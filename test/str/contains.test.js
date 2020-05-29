
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return true if string contains substring', () => {
		expect(Str.contains('hello world', 'hello')).to.eql(true);
		expect(Str.contains('hello world earth', 'world')).to.eql(true);
		expect(Str.contains('hello_world_earth', '_world_')).to.eql(true);
		expect(Str.contains('HelloWorldEarth', 'WorldEa')).to.eql(true);
		expect(Str.contains('hello-{*}-earth', '{*}')).to.eql(true);
		expect(Str.contains('Hello world Earth', ['world', 'Earth'])).to.eql(true);
		expect(Str.contains('helloWorldEarth', ['World', 'mars'])).to.eql(true);
		expect(Str.contains('Hello world Earth', ['world', 'Earth'])).to.eql(true);

	});

	it('Should return false if a string does not contain substring', () => {
		expect(Str.contains('hello world earth', 'mars')).to.eql(false);
		expect(Str.contains('Hello world Earth', '{example}')).to.eql(false);
		expect(Str.contains('Hello world Earth', ['{example}', 'mars'])).to.eql(false);
	})
};
