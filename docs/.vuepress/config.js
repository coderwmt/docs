const headConfig = require("./config/headConfig")
const pluginsConfig = require("./config/pluginsConfig")
const navConfig = require("./config/navConfig")
const sidebarConfig = require("./config/sidebarConfig")

module.exports = {
  base: "/docs/",
  title: "WuSir",
  description: "关于我学习前端的个人博客",
  head:headConfig,
  plugins:pluginsConfig,
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/assets/img/hero.png',
    nav: navConfig,
    sidebar: sidebarConfig
  }
}