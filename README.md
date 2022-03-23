# 浏览器插件指南

目录

- [浏览器插件指南](#浏览器插件指南)
  - [什么是浏览器插件](#什么是浏览器插件)
  - [如何安装浏览器插件](#如何安装浏览器插件)
  - [浏览器插件推荐](#浏览器插件推荐)
  - [恶意浏览器扩展插件](#恶意浏览器扩展插件)

## 什么是浏览器插件

浏览器插件也被称为浏览器附加组件（Browser-Extensions），是一组可以添加到浏览器中以增强其功能的软件组件。

浏览器插件就是可定制浏览体验的小型软件程序，让用户可以根据个人需要或偏好来定制浏览器。简而言之，插件就是可以让你的浏览器用起来更加方便顺手的工具。

插件之于浏览器就像 app 之于手机，exe 软件之于 windows 一样，有了插件的浏览器可以发挥出更多更好的功能。

## 如何安装浏览器插件

要安装浏览器插件可以去对应浏览器的官方插件市场下载

[![Edge 外接程序 BETA](/Photo/Badge/edge.png)](https://microsoftedge.microsoft.com/)
[![Chrome 网上应用店](/Photo/Badge/chrome.png)](https://chrome.google.com/webstore/)
[![Firefox 附加组件](/Photo/Badge/firefox.png)](https://addons.mozilla.org/zh-CN/firefox/)

也可以去第三方网站直接下载插件安装进浏览器 后缀名分别为`.crx` `.xpi`

<details>
<summary>如何给浏览器安装第三方插件</summary>

Edge 浏览器安装第三方插件比较简单

- 打开扩展程序页面 [edge://extensions](edge://extensions/) [chrome://extensions](chrome://extensions)
- 或是通过点击浏览器右上角退出下面的  **设置与其他** - **扩展**- **管理扩展** 打开

![Settings and others](/Photo/Settings/Settings-and-others-Browser-Extensions.png#gh-light-mode-only)
![Settings and others](/Photo/Settings/Settings-and-others-Browser-Extensions-dark.png#gh-dark-mode-only)
![Settings and others](/Photo/Settings/Settings-and-others-Browser-Extensions2-manage.png#gh-light-mode-only)
![Settings and others](/Photo/Settings/Settings-and-others-Browser-Extensions2-manage-dark.png#gh-dark-mode-only)

- 打开 `开发人员模式` 和 `允许来自其他应用商店的扩展`

![Settings and others](/Photo/Settings/Settings-and-others-Browser-Extensions-Dev.png#gh-light-mode-only)
![Settings and others](/Photo/Settings/Settings-and-others-Browser-Extensions-Dev-dark.png#gh-dark-mode-only)

- 将 .crx 文件**直接拖入扩展页面**即可安装

---

Chrome 安装第三方扩展或者 Edge 的另一种安装方式

>Chrome 21.x 系列增加了对扩展插件安装的限制, 自 Chrome 21.x 开始默认只允许从 Chrome Web Store （Chrome 网上应用店）安装扩展、应用及脚本

- 把下载后的`.crx`扩展名的离线 Chrome 插件的文件扩展名改成`.zip`或者`.rar`。
- 右键点击该文件，并使用压缩软件（如7z、winrar、好压、360压缩等）对该压缩文件进行解压，并保存到系统的一个任意文件夹下。解压成功以后，该 Chrome 插件就会以文件夹的形式存在于操作系统的某一个目录下面。***(注意：文件夹位置变动会导致插件失效)***
- 打开扩展程序页面 [edge://extensions](edge://extensions/) [chrome://extensions](chrome://extensions)
- 打开 `开发者模式`
- 点击 `加载已解压的扩展程序...` 选择刚刚解压的插件文件夹的位置即可

</details>

</details>

## [浏览器插件推荐](Docs/Browser%20Extensions%20recommend.md)

我认为比较有用的插件推荐

## 恶意浏览器扩展插件

上架浏览器的官方插件市场的插件一般会进行安全性检查，并且在安装时显示所需要的权限,并且之后发现恶意行为会自动禁用插件，随意安装第三方插件可能导致你的个人信息被获取，浏览器的官方插件市场也有需要额外权限的不良插件，所以安装浏览器插件对于用户来说，我们能做的，还是在安装新插件前，一定要多阅读评论，谨慎下载安装。

>有些网络黑客精心地设计了浏览器恶意扩展程序，这些扩展插件表面是假装合法的和有用的，以欺骗您安装到电脑系统中，它们的功能有点复杂和隐蔽，他们利用这些恶意插件来赚钱。和其他合法的浏览器插件一样，恶意的浏览器插件也可以访问浏览器所做的一切。一旦安装了恶意插件，它们就可以记录您的浏览活动和您在浏览器上使用的信息，随后，敏感信息将落入网络黑客手中。此外，他们还会在你的浏览器中插入商业广告，当你打开浏览器或者在网上浏览网页时，许多广告窗口会弹出。
>
>此外，浏览器扩展插件不受Web安全模型的约束，网络黑客利用这个特性让恶意插件在用户不知情的情况下从互联网下载恶意软件，这些恶意软件可能会盗取你的用户密码，重要文件，甚至破坏你的电脑系统运行速度和文件，有时候我们发现电脑有时候出现蓝屏，也有由于这些恶意软件造成的。总之，恶意的浏览器扩展对您的计算机造成的损害是相当大的，必须密切注意您使用的浏览器扩展插件，如果你看到任何可疑的东西，尽快把它删除掉，以绝后患。
>
>虽然有些浏览器扩展插件不友好，但我们不能拒绝所有合法插件程序。从合法的网站或者浏览器本身的网上商店下载合法的扩展插件确实给你上网带来了便利和优势，因为可以在浏览器插件的帮助下享受满意的上网浏览体验。同时，要小心谨慎，认清邪恶的插件程序。如果您不确定它是否是一个好的扩展插件，您可以这样问自己，“既然我安装了这个插件，我的浏览器运行速度会变慢吗？广告窗口经常弹出吗？浏览器上是否有以前没有安装的奇怪程序或插件？你的浏览器行为怪异吗？您的浏览器是否将您重定向到未知网站？如果你对自己说：“是”。你必须小心，您的计算机上存在潜在风险。你必须尽快删除它。

[回到目录](#浏览器插件指南)
