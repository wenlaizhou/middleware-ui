import { Button, Col, Divider, Row, Space } from "antd"
import { StatisticCard } from "@ant-design/pro-card"
import MultiColumn from "./components/MultiColumn"
import ApiOutlined from "@ant-design/icons/ApiOutlined"
import MultiLine from "./components/MultiLine"
import React, { useState } from "react"

export default (props) => {

	const [endpointCount, setEndpointCount] = useState([{
		x: "item1",
		y: 10,
		group: "a",
		state: "RUNNING"
	}, {
		x: "item1",
		y: 101,
		group: "b",
		state: "RUNNING"
	}, {
		x: "item2",
		y: 102,
		group: "a",
		state: "PENDING"
	},])
	const [runtime, setRuntime] = useState({})

	return <Row gutter={[24, 24]}>
		<Col span={7} offset={1}>
			<StatisticCard
				title={"总数"}
				bordered={true}
				chart={<MultiColumn data={endpointCount} x={"x"} y={"y"} series={"group"}/>}
				direction={"row"}
				headerBordered={false}
				footer={<Button type={"link"} icon={<ApiOutlined/>}>接口文档</Button>}
				actions={
					[
						<Button type={"link"} icon={<ApiOutlined/>}>立即使用</Button>,
						<Button type={"link"} icon={<ApiOutlined/>}>申请开通</Button>,
					]
				}
				extra={<Space><ApiOutlined spin={true}/>稳定运行中</Space>}
			>
				<StatisticCard.Statistic
					style={{}}
					title={<b>系统状态</b>} value={`在线`}
					icon={<ApiOutlined/>} status={"processing"} trend={"up"}
					valueRender={(va) => {
						return <s>{va}</s>
					}}/>
			</StatisticCard>
		</Col>
		<Col span={7} offset={1}>
			<StatisticCard
				title={"调度层"}
				bordered={true}
				chart={<MultiLine data={[{
					x: "a", y: 100
				}, {
					x: "b", y: 110
				}, {
					x: "c", y: 70
				}]} x={"x"} y={"y"} series={"group"}/>}
				direction={"row"}
				headerBordered={false}
				footer={<Button type={"link"} icon={<ApiOutlined/>}>接口文档</Button>}
				actions={
					[
						<Button type={"link"} icon={<ApiOutlined/>}>立即使用</Button>,
						<Button type={"link"} icon={<ApiOutlined/>}>申请开通</Button>,
					]
				}
				extra={<Space><ApiOutlined spin={true}/>稳定运行中</Space>}
			>
				<StatisticCard.Statistic
					style={{}}
					title={<b>系统状态</b>} value={`在线`} icon={<ApiOutlined/>} status={"processing"} trend={"up"} valueRender={(va) => {
					return <s>{va}</s>
				}}/>
			</StatisticCard>
		</Col>
		<Col span={7} offset={1}>
			<StatisticCard
				title={"服务层"}
				bordered={true}
				chart={<MultiColumn data={endpointCount} x={"x"} y={"y"} series={"group"}/>}
				direction={"row"}
				headerBordered={false}
				footer={<Button type={"link"} icon={<ApiOutlined/>}>接口文档</Button>}
				actions={
					[
						<Button type={"link"} icon={<ApiOutlined/>}>立即使用</Button>,
						<Button type={"link"} icon={<ApiOutlined/>}>申请开通</Button>,
					]
				}
				extra={<Space><ApiOutlined spin={true}/>稳定运行中</Space>}
			>
				<StatisticCard.Statistic
					style={{}}
					title={<b>系统状态</b>} value={`在线`} icon={<ApiOutlined/>} status={"processing"} trend={"up"} valueRender={(va) => {
					return <s>{va}</s>
				}}/>
			</StatisticCard>
		</Col>
	</Row>
}