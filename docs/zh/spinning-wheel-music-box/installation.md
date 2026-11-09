---
title: 安装到世界
description: 将纺车八音盒放进 VRChat 世界并进行设置
---

# 安装到世界

## 准备

- 用 VRChat Creator Companion 创建的 Worlds 项目
- 已在 Unity `2022.3.22f1`、VRChat SDK Worlds `3.10.3` 中测试。
- TextMesh Pro（Unity 自带包）

## 1. 导入资源包

将 `SpinningWheelMusicBox.unitypackage` 导入项目。

所需的 MML 解析器和识音着色器（MML Transcriber）都已包含在内，不需要另外安装。

## 2. 放置预制体

将 `Assets/nupamo/Spinning Wheel Music Box/Spinning Wheel Music Box.prefab` 拖进 Scene，放在桌子上。

- 摇柄一侧是预制体的 **-Z** 方向。请朝向玩家站立的一侧。
- 箱子宽约 0.5 m，操作画面浮在箱子上方约 0.4 m 处。
- 靠近到约 2.2 m 以内时出现操作画面，远离超过 2.8 m 时消失。

## 3. 检查反射

如果金属部件看起来很暗，请在附近放置 Reflection Probe 并进行 Bake。

## 预览

打开 `Assets/nupamo/Spinning Wheel Music Box/Demo/Spinning Wheel Music Box Demo.unity`，按下 Play（ClientSim）即可确认。

Unity Editor 中的 ClientSim 无法直接打开 YouTube 地址。Play 期间在 YouTube 链接栏粘贴地址后，编辑器专用脚本会用本地的 yt-dlp 把它转换成可播放的地址。等栏里的文字变化后再点击 `● 录制`。上传后的世界由 VRChat 自行处理地址，不需要这个步骤。

## 设置

选中预制体根节点上的八音盒组件，Inspector 中会显示两项。

### Start mode

实例第一次打开时的播放方式。

- `Manual`（默认）：要转动摇柄才会发声。
- `Auto`：自动循环播放第一首曲子。

### Songs

列表中始终存在的自带曲子。每首填写标题和洛奇 MML（最多 6000 字符）。

- 用 `+ Add song` 添加，`▲` 上移，`✕` 删除。
- 默认包含 3 首公有领域曲目（萨蒂《裸体歌舞第一号》、萨蒂《我要你》、德彪西《月光》）。
- 公开世界中请只放入你有权使用的曲子。

其他数值可以展开最下方的 `Internal` 查看，但通常不需要修改。

## 在同一个世界放多个

可以放多个八音盒。大家保存的曲目列表由同一世界中的所有八音盒共用。
