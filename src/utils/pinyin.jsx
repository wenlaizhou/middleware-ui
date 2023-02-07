import { Button, Popover } from "antd"
import { QuestionOutlined } from "@ant-design/icons"

const content = `a、o、e、
i、u、v、
ai、ei、ui、
ao、ou、iu、
ie、ve、er、
an、en、in、
un、vn、
ang、eng、ing、ong`

export default (props) => {

	return <Popover title={"韵母表"} content={<pre><code>{content}</code></pre>}>
		<QuestionOutlined/>
	</Popover>
}