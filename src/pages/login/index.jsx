import { LockOutlined, UserOutlined } from "@ant-design/icons"
import { Button, Checkbox, Form, Input, message } from "antd"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import NewLogin from "./new_index"

const App = () => {
	let navigate = useNavigate()

	const [loading, setLoading] = useState(false)

	const onFinish = (values) => {
		console.log("Received values of form: ", values)
		setLoading(true)
		if (values.username != "" || values.password != "") {
			localStorage.clear()
			message.error("用户名密码错误")
			setLoading(false)
			return
		}
		localStorage.setItem("login", "true")
		setTimeout(() => {
			setLoading(false)
			window.location.reload()
		}, 2000)
	}
	return (
		<Form
			name="normal_login"
			initialValues={{
				remember: true,
			}}
			onFinish={onFinish}
		>
			<Form.Item
				name="username"
				rules={[
					{
						required: true,
						message: "*",
					},
				]}
			>
				<Input prefix={<UserOutlined className="site-form-item-icon"/>} placeholder="用户名"/>
			</Form.Item>
			<Form.Item
				name="password"
				rules={[
					{
						required: true,
						message: "*",
					},
				]}
			>
				<Input
					prefix={<LockOutlined className="site-form-item-icon"/>}
					type="password"
					placeholder="密码"
				/>
			</Form.Item>
			<Form.Item>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox disabled={true}>记住我</Checkbox>
				</Form.Item>

				<a className="login-form-forgot" href="">
					忘记密码?
				</a>
			</Form.Item>

			<Form.Item>
				<Button type="primary" htmlType="submit" className="login-form-button" loading={loading}>
					登录
				</Button>
				&nbsp; Or &nbsp; <a href="?">注册!</a>
			</Form.Item>
		</Form>
	)
}
export default NewLogin