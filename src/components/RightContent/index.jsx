import { Image, Space } from "antd"
import React, { useEffect } from "react"
import "./index.less"
import userIcon from "./user-icon.png"

const isDev = process.env.NODE_ENV === "development"

const GlobalHeaderRight = () => {

	useEffect((props) => {

	}, [])

	return (
		<Space>
			<Image preview={false} src={userIcon}/>
			<span style={{
				color: "white"
			}}>{`admin`}</span>
		</Space>
	)
}

export default GlobalHeaderRight
