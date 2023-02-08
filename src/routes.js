import Index from "./pages/index"
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
            path: "/midi",
            component: <Midi />,
        }
    ]
}