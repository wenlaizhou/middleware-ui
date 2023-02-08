import { LikeOutlined, GlobalOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, LoginOutlined, DatabaseOutlined, RocketOutlined, MessageOutlined } from "@ant-design/icons"
import { Avatar, List, Row, Space, Card, Col, Statistic, Divider, Button, Select, Table, message, Typography } from "antd"
import { useLocation, useNavigate } from "react-router-dom"
import conf from "../../conf"

import React, { useEffect, useState } from "react"
import { ProCard, StatisticCard, ProList } from '@ant-design/pro-components'
import moment from "moment/moment"

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

    return <ProCard
        title="网络信息"
        extra={moment().toString()}
        split={'horizontal'}
        headerBordered="true"
        bordered="true"
        gutter={[16, 16]}
    >
        <ProCard>
            <StatisticCard.Group direction={'row'}>
                <StatisticCard
                    statistic={{
                        title: '监听端口数',
                        value: `${runtime?.net?.listens?.length || 0}`,
                        icon: <LikeOutlined />
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: '连接数',
                        value: `${runtime?.net?.connections?.length || 0}`,
                        icon: <LikeOutlined />
                    }}
                />
                <StatisticCard
                    statistic={{
                        title: '网络设备',
                        value: `${runtime?.net?.interfaces?.length || 0}`,
                        suffix: "个",
                        icon: <StarOutlined />
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
        <ProCard>
            <ProList
                toolBarRender={() => {
                    return [];
                }}
                metas={{
                    title: {},
                    description: {
                        render: (_, item, b, c) => {
                            console.log(item)
                            return `挂载地址:${item?.mountpoint} | 文件系统类型:${item?.fstype}`;
                        },
                    },
                    avatar: <GlobalOutlined />,
                    extra: {
                        render: (_, item, b, c) => {
                            console.log(item)
                            return (
                                <div
                                    style={{
                                        minWidth: 200,
                                        flex: 1,
                                        display: 'flex',
                                        justifyContent: 'flex-end',
                                    }}
                                >
                                    <Typography>
                                        <Typography.Paragraph code="true">
                                            <pre>
                                                {JSON.stringify(item, null, 2)}
                                            </pre>
                                        </Typography.Paragraph>
                                    </Typography>
                                </div>
                            )
                        },
                    },
                }}
                rowKey="title"
                headerTitle="网络设备列表"
                dataSource={runtime?.net?.interfaces?.map(d => {
                    const netInterface = JSON.parse(d)

                    return Object.assign({
                        title: netInterface?.name
                    }, netInterface)
                }) || []}
            />
        </ProCard>


    </ProCard>
}