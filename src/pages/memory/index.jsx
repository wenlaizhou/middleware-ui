import { LikeOutlined, MessageOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, LoginOutlined, DatabaseOutlined, RocketOutlined } from "@ant-design/icons"
import { Avatar, List, Row, Space, Card, Col, Statistic, Divider, Button, Select, Table, message } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import conf from "../../conf"

import React, { useEffect, useState } from "react"
import { StatisticCard } from "@ant-design/pro-card"

export default (props) => {

    const [runtime, setRuntime] = useState({})

    useEffect(() => {
        fetch(`${conf.service}/runtime`, {
            method: "GET",
            mode: "cors",
            redirect: "follow",
        }).then(r => r.json()).then(resp => {
            setRuntime(resp.data)
        }).catch(reason => {
            console.error(reason)
        })
    }, [])

    return <Card title="服务内存信息">
        <Row>
            <StatisticCard.Group direction={'row'}>
                <StatisticCard
                    statistic={{
                        title: 'Total',
                        value: `${Math.ceil(runtime?.osMemory?.total / 1024 / 1024)} MB`,
                        icon: <LikeOutlined />
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: 'Available',
                        value: `${Math.ceil(runtime?.osMemory?.available / 1024 / 1024)} MB`,
                        icon: <StarOutlined />
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: 'AppMemory',
                        value: `${Math.ceil(runtime?.memory?.totalHeapAlloc / 1024)} KB`,
                        formatter: "countdown",
                        icon: <RocketOutlined />
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: 'CpuCount',
                        value: `${runtime?.memory?.cpuCount}`,
                        suffix: "核",
                        icon: <DatabaseOutlined />
                    }}
                />
            </StatisticCard.Group>
        </Row>
        <Divider />
        <Row>
            <StatisticCard.Group direction={'row'}>
                <StatisticCard
                    statistic={{
                        title: 'Available',
                        value: `${Math.ceil(runtime?.osMemory?.available / 1024 / 1024)} MB`,
                        icon: <StarOutlined />
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: 'AppMemory',
                        value: `${Math.ceil(runtime?.memory?.totalHeapAlloc / 1024)} KB`,
                        formatter: "countdown",
                        icon: <RocketOutlined />
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: 'CpuCount',
                        value: `${runtime?.memory?.cpuCount}`,
                        suffix: "核",
                        icon: <DatabaseOutlined />
                    }}
                />
            </StatisticCard.Group>
        </Row>
    </Card>
}