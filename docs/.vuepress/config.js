module.exports = {
    locales: {
      '/': {
        lang: 'en-US',
        title: 'ELE-VUE',
        description: 'Help you use Element comfortably'
      },
      '/zh/': {
        lang: 'zh-CN',
        title: 'ELE-VUE',
        description: '基于Element的开发助手'
      }
    },
    themeConfig: {
      repo: 'sillyY/ele-vue',
      editLinks: true,
      docsDir: 'docs',
      locales: {
        '/': {
          label: 'English',
          selectText: '🌏Language',
          editLinkText: 'Edit this page on GitHub',
          lastUpdated: 'Last Updated',
          nav: [
            {

              text: '⬆Guide',
              link: '/guide/'
            },
            {
              text: '📏Components',
              link: '/components/'
            },
            {
              text: '💪Todo',
              link: '/todo/'
            },
          ],
          sidebar: {
            '/guide/': [{
              title: 'Guide',
              collapsable: false,
              children: ['', 'update-log']
            }],
            '/components/': [
              {
                title: 'Components',
                collapsable: false,
                children: ['Table', 'Page']
              }
            ],
            '/todo/': [
              {
                title: 'Next to do',
                collapsable: false,
                children: ['']
              }
            ],
          }
        },
        '/zh/': {
          label: '简体中文',
          selectText: '🌏选择语言',
          editLinkText: '在 GitHub 上编辑此页',
          lastUpdated: '上次更新',
          nav: [
            {
              text: '⬆指南',
              link: '/zh/guide/'
            },
            {
              text: '📏组件',
              link: '/zh/components/'
            },
            {
              text: '💪Todo',
              link: '/zh/todo/'
            },
          ],
          sidebar: {
            '/zh/guide/': [{
              title: '指南',
              collapsable: false,
              children: ['', 'update-log']
            }],
            '/zh/components/': [
              {
                title: '组件',
                collapsable: false,
                children: ['Table表格', 'Page分页']
              }
            ],
            '/zh/todo/': [
              {
                title: 'Next to do',
                collapsable: false,
                children: ['']
              }
            ],
          }
        }
      }
    },
    base: '/ele-vue/',
    head: [
      ['link', { rel: 'icon', href: '/favicon.png' }],
      ['script', { src: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js' }],
      ['script', { src: 'https://unpkg.com/element-ui/lib/index.js' }],
      ['script', { src: 'https://unpkg.com/iview/dist/iview.min.js' }],
      [
        'script',
        {
          src: 'https://cdn.jsdelivr.net/npm/ele-vue@0.2.9/lib/ele-vue.umd.min.js'
        }
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/element-ui/lib/theme-chalk/index.css'
        }
      ],
      [
        'link',
        {
          rel: 'stylesheet',
          href: 'https://unpkg.com/iview/dist/styles/iview.css'
        }
      ]
    ],
    plugins: [
      [
        'code-segment',
        {
          showText: '显示代码',
          hideText: '隐藏代码'
        }
      ]
    ]
  }
  function genSidebarConfig(title) {
    return [
      {
        title,
        collapsable: false,
        children: ['guide']
      }
    ]
  }
  