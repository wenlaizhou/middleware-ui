import React, { useEffect, useState } from "react"
import { Button, Col, Divider, Menu, Popover, Row, Space, } from "antd"
import "./index.less"

export default () => {
	return <>
		<Row gutter={24} style={{
			height: "100%",
		}}>
			<Col span={24}>
				<iframe id={"dashboardContainer"} allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true"
				        oallowfullscreen="true" msallowfullscreen="true" name="mapFrame" frameborder="0" width="100%"
				        loading="lazy" height="100%" webkitallowfullscreen="true" mozallowfullscreen="true" allowfullscreen="true"
				        src={"/swagger-ui"}/>
			</Col>
		</Row>
	</>
}
