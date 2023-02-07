import { React } from "react"
import { Button, Col, Image, Row, Space } from "antd"
import bannerRight from "./images/banner-right.png"
import { useLocation, useNavigate } from "react-router-dom"

export default (props) => {
	const navigate = useNavigate()
	return (
		<Row gutter={[24, 24]} className={"banner-back"}>
			<Col span={10} offset={2}>
				<Space direction={"vertical"}>
					<h1 key={"bh1"} className={"banner-h1"}>{props.data.title}</h1>
					<p key={"bp1"} className={"banner-content"}>{props.data.desc}</p>
					<Space
						direction={"horizontal"}
						style={{
							marginTop: "30px",
							marginBottom: "100px",
							fontSize: "15px",
						}}
					>
						<Button
							key={"bb1"}
							type={"primary"}
							onClick={() => {
								navigate("/poet")
							}}
							style={{
								width: "200px",
								height: "40px",
								borderRadius: "4px",
							}}
						>
							立即使用
						</Button>
						<Button key={"bb2"} style={{
							width: "200px",
							height: "40px",
							borderRadius: "4px",
						}}>申请开通</Button>
					</Space>
				</Space>
			</Col>
			<Col span={10}>
				<Image src={bannerRight} style={{
					marginTop: "30%",
				}} preview={false}/>
			</Col>
		</Row>
	)
};
