import { StatisticCard } from "@ant-design/pro-card"
import { Divider } from "antd"
import React from "react"
import global from "./images/global.png"
import piePng from "./images/pie.png"
import person from "./images/person.png"
import target from "./images/target.png"
import actual from "./images/actual.png"
import columnsImg from "./images/columns.png"
import linesImg from "./images/lines.png"
import satellite from "./images/satellite.png"

const staticsImgs = [global, piePng, person, target,
	actual, columnsImg, linesImg, satellite]

/**
 * data = [ {title, value, desc} ]
 * @param props
 * @return {JSX.Element}
 */
export default (props) => {

	const {data, loading} = props

	return <StatisticCard.Group style={{
		backgroundColor: "#262626",
		color: "white",
	}} direction={"row"}>
		{
			(() => {
				const staticsElements = []
				let hasUsed = []
				let selectedImage = null
				if (!data) {
					return <></>
				}
				for (const index in data) {
					for (; ;) {
						if (hasUsed.length > 0) {
							if (hasUsed.length >= staticsImgs.length) {
								selectedImage = Math.ceil(Math.random() * 10) % staticsImgs.length
								hasUsed = [selectedImage]
								break
							}
							selectedImage = Math.ceil(Math.random() * 10) % staticsImgs.length
							if (hasUsed.indexOf(selectedImage) >= 0) {
								continue
							}
							hasUsed.push(selectedImage)
							break
						} else {
							selectedImage = Math.ceil(Math.random() * 10) % staticsImgs.length
							hasUsed.push(selectedImage)
							break
						}
					}
					staticsElements.push(<StatisticCard
						loading={loading}
						style={{
							backgroundColor: "#262626",
							color: "white",
						}}
						statistic={{
							title: <h4 style={{
								color: "white",
								fontSize: "16px",
							}}>{data[index]?.title}</h4>,
							value: data[index]?.value || "0",
							valueStyle: {
								color: "white",
							}
						}}
						chart={
							<img
								src={staticsImgs[selectedImage]}
								width="80"
							/>
						}
						bordered={false}
						chartPlacement="left"
					>
					</StatisticCard>)
					staticsElements.push(<Divider type={"vertical"} style={{
						borderStyle: "solid",
						borderColor: "white"
					}}/>)
				}
				return staticsElements.length > 0 ? staticsElements?.slice(0, staticsElements.length - 1) : []
			})()
		}
	</StatisticCard.Group>

}
