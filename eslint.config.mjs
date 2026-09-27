// @ts-check
import antfu from '@antfu/eslint-config'

export default antfu({
  astro: true,
  react: true,
  // vue 与 typescript 会根据已安装的依赖自动启用
  ignores: [
    // 文章里的代码块是教学示例（如用 var 演示变量提升），不参与 lint，避免 --fix 改写文章内容
    'src/content/**/*.md/**',
  ],
})
