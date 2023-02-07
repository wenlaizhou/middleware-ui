import { commonProps } from "./common"
import types from "prop-types"
import { Line } from "@ant-design/charts"
import React from "react"

const Component = (props) => {
	return <Line
		data={props.data || []}
		height={200}
		padding={"auto"}
		xField={props.x}
		yField={props.y}
		seriesField={props.series}
		style={{
			color: "white"
		}}
		annotations={[	// 低于中位数颜色变化
			{
				type: "regionFilter",
				start: ["min", "median"],
				end: ["max", "0"],
				color: "#EB4185",
			},
			{
				type: "text",
				position: ["min", "median"],
				content: "中位数",
				offsetY: -4,
				style: {
					textBaseline: "bottom",
					fill: "white",
					color: "white"
				},
			},
			{
				type: "line",
				start: ["min", "median"],
				end: ["max", "median"],
				style: {
					color: "white",
					stroke: "#EB4185",
					lineDash: [2, 2],
				},
			},
		]}
		{...commonProps}
	/>
}

Component.propTypes = {
	data: types.array,
	x: types.string,
	y: types.string,
	series: types.string
}

export default Component
