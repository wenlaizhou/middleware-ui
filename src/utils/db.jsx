import { CloudServerOutlined } from "@ant-design/icons"

export default {
	schemaToMenu: (data, navigate) => {
		return data.map(item => {
			if (item["table_schema"] === "public") {
				return item["table_name"]
			}
		}).filter(i => i).map(table_name => {
			return {
				key: table_name,
				label: table_name,
				icon: <CloudServerOutlined/>,
				onClick: ({item, key, keyPath, domEvent}) => {
					console.log(item)
					navigate(`/list?schema=${table_name}`)
				}
			}
		})
	}
}