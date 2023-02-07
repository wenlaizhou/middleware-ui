import Index from "./pages/index"
import Poet from "./pages/poet"
import Idiom from "./pages/idiom"
import Wise from "./pages/wise"
import Word from "./pages/word"
import Midi from "./pages/midi"

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
            path: "/poet",
            name: "诗词",
            hideMenu: false,
            component: <Poet />,
            icon: "CodepenOutlined"
        },
        {
            path: "/idiom",
            name: "成语",
            hideMenu: false,
            component: <Idiom />,
            icon: "DropboxOutlined"
        },
        {
            path: "/word",
            name: "词汇",
            hideMenu: false,
            component: <Word />,
            icon: "ZhihuOutlined"
        },
        {
            path: "/wise",
            name: "歇后语",
            hideMenu: false,
            component: <Wise />,
            icon: "SketchOutlined"
        },
        {
            path: "/midi",
            name: "midi",
            hideMenu: false,
            component: <Midi />,
            icon: "SketchOutlined"
        }
    ],
    headers: [
        {
            name: "index",
            path: "/",
            icon: "SmileOutlined",
        },
        {
            name: "poet",
            path: "/poet",
            icon: "",
        }
    ]
}