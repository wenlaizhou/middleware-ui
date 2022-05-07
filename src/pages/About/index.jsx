import { React } from "react"
import { Layout, Row, Col } from "antd"
import "./index.less"

const {Header, Content, Footer} = Layout

export default () => {
	return <Layout>
		<Header/>
		<Content style={{padding: "0", marginTop: 64}}>
		</Content>
		<Footer/>
	</Layout>
}
