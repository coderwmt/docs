module.exports = {
  base: "/docs/",
  title: "WuSir",
  description: "关于我学习前端的个人博客",
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
    ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    // ["meta",{ name:"authour",content:"WuSir"}],
    // ["meta",{ name:"keywords",content:"vuepress,前端开发"}]
  ],
  plugins: {
    '@vuepress/pwa':{
      serviceWorker: true,
      updatePopup: {
        message: "发现新内容可用",
        buttonText: "刷新"
      }
    },
    "@vssue/vuepress-plugin-vssue":{
      platform:"github-v4",
      owner:"coderwmt",
      repo:"docs",
      clientId:"573ddd11cba4657cfcfb",
      clientSecret:"90568dc2bfaaca7290368962931a072753310e51",
      autoCreateIssue:true
    }
  },
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/about/' },
      {
        text: 'Languages',
        ariaLabel: 'Language Menu',
        items: [
          { text: 'Chinese', link: '/language/chinese/' },
          { text: 'Japanese', link: '/language/japanese/' }
        ]
      },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: {
      '/css/': [
        'css-a',     /* /css/css-a.html*/
        'css-b',  /* /css/css-b.html */
        'css-c'   /* /css/css-c.html */
      ],
      '/javascript/': [
        'javascript-a',
        'javascript-b',
        'javascript-c'
      ]
    }
  }
}