---
title: Split MMD Recorder
description: 在 Studio v1.6.0 中录制 PNG 序列和 MP4 的方法。
---

# 录制

通过 `Tools > nupamo > Split MMD Player > Recorder` 打开。可录制高于显示器分辨率的 PNG 序列，并在 FFmpeg 可用时编码为 MP4。

## 录制步骤

1. 在 `Player` 中指定要录制的 Player。
2. 在 Player 组件中设置 `Start Time` 和 `End Time`。`End Time` 为 `-1` 时，录制至音频结束。
3. 使用 YouTube 音频时，请等待音频准备完成。如果选择了 JIZURA，也请等待 JIZURA 准备完成。
4. 设置 `Output Mode`、输出文件夹、分辨率和 `FPS`。
5. 点击录制按钮。完成必要的准备和预热后开始捕获画面。

录制过程中会显示进度和预计剩余时间。可通过 `Cancel` 中止。录制耗时取决于歌曲长度、分辨率、FPS，以及虚拟形象和效果设置。

## 设置

| 选项 | 说明 |
| --- | --- |
| Player | 要录制的 Player |
| Output Mode | Normal、SBS、VR180 |
| Output | PNG 序列和视频的输出文件夹 |
| Width / Height | Normal 和 SBS 的输出分辨率 |
| Resolution / Quality | VR180 的分辨率和质量预设 |
| Output Size | 由 VR180 预设确定的分辨率，只读 |
| FPS | 每秒录制的帧数 |
| Start Time / End Time | 在 Player 中设置的时间区间，在 Recorder 中只读 |
| FFmpeg / Setting | 显示检测到的可执行文件，并打开共用工具设置 |

`Normal` 使用 Player 的 `2D` 模式录制，`VR180` 使用 `3D` 模式录制。SBS 将双眼画面左右排列。

## FFmpeg 与 MP4

FFmpeg 路径在 `Split MMD Player > Setting` 中管理。YouTube 音频转换和 Recorder 使用相同的设置。

在 Windows 上，路径为空时，会检查 PATH 和项目中保存的工具；未找到时会在录制前自动下载。下载完成后，继续进行 PNG 捕获和 MP4 编码。

在 macOS/Linux 上，请安装 FFmpeg 或指定可执行文件路径。如果 FFmpeg 不可用，则仅保存 PNG 序列。即使编码失败，PNG 序列仍会保留。

## 音频与字幕

通过 YouTube 准备的音频与本地 `Audio Clip` 一样，可用于录制。开始和结束时间区间及 `Motion Time Offset` 遵循 Player 设置。

普通字幕和 JIZURA 在所有摄像机 View 合成后的画面中只显示一次。录制时，会等待指定时间的 JIZURA 帧准备完成后再捕获。详细说明请参阅[字幕与 JIZURA](./captions)。
