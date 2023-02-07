import {
	LikeOutlined,
	MessageOutlined,
	StarOutlined,
	RocketOutlined,
	AlertOutlined
} from "@ant-design/icons"
import { List, Row, Space, Card, Col, Statistic, Divider, Button, Select, Input, Anchor } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import conf from "../../conf"
import Pinyin from "../../utils/pinyin"

import React, { createRef, useEffect, useState } from "react"

const IconText = ({ icon, text }) => (
	<Button>
		{React.createElement(icon)}
		{text}
	</Button>
)

const App = (props) => {
	let navigate = useNavigate()
	const [data, setData] = useState([])
	const [origin, setOrigin] = useState([])
	const [authors, setAuthors] = useState([])
	const [queryType, setQueryType] = useState("content")
	const [loading, setLoading] = useState(false)
	const [authorOptions, setAuthorOptions] = useState([])
	const [info, setInfo] = useState({
		size: 0
	})

	useEffect(() => {
		fetch(`${conf.service}/idiom/info`, {
			method: "GET",
			mode: "cors",
			redirect: "follow",
		}).then(r => {
			if (r.ok) {
				return r.json()
			}
		}).then(resp => {
			setInfo(resp.data)
		})
	}, [])

	return <>
		<Card title={"成语"} extra={<Anchor affix={false} />}>
			<Row>
				<Col span={12}>
					<Space>
						<Select defaultValue={"content"} options={[{
							label: "内容",
							value: "content"
						}, {
							label: "结尾",
							value: "end"
						}, {
							label: "韵母",
							value: "pinyin"
						},]} suffixIcon={<RocketOutlined />} style={{
							width: 120
						}} onChange={(value, option) => {
							setQueryType(value)
						}} />
						<Input.Search style={{
							width: 500,
						}} onSearch={(value, event) => {
							setLoading(true)
							setData([])
							setAuthorOptions([])
							setAuthors([])
							fetch(`${conf.service}/idiom/search?type=${queryType}&query=${value}`, {
								method: "GET",
								mode: "cors",
								redirect: "follow",
							}).then(r => {
								if (r.ok) {
									return r.json()
								}
							}).then(resp => {

								const data = resp.data
								setData(data || [])
								setOrigin(data || [])
								const authorMaps = {}
								data?.map(i => {
									if (i && i.author) {
										authorMaps[i.author] = 0
									}
								})
								setAuthors(Object.keys(authorMaps))
								setLoading(false)
								const optionsVal = Object.keys(authorMaps).map(i => {
									if (i) {
										return {
											label: i,
											value: i
										}
									}
								}).filter(i => i)
								setAuthorOptions(optionsVal)
							})
						}} />
						<Pinyin />
					</Space>
				</Col>
			</Row>
			<Divider />
			<Row gutter={15}>
				<Col span={12}>
					<Card>
						<Statistic
							title="结果数"
							value={data.length}
							groupSeparator={""}
							valueStyle={{ color: "#3f8600" }}
							prefix={<AlertOutlined />}
							suffix=""
						/>
					</Card>
				</Col>
				<Col span={12}>
					<Card>
						<Statistic
							title="总数"
							groupSeparator={""}
							value={info.size}
							valueStyle={{ color: "#cf1322" }}
							prefix={<RocketOutlined />}
							suffix=""
						/>
					</Card>
				</Col>
			</Row>
			<Divider />
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
							showQuickJumper: true,
							defaultPageSize: 10,
						}}
						dataSource={data}
						renderItem={(item) => (
							<List.Item
								key={item.id}
								actions={[
									<IconText icon={StarOutlined} text="0" key="list-vertical-star-o" />,
									<IconText icon={LikeOutlined} text="0" key="list-vertical-like-o" />,
									<IconText icon={MessageOutlined} text="0" key="list-vertical-message" />,
								]}
								extra={
									<Space direction={"vertical"}>
										<Button type={"danger"}></Button>
									</Space>
								}
							>
								<List.Item.Meta
									title={`${item.word}`}
									description={<pre>
										<code style={{
											color: "#CF1322"
										}}>{`解释: ${item.explanation}\n例子: ${item.example}`}</code>
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