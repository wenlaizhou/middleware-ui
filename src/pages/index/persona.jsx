import { Card, Col, Row } from "antd"
import ProCard from "@ant-design/pro-card"
import researcher from "./images/researcher.png"
import leader from "./images/leader.png"
import operator from "./images/operator.png"
import sre from "./images/sre.png"
import { React } from "react"

export default (props) => {
	return <Row gutter={24} justify={"center"}>
		<Col span={20}>
			<ProCard gutter={24}>
				<ProCard colSpan={6} type={"inner"} layout={"center"}>
					<Card className={"user-card"}
					      cover={<img src={researcher} style={{
						      width: "80%", marginLeft: "10%", marginTop: "10%",
					      }}/>}
					>
						<Card.Meta
							className={"user-card-meta"}
							title={<h4 className={"user-title"} align={"center"}>研究员</h4>}
							description={<div align={"center"} className={"user-comment"}>
								系统稳定可靠
								<br/>
								保障紧急任务资源
								<br/>
								最怕任务被无故kill
								<br/>
								关注quota资源
								<br/>
								关系任务调度效率
								<br/>
								提交任务
							</div>}
						/>
					</Card>
				</ProCard>
				<ProCard colSpan={6} type={"inner"} layout={"center"}>
					<Card className={"user-card"}
					      cover={<img src={leader} style={{
						      width: "80%", marginLeft: "10%", marginTop: "10%",
					      }}/>}
					>
						<Card.Meta
							className={"user-card-meta"}
							title={<h4 className={"user-title"} align={"center"}>部门长/组leader</h4>}
							description={<div align={"center"} className={"user-comment"}>
								关注业务/迁移成本
								<br/>
								分区资源扩缩容
								<br/>
								统计分区资源利用率
								<br/>
								研究员跑任务统计
								<br/>
								部门内部资源够用？
								<br/>
								关心研究员所关心
							</div>}
						/>
					</Card>
				</ProCard>
				<ProCard colSpan={6} type={"inner"} layout={"center"}>
					<Card className={"user-card"}
					      cover={<img src={operator} style={{
						      width: "80%", marginLeft: "10%", marginTop: "10%",
					      }}/>}
					>
						<Card.Meta
							className={"user-card-meta"}
							title={<h4 className={"user-title"} align={"center"}>运营管理员</h4>}
							description={<div align={"center"} className={"user-comment"}>
								集群成本/利润/计费
								<br/>
								集群资源运营
								<br/>
								研究员/分区统计
								<br/>
								集群资源是否够用？
								<br/>
								关心分区管理员所关心
								<br/>
								关心研究员所关心
							</div>}
						/>
					</Card>
				</ProCard>
				<ProCard colSpan={6} type={"inner"} layout={"center"}>
					<Card className={"user-card"}
					      cover={<img src={sre} style={{
						      width: "80%", marginLeft: "10%", marginTop: "10%",
					      }}/>}
					>
						<Card.Meta
							className={"user-card-meta"}
							title={<h4 className={"user-title"} align={"center"}>运维管理员</h4>}
							description={<div align={"center"} className={"user-comment"}>
								关注基础设置
								<br/>
								日志/审计
								<br/>
								监控/告警
								<br/>
								关注研究员所关心
								<br/>
								关注系统安全性
								<br/>
								关注系统稳定性/故障
							</div>}
						/>
					</Card>
				</ProCard>
			</ProCard>
		</Col>
	</Row>
}
