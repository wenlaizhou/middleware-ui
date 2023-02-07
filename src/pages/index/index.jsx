import { React, useEffect, useState } from "react"
import { Layout, Row, Col } from "antd"
import "./index.css"
import "./images/banner-back.png"
import "./images/banner-logo.png"
import conf from "../../conf"
import Banner from "./banner"
import Feature from "./feature"
import Value from "./value"
import Persona from "./persona"
import Product from "./product"
import Footer from "./footer"
import Charts from "./charts"
import Poet from "./poet"

const {Content} = Layout

export default (props) => {
	const [indexData, setIndexData] = useState({})
	useEffect(() => {
		fetch(`${conf.service}/indexData`, {
			method: "get",
			mode: "cors",
			redirect: "follow",
		}).then(r => r.json()).then(r => setIndexData(r.data)).catch(reason => {
			console.error(reason)
		})
	}, [])
	return <Layout>
		<Content style={{padding: "0", marginTop: 0}}>
			<Banner data={indexData}/>
			{/* <Row justify={"center"} style={{zoom: 0.8}}>
				<Col>
					<h1 className={"product-h1"}>美诗</h1>
				</Col>
			</Row>
			<Poet/> */}
			<Row justify={"center"} style={{zoom: 0.8}}>
				<Col>
					<h1 className={"product-h1"}>数据分析</h1>
				</Col>
			</Row>
			<Charts data={indexData}/>

			<Row justify={"center"} style={{zoom: 0.8}}>
				<Col>
					<h1 className={"product-h1"}>产品特性</h1>
				</Col>
			</Row>
			<Feature data={indexData}/>

			<Row gutter={24} justify={"center"}>
				<Col><h1 className={"product-h1"}>产品价值</h1></Col>
			</Row>
			<Value data={indexData}/>

			<Row gutter={24} justify={"center"}>
				<Col><h1 className={"product-h1"}>用户画像</h1></Col>
			</Row>
			<Persona data={indexData}/>

			<Row gutter={24} justify={"center"}>
				<Col><h1 className={"product-h1"}>产品动态</h1></Col>
			</Row>
			<Product data={indexData}/>

			<Footer data={indexData}/>
		</Content>
	</Layout>
}
