import { LikeOutlined, MessageOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, LoginOutlined, DatabaseOutlined, RocketOutlined, CloudServerOutlined } from "@ant-design/icons"
import { Avatar, List, Row, Space, Card, Col, Statistic, Divider, Button, Select, Table, message } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import dbUtils from "../../utils/db"
import conf from "../../conf"

import React, { useEffect, useState } from "react"

const IconText = ({icon, text}) => (
	<Button>
		{React.createElement(icon)}
		{text}
	</Button>
)

const App = (props) => {
	let navigate = useNavigate()
	const [data, setData] = useState([])
	const [columns, setColumns] = useState([])
	const [tables, setTables] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		fetch(`${conf.service}/schema`, {
			method: "GET",
			mode: "cors",
			redirect: "follow",
		}).then(r => {
			if (r.ok) {
				return r.json()
			}
		}).then(resp => {
			if (resp.code !== 0) {
				message.error(`${resp.message}`)
				return
			}
			const data = resp.data
			if (data && data instanceof Array && data.length > 0) {
				const first = data[0]
				setColumns(Object.keys(first).map(key => {
					const keys = {}
					data.map(item => {
						keys[`${item[key]}`] = {
							text: `${item[key]}`,
							value: `${item[key]}`
						}
					})
					return {
						title: key,
						dataIndex: key,
						filters: Object.values(keys),
						render: (text, record, index) => {
							return `${record[key]}`
						},
						onFilter: (value, record) => {
							return record[key].indexOf(value) === 0
						},
					}
				}))
				setLoading(false)
				setData(data)
				setMenus([...dbUtils.schemaToMenu(data, navigate), {
					key: "schema",
					label: "schema",
					icon: <CloudServerOutlined/>,
					onClick: ({item, key, keyPath, domEvent}) => {
						console.log(item)
						navigate(`/schema`)
					}
				}])
				setTables(data.map(item => {
					if (item["table_schema"] === "public") {
						return item["table_name"]
					}
				}).filter(i => i))
			} else {
				setColumns([])
				setLoading(false)
				setData([])
			}
		}).catch(reason => {
			message.error(`网络错误: ${reason.message}`)
		})
	}, [])

	return <>
		<Card title={"Schema"}>
			<Row gutter={15}>
				<Col span={12}>
					<Card>
						<Statistic
							title="行数"
							value={data.length}
							groupSeparator={""}
							valueStyle={{color: "#3f8600"}}
							prefix={<DatabaseOutlined/>}
							suffix=""
						/>
					</Card>
				</Col>
				<Col span={12}>
					<Card>
						<Statistic
							title="表数"
							groupSeparator={""}
							value={tables.length}
							valueStyle={{color: "#cf1322"}}
							prefix={<RocketOutlined/>}
							suffix=""
						/>
					</Card>
				</Col>
			</Row>
			<Divider/>
			<Row>
				<Col span={24}>
					<Table columns={columns}
					       dataSource={data}
					       pagination={{
						       defaultPageSize: 20
					       }} loading={loading}
					       bordered={true}
					       scroll={{x: 1500}}
					/>
				</Col>
			</Row>
		</Card>
	</>
}
export default App