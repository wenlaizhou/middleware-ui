import Index from "./pages/index"
import Poet from "./pages/poet"
import Idiom from "./pages/idiom"
import Wise from "./pages/wise"
import Word from "./pages/word"
import Midi from "./pages/midi"
import Memory from "./pages/memory"
import Net from "./pages/net"
import Disk from "./pages/disk"

export default {
    routes: [
        {
            path: "/",
            component: <Index />,
        },
        {
            path: "/memory",
            component: <Memory />,
        },
        {
            path: "/net",
            component: <Net />,
        },
        {
            path: "/disk",
            component: <Disk />,
        },
        {
            path: "/poet",
            component: <Poet />,
        },
        {
            path: "/idiom",
            component: <Idiom />,
        },
        {
            path: "/word",
            component: <Word />,
        },
        {
            path: "/wise",
            component: <Wise />,
        },
        {
            path: "/midi",
            component: <Midi />,
        }
    ]
}