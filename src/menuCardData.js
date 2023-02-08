export default {
    title: "运行时数据",
    groups: {
        "内存数据": [{ title: "view", url: "/memory" }],
        "磁盘数据": [{ title: "view", url: "/disk" }],
        "网络数据": [{ title: "view", url: "/net" }],
    },
    right: {
        title: "运行时数据",
        items: [
            { title: "内存数据", desc: "memory info" },
            { title: "磁盘数据", desc: "disk info" },
        ]
    }
}