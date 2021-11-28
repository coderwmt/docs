module.exports = {
  base:"/docs/",
  title: "WuSir",
  description:"关于我学习前端的个人博客",
  head:[
    ['link', { rel: 'icon', href: '/favicon.ico' }]
    // ["meta",{ name:"authour",content:"WuSir"}],
    // ["meta",{ name:"keywords",content:"vuepress,前端开发"}]
  ],
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