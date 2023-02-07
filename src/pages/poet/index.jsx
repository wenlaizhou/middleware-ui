import {
	LikeOutlined,
	MessageOutlined,
	StarOutlined,
	DatabaseOutlined,
	RocketOutlined,
} from "@ant-design/icons"
import { List, Row, Space, Card, Col, Statistic, Divider, Button, Select, Input, Anchor } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import { ProCard, StatisticCard } from '@ant-design/pro-components';


import Pinyin from "../../utils/pinyin"
import conf from "../../conf"

import React, { createRef, useEffect, useState } from "react"


const items = [
	{ key: '1', title: '结果数', value: 10, total: true },
	{ key: '2', status: 'default', title: '未发布', value: 5, },
	{ key: '3', status: 'processing', title: '发布中', value: 3, },
	{ key: '4', status: 'error', title: '发布异常', value: 1, },
	{ key: '5', status: 'success', title: '发布成功', value: 1 },
];


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
	const [queryType, setQueryType] = useState("pinyin")
	const [loading, setLoading] = useState(false)
	const [authorOptions, setAuthorOptions] = useState([])

	useEffect(() => {

	}, [])

	return <>
		<Card title={"诗词"} extra={<Button>extra</Button>}>
			<Row>
				<Col span={12}>
					<Space>
						<Select defaultValue={"pinyin"} options={[{
							label: "韵母",
							value: "pinyin"
						}, {
							label: "内容",
							value: "content"
						}, {
							label: "结尾",
							value: "end"
						}, {
							label: "作者",
							value: "author"
						}
						]} suffixIcon={<RocketOutlined />} style={{
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
							fetch(`${conf.service}/poet/search?type=${queryType}&query=${value}`, {
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
						<Select showSearch={true} style={{ width: "180px" }} options={authorOptions} onSelect={(value, opt) => {
							if (!value) {
								setData(origin)
								return
							}
							setData(origin?.map(p => {
								if (p.author == value) {
									return p
								}
							}).filter(i => i))
						}} maxTagPlaceholder={"可按作者筛选"} placeholder={"可按作者筛选"} />
						<Pinyin />
					</Space>
				</Col>
			</Row>
			<Divider />
			<Row>
				<ProCard bordered={true}
					tabs={{
						onChange: (key) => {
							console.log('key', key);
						},
						items: items.map((item) => {
							return {
								key: item.key,
								style: { width: '100%' },
								label: (
									<StatisticCard.Statistic
										layout="vertical"
										title={item.title}
										value={item.value}
										status={item.status}
										style={{
											width: 120,
											borderInlineEnd: item.total ? '1px solid #f0f0f0' : undefined,
										}}
									/>
								),
								children: (
									<StatisticCard.Group direction={'row'}>
										<StatisticCard
											statistic={{
												title: item.title,
												value: data.length,
												trend: "up",
												icon: <RocketOutlined />
											}}
										/>
										<StatisticCard.Divider type={'vertical'} />
										<StatisticCard
											statistic={{
												title: '作者数',
												value: authors.length,
												trend: "up",
												icon: <RocketOutlined />,
												description: <StatisticCard.Statistic title="占比" value="61.5%" />,
											}}
										/>
									</StatisticCard.Group>
								),
							};
						}),
					}}
				/>
			</Row>
			<Divider />
			<Row>
				<Col span={24}>
					<Card bordered={true}>
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
										title={`${item.author} : ${item.title || item.rhythmic}`}
										description={<pre>
											<code style={{
												color: "#CF1322"
											}}>{(item.content || item.paragraphs || []).join("\n")}</code>
										</pre>}
									/>
								</List.Item>
							)}
						/>
					</Card>
				</Col>
			</Row>
		</Card>
	</>
}
export default App