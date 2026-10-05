---
title: Split MMD Player 选项
description: Split MMD Player 的功能说明。
---

# 选项

本页介绍 Split MMD Player 的各项功能。

## Create Scene

### Presets

窗口顶部有 `Song Preset` 和 `Stage Preset` 按钮。**点击按钮即会应用预设**。各区域的 `Edit` 按钮可打开相应的预设编辑窗口。

- `Song Preset`：应用[歌曲预设](./presets#song-presets)中的音频、字幕文件、摄像机 VMD、舞者动作和重定向设置。
- `Stage Preset`：应用[舞台预设](./presets#stage-presets)中的 Stage Scene 和后处理配置。默认的 Day / Night / Summer 也可以编辑。

### Inputs

- `Scene Name`：要生成的场景名称。如果已有同名场景，会在确认后覆盖。
- `Camera VMD`：MMD 摄像机 VMD 文件。
- `Audio Clip` / `YouTube URL`：本地音频或 YouTube 视频链接。有链接时优先使用 YouTube 音频。
- `Subtitle File (Optional)`：自行准备的字幕 Text Asset。指定后，使用该文件代替 YouTube 字幕。
- `Stage Scene`：要导入生成场景中的 Unity 场景。
- `Post Process Profile`：要使用的后处理配置。
- `Motion Time Offset`：相对于音频的动作时间偏移。位于 Inputs 最后，不影响字幕时间。

### PMX Props

- 导入 MMD 道具。

### Dancers

为每个舞者指定以下槽位。可不使用预设直接填写，也可应用预设后修改。

- `Source Avatar`：要使用的虚拟形象。舞者名称使用原始虚拟形象的名称。
- `Motion Animation`：Unity `AnimationClip` 动作。指定后优先于 Motion VMD。
- `Motion VMD`：MMD 动作文件。
- `Lip VMD`：单独的口型同步文件。留空时，使用 Motion VMD 中的口型同步。

通过 `Add Dancer` 和 `Remove Last Dancer` 调整槽位数量。

### VMD Retargeting

在舞者输入区域下方调整 `Enable Foot IK`、`Copy Foot IK Rotation`、`Motion Scale` 和 `Camera Scale`。这些设置也可保存到歌曲预设中。

---

## Setting

在 `Tools > nupamo > Split MMD Player > Setting` 中，可在同一窗口设置 FFmpeg 和 yt-dlp。无需为每个 Player 单独填写；YouTube 音频、字幕获取和 Recorder 共用这些设置。

- `Executable Path`：手动指定的可执行文件路径。可通过 `Browse` 选择。
- `Detected Path`：当前可用的可执行文件路径。
- `Use Automatic Detection`（FFmpeg）/ `Use Automatic Download`（yt-dlp）：清空手动指定的路径，使用自动准备功能。

在 Windows 上，路径为空时按以下顺序准备。

| 工具 | 准备顺序 |
| --- | --- |
| FFmpeg | PATH → 项目中保存的工具 → 如未找到则自动下载 |
| yt-dlp | 项目缓存 → 如未找到则自动下载官方版本 |

手动指定路径后，会优先使用该文件。在 macOS/Linux 上，请安装工具或指定路径。如果 YouTube 下载提示需要 JavaScript Runtime，请安装 Node.js，并确保可通过 PATH 找到。

## Component

- `Mode`：选择 3D 模式时启用 SBS 模式。强制使用两个摄像机视图，分别模拟左眼和右眼。
  - `SBS`：选择 `Half` 或 `Full`。
  - `3D Strength`：双眼间距的强度。
  - `Letterbox`：设置让角色看起来突出画面的遮幅大小。
- `Remember Parameter Changes`：保留播放时修改的选项，供下次播放使用。
- `Show Runtime UI`：在播放画面中显示播放控制和摄像机设置 UI。

### Inputs

- `Audio Clip`：与动作一起播放的本地音频。
- `YouTube URL`：通过视频链接获取音频。有链接时优先于 Audio Clip。
- `Post Process Profile`：后处理配置。
- `Camera VMD`：MMD 摄像机 VMD 文件。

### Captions

显示在 Dancers 上方的字幕设置。

- `Display`：选择 Off / Subtitles / JIZURA。
- `Subtitle Language`：选择该 YouTube 视频可用的字幕语言。
- `Subtitle File (Optional)`：使用自行准备的字幕 Text Asset 代替 YouTube 字幕。
- `New JIZURA`：生成另一种 JIZURA 布局与动画组合。

使用方法和所需环境请参阅[字幕与 JIZURA](./captions)。

### Dancers / Views

- `Dancers`：播放时使用的 Dancer 列表。
  - 舞者名称使用原始虚拟形象的名称。
  - `Shared Dancer`：选择此 Player 使用的舞者。
  - `Motion Animation`：Dancer 的 Unity AnimationClip 动作。
  - `Motion VMD`：Dancer 的动作 VMD 文件。
  - `Lip VMD`：Dancer 的口型同步 VMD 文件。未指定时使用 Motion VMD。
  - `Position Offset`：Player 激活时应用的位置。
  - `Rotation Offset`：Player 激活时应用的旋转。
  - `Scale`：Player 激活时应用的大小。
- `Views`：三个分屏视图的设置。
  - `Active`：是否使用该 View。
  - `Type`：View 的摄像机类型。
  - `Target Character`：Follow/Orthographic View 面向的 Dancer。

### Playback

- `Play On Start`：进入 Play Mode 时是否自动播放。
- `Loop`：是否循环播放。
- `Start Time`：播放开始时间。晚于 End Time 时，动作保持静止。
- `End Time`：播放结束时间。设为 `-1` 时禁用此限制。
- `Motion Time Offset`：相对于音频的动作时间偏移。正值使用更晚的动作帧，负值使用更早的动作帧。首次播放和跳转时应用相同的偏移，不改变字幕时间。

### VMD Retargeting

- `Enable Foot IK`：是否应用脚部 IK。
- `Copy Foot IK Rotation`：是否复制脚部 IK 旋转。
- `Motion Scale`：动作位移的缩放系数。
- `Camera Scale`：摄像机位移的缩放系数。

### Runtime Cameras

- `Field Of View`：Follow 摄像机的视野角度。
- `Position Smooth Time`：Follow 摄像机的位置平滑时间。
- `Front Distance`：Front View 的距离。
- `Front Height Offset`：Front View 的高度偏移。
- `Front Angle`：Front View 的角度偏移。
- `Back Distance`：Back View 的距离。
- `Back Height Offset`：Back View 的高度偏移。
- `Back Angle`：Back View 的角度偏移。

### Orthographic Preset

- `Height Offset`：正交 View 的高度偏移。
- `Angle`：正交 View 的角度偏移。
- `Size`：正交摄像机的大小。
