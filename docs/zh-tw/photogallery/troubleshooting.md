---
title: 疑難排解
description: 常見問題及解決方法
---

# 疑難排解

## 照片看起來變形了

請檢查材質的 `Ratio` 設定。如果手動輸入了長寬比，請確認數值與照片一致。

使用自動長寬比時，會依照片貼圖的長寬比顯示。請確認貼圖的 `Non-Power of 2` 設定為 `None`。

單獨使用相框時，需要手動設定。

## 照片沒有顯示

請檢查以下項目。

- `PhotoGallery` 的 `Photos` 清單中是否已加入照片
- 是否已設定 `Photo Frame Prefab`
- 是否已設定 `Shared Frame Material`
- 照片貼圖是否已正常匯入 Unity
- Console 中是否有著色器編譯錯誤

## 修改畫廊後，子相框沒有更新

請在 `PhotoGallery` 的 Inspector 中點擊 `Reset`。

更換預製物件或材質後，建議重新產生一次畫廊。

## 相框無法吸附至牆面

`Snap Children To Wall` 根據 Collider 運作。

請檢查：

- 牆面物件是否有 Collider
- `PhotoGallery` 是否朝向要吸附至的牆面
- 牆面是否距離太遠
- 從相框位置朝牆面發出的 Raycast 是否能碰到牆面

如果不確定方向，請稍微前後移動 `PhotoGallery` 物件，或旋轉 180 度後再次點擊。

## 相框陷入牆內

請調整 `Frame Position` 的 Z 值。

如果希望相框稍微離開牆面，請小幅調整 Z 值，然後再次點擊 `Snap Children To Wall`。

## 照片太大，導致世界檔案很大

請嘗試將 `Build Photo Max Size` 設定為 `1024` 或 `2048`。

照片越多，與保留原始尺寸相比，這越有助於減少建置檔案大小和記憶體用量。

## Console 中出現錯誤

請先檢查錯誤訊息中是否包含 `AutoResize`、`PhotoGallery` 或 `PhotoFrame`。

錯誤也可能來自其他資源或 SDK。結合完整錯誤訊息、Unity 版本和目前套件版本檢查，更容易找到原因。
