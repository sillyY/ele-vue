module.exports = {
  title: 'ELE-VUE',
  description: '基于element-ui 二次开发组件',
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
  },
  head: [
    [
      'script',
      {
        src:
          'https://cdn.jsdelivr.net/npm/react@16.6.3/umd/react.production.min.js'
      }
    ],
    [
      'script',
      {
        src:
          'https://cdn.jsdelivr.net/npm/react-dom@16.6.3/umd/react-dom.production.min.js'
      }
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js' }
    ],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/numerify/lib/index.umd.min.js' }
    ],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/echarts/dist/echarts.min.js' }
    ],
    [
      'script',
      { src: 'https://cdn.jsdelivr.net/npm/v-charts/lib/line.min.js' }
    ],
    [
      'script',
      { src: 'https://www.googletagmanager.com/gtag/js?id=UA-122325348-1' }
    ],
    ['script', { src: 'https://cdn.jsdelivr.net/npm/ele-vue/lib/ele-vue.umd.min.js' }],
    [
      'script',
      {
        src: 'https://unpkg.com/element-ui/lib/index.js'
      }
    ]
  ],
  plugins: [
    'demo-block',
    {
      settings: {
        codepen: true
      }
    }
  ]
}
