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
}, {
  rules: {
    // 该规则会往 pnpm-workspace.yaml 写入 trustPolicy 等供应链策略，改变 pnpm 的安装行为，暂不启用
    'pnpm/yaml-enforce-settings': 'off',
  },
})
