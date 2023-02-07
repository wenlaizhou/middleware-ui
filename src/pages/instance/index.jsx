import { LikeOutlined, MessageOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, LoginOutlined, DatabaseOutlined, RocketOutlined, ReloadOutlined } from "@ant-design/icons"
import { Avatar, List, Row, Space, Card, Col, Statistic, Divider, Button, Select, message, Popconfirm } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
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
	const [loading, setLoading] = useState(true)
	const [reload, setReload] = useState("")

	useEffect(() => {
		setLoading(true)
		fetch(`${conf.service}/list?schema=instance`, {
			method: "GET",
			mode: "cors",
			redirect: "follow",
		}).then(r => {
			if (r.ok) {
				return r.json()
			} else {
				throw new Error("网络错误")
			}
		}).then(resp => {
			if (resp.code != 0) {
				message.error(`${resp.message}`)
				return
			}
			const data = resp.data
			setData(data || [])
			setLoading(false)
		}).catch(reason => {
			message.error(`网络错误: ${reason.message}`)
			setLoading(false)
		})
	}, [reload])

	return <>
		<Card title={"实例管理"} extra={[<Button type={"primary"} icon={<ReloadOutlined/>} onClick={(e) => {
			setReload(`${Math.random()}`)
		}}>Reload</Button>]}>
			<Row gutter={15}>
				<Col span={12}>
					<Card>
						<Statistic
							title="实例数量"
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
							title="Running"
							groupSeparator={""}
							value={data?.map(i => {
								if (i.state == "RUNNING") {
									return i
								}
							}).filter(i => i).length || "0"}
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
					<List
						loading={loading}
						itemLayout="vertical"
						size="small"
						pagination={{
							onChange: (page) => {
								console.log(page)
							},
							pageSize: 20,
						}}
						dataSource={data}
						renderItem={(item) => (
							<List.Item
								key={item.id}
								actions={[
									<IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
									<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
									<IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
								]}
								extra={
									<Space direction={"vertical"}>
										<Popconfirm title={"确定删除该实例?"} onConfirm={(e) => {
											console.log(item)
											console.log("删除")
											const reg = /\/subscriptions\/(\S+?)\/resourceGroups\/(\S+?)\/zones\/(\S+?)\/bmsInstances\/(\S+)/
											const regGroups = reg.exec(item.id)
											const param = {
												subscription: regGroups[1],
												resourceGroup: regGroups[2],
												zone: regGroups[3],
												name: regGroups[4]
											}
											fetch(`${conf.service}/delete`, {
												method: "POST",
												mode: "cors",
												redirect: "follow",
												body: JSON.stringify(param)
											}).then(r => {
												if (r.ok) {
													return r.json()
												} else {
													message.error("删除失败")
												}
											}).then(res => {
												console.log(res)
												if (res.code != 0) {
													message.error(`删除失败: ${res.message}`)
													return
												} else {
													message.success(`删除成功!`)
												}
											})
										}} okText={"确定"} cacelText={"取消"}>
											<Button type={"danger"} onClick={() => {

											}}>删除</Button>
										</Popconfirm>
									</Space>
								}
							>
								<List.Item.Meta
									avatar={<DatabaseOutlined/>}
									title={<h4>{`${item.display_name} : ${item.state}`}</h4>}
									description={<pre>
										<code style={{
											color: "#CF1322"
										}}>{JSON.stringify(item, null, 4)}</code>
								</pre>}
								/>
							</List.Item>
						)}
					/>
				</Col>
			</Row>
		</Card>
	</>
}
export default App