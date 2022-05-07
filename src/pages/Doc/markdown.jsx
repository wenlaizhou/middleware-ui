import { string } from "prop-types"
import ReactMarkdown from "react-markdown"
import React from "react"

// code mirror:
import "codemirror/lib/codemirror.css"
// 主题风格
// import 'codemirror/theme/material-darker.css'
import "codemirror/theme/monokai.css"
// 代码模式，clike是包含java,c++等模式的
import "codemirror/mode/htmlmixed/htmlmixed"
import "./height.css"

const MarkdownDiv = (props) => {
	return <ReactMarkdown>{props.children}</ReactMarkdown>
}

MarkdownDiv.propTypes = {
	title: string,
	btnText: string,
	direct: string,
	type: string,
}

export {
	MarkdownDiv
}
