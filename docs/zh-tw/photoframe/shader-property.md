---
title: 著色器設定
description: AutoResize PhotoFrame 材質 Inspector 的選項說明
---

# 著色器設定

本文介紹 `AutoResize PhotoFrame Pro` 和 `AutoResize PhotoFrame Lite` 材質中的設定項目。

## Surface

僅在 Pro 材質中顯示。設定材質的繪製方式。

- `Opaque`：不透明繪製。大多數情況下建議使用。
- `Transparent`：透明繪製。需要更明顯的玻璃或半透明效果時使用。

## Image

照片本身的設定。

### Main Texture

要顯示的照片貼圖。

使用 `PhotoGallery` 時，各張照片會從 `Photos` 清單自動填入。直接放置單個相框時，也可以在這裡加入照片。

### Main Color

與照片顏色相乘的顏色。

預設為白色。需要讓照片變暗或輕微染上某種顏色時，可調整此項。

### Image Unlit

設定照片受光照影響的程度。

- `0`：受世界光照影響較大。
- `1`：受光照影響較小，照片本身顯得明亮。

如果照片在 VRChat 世界中太暗，請嘗試增大此值。

在 Lite 中，相同作用的選項可能顯示為 `Image Unlit` 或 `Lit`。

## Frame

僅在 Pro 材質中顯示。

取消勾選左側的核取方塊，可關閉邊框效果。

### Frame Size

相框邊框的厚度。

數值越大，照片周圍的邊框越厚。

### Frame Texture

邊框使用的貼圖。

可以加入木紋、金屬或紙張等材質的圖片。

### Frame Normal Map

用於表現邊框表面凹凸的法線貼圖。

需要增強木紋或立體感時使用。

### Frame Color

邊框顏色。

設定了 `Frame Texture` 時，此顏色會與貼圖顏色相乘。

### Frame Bump Scale

邊框法線貼圖的強度。

數值越大，表面的凹凸越明顯。

### Frame Bevel

邊框邊緣的模擬倒角效果強度。

如果相框邊緣顯得扁平，增大此值可增強立體感。

### Bevel Highlight

邊框倒角亮部的強度。

### Bevel Shadow

邊框倒角暗部的強度。

### Inner Shadow

照片和留白區域內側陰影的強度。

讓照片看起來略微嵌入相框中。

### Raised Mesh Depth

邊框向前凸起的深度。

與預設 `PhotoFrame` 預製物件的凸起網格一起使用時，效果更明顯。

### Frame Unlit

設定邊框受光照影響的程度。

- `0`：受世界光照影響。
- `1`：本身顯得明亮。

## Margin

照片周圍留白的設定。

Pro 和 Lite 均可使用。

### Margin Size

照片周圍留白的大小。

數值越大，照片與邊框之間的空間越寬。

### Margin Texture

留白區域使用的貼圖。

用於加入紙張紋理或圖案。

### Margin Color

留白顏色。

白色可營造常見的相框卡紙效果；降低不透明度，也可以讓背景透出來。

### Margin Shadow

留白內側陰影的強度。

為照片邊緣或邊框內側增加深度感。

### Margin Shadow Size

留白陰影的寬度。

數值越大，陰影擴散越寬。

### Margin Unlit

設定留白受光照影響的程度。

## Glass

僅在 Pro 材質中顯示。

取消勾選左側的核取方塊，可關閉玻璃效果。

### Glass Strength

玻璃效果的整體強度。

數值越高，玻璃色調和反射高光越明顯。

### Glass Tint

玻璃顏色。

略微使用藍色或灰色，可營造照片上覆蓋一層薄玻璃的效果。

### Glass Glare

玻璃反射高光的強度。

數值越高，對角線高光和邊緣閃光越明顯。

### Glass Glare Size

反射高光的寬度。

數值越大，高光擴散越寬。

### Glass Smoothness

玻璃的平滑度。

數值越高，鏡面反射看起來越平滑。

## Alignment

設定照片在顯示區域中的對齊位置。

照片與相框長寬比不同時，可能產生多餘空間。此時會套用對齊選項。

### Vertical align

垂直對齊。

- `Top`：頂端對齊
- `Center`：置中對齊
- `Bottom`：底端對齊

### Horizontal align

水平對齊。

- `Left`：靠左對齊
- `Center`：置中對齊
- `Right`：靠右對齊

## Ratio

設定如何決定照片的長寬比。

### Aspect ratio from texture

自動使用照片貼圖的實際長寬比。

大多數情況下建議保持開啟。

### Auto Resize Image Only

讓 Auto Resize 僅作用於圖片區域。

關閉時，與原先一樣，整個相框會依照片長寬比自動縮小。

開啟時，邊框填滿整個物件，只有照片依長寬比顯示。照片與相框長寬比不同而產生的多餘空間，會使用 `Margin Color` 和 `Margin Texture` 填滿。

### Set ratio

關閉 `Aspect ratio from texture` 時，手動指定的長寬比。

範例：

- 橫向 16:9 照片：`16, 9`
- 正方形：`1, 1`
- 直向 9:16 照片：`9, 16`

需要像固定尺寸的海報框一樣，始終使用相同長寬比時，可以使用此項。
