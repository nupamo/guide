---
title: 建立第一個畫廊
description: 在場景中快速佈置照片畫廊的方法
---

# 建立第一個畫廊

![畫廊設定範例](/photogallery.png)

本頁介紹快速建立照片畫廊的方法。

## 1. 放置 PhotoGallery 預製物件

在 Project 視窗中找到 `Assets/nupamo/AutoResize/PhotoGallery.prefab`。

將此預製物件拖曳至 Scene 或 Hierarchy 視窗中。

## 2. 加入照片

選取已放置的 `PhotoGallery` 物件。

將要顯示的照片貼圖放入 Inspector 的 `Photos` 清單中。橫向和直向照片可以混合使用。

加入照片後，畫廊會自動建立子物件，並將各張照片套用至相框中。

## 3. 檢查相框預製物件和材質

預設的 `PhotoGallery.prefab` 已設定好 `Photo Frame Prefab` 和 `Shared Frame Material`。

如果為空，請依以下方式設定。

- `Photo Frame Prefab`：`Assets/nupamo/AutoResize/PhotoFrame Pro.prefab`
- `Shared Frame Material`：`Preset Opaque.mat` 或您自己建立的相框材質

## 4. 調整配置

在 Inspector 中調整以下值。

- `Row Count`：設定每列排列的照片數量。
- `Layout Direction`：設定優先橫向填入還是直向填入。
- `Expand Direction`：增加照片時，設定以目前位置為基準置中擴展、向右擴展或向左擴展。
- `Gap`：調整相框之間的間距。
- `Slot Size`：調整每個照片欄位的基本配置尺寸。

## 5. 一次加入多張照片

在 Project 視窗中選取多張照片貼圖，然後在 `PhotoGallery` 的 Inspector 中點擊 `Capture Selected Textures`。

接著點擊 `Add Captured Textures`，即可將所選照片一次加入 `Photos` 清單中。

頂端選單中的 `Tools > nupamo > Capture Selected Textures` 也提供相同功能。

## 6. 吸附至牆面

要吸附至的牆面物件必須有 Collider。

將 `PhotoGallery` 朝向牆面放置，然後點擊 `Snap Children To Wall`，各個相框便會依牆面 Collider 的表面排列。

詳細設定請參閱[調整畫廊配置](./photo-gallery.md)。
