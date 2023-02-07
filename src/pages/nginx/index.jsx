import React from "react"
import { Avatar, Button, Card, Col, Divider, Image, Popconfirm, Row, Tag, Segmented } from "antd"
import CodeMirror from "@uiw/react-codemirror"
import { StreamLanguage } from "@codemirror/language"
import { nginx } from "@codemirror/legacy-modes/mode/nginx"
import { ArrowRightOutlined, BoxPlotFilled, CloudServerOutlined, ClusterOutlined, PoweroffOutlined, UploadOutlined, UserOutlined } from "@ant-design/icons"

const goLang = `package main
import "fmt"

func main() {
  fmt.Println("Hello, 世界")
}`

const includeA = `server {
        listen 8080;
        server_name HOST-10-118-5-95;
        root /var/lib/ironic/httpboot;

        location /var/lib/ironic/httpboot/ {
                alias /var/lib/ironic/httpboot/;
        }
        }`

const includeB = `server {
    listen 19090;
    location / {
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Headers *;
        add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD;add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD;add_header Access-Control-Allow-Methods GET,POST,PUT,DELETE,PATCH,OPTIONS,HEAD;
        add_header Access-Control-Allow-Credentials true;
        if ($request_method = 'OPTIONS') {
            return 200;
        }
        proxy_pass http://10.118.5.95:19091;
    }
}`

const nginxConf = `# Ansible managed
user www-data;
worker_processes 2;
pid /run/nginx.pid;

events {
        worker_connections 768;
        # multi_accept on;
}

http {

        ##
        # Basic Settings
        ##

        sendfile on;
        tcp_nopush on;
        tcp_nodelay on;
        keepalive_timeout 65;
        types_hash_max_size 2048;
        # server_tokens off;

        # server_names_hash_bucket_size 64;
        # server_name_in_redirect off;

        include /etc/nginx/mime.types;
        default_type application/octet-stream;

        ##
        # Logging Settings
        ##

        access_log /var/log/nginx/access.log;
        error_log /var/log/nginx/error.log;

        ##
        # Gzip Settings
        ##

        gzip on;
        
        ## include includeA;
        ${includeA}
        ## include includeA end;
        
        ## include includeB;
        ${includeB}
        ## include includeB end;
}
`

export default function App() {

	console.log("nginx init")

	return <>
		<Row gutter={16}>
			<Col span={24}>
				<Card title={
					<h4>配置中心&nbsp;&nbsp;
						<Tag color={"blue"}>10.10.111.18</Tag><Tag color={"red"}>master</Tag>
					</h4>
				} extra={<Segmented
					options={[
						{
							label: (
								<div style={{padding: 4}}>
									<Avatar icon={<CloudServerOutlined/>} style={{backgroundColor: "#108ee9"}}>Node1</Avatar>
									<div>Node1</div>
								</div>
							),
							value: "user1",
						},
						{
							label: (
								<div style={{padding: 4}}>
									<Avatar style={{backgroundColor: "#2db7f5"}} icon={<CloudServerOutlined/>}/>
									<div>Node2</div>
								</div>
							),
							value: "user2",
						},
						{
							label: (
								<div style={{padding: 4}}>
									<Avatar style={{backgroundColor: "#2db7f5"}} icon={<CloudServerOutlined/>}/>
									<div>Node3</div>
								</div>
							),
							value: "user3",
						},
					]}
				/>} actions={[
					<Popconfirm
						title="Are you sure to delete this task?"
						onConfirm={(e) => {
							console.log(e)
						}}
						onCancel={(e) => {
							console.log(e)
						}}
						okText="Yes"
						cancelText="No"
					>
						<Button
							icon={<UploadOutlined/>}
							type={"primary"}
						>提交</Button>
					</Popconfirm>,
					<Popconfirm
						title="Are you sure to delete this task?"
						onConfirm={(e) => {
							console.log(e)
						}}
						onCancel={(e) => {
							console.log(e)
						}}
						okText="Yes"
						cancelText="No"
					>
						<Button
							icon={<PoweroffOutlined/>}
							type={"primary"}
							danger={true}
						>同步到所有节点</Button>
					</Popconfirm>
				]}>
					<CodeMirror theme={"light"} readOnly={false} lineWrapping={true} lineNumbers={true}
					            value={nginxConf} autoCapitalize={"true"} minWidth={"100%"}
					            indentWithTab={true} extensions={[StreamLanguage.define(nginx)]}/>
				</Card>
			</Col>
		</Row>
	</>
}
