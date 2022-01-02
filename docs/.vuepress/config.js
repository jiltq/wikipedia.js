const sidebar = require('./sidebar.js');
console.log(process.cwd())

module.exports = {
    lang: 'en-US',
    title: 'wikipedia.js',
    description: 'Just playing around',
    base: '/wikipedia.js/',
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: 'https://vuejs.org/images/logo.png',
        sidebar
    },

    home: '/docs/README.md'
  }