---
title: 设置相框材质
description: 调整 Pro 和 Lite 着色器材质的方法
---

# 设置相框材质

![相框材质设置示例](/shader.png)

相框的外观通过材质调整。建议复制默认预设后使用。

## 复制预设

1. 在 Project 窗口中选择 `Preset Lite.mat`、`Preset Opaque.mat` 或 `Preset Transparent.mat`。
2. 按 `Ctrl + D` 复制。
3. 将复制后的材质改为您想要的名称。
4. 应用材质。
   - 使用 PhotoGallery：将新材质放入 `PhotoGallery` 的 `Shared Frame Material`。
   - 仅使用着色器：将新材质放入 `PhotoFrame Pro` 或 `PhotoFrame Lite` 预制体的 `Material`。

## Lite 与 Pro 的区别

### Lite

- 基于 Unity 默认的 `Cube`，按图片宽高比自动调整大小
- 对齐设置
- 留白设置

### Pro

- 基于 `Custom Mesh`，按图片宽高比自动调整大小，并具有凸起的边框
- 对齐设置
- 留白设置与内阴影
- 边框设置
- 玻璃效果
- 透明设置
