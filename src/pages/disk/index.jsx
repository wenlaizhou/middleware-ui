import { LikeOutlined, MessageOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, LoginOutlined, DatabaseOutlined, RocketOutlined } from "@ant-design/icons"
import { Avatar, List, Row, Space, Card, Col, Statistic, Divider, Button, Select, Table, message, Progress } from "antd"
import { Column, Liquid } from '@ant-design/plots';
import { useLocation, useNavigate } from "react-router-dom"
import conf from "../../conf"

import React, { useEffect, useState } from "react"
import { ProCard, StatisticCard, ProList } from '@ant-design/pro-components'
import moment from "moment/moment";

export default (props) => {

    const [runtime, setRuntime] = useState({})

    const [data, setData] = useState([])

    useEffect(() => {
        fetch(`${conf.service}/runtime`, {
            method: "GET",
            mode: "cors",
            redirect: "follow",
        }).then(r => r.json()).then(resp => {
            setRuntime(resp.data)

            const dt = resp.data?.diskInfos?.map(d => {
                return [{
                    type: "free",
                    value: d.free,
                    device: d.device
                }, {
                    type: "used",
                    value: d.used,
                    device: d.device
                }]
            })?.reduce((acc, current) => {
                console.log(acc)
                console.log(current)
                return acc.concat(current)
            }, [])

            setData(dt)


        }).catch(reason => {
            console.error(reason)
        })
    }, [])

    return <ProCard
        title="磁盘数据"
        extra={moment().toString()}
        split={'vertical'}
        bordered
        gutter={16}
    >
        <ProCard split="horizontal" colSpan="80%" gutter={16}>
            <ProCard bordered gutter={16}>
                <StatisticCard.Group direction={'row'}>
                    <StatisticCard
                        statistic={{
                            title: '磁盘数量',
                            value: runtime?.diskInfos?.length || 0,
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
            <ProCard bordered gutter={16}>
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
                        avatar: {},
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
                                        <div
                                            style={{
                                                width: '200px',
                                            }}
                                        >
                                            <div>磁盘使用率</div>
                                            <Progress percent={item?.usedPercent?.toFixed(2)} />
                                        </div>
                                    </div>
                                )
                            },
                        },
                    }}
                    rowKey="title"
                    headerTitle="磁盘列表"
                    dataSource={runtime?.diskInfos?.map(d => {
                        return Object.assign({
                            title: d.device,
                            avatar: <MessageOutlined />
                        }, d)
                    }) || []}
                />
            </ProCard>
            <ProCard title="磁盘列表">
                <Column data={runtime?.diskInfos?.map(d => {
                    return [{
                        type: "free",
                        value: Math.ceil(d.free / 1024 / 1024 / 1024),
                        device: d.device
                    }, {
                        type: "used",
                        value: Math.ceil(d.used / 1024 / 1024 / 1024),
                        device: d.device
                    }]
                })?.reduce((acc, current) => {
                    console.log(acc)
                    console.log(current)
                    return acc.concat(current)
                }, []) || []}
                    seriesField="type"
                    isStack="true"
                    xField='device'
                    yField='value'
                    maxColumnWidth="80"
                />
            </ProCard>
        </ProCard>
        <ProCard colspan="20%" split="horizontal" gutter={[16, 16]} bordered>
            <ProCard title="磁盘占用">
                <Liquid percent={runtime?.currentDisk?.usedPercent / 100} />
            </ProCard>
            
        </ProCard>
    </ProCard>
}