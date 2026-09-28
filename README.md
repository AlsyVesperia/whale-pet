# 小鲸鱼桌宠

> 一只会说话、懂农历、能穿透桌面的智能小鲸鱼，陪你摸鱼、刷课、发呆。

---

## 功能亮点

- **AI 智能对话**（单击说话，接入 DeepSeek API，无 Key 时自动降级本地句子）
- **农历 + 节日感知**（能说“端午安康”“中秋快乐”，且一天只祝福一次）
- **透明窗口 + 鼠标穿透**（只有鲸鱼和 UI 可点，透明区域直接穿透到桌面）
- **自由走动**（随机散步，碰壁说话，走到屏幕边缘会喊“要掉下去啦！”）
- **聊天面板**（双击打开，支持多轮对话，5分钟上下文记忆）
- **形态切换**（右键可在人形 / 鲸鱼形态间切换）
- **倒计时提醒**（自定义秒数和内容，到点弹出通知）
- **始终置顶**（浮在所有窗口之上，陪你刷网课、写代码）

---

## 技术栈

- **前端**：HTML + CSS + JavaScript
- **桌面容器**：Electron
- **AI 接口**：DeepSeek API（v4-flash）
- **农历转换**：lunar-javascript（本地离线）
- **打包工具**：electron-packager

---

## 如何使用

### 方法一：直接下载 .app（Mac 用户）
1. 从 [Releases 页面](https://github.com/AlsyVesperia/whale-pet/releases) 下载最新版 `小鲸鱼.app.zip`
2. 解压，双击运行
3. 第一次打开如果提示“无法验证开发者”，请**右键点击 → 打开**

### 方法二：从源码运行（适合想自己改代码）
```bash
git clone https://github.com/AlsyVesperia/whale-pet.git
cd whale-pet
npm install
npm start
```

### 如何获取 DeepSeek API Key
1. 访问 [DeepSeek 官网](https://platform.deepseek.com/) 注册并获取 API Key
2. 在桌宠右下角设置面板中填入 Key，点击“保存”即可
3. 如果不填 Key，小鲸鱼会自动使用本地句子库，依然会说话

---

## 自定义小技巧

- **换图片**：替换 `images/` 文件夹里的图片（保持相同文件名）
- **改对话风格**：修改 `index.html` 中的 `systemPrompt` 变量
- **改本地句子**：修改 `localPhrases` 数组
- **调走动速度**：修改 `startRandomWalk` 中的 `step` 和 `moveInterval` 时间

---

## 特别致谢

- 本桌宠基于 **西瓜皮老师** 的 Windows 版桌宠创意，已获授权移植至 Mac 平台。
- 感谢太太的素材与灵感，让这只小鲸鱼游到了更多人的桌面上。
- 感谢DeepSeek D老师，帮我把我的想法一点点变成了真的桌宠。
---

## 许可证

本项目仅作学习交流使用，素材版权归原作者所有。

---

## 🐟 最后

如果你喜欢这只小鲸鱼，欢迎给它一个 ⭐ Star，让它游得更远～

*几行短短的 prompt，就是小鲸鱼的整个世界。*
