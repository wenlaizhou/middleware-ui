import { Col, Popover, Row, Steps, Tabs } from "antd"
import { SmileOutlined } from "@ant-design/icons"
import { React, useState } from "react"

export default (props) => {
	const [slurmVisible, setSlurmVisible] = useState(true)
	const [k8sVisible, setK8sVisible] = useState(false)

	return (
		<Row gutter={24} justify={"center"} className={"productProcess"}>
			<Col span={20}>
				<Tabs
					defaultActiveKey="slurm"
					centered={true}
					onChange={(key) => {
						switch (key) {
							case "slurm":
								setSlurmVisible(true)
								setK8sVisible(false)
								break
							case "k8s":
								setSlurmVisible(false)
								setK8sVisible(true)
						}
					}}
				>
					<Tabs.TabPane key={"slurm"} tab="-slurm">
						<div className={"productStep"}>
							<Steps
								className={""}
								current={4}
								progressDot={(dot, {status, index}) => {
									if (index == 0 || index == 3) {
										return true
									}
									const text = [
										"",
										`-slurm v0.1.0发版，该版本为 -slurm 产品的版本，主要功能包括 cli 命令新增和优化，调度租借逻辑优化和新增 GPU 碎片化调度，权限校验和任务校验的增强准入控制。`,
										`-slurm v0.2.0发版，该版本为 -slurm 产品的版本，主要功能包括主要功能包括纳管Paki用户优先级抢占，cli命令新增和优化，调度租借逻辑优化和新增GPU碎片化调度，权限校验和任务校验的增强准入控制。`,
										"",
									]
									return (
										<Popover
											visible={slurmVisible}
											className={""}
											content={<p className={"productSteps"}>{text[index]}</p>}
										>
											{/*return <Popover visible={true} content={<span>step {index} status: {status}</span>}>*/}
											{dot}
										</Popover>
									)
								}}
								labelPlacement={"vertical"}
							>
								<Steps.Step title="" description="" icon={<SmileOutlined/>}/>
								<Steps.Step title="v0.1.0发版" subTitle={"2021-06-29"}/>
								<Steps.Step title="v0.6.0发版" subTitle={"2022-5-26"}/>
								<Steps.Step title="" description="" icon={<SmileOutlined/>}/>
							</Steps>
						</div>
					</Tabs.TabPane>
					<Tabs.TabPane key={"k8s"} tab="-k8s">
						<div className={"productStep"}>
							<Steps className={""} current={4} progressDot={(dot, {status, index}) => {
								if (index == 0 || index == 3) {
									return true
								}
								const text = ["", `-k8s v0.1.0发版，该版本为 -k8s 产品的版本，主要功能包括 cli 命令新增和优化，调度租借逻辑优化和新增 GPU 碎片化调度，权限校验和任务校验的增强准入控制。`, `-k8s v0.2.0发版，该版本为 -slurm 产品的版本，主要功能包括主要功能包括纳管Paki用户优先级抢占，cli命令新增和优化，调度租借逻辑优化和新增GPU碎片化调度，权限校验和任务校验的增强准入控制。`, `-k8s v0.3.0发版，该版本增加了企业微信的任务通知机制，opencloud增加虚拟分区相关的资源统计，svp和suser分别新增view功能，对srun、sbatch、salloc、scancel进行使用频率统计，引入了延迟抢占机制。`, ""]
								return <Popover visible={k8sVisible} className={""}
								                content={<p className={"productSteps"}>{text[index]}</p>}>
									{/*return <Popover visible={true} content={<span>step {index} status: {status}</span>}>*/}
									{dot}
								</Popover>
							}} labelPlacement={"vertical"}>
								<Steps.Step title="" description="" icon={<SmileOutlined/>}/>
								<Steps.Step title="k8s v0.1.0发版" subTitle={"2021-06-29"}/>
								<Steps.Step title="k8s v0.2.0发版" subTitle={"2021-08-06"}/>
								<Steps.Step title="" description="" icon={<SmileOutlined/>}/>
							</Steps>
						</div>
					</Tabs.TabPane>
				</Tabs>
			</Col>
		</Row>
	)
};
