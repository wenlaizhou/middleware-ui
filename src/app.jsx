import React, { useEffect, useState } from "react"
import { HashRouter, Routes, Route, Outlet, Link, useNavigate } from "react-router-dom"
import { Breadcrumb, Button, Card, Col, Layout, Modal, FloatButton, ConfigProvider, theme } from "antd"

const { Header, Content, Footer, Sider } = Layout

import HeaderMenu from "./menu"
import moment from "moment"
import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons"
import routes from "./routes"

export default () => {

	const { darkAlgorithm, defaultAlgorithm, defaultSeed } = theme;

	const mapToken = defaultAlgorithm(defaultSeed);

	const {
		colorBgLayout, colorPrimary, colorPrimaryBg
	} = mapToken

	return <ConfigProvider theme={{
		algorithm: theme.defaultAlgorithm,
		token: {
			borderRadius: "5px"
		}
	}}>

		<FloatButton.Group shape="square" style={{ right: 25 }}>
			<FloatButton icon={<QuestionCircleOutlined />} tooltip="文档" />
			<FloatButton icon={<SyncOutlined />} tooltip="刷新页面" onClick={(e) => {
				window.location.reload()
			}} />
			<FloatButton.BackTop visibilityHeight={0} tooltip="回到顶端" />
		</FloatButton.Group>

		<Layout style={{
			height: "100vh",
			background: colorBgLayout,
		}}>
			<Header style={{ background: "#001529" }}>
				<div className="logo" />
				<HeaderMenu.HeaderMenu items={routes.headers} />
			</Header>
			<Layout style={{
				height: "100vh",
				background: colorBgLayout,
			}}>
				<HeaderMenu.LeftMenu items={routes.routes} />
				<Content
					style={{
						padding: "0 20px",
					}}
				>
					<Layout
						style={{
							padding: "24px 0",
							background: colorBgLayout,
						}}
					>
						<Content
							style={{
								padding: "0 24px",
								minHeight: 600,
							}}
						>
							<Routes>
								{
									routes.routes?.map(route => <Route path={route.path} element={route.component} />)
								}
							</Routes>
						</Content>
						<Footer
							style={{
								textAlign: "center",
							}}
						>
							Middleware Framework ©{moment().year()}
						</Footer>
					</Layout>
				</Content>

			</Layout>
		</Layout>
	</ConfigProvider>
}