
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return updated string', () => {
		expect(Str.replaceArray('?', ['tim', 'kate'], 'maybe ? will ask ? out')).to.eql('maybe tim will ask kate out');
		expect(Str.replaceArray('{name}', ['bill', 'chad'], '{name} is pretty cool, {name}.')).to.eql('bill is pretty cool, chad.');
	})
};
