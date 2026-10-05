---
title: 設定相框材質
description: 調整 Pro 和 Lite 著色器材質的方法
---

# 設定相框材質

![相框材質設定範例](/shader.png)

相框的外觀透過材質調整。建議複製預設材質後使用。

## 複製預設

1. 在 Project 視窗中選擇 `Preset Lite.mat`、`Preset Opaque.mat` 或 `Preset Transparent.mat`。
2. 按 `Ctrl + D` 複製。
3. 將複製後的材質改為您想要的名稱。
4. 套用材質。
   - 使用 PhotoGallery：將新材質放入 `PhotoGallery` 的 `Shared Frame Material`。
   - 僅使用著色器：將新材質放入 `PhotoFrame Pro` 或 `PhotoFrame Lite` 預製物件的 `Material`。

## Lite 與 Pro 的差異

### Lite

- 基於 Unity 預設的 `Cube`，依圖片長寬比自動調整大小
- 對齊設定
- 留白設定

### Pro

- 基於 `Custom Mesh`，依圖片長寬比自動調整大小，並具有凸起的邊框
- 對齊設定
- 留白設定與內陰影
- 邊框設定
- 玻璃效果
- 透明設定
