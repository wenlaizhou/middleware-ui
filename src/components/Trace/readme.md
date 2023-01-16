# 链路对象

#### 使用方式：

``` jsx
import { buildGraph, buildEdge } from "@/components/Trace"

export default (props) => {

	const ref = React.useRef(null)
	let graph = null

	const [visible, setVisible] = useState(false)
	const [nodeModalContent, setNodeModalContent] = useState("")


	useEffect(async () => {

			if (graph == null) {
				graph = buildGraph(ref, (nodeData => {
					setNodeModalContent(JSON.stringify(nodeData.nodeData, null, 2))
					setVisible(true)
				}))
			}
			
			graph.data({
				nodes: traceNodes,
				edges: traceEdges
			})
			graph.render()
		}, []
	)

	return <Row>
		<Col span={24}>
			<Card title={"全链路集群拓扑"}>
				<div ref={ref} style={{
					width: "100%",
					height: "800px"
				}}/>
			</Card>
			<Modal visible={visible} title={"节点详情"} onCancel={() => {
				setVisible(false)
			}} onOk={() => {
				setVisible(false)
			}} width={"70%"}>
				<Typography>
					<Paragraph>
						<pre>{nodeModalContent}</pre>
					</Paragraph>
				</Typography>
			</Modal>
		</Col>
	</Row>
}
```