
'use strict';

const { Str } = require('../../dist/index.js');

module.exports = (it, expect) => {
	it('Should return plural version of studly string', () => {
		expect(Str.pluralStudly('CoolBird')).to.eql('CoolBirds');
		expect(Str.pluralStudly('ClassMom')).to.eql('ClassMoms');
		expect(Str.pluralStudly('GorgeousDay')).to.eql('GorgeousDays');
	})
};
