const secret = require("./secret")

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
    clientId:secret.clientId,
    clientSecret:secret.clientSecret,
    autoCreateIssue:true
  },
  '@vuepress/back-to-top':true
}