import Index from "./pages/index"

export default {
    routes: [
        {
            path: "/",
            name: "index",
            hideMenu: true,
            component: <Index />,
            icon: "SmileOutlined",
        },
        {
            path: "/index",
            name: "index",
            component: <Index />,
            icon: "SmileOutlined",
        },
    ],
    headers: [
        {
            name: "index",
            path: "/index",
            icon: "SmileOutlined",
        },
    ]
}