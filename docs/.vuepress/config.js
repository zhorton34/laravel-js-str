
const { readdirSync } = require('fs');

module.exports = {
  title: 'Laravel JS String',
  description: 'Laravel Illuminate Str within Javascript',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Installation', link: '/installation.md' },
      { text: 'Usage', link: '/usage.md' },
      { text: 'API', link: '/api.md' },
      { text: 'GitHub', link: 'https://github.com/zhorton34/laravel-js-str' },
    ],
    sidebar: [{
      title: 'Get started',
      collapsable: false,
      children: [
        'installation',
        'usage',
      ],
    }, {
      title: 'API',
      collapsable: false,
      children: readdirSync('docs/api', 'utf-8').map(file => `/api/${file}`),
    }],
  },
};
