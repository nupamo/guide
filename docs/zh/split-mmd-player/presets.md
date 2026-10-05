---
title: Split MMD Player 预设
description: 保存和应用歌曲与舞台预设的方法。
---

# 预设

歌曲和舞台可分别保存，再组合使用。也可以不使用预设，直接在 Create Scene 中填写。

## 歌曲预设 {#song-presets}

1. 打开 `Tools > nupamo > Split MMD Player > Song Presets`。
2. 点击 `Add Song` 添加，并填写 `Name`。
3. 指定音频、摄像机 VMD，以及各个舞者的动作和口型同步。需要时，也可设置字幕文件、`Motion Time Offset` 和 `VMD Retargeting`。

`YouTube URL` 优先于 `Audio Clip`，`Motion Animation` 优先于 `Motion VMD`。`Lip VMD` 留空时，使用动作 VMD 中的口型同步。

字幕以 Text Asset 形式保存在 `Subtitle File (Optional)` 中。应用没有字幕文件的预设时，也会清空之前指定的文件。Player 的字幕显示和语言设置会保留。请参阅[字幕文件说明](./captions#subtitle-files)。

如果现有舞者数量更多，会重复使用动作。例如：`A / B` → `A / B / A`。新增槽位后，请连接虚拟形象。

## 舞台预设 {#stage-presets}

1. 打开 `Tools > nupamo > Split MMD Player > Stage Presets`。
2. 编辑 Day / Night / Summer，或通过 `Add Stage` 添加。
3. 指定 `Name`、`Stage Scene` 和 `Post Process Profile`。

歌曲、动作和虚拟形象设置会保留。预设中的空槽位会在应用时清空对应的输入。

## 应用预设

- **新场景：**点击 Create Scene 顶部的歌曲或舞台按钮，即会应用预设。应用后仍可手动修改。
- **现有 Player：**退出 Play Mode，选中 Player，然后在 Song Presets 中点击 `Apply to Selected Player`。虚拟形象连接及位置、旋转和大小会保留。

Create Scene 中的 `Edit` 按钮可打开各个编辑窗口。两类预设都可通过 `Duplicate` 复制、通过 `Remove` 删除。

## 保存位置

预设保存在 `Assets/nupamo/Split MMD Player/Editor/` 中的 `SongPresets.asset` 和 `StagePresets.asset`。请与关联的文件一起保存。
