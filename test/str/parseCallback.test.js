
'use strict';

const { Str } = require('../../src/str/index.js');

module.exports = (it, expect) => {
	it('Should return array of class and action', () => {
		expect(Str.parseCallback('Controller@index')).to.eql(['Controller', 'index']);
	})
};
