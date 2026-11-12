---
title: Split MMD Recorder
description: 在 Studio v1.6.0 中錄製 PNG 序列和 MP4 的方法。
---

# 錄製

透過 `Tools > nupamo > Split MMD Player > Recorder` 開啟。可錄製高於螢幕解析度的 PNG 序列，並在 FFmpeg 可用時編碼為 MP4。

## 錄製步驟

1. 在 `Player` 中指定要錄製的 Player。
2. 在 Player 元件中設定 `Start Time` 和 `End Time`。`End Time` 為 `-1` 時，錄製至音訊結束。
3. 使用 YouTube 音訊時，請等待音訊準備完成。如果選擇了 JIZURA，也請等待 JIZURA 準備完成。
4. 設定 `Output Mode`、輸出資料夾、解析度和 `FPS`。
5. 點擊錄製按鈕。完成必要的準備和預熱後開始擷取畫面。

錄製過程中會顯示進度和預估剩餘時間。可透過 `Cancel` 中止。錄製耗時取決於歌曲長度、解析度、FPS，以及虛擬形象和效果設定。

## 設定

| 選項 | 說明 |
| --- | --- |
| Player | 要錄製的 Player |
| Output Mode | Normal、SBS、VR180 |
| Output | PNG 序列和影片的輸出資料夾 |
| Width / Height | Normal 和 SBS 的輸出解析度 |
| Resolution / Quality | VR180 的解析度和品質預設 |
| Output Size | 由 VR180 預設決定的解析度，唯讀 |
| FPS | 每秒錄製的影格數 |
| Start Time / End Time | 在 Player 中設定的時間區間，在 Recorder 中為唯讀 |
| FFmpeg / Setting | 顯示偵測到的執行檔，並開啟共用工具設定 |

`Normal` 使用 Player 的 `2D` 模式錄製，`VR180` 使用 `3D` 模式錄製。SBS 將雙眼畫面左右排列。

## FFmpeg 與 MP4

FFmpeg 路徑在 `Split MMD Player > Setting` 中管理。YouTube 音訊轉換和 Recorder 使用相同的設定。

在 Windows 上，路徑為空時，會檢查 PATH 和專案中儲存的工具；未找到時會在錄製前自動下載。下載完成後，繼續進行 PNG 擷取和 MP4 編碼。

在 macOS/Linux 上，請安裝 FFmpeg 或指定執行檔路徑。如果 FFmpeg 不可用，則僅儲存 PNG 序列。即使編碼失敗，PNG 序列仍會保留。

## 音訊與字幕

透過 YouTube 準備的音訊與本機 `Audio Clip` 一樣，可用於錄製。開始和結束時間區間及 `Motion Time Offset` 遵循 Player 設定。

一般字幕和 JIZURA 在所有攝影機 View 合成後的畫面中只顯示一次。錄製時，會等待指定時間的 JIZURA 影格準備完成後再擷取。詳細說明請參閱[字幕與 JIZURA](./captions)。
