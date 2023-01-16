import { Menu, Layout, Button, Image } from "antd"
import React, { useEffect, useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
import { UserOutlined } from "@ant-design/icons"
const { Sider } = Layout
import * as  Icon from "@ant-design/icons"


const iconKeys = Object.keys(Icon)

export default {

	// items: {
	//  name: "",
	//  url: ""
	// }
	HeaderMenu: (props) => {

		const items = props.items
		const navigate = useNavigate()
		const items2 = items?.map(item => {
			return {
				key: item.name,
				label: item.name,
				icon: iconKeys.includes(item.icon) ? React.createElement(Icon[item.icon]) : <UserOutlined />,
				onClick: item.onClick ? item.click : () => {
					navigate(item.path)
				}
			}
		})
		return <Menu mode="horizontal"
			defaultSelectedKeys={["2"]}
			theme="dark"
			items={items2} />
	},

	/**
	 * menu
	 *
	 * @param props
	 *
	 * {items} = props
	 *
	 * {
	 *   key: "",
	 *   icon: <ReactNode />,
	 *   label: "",
	 *   children: [items],
	 *   onClick: ({item, key, keyPath, domEvent}) => {
	 *
	 *   }
	 * } = items
	 * @return {JSX.Element}
	 * @constructor
	 */
	LeftMenu: (props) => {

		let location = useLocation()
		const navigate = useNavigate()

		const [activeMenu, setActiveMenu] = useState([])

		const [collapsed, setCollapsed] = useState(false)

		useEffect(() => {
			setCollapsed(localStorage.getItem("menuColl"))
			setActiveMenu([location.pathname])
		}, [location])

		const items = props.items?.map(item => {
			return {
				key: item.path,
				label: item.name,
				onClick: (menuItem) => {
					console.log(menuItem)
					navigate(item.path)
				},
				icon: iconKeys.includes(item.icon) ? React.createElement(Icon[item.icon]) : <UserOutlined />,
			}
		})?.filter(i => i)

		if ((items || []).length <= 0) {
			return <></>
		}

		for (const i of props.items) {
			console.log(i)
			if (location.pathname == i.path && i.hideMenu) {
				return <></>
			}
		}

		return <Sider width={200} collapsed={collapsed}>
			<Menu
				selectedKeys={activeMenu}
				mode="inline"
				style={{
					height: "100%",
				}}
				theme="dark"
				items={[{
					icon: React.createElement(Icon["CrownTwoTone"]),
					label: "middleware",
					key: "logo"
				}, ...items, {
					icon: React.createElement(Icon["AlignLeftOutlined"]),
					key: "coll",
					onClick: ({ item, key, keyPath, domEvent }) => {
						if (collapsed) {
							localStorage.removeItem("menuColl")
							setCollapsed(false)
						} else {
							localStorage.setItem("menuColl", "true")
							setCollapsed(true)
						}
					},
				}]}
			/></Sider>
	}
}