import { LikeOutlined, MessageOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, LoginOutlined, DatabaseOutlined, RocketOutlined } from "@ant-design/icons"
import { Avatar, List, Row, Space, Card, Col, Statistic, Divider, Button, Select, Table, message } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import conf from "../../conf"

import React, { useEffect, useState } from "react"

const IconText = ({icon, text}) => (
	<Button>
		{React.createElement(icon)}
		{text}
	</Button>
)

const App = () => {
	let navigate = useNavigate()
	let location = useLocation()

	console.log(location)

	const [data, setData] = useState([])
	const [columns, setColumns] = useState([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!location.search) {
			return
		}
		fetch(`${conf.service}/list${location.search}`, {
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
				setColumns([...Object.keys(first).map(key => {
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
				}), {
					title: "operation",
					render: (text, record, index) => {
						return <Space direction={"vertical"}>
							<Button type={"error"}>删除</Button>
						</Space>
					},
				}])
				setLoading(false)
				setData(data)
			} else {
				setColumns([])
				setLoading(false)
				setData([])
			}
		})
	}, [location.search])

	return <>
		<Card title={`${location.search}`.replace("?schema=", "")}>
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
							title="列数"
							groupSeparator={""}
							value={columns.length}
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