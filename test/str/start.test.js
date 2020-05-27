
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should prefix string with value if it doesnt already exist', () => {
		expect(Str.start('test/', '/')).to.eql('/test/');
		expect(Str.start('/test/', '/')).to.eql('/test/');
	})
};
