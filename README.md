# Astro Blog

![GitHub deployments](https://img.shields.io/github/deployments/bohecola/astro-blog/production?style=flat&logo=vercel&logoColor=white&label=vercel)

## Features

- [x] MDX [@astrojs/mdx](https://docs.astro.build/en/guides/integrations-guide/mdx/) - Markdown 内容中使用变量、JSX 表达式和组件
- [x] Sitemap [@astrojs/sitemap](https://docs.astro.build/en/guides/integrations-guide/sitemap/) - 生成站点地图
- [x] RSS [@astrojs/rss](https://docs.astro.build/en/guides/rss/#setting-up-astrojsrss) - 生成 RSS 摘要
- [x] 集成 [@astrojs/tailwind](https://docs.astro.build/zh-cn/guides/integrations-guide/tailwind/) 以使用 [tailwindcss](https://tailwindcss.com/) 
- [x] 集成 [@astrojs/vue](https://docs.astro.build/zh-cn/guides/integrations-guide/vue/) 以使用 [vue](https://vuejs.org/)
- [x] 集成 [@astrojs/react](https://docs.astro.build/en/guides/integrations-guide/react/) 以使用 [react](https://react.dev/)
- [x] 动态生成 robots.txt - [具体配置](https://docs.astro.build/en/guides/integrations-guide/sitemap/)
- [x] 基于 [Shiki](https://docs.astro.build/zh-cn/guides/integrations-guide/markdoc/#shiki) 的代码语法高亮
- [x] 明暗模式 - 适配 giscus 和 DocSearch 的深浅主题切换
- [x] 响应式布局 - 基于 [tailwindcss 响应式设计](https://tailwindcss.com/docs/responsive-design)
- [x] 博客标签分类
- [x] 生成博客目录 TableOfContents
- [x] 开发模式下预览草稿
- [x] 自定义配置 404 错误页面 - [具体配置](https://docs.astro.build/en/basics/astro-pages/#custom-404-error-page)
- [x] 文章搜索 - [DocSearch](https://docsearch.algolia.com/)
- [x] 评论功能 - [giscus](https://giscus.app/) 一个基于 [GitHub Discussions](https://docs.github.com/en/discussions) 实现的评论系统

使用到的 Tailwind CSS 插件：

[@tailwindcss/typography](https://tailwindcss.com/docs/typography-plugin) - Tailwind CSS 官方排版插件\
[@egoist/tailwindcss-icons](https://github.com/egoist/tailwindcss-icons) - 在 Tailwind CSS 中使用 [Iconify](https://iconify.design/) 图标

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |

## 订阅

使用 RSS 订阅我的博客：https://deore.me/rss.xml

[如何用 RSS 订阅？](https://zhuanlan.zhihu.com/p/55026716)