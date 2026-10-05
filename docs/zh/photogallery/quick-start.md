---
title: 创建第一个画廊
description: 在场景中快速布置照片画廊的方法
---

# 创建第一个画廊

![画廊设置示例](/photogallery.png)

本页介绍快速创建照片画廊的方法。

## 1. 放置 PhotoGallery 预制体

在 Project 窗口中找到 `Assets/nupamo/AutoResize/PhotoGallery.prefab`。

将该预制体拖到 Scene 或 Hierarchy 窗口中。

## 2. 添加照片

选择已放置的 `PhotoGallery` 对象。

将要显示的照片纹理放入 Inspector 的 `Photos` 列表中。横向和纵向照片可以混合使用。

添加照片后，画廊会自动创建子对象，并将各张照片应用到相框中。

## 3. 检查相框预制体和材质

默认的 `PhotoGallery.prefab` 已设置好 `Photo Frame Prefab` 和 `Shared Frame Material`。

如果为空，请按以下方式设置。

- `Photo Frame Prefab`：`Assets/nupamo/AutoResize/PhotoFrame Pro.prefab`
- `Shared Frame Material`：`Preset Opaque.mat` 或您自己创建的相框材质

## 4. 调整布局

在 Inspector 中调整以下值。

- `Row Count`：设置每行排列的照片数量。
- `Layout Direction`：设置优先横向填充还是纵向填充。
- `Expand Direction`：增加照片时，设置以当前位置为基准居中扩展、向右扩展或向左扩展。
- `Gap`：调整相框之间的间距。
- `Slot Size`：调整每个照片槽位的基本布局尺寸。

## 5. 批量添加照片

在 Project 窗口中选择多张照片纹理，然后在 `PhotoGallery` 的 Inspector 中点击 `Capture Selected Textures`。

接着点击 `Add Captured Textures`，即可将所选照片一次性添加到 `Photos` 列表中。

顶部菜单中的 `Tools > nupamo > Capture Selected Textures` 也提供相同功能。

## 6. 吸附到墙面

要吸附到的墙面对象必须有 Collider。

将 `PhotoGallery` 朝向墙面放置，然后点击 `Snap Children To Wall`，各个相框便会按墙面 Collider 的表面排列。

详细设置请参阅[调整画廊布局](./photo-gallery.md)。
