module.exports = {
  title: 'ELE-VUE',
  description: '基于element-ui 二次开发组件',
  plugins: [
    [
      'demo-code',
      {
        jsLibs: [
          // umd
          'https://unpkg.com/tua-storage/dist/TuaStorage.umd.js',
          'https://unpkg.com/element-ui/lib/index.js',
          'https://cdn.jsdelivr.net/npm/ele-vue/lib/ele-vue.umd.min.js'
        ],
        cssLibs: [
          'https://unpkg.com/animate.css@3.7.0/animate.min.css',
          'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
        ],
        showText: '显示代码',
        hideText: '隐藏代码',
        styleStr: 'text-decoration: underline;',
        minHeight: 0,
        onlineBtns: {
          codepen: true,
          jsfiddle: true,
          codesandbox: true
        },
        codesandbox: {
          deps: { lodash: 'latest' },
          json: '',
          query: '',
          embed: ''
        }
      }
    ]
  ],
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
