
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return limited words', () => {
		expect(Str.words('hey world how are you?', 3)).to.eql('hey world how...');
		expect(Str.words('hey world how are you?')).to.eql('hey world how are you?');
		expect(Str.words('hello world how are you', 2, '~')).to.eql('hello world~');
	})
};
