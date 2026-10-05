---
title: 着色器设置
description: AutoResize PhotoFrame 材质 Inspector 的选项说明
---

# 着色器设置

本文介绍 `AutoResize PhotoFrame Pro` 和 `AutoResize PhotoFrame Lite` 材质中的设置项。

## Surface

仅在 Pro 材质中显示。设置材质的渲染方式。

- `Opaque`：不透明渲染。大多数情况下推荐使用。
- `Transparent`：透明渲染。需要更明显的玻璃或半透明效果时使用。

## Image

照片本身的设置。

### Main Texture

要显示的照片纹理。

使用 `PhotoGallery` 时，各张照片会从 `Photos` 列表自动填入。直接放置单个相框时，也可以在这里添加照片。

### Main Color

与照片颜色相乘的颜色。

默认为白色。需要让照片变暗或轻微染上某种颜色时，可调整此项。

### Image Unlit

设置照片受光照影响的程度。

- `0`：受世界光照影响较大。
- `1`：受光照影响较小，照片自身显得明亮。

如果照片在 VRChat 世界中太暗，请尝试增大此值。

在 Lite 中，相同作用的选项可能显示为 `Image Unlit` 或 `Lit`。

## Frame

仅在 Pro 材质中显示。

取消勾选左侧的复选框，可关闭边框效果。

### Frame Size

相框边框的厚度。

数值越大，照片周围的边框越厚。

### Frame Texture

边框使用的纹理。

可以添加木纹、金属或纸张等纹理图片。

### Frame Normal Map

用于表现边框表面凹凸的法线贴图。

需要增强木纹或立体感时使用。

### Frame Color

边框颜色。

设置了 `Frame Texture` 时，此颜色会与纹理颜色相乘。

### Frame Bump Scale

边框法线贴图的强度。

数值越大，表面的凹凸越明显。

### Frame Bevel

边框边缘的模拟倒角效果强度。

如果相框边缘显得扁平，增大此值可增强立体感。

### Bevel Highlight

边框倒角亮部的强度。

### Bevel Shadow

边框倒角暗部的强度。

### Inner Shadow

照片和留白区域内侧阴影的强度。

让照片看起来略微嵌入相框中。

### Raised Mesh Depth

边框向前凸起的深度。

与默认 `PhotoFrame` 预制体的凸起网格一起使用时，效果更明显。

### Frame Unlit

设置边框受光照影响的程度。

- `0`：受世界光照影响。
- `1`：自身显得明亮。

## Margin

照片周围留白的设置。

Pro 和 Lite 均可使用。

### Margin Size

照片周围留白的大小。

数值越大，照片与边框之间的空间越宽。

### Margin Texture

留白区域使用的纹理。

用于添加纸张纹理或图案。

### Margin Color

留白颜色。

白色可营造常见的相框卡纸效果；降低不透明度，也可以让背景透出来。

### Margin Shadow

留白内侧阴影的强度。

为照片边缘或边框内侧增加深度感。

### Margin Shadow Size

留白阴影的宽度。

数值越大，阴影扩散越宽。

### Margin Unlit

设置留白受光照影响的程度。

## Glass

仅在 Pro 材质中显示。

取消勾选左侧的复选框，可关闭玻璃效果。

### Glass Strength

玻璃效果的整体强度。

数值越高，玻璃色调和反射高光越明显。

### Glass Tint

玻璃颜色。

略微使用蓝色或灰色，可营造照片上覆盖一层薄玻璃的效果。

### Glass Glare

玻璃反射高光的强度。

数值越高，对角线高光和边缘闪光越明显。

### Glass Glare Size

反射高光的宽度。

数值越大，高光扩散越宽。

### Glass Smoothness

玻璃的平滑度。

数值越高，镜面反射看起来越平滑。

## Alignment

设置照片在显示区域中的对齐位置。

照片与相框宽高比不同时，可能产生空余空间。此时会应用对齐选项。

### Vertical align

垂直对齐。

- `Top`：顶部对齐
- `Center`：居中对齐
- `Bottom`：底部对齐

### Horizontal align

水平对齐。

- `Left`：左侧对齐
- `Center`：居中对齐
- `Right`：右侧对齐

## Ratio

设置如何确定照片的宽高比。

### Aspect ratio from texture

自动使用照片纹理的实际宽高比。

大多数情况下建议保持开启。

### Auto Resize Image Only

让 Auto Resize 仅作用于图片区域。

关闭时，与原先一样，整个相框会按照片宽高比自动缩小。

开启时，边框填满整个对象，只有照片按宽高比显示。照片与相框宽高比不同而产生的空余空间，会使用 `Margin Color` 和 `Margin Texture` 填充。

### Set ratio

关闭 `Aspect ratio from texture` 时，手动指定的宽高比。

示例：

- 横向 16:9 照片：`16, 9`
- 正方形：`1, 1`
- 纵向 9:16 照片：`9, 16`

需要像固定尺寸的海报框一样，始终使用相同宽高比时，可以使用此项。
