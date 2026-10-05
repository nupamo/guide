---
title: Split MMD Player
description: Split MMD Player 是面向 VRChat 用户的 Unity MMD 播放工具。
---

# Split MMD Player

Split MMD Player 是面向 VRChat 用户的 Unity MMD 播放工具。
可在同一画面中显示三个摄像机视图，也可用于测试制作中的虚拟形象。
它在 Unity Editor 中本地播放，无需上传到 VRChat 世界即可查看效果。

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <iframe width="662" height="372" src="https://www.youtube.com/embed/LiA346I-l3M" title="Split MMD Player 演示" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"></iframe>
</div>

## Free 版本

Free 版本会生成一个场景，移除可能在 Unity 播放时引发问题的 VRChat 组件。
支持 VMD、PMX 文件，但不包含额外的 Unity 功能。

## Studio 版本

**Studio v1.6.0** 支持 YouTube 音频、[预设](./presets)和[字幕](./captions)。JIZURA 是实验性功能。

Studio 版本在基础播放功能之上进行了扩展，目的是保留并使用 VRChat 虚拟形象中已配置的选项。  
通过 Gesture Manager，可以直接使用基于 Modular Avatar 的服装切换、SPS、Light limit 等功能，前提是已提前配置好。

此外，Studio 不仅支持 VMD 动作，还支持 Unity `AnimationClip` 动作。
可在 Play Mode 中更换动作或调整参数，更改后的参数在退出 Play Mode 后也会保留。
创建多个 Player 组件后，可在 Play Mode 中切换歌曲，并共享 Dancer 和 Audio 组件。还可通过 Dancer Transform Offset 调整各个舞者的位置和旋转。
Builder 的舞台设置基于场景运行，可通过 Day/Night/Summer Preset 快速选择基本氛围。

已在以下三种环境中测试。不保证在更旧的环境中运行。如出现故障，请将相关包更新至最新版本。

- 最近测试环境（2026-07-05）：Unity `2022.3.22f1` / VRChat SDK `3.10.4` / Gesture Manager `3.9.8` / VRCFury `1.1348.0` / Modular Avatar `1.17.1` / NDMF `1.17.1` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.22f1` / VRChat SDK `3.10.0` / Gesture Manager `3.9.6` / VRCFury `1.1272.0` / Modular Avatar `1.14.3` / NDMF `1.9.4` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.6f1` / VRChat SDK `3.10.1` / Gesture Manager `3.9.7` / VRCFury `1.1279.0` / Modular Avatar `1.12.5` / NDMF `1.7.10` / wholesome SPS Configurator `2.0.11`

## Split MMD Recorder

支持 Normal、SBS 和 VR180 录制。使用此功能，可按稳定的帧步进录制高于显示器分辨率的画面。  
支持 PNG 序列和通过 FFmpeg 编码为 MP4。在 Windows 上会自动准备所需的 FFmpeg。详细步骤请参阅[录制指南](./recorder)。

## Editor 菜单

`Tools > nupamo > Split MMD Player` 中包含以下菜单。

| 菜单 | 用途 |
| --- | --- |
| Create Scene | 使用预设、虚拟形象和舞台生成预览场景 |
| Song Presets | 添加、编辑和应用[歌曲预设](./presets#song-presets) |
| Stage Presets | 添加和编辑[舞台预设](./presets#stage-presets) |
| Recorder | [录制 PNG 序列和 MP4](./recorder) |
| Setting | 在同一设置窗口中管理 FFmpeg 和 yt-dlp |
| Language | 将 Editor UI 切换为 English / 日本語 / 한국어 / 中文 |

## 快速开始

本文中的字段和按钮名称以英文 UI 为准。

1. 将要预览的 Humanoid 虚拟形象放入当前场景并选中。
2. 打开 `Tools > nupamo > Split MMD Player > Create Scene`。
3. 点击顶部的歌曲或舞台[预设](./presets)按钮，或手动指定音频、动作和舞台。
4. 检查 `Scene Name` 和各个 Dancer 的 `Source Avatar`。动作槽位可以手动修改。
5. 退出 Play Mode，点击 `Create Preview Scene`，然后在生成的场景中进入 Play Mode。
6. 使用 YouTube 音频时，等待准备完成。字幕在 Player 的 `Inputs > Captions` 中选择。

`Motion Time Offset` 位于 Create Scene 的 Inputs 最后。

在 Game 窗口中取消勾选 `Low Resolution Aspect Ratios`，可查看更清晰的预览。下图展示旧版本的菜单位置和 Game 窗口分辨率设置示例。

![Game 窗口分辨率设置示例](/split.png)

默认示例仅包含 CC0 许可的样例。请将额外的动作、摄像机和舞台文件放入项目的 `Assets` 下，然后指定这些文件。

## 点击 Create Preview Scene 后

根据 `Scene Name`，在 `Assets/nupamo/Split MMD Player/<Scene Name>.unity` 中生成预览场景，并自动打开。默认名称为 `Split MMD Player`。

生成过程中会执行以下操作。

- 将所选虚拟形象复制到预览场景中。
- 使用 NDMF 处理一次副本，将其烘焙为预览所需的形式。
- 从副本中移除影响预览的构建组件，例如用于 VRChat 上传的组件、Modular Avatar/NDMF、VRCFury 和 Marshmallow PB。
- 将加载的场景和烘焙后的资源生成到 `GeneratedAssets` 下。

原始场景中的虚拟形象不会被修改。如果已有预览场景，会在确认后覆盖；该场景生成的资源在 `GeneratedAssets/<Scene Name>` 中管理。
