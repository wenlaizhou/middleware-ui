import React, { useEffect } from "react"
import { Avatar, Button, Card, Col, Popconfirm, Row, Segmented, Tag } from "antd"
import { CloudServerOutlined, PoweroffOutlined, UploadOutlined } from "@ant-design/icons"
import CodeMirror from "@uiw/react-codemirror"
import { StreamLanguage } from "@codemirror/language"
import { nginx } from "@codemirror/legacy-modes/mode/nginx"

const content = `a、o、e、
i、u、v、
ai 、ei、 ui 、
ao、 ou、 iu 、
ie 、ve、 er、 
an 、en 、in、 
un 、vn 、
ang 、eng、 ing 、ong`

export default (props) => {


	useEffect(() => {

	}, [])

	return <>
		<Row gutter={16}>
			<Col span={24}>
				<Card title={
					<h4>韵母表</h4>
				} extra={<></>} actions={[]}>
					<CodeMirror theme={"light"} readOnly={false} lineWrapping={true} lineNumbers={true}
					            value={content} autoCapitalize={"true"} minWidth={"100%"}
					            indentWithTab={true} extensions={[StreamLanguage.define(nginx)]}/>
				</Card>
			</Col>
		</Row>
	</>
}