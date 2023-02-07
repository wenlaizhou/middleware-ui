import { Col, Image, Row } from "antd"
import ProCard from "@ant-design/pro-card"
import box from "./images/box.png"
import PropCard from "./components/propCard"
import schedule from "./images/schedule.png"
import ide from "./images/ide.png"
import pie from "./images/pie.png"
import gpu from "./images/gpu.png"
import message from "./images/message.png"
import { React } from "react"

export default (props) => {

	const ItemCard = (props) => {
		return <ProCard gutter={24} style={{
			borderRadius: "0px"
		}}>{props.children}</ProCard>
	}

	const AdjustImg = (props) => {
		return <Image src={props.src} preview={false} style={{
			width: "140px",
			height: "160px",
		}}/>
	}

	return (
		<Row gutter={[24, 24]}>
			<Col span={10} offset={2}>
				<ItemCard>
					<ProCard type="inner" colSpan={8}>
						<AdjustImg src={box} preview={false}/>
					</ProCard>
					<PropCard
						title={"动态网关"}
						content={
							"支持动态配置"
						}
					/>
				</ItemCard>
				<ItemCard>
					<ProCard type="inner" colSpan={8}>
						<AdjustImg src={schedule} preview={false}/>
					</ProCard>
					<PropCard
						title={"支持用户优先级策略"}
						content={
							"支持用户级别、工作空间级别"
						}
					/>
				</ItemCard>
				<ItemCard>
					<ProCard type="inner" colSpan={8}>
						<AdjustImg src={ide} preview={false}/>
					</ProCard>
					<PropCard
						title={"支持任务可视化展示"}
						content={"可视化展示任务的GPU、CPU和内存占用情况"}
					/>
				</ItemCard>
			</Col>
			<Col span={10}>
				<ItemCard>
					<ProCard type="inner" colSpan={8}>
						<AdjustImg src={pie} preview={false}/>
					</ProCard>
					<PropCard
						title={"动态租借抢占，提供资源利用率"}
						content={"支持动态租借抢占资源策略，提高资源利用率"}
					/>
				</ItemCard>
				<ItemCard>
					<ProCard type="inner" colSpan={8}>
						<AdjustImg src={gpu} preview={false}/>
					</ProCard>
					<PropCard title={"优化GPU碎片化问题"} content={"深度优化GPU资源碎片化问题"}/>
				</ItemCard>
				<ItemCard>
					<ProCard type="inner" colSpan={8}>
						<AdjustImg src={message} preview={false}/>
					</ProCard>
					<PropCard title={"提供告警感知"} content={"组件健康状态实时告警"}/>
				</ItemCard>
			</Col>
		</Row>
	)
};
