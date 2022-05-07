// https://umijs.org/config/
import { defineConfig } from "umi"
import defaultSettings from "./defaultSettings"
import routes from "./routes"

const {REACT_APP_ENV} = process.env
export default defineConfig({
	hash: true,
	history: {
		//type: "browser",
		type: "hash",
	},
	antd: {},
	dva: {
		hmr: true,
	},
	layout: {
		// https://umijs.org/zh-CN/plugins/plugin-layout
		locale: false,
		siderWidth: 180,
		...defaultSettings,
	},
	// https://umijs.org/zh-CN/plugins/plugin-locale
	locale: {
		// default zh-CN
		default: "zh-CN",
		antd: true,
		// default true, when it is true, will use `navigator.language` overwrite default
		baseNavigator: true,
	},
	dynamicImport: {
		loading: "@ant-design/pro-layout/es/PageLoading",
	},
	targets: {
		ie: 11,
	},
	// umi routes: https://umijs.org/docs/routing
	routes,
	// Theme for antd: https://ant.design/docs/react/customize-theme-cn
	theme: {
		// 'root-entry-name': 'variable',
		"layout-body-background": "#E5E7F0",
		"primary-color": "#6680FF",
		"aid-font-size": "20px",
		"modal-header-bg": "#6680FF",
		"modal-close-color": "#fff",
		"modal-heading-color": "#fff",
		"disable-color": "#ccc",
	},
	//   theme: Object.assign(defaultTheme, {
	//     'primary-color': defaultSettings.primaryColor,
	//     title: 'action',
	//     logo: 'logo.png',
	//     layout: 'mix',
	//     contentWidth: 'Fluid',
	//     navTheme: 'realDark',
	//     // "splitMenus": false,
	//     primaryColor: '#1890ff',
	//   }),
	// esbuild is father build tools
	// https://umijs.org/plugins/plugin-esbuild
	esbuild: {},
	title: false,
	ignoreMomentLocale: true,
	manifest: {
		basePath: "/",
	},
	// Fast Refresh 热更新
	fastRefresh: {},
	nodeModulesTransform: {
		type: "none",
	},
	mfsu: {},
	webpack5: {},
})
