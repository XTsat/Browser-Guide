# [SteamDB](https://steamdb.info/)

[![chrome users](https://img.shields.io/chrome-web-store/users/kdbmhfkmnlmbkgbabkdealhhbfhlmmon?label=chrome%20users&style=for-the-badge&logo=googlechrome)](https://chrome.google.com/webstore/detail/steam-database/kdbmhfkmnlmbkgbabkdealhhbfhlmmon)
[![firefox users](https://img.shields.io/amo/users/steam-database?label=firefox%20users&color=4c1&style=for-the-badge&logo=firefoxbrowser)](https://addons.mozilla.org/firefox/addon/steam-database/)
[![edge users](https://img.shields.io/badge/dynamic/json?label=edge%20users&query=%24.activeInstallCount&url=https://microsoftedge.microsoft.com/addons/getproductdetailsbycrxid/hjknpdomhlodgaebegjopkmfafjpbblg&style=for-the-badge&logo=microsoftedge)](https://microsoftedge.microsoft.com/addons/detail/steam-database/hjknpdomhlodgaebegjopkmfafjpbblg)  

## SteamDB Extension

在 Steam 社区和商店的各个页面上添加了 SteamDB 链接。还突出了 steamdb.info 上拥有和愿望单中的产品。

![banner](https://camo.githubusercontent.com/2dbb63e5790c2aa5690900d3e55b0ddc1484c89507b707a17ac7cc9d481b8cd8/68747470733a2f2f737465616d64622e696e666f2f7374617469632f696d672f657874656e73696f6e2e706e67)

## 主要功能

- 在大多数 Steam 商店和社区页面添加 SteamDB 链接
- 在 steamdb.info 上突出拥有/希望/在购物车中的游戏和包裹（通过从 Steam 商店获取信息）
- 在 Steam 网站上添加新的功能（例如自动跳过年龄，在库存中快速出售，在其他库存的市场价格）。
- 修复 Valve 没有的东西（例如，在大屏幕上正确地将 Steam 商店放在中心位置）

## 链接

- 功能: <https://steamdb.info/extension/>
- 隐私政策: <https://steamdb.info/extension/#privacy>

[![Chrome Web Store](../../../Photo/Badge/chrome.png)](https://chrome.google.com/webstore/detail/kdbmhfkmnlmbkgbabkdealhhbfhlmmon)
[![Mozilla Addons](../../../Photo/Badge/firefox.png)](https://addons.mozilla.org/en-US/firefox/addon/steam-database/)
[![Microsoft Edge](../../../Photo/Badge/edge.png)](https://microsoftedge.microsoft.com/addons/detail/steam-database/hjknpdomhlodgaebegjopkmfafjpbblg)

## 详细功能介绍

- 功能: <https://steamdb.info/extension/>

::: details 中文译文

### 复选框说明

- [x] 默认情况下启用
- 无选项的内置功能
- [ ] 默认情况下已禁用，请在“选项”中启用

### SteamDB 网站

- [x] 在 steamdb.info 上突出显示拥有和希望的产品
  - 直接从 [steamdb.info](https://steamdb.info/) 上对Steam商店的产品进行收藏、关注和忽略。
  - [启用免费包脚本](https://steamdb.info/freepackages/)
  - 在 [销售页面](https://steamdb.info/sales/) 和 [捆绑包页面](https://steamdb.info/bundles/) 上启用额外的过滤功能

### 按钮和链接

- [x] 在应用程序页面上显示一个按钮
- [x] 在应用页面上显示 [PCGamingWiki](https://www.pcgamingwiki.com/) 按钮
- [x] 在软件包页面上显示一个按钮
- [x] 在视频页面上显示一个按钮
- [x] 在游戏中心上显示一个按钮
- [x] 在游戏卡页面上显示 SteamDB 和商店页面按钮
- [x] 在每个购买选项下显示子 ID
- [x] 在应用程序小部件中显示子 ID
- [x] 在你的账户页面上链接每个包
- [x] 在社区简介上添加计算器链接

### 库存与交易

- [x] 将库存页面上的游戏选择移到侧面
- [x] 将你库存中的每个礼物和优惠券链接到 SteamDB 上
  - [x] 正确地计算出你库存中的礼物SubID
- [x] 出售物品时不刷新库存（物品会淡出）。
- [x] 添加快速出售按钮
  - [ ] 自动接受快速出售
- 在交易报价中提供更好的错误消息，而不是Valve神秘的错误数字
- 在其他用户的库存中显示物品的市场价格
- [x] 转储 url 中的支持和参数[（请参阅 GitHub 上的说明）](https://github.com/SteamDatabase/BrowserExtension#trade-offers-support-for-for_item-and-my_item)`for_itemmy_item`
- [ ] 禁止显示`“这个交易似乎很可疑”`和`“你确定这是一个礼物吗？”`交易报价提醒

### 增强

- 将按钮添加到空购物车
- 在徽章页面上显示剩余的卡牌掉落总量
- 在成就页面上显示隐藏的成就
  - [x] 将隐藏的成就描述隐藏在扰流元素后面
- 改善全球成就页面
  - 链接到您自己的成就页面
  - 锁定的成就具有锁定图标，以提高可见性
  - 显示隐藏的成就描述
  - 显示成就进度条
- 允许向已经拥有游戏的好友发送礼物
- 添加一个按钮，用于在销售期间欺骗发现队列
- [x] 接受市场上的SSA，库存，并自动激活关键页面
- [x] 隐藏标题中的“安装蒸汽”按钮
- [x] 在应用页面上显示 SteamDB 评级
- [x] 在应用页面上显示最低记录价格
- [x] 在应用页面上显示当前并发玩家数和最大峰值
  - [x] 在应用程序页面上显示上次库更新
- [x] 将“拥有的朋友”添加到“玩的好友”页面
- [ ] 跳过年龄检查门
- [ ] 删除所有链接过滤器链接（访问链接过滤器仍然有效）
- [ ] 停止在应用商店页面上加载图像。(许多开发人员在游戏描述中放置了数兆字节的图像，这通常需要一段时间才能加载。单击要加载的图像。)
- [ ] 在商店和社区页面上显示应用图标

:::

## 您的隐私

如果 "在应用程序页面上显示当前并发玩家和最大峰值 "选项被启用，该扩展将向steamdb.info发出安全请求，以获得当前的玩家数量和最后一次仓库更新（后者仅在 "在应用程序页面上显示最后一次仓库更新 "选项被启用时）。如果 "在应用程序页面上显示最低记录价格 "选项被启用，该扩展将使用你的货币（与Steam认为的一样）向steamdb.info做一个安全请求，以获得特定游戏的最低记录价格。这些请求可能会被Cloudflare缓存，在大多数情况下，甚至可能不会碰到我们的源服务器。你可以[在这里查看Cloudflare的隐私政策](https://www.cloudflare.com/privacypolicy/)。

如果启用了 "在steamdb.info上突出显示拥有和希望购买的产品 "选项，该扩展将通过<https://store.steampowered.com/dynamicstore/userdata/> ，向Steam商店请求一些用户数据（希望购买的、拥有的、关注的、忽略的产品和购物车中的产品），并使用这些数据在网站上应用突出显示。这些数据完全包含在您的浏览器中，不会发送到其他地方（包括我们）。为了防止向Steam商店发出过多的请求，您的用户数据将被缓存在您的浏览器的本地存储中。

如果启用 "跳过年龄检查 "选项，它将设置以下cookies：wants_mature_content, mature_content, lastagecheckage, birthtime到预定的值。这允许自动跳过年龄门页面而不牺牲你的隐私。

其他每个选项都包含在扩展工作的每个域中（store.steampowered.com、steamcommunity.com 和 steamdb.info），并且永远不会离开这些域。它也是开源的（<https://github.com/SteamDatabase/BrowserExtension>），因此可以审查其代码以确保本通知的准确性。

[在store.steampowered.com上查看 Steam 的隐私政策。](https://store.steampowered.com/privacy_agreement/)

更新: 2021-07-06
