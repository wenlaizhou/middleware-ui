import { ChromeFilled, CrownFilled, SmileFilled, TabletFilled } from '@ant-design/icons';

export default {
    route: {
        path: '/',
        routes: [
            {
                path: '/',
                name: 'index',
                icon: <SmileFilled />,
            },
            {
                path: '/midi',
                name: 'midi',
                icon: <SmileFilled />,
                flatMenu: true,
            },
            {
                icon: <CrownFilled />,
                name: 'poet',
                path: '/poet',
                // access: 'canAdmin',
                // flatMenu: true,
                routes: [
                    {
                        path: '/poet',
                        name: 'poet',
                        icon: 'https://gw.alipayobjects.com/zos/antfincdn/upvrAjAPQX/Logo_Tech%252520UI.svg',
                    },
                    {
                        path: '/idiom',
                        name: 'idiom',
                        icon: <CrownFilled />,
                    },
                    {
                        path: '/word',
                        name: 'word',
                        icon: <CrownFilled />,
                    },
                ],
            },
            {
                name: '列表页',
                icon: <TabletFilled />,
                path: '/list',
                component: './ListTableList',
                // flatMenu: true,
                routes: [
                    {
                        path: '/list/sub-page',
                        name: '列表页面',
                        icon: <CrownFilled />,
                        routes: [
                            {
                                path: 'sub-sub-page1',
                                name: '一一级列表页面',
                                icon: <CrownFilled />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page2',
                                name: '一二级列表页面',
                                icon: <CrownFilled />,
                                component: './Welcome',
                            },
                            {
                                path: 'sub-sub-page3',
                                name: '一三级列表页面',
                                icon: <CrownFilled />,
                                component: './Welcome',
                            },
                        ],
                    },
                    {
                        path: '/list/sub-page2',
                        name: '二级列表页面',
                        icon: <CrownFilled />,
                        component: './Welcome',
                    },
                    {
                        path: '/list/sub-page3',
                        name: '三级列表页面',
                        icon: <CrownFilled />,
                        component: './Welcome',
                    },
                ],
            },
            {
                path: 'https://ant.design',
                name: 'Ant Design 官网外链',
                icon: <ChromeFilled />,
            },
        ],
    }
};