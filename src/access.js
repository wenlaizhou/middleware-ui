const isDev = process.env.NODE_ENV === "development"

/**
 * @see https://umijs.org/zh-CN/plugins/plugin-access
 * */
export default function access(initialState) {
	return {
		index: true,
	}
}
