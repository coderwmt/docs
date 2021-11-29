const headConfig = require("./config/headConfig")
const pluginsConfig = require("./config/pluginsConfig")
const nav = require("./nav")

module.exports = {
  base: "/docs/",
  title: "WuSir",
  description: "关于我学习前端的个人博客",
  head:headConfig,
  plugins:pluginsConfig,
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav: nav,
    search: true,
    searchMaxSuggestions: 10
  }
}