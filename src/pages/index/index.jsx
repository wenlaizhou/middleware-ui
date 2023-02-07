import { React, useEffect, useState } from "react"
import { Layout, Row, Col } from "antd"
import "./index.css"
import "./images/banner-back.png"
import "./images/banner-logo.png"
import Banner from "./banner"
import Feature from "./feature"
import Value from "./value"
import Persona from "./persona"
import Product from "./product"
import Footer from "./footer"
import Charts from "./charts"

const { Content } = Layout

export default (props) => {
	return <Layout>
		<Content style={{ padding: "0", marginTop: 0 }}>
			<Banner />
			{/* <Row justify={"center"} style={{zoom: 0.8}}>
				<Col>
					<h1 className={"product-h1"}>美诗</h1>
				</Col>
			</Row>
			<Poet/> */}
			<Row justify={"center"} style={{ zoom: 0.8 }}>
				<Col>
					<h1 className={"product-h1"}>数据分析</h1>
				</Col>
			</Row>
			<Charts />

			<Row justify={"center"} style={{ zoom: 0.8 }}>
				<Col>
					<h1 className={"product-h1"}>产品特性</h1>
				</Col>
			</Row>
			<Feature />

			<Row gutter={24} justify={"center"}>
				<Col><h1 className={"product-h1"}>产品价值</h1></Col>
			</Row>
			<Value />

			<Row gutter={24} justify={"center"}>
				<Col><h1 className={"product-h1"}>用户画像</h1></Col>
			</Row>
			<Persona />

			<Row gutter={24} justify={"center"}>
				<Col><h1 className={"product-h1"}>产品动态</h1></Col>
			</Row>
			<Product />

			<Footer />
		</Content>
	</Layout>
}
