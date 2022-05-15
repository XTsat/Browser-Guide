import type { NavbarConfig } from '@vuepress/theme-default'

export const en: NavbarConfig = [
  {
    text: 'HOME',
    link: '/en/'
  },
  {
    text: 'Browser Guide',
    link: '/en/document/',
  },
  {
    text: 'Extensions',
    link: '/Extensions/What is.md',
  },
  {
    text: 'About',
    children: [
      {
        text: 'Guide',
        children: [
          {
            text: 'Watt Toolkit Guide',
            link: 'https://xtsat.github.io/SteamTools-Guide/'
          },
          {
            text: 'Browser Guide',
            link: 'https://xtsat.github.io/Browser-Guide/'
          },
        ]
      },
      {
        text: 'Other platforms',
        children: [
          {
            text: 'BiliBili 📺',
            link: 'https://space.bilibili.com/53283118'
          },
          {
            text: 'Steam 🎮',
            link: 'https://steamcommunity.com/id/XTxiaotong'
          },
          {
            text: 'Playlist 🎵',
            link: 'https://music.163.com/#/user/home?id=283588276'
          },
          {
            text: 'GitHub',
            link: 'https://github.com/XTsat'
          },
        ]
      },
    ]
  },
]