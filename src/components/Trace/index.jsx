import React from "react"
import ReactDOM from "react-dom"
import G6 from "@antv/g6"
import nodeImg from "./images/node.png"

/**
 * 构建图形对象
 *
 * const graph = buildGraph(ref, (item) => {
 *
 *   console.log(item)
 *
 * })
 *
 * // 设置节点及边
 *
 * graph.data({
 *
 *    nodes: nodes,
 *
 * 		edges: edges,
 *
 * })
 *
 * // 开始渲染图形
 *
 * graph.render()
 *
 * @param ref
 * @param onNodeClick 节点点击事件
 */
const buildGraph = (ref, onNodeClick) => {
	registCircleEdge()
	const result = createGraph(ref)
	if (onNodeClick) {
		result.on("node:click", event => {
			onNodeClick(event.item.getModel() || "")
		})
	}
	return result
}

/**
 * 创建边对象
 * @param param 参数，格式为：
 * {
 * 		source,
 * 		target,
 * 		type = "flow",
 * 		color = "white",
 * 		startArrow = false,
 * 		endArrow = false
 * 	}
 */
const buildEdge = (param) => {
	const {
		source, target,
		type = "flow",
		color = "white",
		startArrow = false,
		endArrow = false
	} = param
	return {
		source: source,
		target: target,
		value: 1,
		type: type,
		style: {
			lineWidth: 2,
			stroke: color,
			startArrow: startArrow,
			endArrow: endArrow,
		}
	}
}

const registCircleEdge = () => {
	G6.registerEdge(
		"flow",
		{
			afterDraw(cfg, group) {
				const shape = group.get("children")[0]
				const startPoint = shape.getPoint(0)
				const circle = group.addShape("circle", {
					attrs: {
						x: startPoint.x,
						y: startPoint.y,
						fill: "#1890ff",
						r: 3,
					},
					name: "circle-shape",
				})

				circle.animate(
					(ratio) => {
						const tmpPoint = shape.getPoint(ratio)
						return {
							x: tmpPoint.x,
							y: tmpPoint.y,
						}
					},
					{
						repeat: true,
						duration: 3000,
					},
				)
			},
		},
		"cubic",
	)
}

const createGraph = (ref) => {
	return new G6.Graph({
		container: ReactDOM.findDOMNode(ref.current),
		animate: {},
		modes: {
			default: [
				"activate-relations",
				"drag-canvas",
				"zoom-canvas",
				"drag-node",
				"tooltip",
				"edge-tooltip"
			]
		},
		layout: {
			type: "comboForce",
			nodeSpacing: 60,
			strictRadial: true,
			preventOverlap: true,
			nodeSize: 40
		},
		defaultNode: {
			type: "image",
			img: nodeImg,
			size: 40,
			labelCfg: {
				position: "bottom",
				style: {
					textAlign: "center",
					fontStyle: "normal",
					shadowBlur: false,
					fill: "white",
					lineWidth: 3,
					shadowColor: false,
				}
			},
			clipCfg: {
				type: "circle"
			}
		},
		defaultEdge: {
			size: 2,
			type: "flow",
			style: {
				lineWidth: 2,
				endArrow: true,
				stroke: "white",
				lineDash: [
					2,
					2
				],
			},
		},

	})
}

export {
	buildGraph, buildEdge
}