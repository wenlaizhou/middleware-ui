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
		xField={props.x}
		yField={props.y}
		seriesField={props.series}
		label={{
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
				{
					type: "adjust-color",
				},
			],
		}}
		{...commonProps} />
}

Component.propTypes = {
	data: types.array,
	x: types.string,
	y: types.string,
	series: types.string
}

export default Component

