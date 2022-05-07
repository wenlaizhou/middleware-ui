import { React } from "react"
import { Layout, Row, Col } from "antd"
import "./index.less"

const {Header, Content, Footer} = Layout

export default () => {
	return <Layout>
		<Header title={"header"}/>
		<Content title={"content"} style={{padding: "0", marginTop: 64}}>
		</Content>
		<Footer title={"footer"}/>
	</Layout>
}
