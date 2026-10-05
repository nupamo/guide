---
title: Split MMD Player 字幕與 JIZURA
description: 使用字幕和實驗性 JIZURA 功能的方法。
---

# 字幕與 JIZURA

顯示 YouTube 字幕或自行準備的字幕檔案。即使使用多個攝影機 View，字幕也只在整個畫面中顯示一次，並會包含在錄製結果中。

## 開啟字幕

1. 在 Player 的 `Inputs > YouTube URL` 中填入連結，並等待音訊準備完成。
2. 在 `Inputs > Captions > Display` 中選擇顯示方式。

| Display | 顯示方式 |
| --- | --- |
| Off | 關閉字幕 |
| Subtitles | 一般字幕，預設選項 |
| JIZURA | 與音樂配合的文字動畫，實驗性功能 |

`Subtitle Language` 僅顯示該影片可用的字幕語言。預設選項 `Automatic (Original)` 會依原始語言 → Editor 語言 → 英語的順序嘗試。如果沒有您選擇的語言，請指定字幕檔案。

## 字幕檔案 {#subtitle-files}

在 `Subtitle File (Optional)` 中指定包含 SRT、VTT 或字幕 JSON 的 `TextAsset`。將 SRT/VTT 儲存為 `.txt` 後，即可匯入 Unity。字幕檔案也可儲存在[歌曲預設](./presets#song-presets)中。

檔案優先於 YouTube 字幕。留空時取得 YouTube 字幕。也可與本機音訊一起使用。

## JIZURA — 實驗性功能

基於 [852wa 的 JIZURA](https://github.com/852wa/JIZURA)，自動產生字幕排版和動畫。Split MMD Player 的 JIZURA 整合是**實驗性功能**。

- 將 `Display` 設定為 `JIZURA`。可透過 `New JIZURA` 更換排版與動畫組合。
- 需要 **Windows 64 位元 Unity Editor 和 Microsoft WebView2 Runtime**。如果未安裝，可透過 `Install WebView2 Runtime` 安裝。
- 準備期間顯示一般字幕。JIZURA 可在 Editor 和 Recorder 中使用。

## 同步與疑難排解

字幕跟隨音訊時間。`Motion Time Offset` 不影響字幕時間。

如果沒有字幕，請指定檔案。下載出錯時，先檢查 `Setting`，再透過 `Retry Captions` 重試。錄製 JIZURA 時，請等待準備完成後再開始。請參閱[錄製指南](./recorder)。
