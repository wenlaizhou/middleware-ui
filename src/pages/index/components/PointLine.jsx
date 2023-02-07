import React from "react"
import { Line } from "@ant-design/plots"
import PropTypes from "prop-types"

const PointLine = (props) => {
	const {data, title} = props
	let config = {
		data: data || [],
		xField: props.x || "name",
		yField: props.y || "value",
		connectNulls: true,
		point: {
			visible: true,
			size: 2,
			shape: "breath-point",
			style: {
				fill: "white",
				stroke: "white",
				lineWidth: 10,
			},
		},
		tooltip: {showMarkers: false},
		state: {
			active: {
				style: {
					shadowBlur: 4,
					stroke: "white",
					fill: "red",
				},
			},
		},
		label: {},
		interactions: [{type: "marker-active"}],
	}
	return <Line theme={"dark"} style={{
		height: 300,
		color: "white",
	}} title={{
		visible: true,
		text: title || "",
		title: title || "",
		position: "center",
		style: {
			color: "white"
		},
	}} {...config} smooth={true}/>
}

PointLine.propTypes = {
	data: PropTypes.array,
	x: PropTypes.string, // 默认为name
	y: PropTypes.string, // 默认为value
	title: PropTypes.string
}

export default PointLine
