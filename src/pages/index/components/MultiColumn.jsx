import { Column } from "@ant-design/charts"
import React from "react"
import types from "prop-types"
import { commonProps } from "./common"

const Component = (props) => {

	return <Column
		data={props.data || []}
		height={200}
		maxColumnWidth={80}
		isStack={true}
		legend={props.legend}
		xField={props.x}
		yField={props.y}
		seriesField={props.series}
		label={{
			style: {
				fill: "white",
				shadowBlur: 0,
			},
			// 可手动配置 label 数据标签位置
			position: "middle",
			// 'top', 'bottom', 'middle'
			// 可配置附加的布局方法
			layout: [
				// 柱形图数据标签位置自动调整
				{
					type: "interval-adjust-position",
				}, // 数据标签防遮挡
				{
					type: "interval-hide-overlap",
				}, // 数据标签文颜色自动调整
				// {
				// 	type: "adjust-color",
				// },
			],
		}}
		xAxis={commonProps.xAxis}
		yAxis={commonProps.yAxis}
		// theme={commonProps.theme}
		colorField={"state"}
		color={(item) => {
			return ["#2391FF", "#DB6BCF", "#2498D1"][Math.ceil(Math.random() * 100) % 3]
			switch (`${item.state}`.toUpperCase()) {
				case "RUNNING":
					return "#2391FF"
				case "PENDING":
					return "#DB6BCF"
			}
			// if (`item.state` == "") {
			// 	return "#c3272b"
			// }
			// if (item.value > 50) {
			// 	return "#177cb0"
			// }
			return "#2498D1"
		}}
	/>
}

Component.propTypes = {
	data: types.array,
	x: types.string,
	y: types.string,
	series: types.string,
	legend: types.bool,
}

export default Component

