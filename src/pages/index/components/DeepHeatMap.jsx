import PropTypes from "prop-types"
import { commonProps } from "./common"
import { Treemap } from "@ant-design/charts"
import React from "react"

const Component = (props) => {

	return <Treemap
		hierarchyConfig={{
			// tile: "treemapDice"
			tile: "treemapSquarify"
		}}
		data={props.data || {}}
		interactions={[
			{type: "treemap-drill-down"}
		]}
		animation={{}}
		colorField={"value"}
		color={(item) => {
			if (item.value > 80) {
				return "#c3272b"
			}
			if (item.value > 50) {
				return "#177cb0"
			}
			return "#21a675"
		}}
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
		// legend={{
		// 	animate: true,
		// 	position: "top-left",
		// 	itemName: {
		// 		style: {
		// 			fill: "white",
		// 			shadowBlur: 0,
		// 		}
		// 	},
		// }}
		legend={false}
		drilldown={{
			enabled: true,
			breadCrumb: {
				rootText: "多集群视角",
				textStyle: {
					stroke: "white",
					fill: "white",
					fontWeight: 400,
				},
				activeTextStyle: {
					stroke: "white",
					fill: "white",
					fontWeight: 400,
				}
			}
		}}
		// slider={false}
		// scrollbar={false}
		tooltip={{
			formatter: (v) => {
				// const root = v.path[v.path.length - 1]
				console.log(v)
				const res = {
					name: v.name,
					value: ""
				}
				if (!v.path[0] || !v.path[0].data) {
					return res
				}
				const item = v.path[0].data
				const type = item.type
				switch (type) {
					case "job":
						res.value = `GPU占用：${v.value}`
						return res
					case "property":
						res.value = `${item.property}`
						return res
				}
				return res
			}
		}}
		height={200}
		{...commonProps}
	/>
}

Component.propTypes = {
	data: PropTypes.array
}

export default Component