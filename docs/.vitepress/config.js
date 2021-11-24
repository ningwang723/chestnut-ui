module.exports = {
    lang: 'zh-CN',
    title: 'Chestnut UI',
    description: 'Chestnut UI 组件库',
    base: '/chestnut-ui/',

    themeConfig: {
        docsDir: 'docs',
        nav: [
            {
                text: 'Github',
                link: 'https://github.com/ningwang723/chestnut-ui.git'
            }
        ],
        sidebar: [
            {
                text: '简介',
                link: '/'
            },
            {
                text: '组件',
                children: getComponents()
            },
            {
                text: '表单组件',
                children: getFormComponents()
            }
        ]
    }
};

function getComponents() {
    return [
        { text: '按钮', link: '/guide/button/button' },
        { text: '面板', link: '/guide/panel/panel' },
        { text: '下拉框', link: '/guide/dropdown/dropdown' }
    ];
}

function getFormComponents() {
    return [
        { text: '复选框', link: '/guide/checkbox/checkbox' },
        {
            text: '文本框',
            link: '/guide/text/text'
        },
        {
            text: '选择框',
            link: '/guide/select/select'
        },
        {
            text: '文件上传',
            link: '/guide/file/file'
        },
        {
            text: '富文本编辑器',
            link: '/guide/editor/editor'
        }
    ];
}
