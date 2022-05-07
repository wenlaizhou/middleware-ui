import { Button, Result } from "antd"
import React from "react"
import { history } from "umi"

const NoFoundPage = () => (
  <Result
    status="404"
    title="404"
    subTitle="页面未找到"
    extra={
      <Button type="primary" onClick={() => history.push("/about")}>
        回到首页
      </Button>
    }
  />
)

export default NoFoundPage
