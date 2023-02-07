import { DatabaseOutlined, NodeExpandOutlined, RocketOutlined } from "@ant-design/icons"
import { Button, Card, Checkbox, Form, Input, message, Modal, Select } from "antd"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import conf from "../../conf"

const App = (props) => {
	let navigate = useNavigate()

	const [loading, setLoading] = useState(false)

	const onFinish = (values) => {
		console.log("Received values of form: ", values)
		setLoading(true)
		const req = {
			name_server: values.nameserver,
			zone: values.zone,
			db_conf: {
				type: values.db_type,
				addr: values.db_addr,
				user: values.db_user,
				db: values.db_name,
				password: values.db_password,
			},
			env: values.env,
			current: values.remember
		}
		fetch(`${conf.service}/setConf`, {
			mode: "cors",
			redirect: "follow",
			method: "POST",
			body: JSON.stringify(req, null, 2)
		}).then(r => {
			if (r.ok) {
				return r.json()
			} else {
				throw new Error(`${r.status}`)
			}
		}).then(resp => {
			console.log(resp)
			location.reload()
		}).catch(e => {
			console.log(e)
			message.error(`网络错误: ${e.message}`)
			setLoading(false)
		})
	}
	return (
		<Modal open={props.open}
		       maskStyle={{
			       backgroundColor: "rgb(0,0,0,0.9)",
			       filter: "grayscale(50%)"
		       }}
		       closable={false}
		       maskClosable={false}
		       footer={null}
		       loading={true}
		>
			<Card title={<h4>创建配置</h4>} bordered={true}>
				<Form
					name="normal_login"
					className="login-form"
					initialValues={{
						remember: true,
					}}
					labelCol={{span: 8}}
					wrapperCol={{span: 16}}
					onFinish={onFinish}
				>
					<Form.Item
						name="env"
						label={"环境"}
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input prefix={<NodeExpandOutlined className="site-form-item-icon"/>} placeholder="Env"/>
					</Form.Item>
					<Form.Item
						name="nameserver"
						label={"Rocketmq地址"}
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input prefix={<RocketOutlined className="site-form-item-icon"/>} placeholder="Rocketmq Nameserver"/>
					</Form.Item>
					<Form.Item
						name="zone"
						label={"zone"}
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input prefix={<RocketOutlined className="site-form-item-icon"/>} placeholder="Rocketmq Nameserver"/>
					</Form.Item>
					<Form.Item
						name="db_type"
						label={"数据库类型"}
						rules={[
							{
								required: true,
							},
						]}
					>
						<Select placeholder={"Db type"} options={[
							{value: "mysql", label: "Mysql"}, {value: "postgresql", label: "PSql"}
						]} suffixIcon={<DatabaseOutlined/>}/>
					</Form.Item>

					<Form.Item
						name="db_addr"
						label={"数据库地址"}
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input prefix={<DatabaseOutlined className="site-form-item-icon"/>} placeholder="Db Addr"/>
					</Form.Item>

					<Form.Item
						name="db_user"
						label={"数据库用户名"}
						rules={[
							{
								required: true,

							},
						]}
					>
						<Input prefix={<DatabaseOutlined className="site-form-item-icon"/>} placeholder="Db Username"/>
					</Form.Item>

					<Form.Item
						name="db_password"
						label={"数据库密码"}
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input prefix={<DatabaseOutlined className="site-form-item-icon"/>} placeholder="Db Password"/>
					</Form.Item>

					<Form.Item
						name="db_name"
						label={"库名称"}
						rules={[
							{
								required: true,
							},
						]}
					>
						<Input prefix={<DatabaseOutlined className="site-form-item-icon"/>} placeholder="Db Name"/>
					</Form.Item>

					<Form.Item>
						<Form.Item name="remember" valuePropName="checked" noStyle>
							<Checkbox>设为默认</Checkbox>
						</Form.Item>

						<a className="login-form-forgot" href="">?</a>
					</Form.Item>

					<Form.Item>
						<Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
							创建配置
						</Button>
						&nbsp;Or&nbsp; <Button type={"default"} onClick={e => {
						props.setOpen(false)
					}}>取消</Button>
					</Form.Item>
				</Form>
			</Card>
		</Modal>
	)
}
export default App