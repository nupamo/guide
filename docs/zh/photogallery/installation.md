---
title: 安装
description: 将从 BOOTH 下载的 UnityPackage 导入项目的方法
---

# 安装

将从 BOOTH 下载的 `.unitypackage` 文件导入 Unity 项目。

## 导入方法

1. 在 Unity 中打开要使用的 VRChat 世界项目。
2. 在顶部菜单中选择 `Assets > Import Package > Custom Package...`。
3. 选择从 BOOTH 下载的 `.unitypackage` 文件。
4. 在导入窗口中检查包含的文件。
5. 点击 `Import` 按钮。

## 包内容

导入后，默认文件位于 `Assets/nupamo/AutoResize` 文件夹中。

- `PhotoGallery.prefab`：用于布置多张照片的默认画廊预制体
- `PhotoFrame Pro.prefab`：包含边框和玻璃效果的高级相框预制体
- `PhotoFrame Lite.prefab`：仅包含照片和留白的轻量相框预制体
- `Preset Lite.mat`、`Preset Opaque.mat`、`Preset Transparent.mat`：可直接使用的材质预设
- `Source`：包含着色器、网格和默认纹理的文件夹
- `Runtime`、`Editor`：资源运行所需的脚本文件夹

一般用户主要使用 `PhotoGallery.prefab`、`PhotoFrame` 预制体和 `Preset` 材质即可。
