---
title: 安裝到世界
description: 將紡車音樂盒放進 VRChat 世界並進行設定
---

# 安裝到世界

## 準備

- 用 VRChat Creator Companion 建立的 Worlds 專案
- 已在 Unity `2022.3.22f1`、VRChat SDK Worlds `3.10.3` 中測試。
- TextMesh Pro（Unity 內建套件）

## 1. 匯入套件

將 `SpinningWheelMusicBox.unitypackage` 匯入專案。

所需的 MML 解析器和辨音著色器（MML Transcriber）都已包含在內，不需要另外安裝。

## 2. 放置 Prefab

將 `Assets/nupamo/Spinning Wheel Music Box/Spinning Wheel Music Box.prefab` 拖進 Scene，放在桌子上。

- 搖柄那一側是 Prefab 的 **-Z** 方向。請朝向玩家站的那一側。
- 箱子寬約 0.5 m，操作畫面浮在箱子上方約 0.4 m 處。
- 靠近到約 2.2 m 以內時會出現操作畫面，離開超過 2.8 m 時會消失。

## 3. 檢查反射

如果金屬零件看起來很暗，請在附近放置 Reflection Probe 並進行 Bake。

## 預覽

開啟 `Assets/nupamo/Spinning Wheel Music Box/Demo/Spinning Wheel Music Box Demo.unity`，按下 Play（ClientSim）即可確認。

Unity Editor 中的 ClientSim 無法直接開啟 YouTube 網址。Play 期間在 YouTube 連結欄位貼上網址後，編輯器專用腳本會用本機的 yt-dlp 把它轉換成可播放的網址。等欄位裡的文字改變後再點 `● 录制`。上傳後的世界由 VRChat 自行處理網址，不需要這個步驟。

## 設定

選取 Prefab 根物件上的音樂盒元件，Inspector 中會顯示兩個項目。

### Start mode

實例第一次開啟時的播放方式。

- `Manual`（預設）：要轉動搖柄才會發出聲音。
- `Auto`：自動循環播放第一首曲子。

### Sound

音樂盒聲音能被聽到的範圍。世界裡的畫面中沒有這個選項，只能在 Inspector 中設定。

- `Around the box (3D)`（預設）：聲音從音樂盒發出，離得越遠越小。
- `Whole world (2D)`：不論在世界的哪裡，所有人聽到的音量都一樣。

### Songs

清單中一直都在的內建曲子。每首填寫標題和 MML（最多 6000 字元，支援瑪奇格式）。

- 用 `+ Add song` 新增，`▲` 上移，`✕` 刪除。
- 預設包含 3 首公有領域曲目（薩提〈吉諾佩第一號〉、薩提〈我要你〉、德布西〈月光〉）。
- 公開世界中請只放入你有權使用的曲子。

其他數值可以展開最下方的 `Internal` 查看，但通常不需要修改。

## 在同一個世界放多台

可以放多台音樂盒。大家儲存的曲目清單由同一個世界中的所有音樂盒共用。
