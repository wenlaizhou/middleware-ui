import React, { useEffect, useState } from "react"
import { Routes, Route, useNavigate, useLocation } from "react-router-dom"
import {
    GithubFilled,
    InfoCircleFilled,
    LogoutOutlined,
    QuestionCircleFilled,
} from '@ant-design/icons'
import moment from "moment"
import { QuestionCircleOutlined, SyncOutlined } from "@ant-design/icons"
import {
    PageContainer,
    ProCard,
    ProConfigProvider,
    ProLayout,
    SettingDrawer,
} from '@ant-design/pro-components';
import { theme, ConfigProvider, FloatButton, Modal, Card } from 'antd';
import config from "../conf"
import Login from "../pages/login"
import routes from "../routes"
import defaultProps from './_defaultProps';
import appList from "../appList"
import menus from "../menus"
import MenuCard from "./menuCard"


export default (props) => {
    const [settings, setSetting] = useState({
        fixSiderbar: true,
        layout: 'mix',
        splitMenus: true,
    });
    const { location, children } = props;

    const [collapsed, setCollapsed] = useState(false)

    const [pathname, setPathname] = useState('/');
    const [num, setNum] = useState(40);

    const [hideOther, setHideOther] = useState(false)

    let useLoc = useLocation()
    const navigate = useNavigate()

    useEffect(() => {
        setCollapsed(localStorage.getItem("menuColl"))
        setPathname(useLoc.pathname)



    }, [useLoc])
    return (
        <div
            id="test-pro-layout"
            style={{
                height: '100vh',
            }}
        >
            <ConfigProvider theme={{
                algorithm: theme.defaultAlgorithm,
                token: {
                    borderRadius: "5px",
                    colorTextMenuSelected: "#69b1ff",
                }
            }}>
                <Modal open={!localStorage.getItem("login")}
                    maskStyle={{
                        backgroundColor: "rgb(0,0,0,0.9)",
                        filter: "grayscale(50%)"
                    }}
                    closable={false}
                    maskClosable={false}
                    footer={null}
                    loading={true}
                    width={"80%"}
                >
                    <Card title={<h4>登录系统</h4>} bordered={true}>
                        <Login />
                    </Card>
                </Modal>
                <ProConfigProvider hashed={true}>
                    <FloatButton.Group shape="square" style={{ right: 25 }}>
                        <FloatButton icon={<QuestionCircleOutlined />} tooltip="文档" />
                        <FloatButton icon={<SyncOutlined />} tooltip="刷新页面" onClick={(e) => {
                            window.location.reload()
                        }} />
                        <FloatButton.BackTop visibilityHeight={0} tooltip="回到顶端" />
                    </FloatButton.Group>
                    <ProLayout
                        token={{
                            colorTextAppListIcon: "#fff",
                            colorTextAppListIconHover: "#fff",
                            header: {
                                colorBgHeader: '#292f33',
                                colorHeaderTitle: '#fff',
                                colorTextMenu: '#fff',
                                colorTextMenuSecondary: '#dfdfdf',
                                colorBgMenuItemSelected: '#22272b',
                                colorTextRightActionsItem: '#dfdfdf',
                                colorTextMenuActive: "#fff",
                                colorTextMenuTitle: "#fff",
                                colorTextMenuSelected: "#69b1ff"
                            },
                            sider: {
                                colorMenuBackground: '#292f33',
                                colorMenuItemDivider: '#dfdfdf',
                                colorTextMenuItemHover: "#fff",
                                colorTextMenu: '#fff',
                                colorTextMenuSelected: '#69b1ff',
                                colorBgMenuItemSelected: '#22272b',
                            },
                        }}
                        prefixCls="my-prefix"
                        bgLayoutImgList={[
                            {
                                src: '/background.png',
                                bottom: 0,
                                left: 0,
                                width: "50vh"
                            },
                        ]}
                        location={{
                            pathname: pathname
                        }}
                        siderMenuType="group"
                        navTheme="realDark"
                        menu={{
                            collapsedShowGroupTitle: true,
                            collapsedShowTitle: true,
                            theme: "dark",
                        }}
                        collapsed={collapsed}
                        onCollapse={(on) => {
                            // console.log(`onCollapse: ${on}`)
                            // if (on) {
                            //     localStorage.setItem("menuColl", "true")

                            //     setCollapsed(on)
                            // } else {
                            //     localStorage.removeItem("menuColl")
                            //     setCollapsed(on)
                            // }
                            setCollapsed(on)
                        }}
                        avatarProps={{
                            icon: <LogoutOutlined />,
                            size: 'small',
                            title: <div
                                style={{
                                    color: '#dfdfdf',
                                }}
                            >
                                退出登录
                            </div>,
                            onClick: (e) => {
                                localStorage.removeItem("login")
                                navigate("/")
                            }
                        }}
                        itemClick={(item) => {
                            console.log(item)
                            if (item.url?.startsWith("http")) {
                                window.open(item.url, "_blank")
                                return
                            }
                            navigate(item.url)
                        }}
                        actionsRender={(props) => {
                            if (props.isMobile) return [];
                            return [
                                <InfoCircleFilled key="InfoCircleFilled" />,
                                <QuestionCircleFilled key="QuestionCircleFilled" />,
                                <GithubFilled key="GithubFilled" />,
                            ];
                        }}
                        logo={config.logo}
                        onPageChange={(location) => {
                            console.log("切换到：" + location.pathname)
                        }}
                        title={config.title}
                        siderWidth={150}
                        headerTitleRender={(logo, title, _) => {
                            console.log(`title: ${title}`)
                            const defaultDom = (
                                <a>
                                    {logo}
                                    {title}
                                </a>
                            );
                            if (document.body.clientWidth < 1400) {
                                return defaultDom;
                            }
                            if (_.isMobile) return defaultDom;
                            return (
                                <>
                                    {defaultDom}
                                    <MenuCard />
                                </>
                            );
                        }}
                        menuFooterRender={(props) => {
                            if (props?.collapsed) return undefined;
                            return (
                                <div
                                    style={{
                                        textAlign: 'center',
                                        paddingBlockStart: 12,
                                        color: "white"
                                    }}
                                >
                                    <div>{`© ${moment().year()}`}</div>
                                    <div>by Middleware Framework</div>
                                </div>
                            );
                        }}
                        onMenuHeaderClick={(e) => console.log(e)}
                        menuItemRender={(item, dom) => (
                            <div
                                onClick={() => {
                                    console.log(item)
                                    if (item.path?.startsWith("http")) {
                                        return
                                    }
                                    navigate(item.path)
                                }}
                            >
                                {dom}
                            </div>
                        )}
                        {...appList}
                        {...menus}
                        {...defaultProps}
                        {...settings}
                    >
                        <PageContainer
                            token={{
                                paddingInlinePageContainerContent: num,
                            }}
                            // extra={hideOther ? [] : [
                            //     <Button key="3">操作</Button>,
                            //     <Button key="2">操作</Button>,
                            //     <Button
                            //         key="1"
                            //         type="primary"
                            //         onClick={() => {
                            //             setNum(num > 0 ? 0 : 40);
                            //         }}
                            //     >
                            //         主操作
                            //     </Button>,
                            // ]}
                            // subTitle="简单的描述"
                            title={false}
                            footer={[
                                // <Button key="3">重置</Button>,
                                // <Button key="2" type="primary">
                                //     提交
                                // </Button>,
                            ]}
                        >

                            <Routes>
                                {
                                    routes.routes?.map(route => <Route path={route.path} element={route.component} />)
                                }
                            </Routes>

                        </PageContainer>

                        {/* <SettingDrawer
                            pathname={pathname}
                            enableDarkTheme
                            getContainer={() => document.getElementById('test-pro-layout')}
                            settings={settings}
                            onSettingChange={(changeSetting) => {
                                setSetting(changeSetting);
                            }}
                            disableUrlParams={false}
                        /> */}
                    </ProLayout>
                </ProConfigProvider>
            </ConfigProvider>
        </div>
    );
};