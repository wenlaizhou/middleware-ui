import { PageLoading } from "@ant-design/pro-layout"
import RightContent from "@/components/RightContent"
import Footer from "@/components/Footer"

const isDev = process.env.NODE_ENV === "development"

export const initialStateConfig = {
	loading: <PageLoading/>,
}

/**
 * @see  https://umijs.org/zh-CN/plugins/plugin-initial-state
 * */
export async function getInitialState() {
	return {}
}

/**
 * ProLayout 支持的api https://procomponents.ant.design/components/layout
 */
export const layout = (params) => {

	const {initialState, setInitialState} = params

	return {
		rightContentRender: () => <RightContent/>,

		disableContentMargin: false,

		waterMarkProps: {
			content: ""
		},

		ErrorBoundary: (page) => {
			// todo 这里进行自定义错误页面
			return page?.children
		},

		footerRender: () => <Footer/>,

		/**
		 * 页面切换, event数据接口埋点
		 * @param location
		 */
		onPageChange: (location) => {
		},

		menuHeaderRender: () => {
		},

		onMenuHeaderClick: () => {
			location.href = "/"
		},

		childrenRender: (children, props) => {

			console.log("app.jsx props:")
			console.log("childrenRender")
			console.log(props)

			return (
				<>
					{children}
				</>
			)
		},
		...initialState?.settings,
	}
}
