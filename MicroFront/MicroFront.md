# 微前端
## 1. 前端发展阶段
首先我们来问一下自己：前端开发模式是如何一步一步发展到今天的？为什么现在我们前端开发需要安装 node、npm、webpack 等工具？如果不用这些技术，那如何做前端开发呢？

要回答上面的疑问，我们就把时间倒回到1990年，来看一下整个前端发展的几十年当中，有哪些标志性的事件。

- 1990年 世界上第一个网站在日内瓦的欧洲核子研究中心上线；
- 1995年 Brendan Eich 发明 Javascript，标志着前端开发的诞生；
- 2005年 Ajax(Asynchronous Javascript And XML) 概念提出，标志着前端开发模式进入到前后端分离的时代；
- 2006年 Jquery 首次发布；
- 2008年 V8引擎 首次发布，标志着 Javascript 有可能脱离浏览器进行使用；
- 2009年 nodejs 首次发布，标志着前端进入到一个飞跃的时代；
- 2010年 npm 首次发布，标志着模块化开发正式诞生；
- 2012年 webpack 首次发布，标志着现代前端开发模式正式形成；
- 2013年 Electron 首次发布，让JS能够跟C#、C++、QT等一种老牌的桌面开发语言竞争
- 2013年 React 首次发布，标志着前端开发模式正式进入到 MVVM 时代；
- 2014年 Vue 首次发布
- 2015年 ReactNative 首次发布
- 2016年 Angular 首次发布；

![FrontProject](./static/FrontProjectVender.webp)




## 2. 微前端出现的背景
微前端的概念是由ThoughtWorks在2016年提出的，它借鉴了微服务的架构理念，核心在于将一个庞大的前端应用拆分成多个独立灵活的小型应用，每个应用都可以独立开发、独立运行、独立部署，再将这些小型应用融合为一个完整的应用，或者将原本运行已久、没有关联的几个应用融合为一个应用。微前端既可以将多个项目融合为一，又可以减少项目之间的耦合，提升项目扩展性，相比一整块的前端仓库，微前端架构下的前端仓库倾向于更小更灵活。

它主要解决了两个问题：  
1、随着项目迭代应用越来越庞大，难以维护。  
2、跨团队或跨部门协作开发项目导致效率低下的问题。  



## 3. 微前端效果与原理
## 4. 微前端落地方案
### 4.1 Single-SPA

### 4.2 Qiankun（阿里）

### 4.3 MicroApp（京东）

### 4.4 Wujie（腾讯）

## 参考资料
- [MDN-Web入门](https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web)
- [MDN-Ajax](https://developer.mozilla.org/zh-CN/docs/Web/Guide/AJAX)
- [Wiki-Ajax](https://zh.wikipedia.org/wiki/AJAX)
- [Wiki-编程语言历史](https://zh.m.wikipedia.org/zh-sg/%E7%A8%8B%E5%BC%8F%E8%AA%9E%E8%A8%80%E6%AD%B7%E5%8F%B2)
- [MicroApp](https://micro-zoe.github.io/micro-app/)