---
title: 調整畫廊配置
description: PhotoGallery 元件的主要選項說明
---

# 調整畫廊配置

`PhotoGallery` 元件可自動排列多張照片。加入照片或修改選項後，場景中的相框會更新。

## Photos

畫廊中要顯示的照片貼圖清單。

相框依清單中的順序建立。更改順序後，畫廊中的照片順序也會隨之改變。

## Gap

相框之間的間距。

- X：水平間距
- Y：垂直間距

如果照片重疊，請增大數值；如果希望排列更緊密，請減小數值。

## Slot Size

每張照片佔用的基本配置尺寸。

`Frame Scale` 是相框預製物件的實際大小，而 `Slot Size` 是計算畫廊配置間距時使用的基準尺寸。需要分別調整相框實際大小和列間距時，這個選項很有用。

## Row Count

每列排列數量的基準值。

例如，有 10 張照片且 `Row Count` 為 2 時，會排列成兩列的畫廊。

## Layout Direction

照片的填入方向。

- `Horizontal`：優先橫向填入。
- `Vertical`：優先直向填入。

希望照片在牆面上橫向展開時，可使用 `Horizontal`；需要直向較長的展示配置時，可使用 `Vertical`。

## Expand Direction

增加照片時，設定以 `PhotoGallery` 物件的目前位置為基準向哪個方向擴展。

- `Center`：整個畫廊保持置中對齊。
- `Expand Right`：第一欄位於目前位置，並向右擴展。
- `Expand Left`：第一欄位於目前位置，並向左擴展。

## Frame Position / Rotation / Scale

每個欄位中 `PhotoFrame` 的位置、旋轉和大小。

大多數情況下，預設值即可。如果相框陷入牆內或懸浮在牆外，請嘗試調整 `Frame Position` 的 Z 值。

## Additional Child Prefab

附加至每個照片欄位中的額外預製物件。

例如，需要為每張照片加入小標籤、裝飾物件或燈光時，可以使用此選項。

使用額外預製物件後，可透過 `Additional Position`、`Additional Rotation`、`Additional Scale` 調整位置和大小。

## Reset 按鈕

根據目前設定重新建立畫廊的子物件。

更換預製物件後，或配置出現異常時，請使用此按鈕。

## Snap Children To Wall 按鈕

將每個相框吸附至牆面的 Collider 上。

使用條件如下。

- 牆面物件必須有 Collider。
- `PhotoGallery` 物件必須朝向要吸附至的牆面。
- 如果相框的正反方向不正確，請將 `PhotoGallery` 物件旋轉 180 度後重試。
