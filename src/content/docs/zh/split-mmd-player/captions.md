---
title: Split MMD Player 字幕与 JIZURA
description: 使用字幕和实验性 JIZURA 功能的方法。
---

# 字幕与 JIZURA

显示 YouTube 字幕或自行准备的字幕文件。即使使用多个摄像机 View，字幕也只在整个画面中显示一次，并会包含在录制结果中。

## 开启字幕

1. 在 Player 的 `Inputs > YouTube URL` 中填入链接，并等待音频准备完成。
2. 在 `Inputs > Captions > Display` 中选择显示方式。

| Display | 显示方式 |
| --- | --- |
| Off | 关闭字幕 |
| Subtitles | 普通字幕，默认选项 |
| JIZURA | 与音乐配合的文字动画，实验性功能 |

`Subtitle Language` 仅显示该视频可用的字幕语言。默认选项 `Automatic (Original)` 会按原始语言 → Editor 语言 → 英语的顺序尝试。如果没有您选择的语言，请指定字幕文件。

## 字幕文件 {#subtitle-files}

在 `Subtitle File (Optional)` 中指定包含 SRT、VTT 或字幕 JSON 的 `TextAsset`。将 SRT/VTT 保存为 `.txt` 后，即可导入 Unity。字幕文件也可保存在[歌曲预设](./presets#song-presets)中。

文件优先于 YouTube 字幕。留空时获取 YouTube 字幕。也可与本地音频一起使用。

## JIZURA — 实验性功能

基于 [852wa 的 JIZURA](https://github.com/852wa/JIZURA)，自动生成字幕布局和动画。Split MMD Player 的 JIZURA 集成是**实验性功能**。

- 将 `Display` 设置为 `JIZURA`。可通过 `New JIZURA` 更换布局与动画组合。
- 需要 **Windows 64 位 Unity Editor 和 Microsoft WebView2 Runtime**。如果未安装，可通过 `Install WebView2 Runtime` 安装。
- 准备期间显示普通字幕。JIZURA 可在 Editor 和 Recorder 中使用。

## 同步与故障排除

字幕跟随音频时间。`Motion Time Offset` 不影响字幕时间。

如果没有字幕，请指定文件。下载出错时，先检查 `Setting`，再通过 `Retry Captions` 重试。录制 JIZURA 时，请等待准备完成后再开始。请参阅[录制指南](./recorder)。
