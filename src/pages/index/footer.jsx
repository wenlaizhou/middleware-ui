import { Col, Layout, Row, Space } from "antd"
import { React } from "react"

const {Footer} = Layout

export default (props) => {
	return <Footer style={{
		textAlign: "left", backgroundColor: "rgb(35,37,44)",
	}}>
		<Row gutter={24} justify={"center"}>
			<Col span={7}>
				<Space direction={"vertical"} style={{
					textAlign: "left"
				}}>
					<h1 style={{
						color: "#FFFFFF"
					}} color={"#FFFFFF"}>关于</h1>
					<p style={{
						color: "#8C8D8F"
					}}>XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
					XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX。</p>
				</Space>
			</Col>
			<Col span={5} offset={2}>
				<Space direction={"vertical"}>
					<h1 style={{
						color: "#FFFFFF",
					}}>帮助与支持</h1>
					<p style={{
						color: "#8C8D8F"
					}}>专业技术咨询</p>
					<p style={{
						color: "#8C8D8F"
					}}>成熟解决方案</p>
				</Space>
			</Col>
			<Col span={5}>
				<Space direction={"vertical"}>
					<h1 style={{
						color: "#FFFFFF"
					}}>联系我们</h1>
					<p style={{
						color: "#8C8D8F"
					}}>@com</p>
					<p style={{
						color: "#8C8D8F"
					}}>-support@com</p>
				</Space>
			</Col>
		</Row>
	</Footer>
}
