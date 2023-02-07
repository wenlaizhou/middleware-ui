import React from "react"
import ReactDOM from "react-dom/client"
import { HashRouter } from "react-router-dom"
import App from "./framework/app"
// import "antd/dist/antd.css"
import "./framework/global.css"

const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(<React.StrictMode>
	<HashRouter>
		<App />
	</HashRouter>
</React.StrictMode>)