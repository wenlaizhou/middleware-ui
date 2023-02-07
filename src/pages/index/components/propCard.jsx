import ProCard from "@ant-design/pro-card"
import { React } from "react"


export default (props) => {
  return <ProCard title={<h1 style={{
    fontWeight: 600,
  }}>{props.title}</h1>} type="inner"
                  colSpan={16} bordered={false} headerBordered={false}
                  headStyle={{
                    backgroundColor: "#FFFFFF",
                    borderStyle: "none",
                    fontFamily: "PingFang SC",
                    fontWeight: 600,
                    fontSize: "24px",
                    color: "#333333"
                  }}>{props.content}</ProCard>
}
