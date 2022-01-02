/* const sidebar = require('./sidebar.js'); */

module.exports = {
    lang: 'en-US',
    title: 'wikipedia.js',
    description: 'Just playing around',
    base: '/wikipedia.js/',
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        sidebar: {
            '/': [
                {
                    text: 'Home',
                    children: ['/'],
                },
                {
                    text: 'Setup',
                    children: [
                        '/setup/README.md'
                    ],
                },
                {
                    text: 'Classes',
                    children: [
                        '/page/README.md',
                        '/feed/README.md',
                        '/requests/README.md'
                    ],
                },
            ],
        }
    },

    home: '/docs/README.md'
  }