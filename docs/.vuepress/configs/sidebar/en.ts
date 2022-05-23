import type { SidebarConfig } from '@vuepress/theme-default'

export const en: SidebarConfig = {
  '/en/': [
    {
      text: 'HOME',
      collapsible: false,
      children: [
      ]
    },
    {
      text: 'FAQ',
      collapsible: true,
      children: [
        '/en/document/FAQ/FAQ.md',
      ]
    },
  ],

  '/en/Extensions/': [
    {
      text: 'Extensions',
      collapsible: true,
      children: [
        '/en/Extensions/What is.md'
      ]
    },
    {
      text: 'recommend',
      collapsible: true,
      children: [
        '/en/Extensions/recommend/recommend.md',
        {
          text: 'Script Manager',
          collapsible: true,
          children: [
            '/en/Extensions/Script Manager/What is.md',
            '/en/Extensions/Script Manager/Install Manager.md',
            '/en/Extensions/Script Manager/Beware of malicious scripts.md',
            '/en/Extensions/Script Manager/Install Script.md',
          ]
        },
        {
          text: 'Ad block',
          collapsible: true,
          children: [
            '/en/Extensions/recommend/Ad block/What is.md',
            '/en/Extensions/recommend/Ad block/Install ad block.md',
          ]
        },
      ]
    },
  ]
};