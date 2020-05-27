
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should cap string with value if it doesnt already exist', () => {
		expect(Str.finish('/test', '/')).to.eql('/test/');
		expect(Str.finish('/test/', '/')).to.eql('/test/');
	})
};
