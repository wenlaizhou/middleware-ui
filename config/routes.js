export default [
	{
		name: "介绍页",
		icon: "smile",
		path: "/about",
		component: "./About",
		footerRender: false,
		headerRender: false,
		menuRender: false,
		hideInMenu: true,
	},
	{
		path: "/",
		footerRender: false, // 这里值只能设置为 false 或 删除本行
		headerRender: false,
		menuRender: false,
		hideInMenu: true,
		component: "./About",
		access: "index",
	},
	{
		name: "swagger",
		path: "/swagger",
		// menuRender: false,
		// hideInMenu: false,
		icon: "ApiOutlined",
		component: "./Swagger",
		access: "index",
	},
	{
		component: "./404",
	},
	{
		component: "./403",
	},
]
