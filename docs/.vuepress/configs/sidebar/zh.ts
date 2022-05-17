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
      text: '开始使用',
      collapsible: true,
      children: [
        '/Extensions/Guide/What is.md',
        '/Extensions/Guide/How to install extensions.md',
        '/Extensions/Guide/Malicious browser extensions.md',
      ]
    },
    {
      text: '其他页面',
      // collapsible: true,
      children: [
        '/Extensions/recommend/recommend.md',
        // {
        //   text: '脚本管理器',
        //   collapsible: true,
        //   children: [
        //     '/Extensions/recommend/Script Manager/What is.md',
        //     '/Extensions/recommend/Script Manager/Install Manager.md',
        //     '/Extensions/recommend/Script Manager/Beware of malicious scripts.md',
        //     '/Extensions/recommend/Script Manager/Install Script.md',
        //   ]
        // },
        // {
        //   text: '广告屏蔽扩展',
        //   collapsible: true,
        //   children: [
        //     '/Extensions/recommend/Ad block/What is.md',
        //     '/Extensions/recommend/Ad block/Install ad block.md',
        //   ]
        // },
        // {
        //   text: '游戏类',
        //   collapsible: true,
        //   children: [
        //     '/Extensions/recommend/Game/Augmented Steam.md',
        //     '/Extensions/recommend/Game/SteamDB.md',
        //   ]
        // },
      ]
    },
  ],

  '/Extensions/recommend/': [
    {
      text: '扩展推荐',
      collapsible: true,
      children: [
        {
          text: '网页',
          children: [
            '/Extensions/recommend/OneTab.md',
            '/Extensions/recommend/Dark Reader.md',
            '/Extensions/recommend/SingleFile.md',
          ]
        },
        {
          text: '图片',
          children: [
            '/Extensions/recommend/Image/ImageAssistant.md',
            
          ]
        },
        {
          text: '视频',
          children: [
            '/Extensions/recommend/Video/pakku.md',
            
          ]
        },
        {
          text: '广告屏蔽',
          children: [
            '/Extensions/recommend/Ad block/uBlock Origin.md',
            '/Extensions/recommend/Ad block/AdGuard.md',
          ]
        },
        {
          text: 'Steam 增强',
          children: [
            '/Extensions/recommend/Game/Augmented Steam.md',
            '/Extensions/recommend/Game/SteamDB.md',
          ]
        },
      ]
    },
    {
      text: '脚本管理器',
      collapsible: true,
      children: [
        '/Extensions/recommend/Script Manager/What is.md',
        '/Extensions/recommend/Script Manager/Install Manager.md',
        '/Extensions/recommend/Script Manager/Beware of malicious scripts.md',
        '/Extensions/recommend/Script Manager/Install Script.md',
      ]
    },
    {
      text: '广告屏蔽扩展',
      collapsible: true,
      children: [
        '/Extensions/recommend/Ad block/What is.md',
        '/Extensions/recommend/Ad block/What is best.md',
        '/Extensions/recommend/Ad block/uBlock Origin.md',
        '/Extensions/recommend/Ad block/AdGuard.md',
      ]
    },
  ],
};