const defaultTheme = require("tailwindcss/defaultTheme");
const { iconsPlugin, getIconCollections  } = require("@egoist/tailwindcss-icons");
const svgToDataUri = require("mini-svg-data-uri");
const { default: flattenColorPalette } = require('tailwindcss/lib/util/flattenColorPalette')

/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			typography: (theme) => ({
				DEFAULT: {
					css: {
						a: {
							textDecoration: "none",
							borderBottom: `1px solid ${theme("colors.sky.300")}`
						},
						"a:hover": {
							borderBottomWidth: "2px"
						},
						code: {
							fontWeight: "500"
						},
						pre: {
							padding: theme("padding.5"),
							borderWidth: "1px",
							borderColor: "#ECEBE8",
							borderRadius: theme("borderRadius.md"),
						}
					}
				},
				invert: {
					css: {
						a: {
							borderBottomColor: theme("colors.sky.400")
						},
						pre: {
							borderColor: "#201E1B",
						}
					}
				}
			}),
			fontFamily: {
				mono: ["DM Mono", ...defaultTheme.fontFamily.mono]
			}
		}
	},
	plugins: [
		// 排版插件
		require("@tailwindcss/typography"),
		// 图标插件
		iconsPlugin({
			collections: getIconCollections(["mdi", "ant-design", "carbon", "material-symbols", "ri", "ph", "tdesign"]),
			scale: 1.2,
			extraProperties: {
				"vertical-align": "text-bottom"
			}
		}),
		// 背景模糊
		function ({ addVariant }) {
      addVariant(
        'supports-backdrop-blur',
        '@supports (backdrop-filter: blur(0)) or (-webkit-backdrop-filter: blur(0))'
      )
		},
		// 背景网格图
		function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'bg-grid': (value) => ({
						backgroundImage: `url("${svgToDataUri(
              `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
            )}")`,
					}),
				},
				{ values: flattenColorPalette(theme('backgroundColor')), type: 'color' }
			)
		}
	]
}
