---
title: 安裝
description: 將從 BOOTH 下載的 UnityPackage 匯入專案的方法
---

# 安裝

將從 BOOTH 下載的 `.unitypackage` 檔案匯入 Unity 專案。

## 匯入方法

1. 在 Unity 中開啟要使用的 VRChat 世界專案。
2. 在頂端選單中選擇 `Assets > Import Package > Custom Package...`。
3. 選擇從 BOOTH 下載的 `.unitypackage` 檔案。
4. 在匯入視窗中檢查包含的檔案。
5. 點擊 `Import` 按鈕。

## 套件內容

匯入後，預設檔案位於 `Assets/nupamo/AutoResize` 資料夾中。

- `PhotoGallery.prefab`：用於佈置多張照片的預設畫廊預製物件
- `PhotoFrame Pro.prefab`：包含邊框和玻璃效果的進階相框預製物件
- `PhotoFrame Lite.prefab`：僅包含照片和留白的輕量相框預製物件
- `Preset Lite.mat`、`Preset Opaque.mat`、`Preset Transparent.mat`：可直接使用的材質預設
- `Source`：包含著色器、網格和預設貼圖的資料夾
- `Runtime`、`Editor`：資源運作所需的指令碼資料夾

一般使用者主要使用 `PhotoGallery.prefab`、`PhotoFrame` 預製物件和 `Preset` 材質即可。
