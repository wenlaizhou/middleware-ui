import { Button, Col, Row, Space } from "antd"
import ProCard from "@ant-design/pro-card"
import { React } from "react"

export default (props) => {
	return <Row gutter={[24, 24]} justify={"center"}>
		<Col span={20}>
			<ProCard gutter={24}>
				<ProCard colSpan={6} type={"inner"} layout={"center"} className={"first"}>
					动态租借抢占
					<br/>
					GPU碎片化
					<br/>
					任务优先级抢占调度
					<br/>
				</ProCard>
				<ProCard colSpan={6} type={"inner"} layout={"center"} className={"second"}>
					Quota配合灵活申请
					<br/>
					VP和P映射
					<br/>
				</ProCard>
				<ProCard colSpan={6} type={"inner"} layout={"center"} className={"third"}>
					Quota配额灵活分配
					<br/>
					运营统计
					<br/>
				</ProCard>
				<ProCard colSpan={6} type={"inner"} layout={"center"} className={"fourth"}>
					零迁移成本
					<br/>
					部署自动化，减少手动配置
					<br/>
					安全审查
					<br/>
				</ProCard>
			</ProCard>
			<ProCard gutter={24}>
				<ProCard colSpan={24} type={"inner"} layout={"center"}>
					<Button type={"primary"} size={"large"} style={{
						width: "100%", height: "60px", fontSize: "20px", fontWeight: 600
					}}>调度系统</Button>
				</ProCard>
			</ProCard>
			<ProCard gutter={24}>
				<ProCard colSpan={24} type={"inner"} layout={"center"}>
					<Space direction={"vertical"}>
						<h1 className={"slum-h1"}>
							-Slurm
						</h1>
						<h4 className={"slum-h4"}>
							-Slurm是实现各用户侧所关注问题的载体（去伪存真，满足用户核心需求而生）
						</h4>
					</Space>
				</ProCard>
			</ProCard>
		</Col>
	</Row>
}
