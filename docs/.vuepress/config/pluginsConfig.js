module.exports =  {
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
  },
  '@vuepress/back-to-top':true
}