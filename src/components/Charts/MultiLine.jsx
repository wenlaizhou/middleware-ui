import { commonProps } from "./common"
import types from "prop-types"
import { Line } from "@ant-design/charts"
import React from "react"

const Component = (props) => {
	return <Line
		data={props.data || []}
		smooth={true}
		height={200}
		xField={props.x}
		yField={props.y}
		seriesField={props.series}
		{...commonProps}
	/>
}

Component.propTypes = {
	data: types.array,
	x: types.string,
	y: types.string,
	series: types.string // 堆叠列
}

export default Component
