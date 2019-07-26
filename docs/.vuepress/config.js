module.exports = {
  title: 'ELE-VUE',
  description: '基于element-ui 二次开发组件',
  plugins: ['demo-code'],
  themeConfig: {
    locales: {
      '/': {
        nav: [
          {
            text: '首页',
            link: '/'
          },
          {
            text: '组件',
            link: '/components/'
          },
          { text: 'Github', link: 'https://github.com/sillyY' }
        ],
        sidebar: {
          '/components/': ['Table']
        }
      }
    }
  }
}
