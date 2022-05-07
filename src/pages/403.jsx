import { Button, Result } from "antd"
import React from "react"
import { history } from "umi"

const NoAuthPage = () => (
	<Result
		status="403"
		title="权限不足"
		subTitle="权限不足"
		extra={
			<Button type="primary" onClick={() => history.push("/about")}>
				回到首页
			</Button>
		}
	/>
)

export default NoAuthPage
