import { LikeOutlined, MessageOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, LoginOutlined, DatabaseOutlined, RocketOutlined } from "@ant-design/icons"
import { Avatar, List, Row, Space, Card, Col, Statistic, Divider, Button, Select, message } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import Add from "./Add"
import conf from "../../conf"

import React, { useEffect, useState } from "react"

const data = Array.from({
	length: 23,
}).map((_, i) => ({
	href: "https://ant.design",
	title: `ant design part ${i}`,
	avatar: `https://joeschmoe.io/api/v1/random?version=${Math.random()}`,
	description:
		"Ant Design, a design language for background applications, is refined by Ant UED Team.",
	content:
		"We supply a series of design principles, practical patterns and high quality design resources (Sketch and Axure), to help people create their product prototypes beautifully and efficiently.",
}))
const IconText = ({icon, text}) => (
	<Button>
		{React.createElement(icon)}
		{text}
	</Button>
)
const App = (props) => {
	let navigate = useNavigate()
	console.log(useLocation())
	const [open, setOpen] = useState(false)
	const [loading, setLoading] = useState(true)
	const [confData, setConfData] = useState({
		config: {},
		current: {
			env: ""
		}
	})

	useEffect(() => {

		fetch(`${conf.service}/getConf`, {
			method: "GET",
			mode: "cors",
			redirect: "follow",
		}).then(r => {
			if (r.ok) {
				return r.json()
			}
		}).then(resp => {
			const data = resp.data
			console.log(data)
			setConfData(data || confData)
			setLoading(false)
		}).catch(reason => {
			message.error(`网络错误: ${reason.message}`)
		})
	}, [])

	return <>
		<Card title={"配置管理"} extra={<Button type={"primary"} onClick={e => {
			setOpen(true)
		}}>创建</Button>}>
			<Add setOpen={setOpen} open={open}/>
			<Row gutter={15}>
				<Col span={12}>
					<Card>
						<Statistic
							title="配置数量"
							value={Object.values(confData.config || {}).length}
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
							title="Current"
							groupSeparator={""}
							value={confData.current.env}
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
							pageSize: 10,
						}}
						dataSource={(() => {
							const res = []
							if (confData.current.env) {
								if (confData.current.env.indexOf("当前") <= 0) {
									confData.current.env = `${confData.current.env} [当前环境]`
								}
								res.push(confData.current)
							}
							if (confData.config) {
								res.push(...Object.values(confData.config))
							}
							console.log(res)
							return res
						})()}
						footer={<Button type={"primary"} onClick={e => {
							setOpen(true)
						}}>创建</Button>}
						renderItem={(item) => (
							<List.Item
								key={item.nameserver}
								actions={[
									<IconText icon={StarOutlined} text="156" key="list-vertical-star-o"/>,
									<IconText icon={LikeOutlined} text="156" key="list-vertical-like-o"/>,
									<IconText icon={MessageOutlined} text="2" key="list-vertical-message"/>,
								]}
								extra={
									<Space direction={"vertical"}>
										<Button type={"primary"}>使用该环境</Button>
										<Button type={"danger"}>删除</Button>
									</Space>
								}
							>
								<List.Item.Meta
									avatar={<DatabaseOutlined/>}
									title={<h4>{`环境: ${item.env}`}</h4>}
									description={<pre>
										<code style={{
											color: "#CF1322"
										}}>{JSON.stringify(item, null, 4)}</code>
								</pre>}
									onClick={() => {
										// navigate("/")
									}}
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