import type { SidebarConfig } from '@vuepress/theme-default'

export const zh: SidebarConfig = {
  '/': [
    {
      text: '开始使用',
      collapsible: false,
      children: [
      ]
    },
    {
      text: '常见问题',
      collapsible: true,
      children: [
        '/document/FAQ/FAQ.md',
      ]
    },
  ],

  '/Extensions/': [
    {
      text: '扩展',
      collapsible: true,
      children: [
        '/Extensions/What is.md'
      ]
    },
    {
      text: '推荐',
      collapsible: true,
      children: [
        '/Extensions/recommend/recommend.md',
        {
          text: '脚本管理器',
          collapsible: true,
          children: [
            '/Extensions/Script Manager/What is.md',
            '/Extensions/Script Manager/Install Manager.md',
            '/Extensions/Script Manager/Beware of malicious scripts.md',
            '/Extensions/Script Manager/Install Script.md',
          ]
        },
        {
          text: '广告屏蔽扩展',
          collapsible: true,
          children: [
            '/Extensions/recommend/Ad block/What is.md',
            '/Extensions/recommend/Ad block/Install ad block.md',
          ]
        },
      ]
    },
  ]
};