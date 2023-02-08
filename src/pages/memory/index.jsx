import React, { useEffect, useState } from "react"

import { LikeOutlined, MessageOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, LoginOutlined, DatabaseOutlined, RocketOutlined } from "@ant-design/icons"
import { Avatar, List, Row, Space, Card, Col, Statistic, Divider, Button, Select, Table, message } from "antd"
import { Column, Liquid } from '@ant-design/plots';
import { useLocation, useNavigate } from "react-router-dom"
import conf from "../../conf"

import { ProCard, StatisticCard, ProList } from '@ant-design/pro-components'

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

    return <ProCard title="服务内存信息" split="horizontal" gutter={[16, 16]}>
        <ProCard>
            <StatisticCard.Group direction={'row'}>
                <StatisticCard
                    statistic={{
                        title: '总内存',
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
                        title: 'Cpu核数',
                        value: `${runtime?.memory?.cpuCount}`,
                        suffix: "核",
                        icon: <DatabaseOutlined />
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: 'Load',
                        value: `${runtime?.load?.load5?.toFixed(2)}`,
                        suffix: "",
                        icon: <DatabaseOutlined />
                    }}
                />
            </StatisticCard.Group>
        </ProCard>
        <ProCard gutter={16} split="vertical">
            <ProCard colSpan="20%" title="内存使用率">
                <Liquid percent={runtime?.osMemory?.usedPercent / 100} />
            </ProCard>
            <ProCard colSpan="20%" title="当前服务内存占比">
                <Liquid percent={runtime?.memory?.totalHeapAlloc / runtime?.osMemory?.total} />
            </ProCard>
            <ProCard>

            </ProCard>
        </ProCard>

    </ProCard>
}