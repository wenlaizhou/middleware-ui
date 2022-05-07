import { SmileOutlined } from "@ant-design/icons"
import { DefaultFooter } from "@ant-design/pro-layout"

const Footer = () => {
	const defaultMessage = "SenseTime"
	const currentYear = new Date().getFullYear()
	return (
		<DefaultFooter
			copyright={`${currentYear} ${defaultMessage}`}
			links={[
				{
					key: "AppOne",
					title: "调度与通信",
					href: "",
					blankTarget: true,
				},
				{
					key: "github",
					title: <SmileOutlined/>,
					href: "",
					blankTarget: true,
				},
				{
					key: "Big",
					title: "大装置",
					href: "",
					blankTarget: true,
				},
			]}
		/>
	)
}

export default Footer
