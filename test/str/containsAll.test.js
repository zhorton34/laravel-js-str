
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return true if string contains all substrings', () => {
		expect(Str.containsAll('hello world', ['hello', 'world'])).to.eql(true);
		expect(Str.containsAll('hello world earth', ['world'])).to.eql(true);
		expect(Str.containsAll('hello_world_earth', ['_world_', '_earth'])).to.eql(true);
		expect(Str.containsAll('HelloWorldEarth', ['WorldEa', 'Hello', 'Earth'])).to.eql(true);
		expect(Str.containsAll('hello-{*}-earth', ['hello-', '{*}'])).to.eql(true);
		expect(Str.containsAll('Hello world Earth', ['world', 'Earth'])).to.eql(true);
		expect(Str.containsAll('Hello world Earth', ['world', 'Earth'])).to.eql(true);

	});

	it('Should return false if a string does not contain substring', () => {
		expect(Str.containsAll('hello world earth', ['world', 'hello', 'mars'])).to.eql(false);
		expect(Str.containsAll('Hello world Earth', ['{example}', 'mars'])).to.eql(false);
		expect(Str.containsAll('Hello world Earth', ['{example}'])).to.eql(false);
	})
};
