module.exports = {
    title: 'zion-ui',
    description: '发开中不常用的组件',
    dest: './dist',
    port: '7777',
    head: [
        // ['link', {rel: 'icon', href: '/logo.jpg'}],
        ['link', {rel: 'stylesheet', href: '/css/main.css'}]
    ],
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        nav: [
            {
                text: '组件', link: '/component/start'
            },
            {
                text: '小龙博客', link: 'http://122.51.157.102/'
            },
            {
                text: 'GitHub', link: 'https://github.com/lixiaolongxl'
            },
            
        ],
        sidebar: {'/component/':
            [
                {
                    title:'安装',
                    collapsable: true,
                    children:[
                    '/component/start',
                    ]
                },
                {
                    title:'快速上手',
                    collapsable: true,
                    children:[
                    '/component/getting-started',
                    '/component/setThem',
                    ]
                },
                {
                    title:'组件',
                    collapsable: true,
                    children:[
                        '/component/component/Button',
                        '/component/component/Magnifier',
                    ]
                }
            ]
        },
        sidebarDepth: 2,
        lastUpdated: 'Last Updated',
        searchMaxSuggestoins: 10,
        serviceWorker: {
            updatePopup: {
                message: "有新的内容.",
                buttonText: '更新'
            }
        },
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页 ！'
    }
}
