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
                name: "runtime",
                icon: <SmileFilled />,
                path: "/memory",
                routes: [
                    {
                        path: "/memory",
                        name: "memory",
                        icon: <CrownFilled />,
                    }, {
                        path: "/disk",
                        name: "disk",
                        icon: <CrownFilled />,
                    }, {
                        path: "/net",
                        name: "net",
                        icon: <CrownFilled />,
                    }
                ]
            },
            {
                path: '/midi',
                name: 'midi',
                icon: <SmileFilled />,
                flatMenu: true,
            },
            {
                path: 'https://ant.design',
                name: 'Ant Design 官网外链',
                icon: <ChromeFilled />,
            },
        ],
    }
};