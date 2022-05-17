# <img  src="../../Photo/Brands/SingleFile.png" height="30" width="30"> [SingleFile](https://github.com/gildas-lormeau/SingleFile) [![GitHub](https://img.shields.io/badge/-GitHub-24292f?style=plastic&logo=GitHub&logoColor=ffffff)](https://github.com/gildas-lormeau/SingleFile)

## 安装

[![Edge 外接程序](../../Photo/Badge/edge.png)](https://microsoftedge.microsoft.com/addons/detail/efnbkdcfmcmnhlkaijjjmhjjgladedno)
[![Chrome 网上应用店](../../Photo/Badge/chrome.png)](https://chrome.google.com/extensions/detail/mpiodijhokgodhhofbcjdecpffjipkle)
[![Firefox 附加组件](../../Photo/Badge/firefox.png)](https://addons.mozilla.org/firefox/addon/single-file)

## 官方介绍

SingleFile 是一个 Web 扩展（和CLI工具），与 Chrome，Firefox（桌面和移动），Microsoft Edge，Vivaldi，Brave，Waterfox，Yandex 浏览器和 Opera 兼容。它可以帮助您将完整的网页保存到单个 HTML 文件中。

### 开始

- 等到页面完全加载完毕。
- 点击扩展工具条上的SingleFile按钮，保存页面。
- 在处理一个页面时，你可以再次点击该按钮来取消该动作。

### 附加说明

- 通过右击扩展工具条或网页上的 SingleFile 按钮来打开上下文菜单。
  工具栏或网页上的单文件按钮来打开上下文菜单。它允许你保存。
  - 当前标签。
  - 选定的内容。
  - 选定的框架。
- 你也可以在一次点击中处理多个标签并保存。
  - 选定的标签。
  - 未钉住的标签。
  - 所有的标签。
- 在上下文菜单中选择 "注释并保存页面...... "来。
  - 突出显示文本。
  - 添加注释。
  - 删除内容。
- 上下文菜单还允许你激活自动保存。
  - 当前标签。
  - 未钉住的标签。
  - 所有的标签。
- 在自动保存激活的情况下，页面每次被加载后都会自动保存（如果没有被加载，则在卸载前）。
  激活自动保存后，每次加载后都会自动保存（如果不加载，则在卸载前保存）。
- 在SingleFile按钮上点击右键，选择 "管理扩展"（Firefox）/"选项"（Chrome）来打开。
  "选项" (Chrome) 来打开选项页面。
- 启用选项 "目的地>保存到Google Drive "或 "目的地>上传到GitHub "以上传页面。
  上传至GitHub"，以分别将网页上传到Google Drive或GitHub。
- 启用选项 "Misc. >添加存在证明"，以证明保存的页面的存在。
  通过将页面的SHA256链接到区块链中来证明保存的页面存在。
- 你可以使用可定制的快捷键Ctrl+Shift+Y来保存当前标签或
  选择的标签。进入about:addons并选择 "管理扩展快捷键"
  在齿轮菜单中改变它，在Firefox中。转到
  chrome://extensions/shortcuts来改变它。
- 默认的保存文件夹是你的浏览器中配置的下载文件夹，参考以下内容。
  火狐浏览器中的about:addons，铬浏览器中的chrome://settings。
- 关于选项和技术说明的更多详细信息，请参阅选项页面中的扩展帮助。
  选项和技术说明。

### 常见问题

#### SingleFile是否上传任何数据到第三方服务器?

正如[隐私政策](https://github.com/gildas-lormeau/SingleFile/blob/master/privacy.md)中所述，SingleFile不会向第三方服务器上传任何数据。所有的工作都在您的浏览器中完成。然而, 当你用SingleFile保存一个页面时, 它可以下载未显示或未被缓存但存在于页面中的资源(图像, CSS, 框架内容, 字体等)。

#### 为什么我不能保存一些页面，比如 <https://addons.mozilla.org/addon/single-file>?

出于安全考虑，浏览器会阻止某些域的网络扩展。这可以防止恶意的扩展来删除或改变坏的评论，例如。

#### 为什么交互式元素如折叠式标题、动态地图或旋转木马在保存的页面中不能正常工作？

这些元素需要JavaScript才能正常工作。默认情况下，SingleFile会删除脚本，因为它们会改变渲染，而且不能保证它们在离线时也能工作。然而，你可以通过取消勾选 "网络 > 被阻止的资源 > 脚本 "选项，取消勾选 "HTML 内容 > 删除隐藏元素"，并选择勾选 "HTML 内容 > 保存原始页面 "选项来保存它们。

#### 为什么不显示信息栏/为什么我不能从Chrome的文件系统中保存页面？

默认情况下，Chrome浏览器的扩展程序不允许访问存储在文件系统中的页面。因此，您必须在扩展页面中启用 "允许访问文件URLs "选项，才能在查看已保存的页面时显示信息栏，或保存存储在文件系统中的页面。

#### SingleFile所要求的权限是什么?

SingleFile 所要求的权限是在 [manifest.json](https://github.com/gildas-lormeau/SingleFile/blob/master/manifest.json) 文件中定义的. 下面是它们必须存在的原因.

- `identity`: 允许 SingleFile 连接到您的 Google Drive 账户。
- `storage`: 允许 SingleFile 存储你的设置。
- `menus/contextMenus`: 允许SingleFile在网页的上下文菜单中显示一个条目。
- `tabs` (all_urls): 允许SingleFile在任何标签中注入处理页面所需的代码. 例如, 在一次点击中保存几个标签时需要这个权限.
- `downloads`: 允许SingleFile保存页面, 就像从网上下载一样.
- `clipboardWrite`: 允许SingleFile将页面的内容复制到剪贴板, 而不是保存它.
- 'nativeMessaging': 允许你使用 [SingleFile companion](https://github.com/gildas-lormeau/SingleFile/tree/master/companion) 来保存页面。

#### SingleFile 在我的电脑/平板电脑/手机上运行得很慢, 它能运行得更快吗?

SingleFile 的默认配置被优化以产生小的页面。这有时会大大降低保存过程的速度。以下是你可以禁用的选项以节省时间和CPU。

- HTML内容 > 删除隐藏的元素
- 样式表 > 删除未使用的样式

你也可以禁用下面的选项。不过页面上的一些资源（如图片、框架）可能会丢失。

- HTML内容 > 删除框架
- 图像 > 保存延迟的图像

#### 为什么用SingleFile保存的页面比未压缩的MAFF文件更大？

为了将它们整合到HTML文件中，所有的二进制资源如图像或字体都被转化为[数据URI](https://en.wikipedia.org/wiki/Data_URI_scheme)。这些URI允许二进制内容以[base64](https://en.wikipedia.org/wiki/Base64)进行编码，并作为文本存储在HTML文件中。当用base64编码时，二进制资源的重量将增加约33%。这种超载也会对保存的页面的大小产生影响。

你可以考虑使用[SingleFileZ](https://github.com/gildas-lormeau/SingleFileZ)，它能够将保存的页面及其资产压缩成一个自解压的HTML/ZIP混合文件。

### 已知的问题

- 所有的浏览器。
  - 出于安全考虑，你不能保存在以下网站上的网页 <https://chrome.google.com>, <https://addons.mozilla.org> 和其他一些 Mozilla 域上的页面。当这种情况发生时，🛇会显示在SingleFile图标的上方。
  - 因为[安全原因](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_enabled_image),SingleFile 有时无法保存[画布](https://developer.mozilla.org/docs/Web/HTML/Element/canvas)的图像表示形式和[视频](https://developer.mozilla.org/docs/Web/HTML/Element/video)元素的快照.
  - 默认情况下，无法记住上次保存的路径。要规避此限制，请禁用“杂项>在后台保存页面”选项。
  - 以下字符在文件名中被替换为`_`：`~` `+` `\` `?` `%` `*` `:` `|` `"` `<` `>`
- 基于 Chromium 的浏览器。
  - 您必须在扩展页面中启用“允许访问文件 URL”选项，以便在查看已保存的页面时显示信息栏，并保存或注释存储在文件系统上的页面。
  - 如果已保存页面的文件名类似于“56833935-156b-4d8c-a00f-19599c6513d3.html”，请禁用“杂项>在后台保存页面”选项。重新安装浏览器也可以解决此问题。您可以[在此处](https://bugs.chromium.org/p/chromium/issues/detail?id=892133)找到有关此错误的更多信息。
  - 禁用该选项 “文件名>打开“另存为”对话框以确认文件名” 当且仅当 chrome://settings/downloads 中禁用了 “下载前询问每个文件的保存位置” 。
- 火狐浏览器。
  - 如果设置为 "提示输入名称"，则"文件名>文件名冲突解决"选项将不起作用。
  - 有时，因为[这个错误](https://bugzilla.mozilla.org/show_bug.cgi?id=1411641)，SingleFile 无法保存沙盒 iframe 的内容
  - 当处理来自文件系统的页面时，外部资源（例如图像，样式表，字体等）将不会嵌入到保存的页面中。您可以在[这里](https://bugzilla.mozilla.org/show_bug.cgi?id=1644488)找到有关此错误的更多信息。这个错误已经已经被Mozilla作为 "WontFix "关闭。但是[这里](https://github.com/gildas-lormeau/SingleFile/issues/7#issuecomment-618980153)。有一个简单的解决方法。
- 水狐经典
  - 页面中显示的用户界面元素（进度条、日志面板），除非在`about:config`中启用`dom.webcomponents.enabled`，否则将不会显示。`about:config`中启用。
  - 打开启用“图像>将重复图像分组”选项保存的页面时，某些重复图像可能不会显示。建议禁用此选项。

### 文件格式比较

| | HTML (SingleFile)  | HTML (SingleFileZ) | MAFF  | MHTML | Webarchive (Safari) | HTML+文件夹 |
| --- | :---: | :---: | :---: | :---: | :---: | :---: |
| 页面另存为单个文件 | ✓ | ✓ | ✓ | ✓ | ✓ | |
| HTML 和样式被缩小 | ✓ | ✓ | | | | |
| 未使用的 HTML 和样式将从文件中删除 | ✓ | ✓ | | | | |
| 二进制资源未以 64 为基数编码 | | ✓ | ✓ | | ✓ | ✓ |
| 文件已压缩 | | ✓ | ✓ | | | |
| 无需安装任何扩展即可查看文件 | ✓ | ✓¹ | | ✓² | ✓³ | ✓ |
| 可以在不运行 JavaScript 的情况下查看文件 | ✓ | | ✓ | ✓ | ✓ | ✓ |
| 可以解压缩文件以提取资源和查看页面 | | ✓ | ✓ | | | n/a |
| 文件包含可以编制索引的页面文本（纯文本或格式化文本） | ✓ | ✓⁴ | | ✓ | ✓ | ✓ |

脚注：

¹ 在基于 Chromium 的浏览器中，必须从命令行传递开关，并且必须在 Safari 中启用某个选项。

² 仅在基于 Chromium 的浏览器和 Internet Explorer 中。

³ 仅在 Safari 中。

⁴ 必须在扩展中启用某个选项。
