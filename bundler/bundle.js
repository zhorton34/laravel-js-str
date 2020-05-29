
'use strict';

const { readFileSync, writeFileSync } = require('fs');
const bundle = file => readFileSync(`bundler/${file}.md`, 'utf-8');
const ReadMe = (content = []) => writeFileSync('README.md', content.join('\n\n'));
const ChangeLog = (content = []) => writeFileSync('CHANGELOG.md', content.join('\n\n'));

ChangeLog([bundle('change_log')]);
ReadMe([
	'badges',
	'header',
	'api',
	'installation',
	'highlight',
	'utilization',
	'contribute',
	'security_vulnerabilities',
	'change_log',
	'versioning',
	'license'
].map(bundle));

