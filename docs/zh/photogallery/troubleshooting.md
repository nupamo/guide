---
title: 故障排除
description: 常见问题及解决方法
---

# 故障排除

## 照片看起来变形了

请检查材质的 `Ratio` 设置。如果手动输入了宽高比，请确认数值与照片一致。

使用自动宽高比时，会按照片纹理的宽高比显示。请确认纹理的 `Non-Power of 2` 设置为 `None`。

单独使用相框时，需要手动设置。

## 照片没有显示

请检查以下项目。

- `PhotoGallery` 的 `Photos` 列表中是否已添加照片
- 是否已设置 `Photo Frame Prefab`
- 是否已设置 `Shared Frame Material`
- 照片纹理是否已正常导入 Unity
- Console 中是否存在着色器编译错误

## 修改画廊后，子相框没有更新

请在 `PhotoGallery` 的 Inspector 中点击 `Reset`。

更换预制体或材质后，建议重新生成一次画廊。

## 相框无法吸附到墙面

`Snap Children To Wall` 根据 Collider 工作。

请检查：

- 墙面对象是否有 Collider
- `PhotoGallery` 是否朝向要吸附到的墙面
- 墙面是否距离太远
- 从相框位置朝墙面发出的 Raycast 是否能碰到墙面

如果不确定方向，请稍微前后移动 `PhotoGallery` 对象，或旋转 180 度后再次点击。

## 相框陷入墙内

请调整 `Frame Position` 的 Z 值。

如果希望相框稍微离开墙面，请小幅调整 Z 值，然后再次点击 `Snap Children To Wall`。

## 照片太大，导致世界文件很大

请尝试将 `Build Photo Max Size` 设置为 `1024` 或 `2048`。

照片越多，与保留原始尺寸相比，这越有助于减少构建文件大小和内存占用。

## Console 中出现错误

请先检查错误信息中是否包含 `AutoResize`、`PhotoGallery` 或 `PhotoFrame`。

错误也可能来自其他资源或 SDK。结合完整错误信息、Unity 版本和当前包版本检查，更容易找到原因。
