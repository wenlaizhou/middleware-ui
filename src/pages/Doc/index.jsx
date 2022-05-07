import React, { useEffect, useState } from "react"
import "./custom.less"
import "./monokai_sublime.css"
import { MarkdownDiv } from "./markdown"
import { prometheusDoc, restDoc, kafkaDoc, code } from "./doc"
import ProCard from "@ant-design/pro-card"
import { Button, Col, Divider, Menu, Row } from "antd"
import { FireOutlined, MenuFoldOutlined, MenuUnfoldOutlined, PieChartOutlined } from "@ant-design/icons"
import Highlight from "react-highlight"

export default (props) => {
	const [collapsed, setCollapsed] = useState(false)

	const accessDoc = [{
		title: "RestApi",
		content: restDoc
	}, {
		title: "Kafka",
		content: kafkaDoc
	}, {
		title: "Prometheus",
		content: prometheusDoc
	}]

	const [doc, setDoc] = useState(accessDoc)

	return (
		<Row gutter={24} style={{
			height: "100%",
		}}>
			<Col span={collapsed ? 1 : 2}>
				<Button type={"text"} onClick={() => {
					// setCollapsed(!collapsed)
				}} style={{marginBottom: 16}}>
					{React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined)}
				</Button>
				<Menu
					defaultSelectedKeys={["1"]}
					defaultOpenKeys={["1"]}
					mode="inline"
					theme="dark"
					inlineCollapsed={collapsed}
					style={{
						height: "100%",
					}}
				>
					<Menu.Item eventKey={"1"} title={"接入文档"} icon={<FireOutlined/>} onClick={() => {
						setDoc([])
						setTimeout(() => {
							setDoc(accessDoc)
						}, 1000)
					}}>
						接入方式
					</Menu.Item>
					<Menu.Item eventKey={"2"} title={"Event格式"} icon={<FireOutlined/>} onClick={() => {
						setDoc([])
						setTimeout(() => {
							setDoc([{
								title: "Event 数据格式",
								content: code
							}])
						}, 1000)
					}}>
						Event格式
					</Menu.Item>

				</Menu>
			</Col>
			<Col span={collapsed ? 23 : 22}>
				{doc?.map(d => {
					return <>
						<ProCard collapsible={true} bordered={true} title={d.title} extra="" tooltip="点击可缩起" headerBordered={true}>
							<Highlight>
								<MarkdownDiv>{d.content}</MarkdownDiv>
							</Highlight>
						</ProCard>
						<Divider/>
					</>
				})}
			</Col>
		</Row>
	)
}
