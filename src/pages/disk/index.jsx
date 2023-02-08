import { LikeOutlined, MessageOutlined, StarOutlined, ArrowUpOutlined, ArrowDownOutlined, LoginOutlined, DatabaseOutlined, RocketOutlined } from "@ant-design/icons"
import { Avatar, List, Row, Space, Card, Col, Statistic, Divider, Button, Select, Table, message } from "antd"
import { Column, Liquid } from '@ant-design/plots';
import { useLocation, useNavigate } from "react-router-dom"
import conf from "../../conf"

import React, { useEffect, useState } from "react"
import ProCard, { StatisticCard } from "@ant-design/pro-card"
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
        headerBordered="true"
        bordered="true"
    >
        <ProCard split="horizontal">
            <ProCard split="horizontal">
                <ProCard split="vertical">
                    <StatisticCard
                        statistic={{
                            title: '磁盘数量',
                            value: runtime?.diskInfos?.length || 0,
                            description: <Statistic title="当前磁盘使用率" value={`${Math.ceil(runtime?.currentDisk?.usedPercent)} %`} trend="down" />,
                        }}
                    />
                    <StatisticCard
                        statistic={{
                            title: '当前磁盘挂载点',
                            value: runtime?.currentDisk?.mountpoint,
                            //description: <Statistic title={runtime?.currentDisk?.mountpoint} value="" trend="up" />,
                        }}
                    />
                </ProCard>
                <ProCard split="vertical">
                    <StatisticCard
                    // statistic={{
                    //     title: '运行中实验',
                    //     value: '12/56',
                    //     suffix: '个',
                    // }}
                    />
                    <StatisticCard
                    // statistic={{
                    //     title: '历史实验总数',
                    //     value: '134',
                    //     suffix: '个',
                    // }}
                    />
                </ProCard>
            </ProCard>
        </ProCard>
        <ProCard colspan="30%" split="horizontal">
            <ProCard>
                <StatisticCard
                    title="当前磁盘占用情况"
                    chart={
                        <Liquid percent={runtime?.currentDisk?.usedPercent / 100} />
                    }
                />
            </ProCard>
            <ProCard>
                <StatisticCard
                    title="总体占用情况"
                    chart={
                        <Column data={runtime?.diskInfos?.map(d => {
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
                        }, []) || []}
                            seriesField="type"
                            isStack="true"
                            xField='device'
                            yField='value'
                            maxColumnWidth="80"
                        />
                    }
                />
            </ProCard>
        </ProCard>
    </ProCard>
}