---
title: Split MMD Player 預設
description: 儲存和套用歌曲與舞台預設的方法。
---

# 預設

歌曲和舞台可分別儲存，再組合使用。也可以不使用預設，直接在 Create Scene 中填寫。

## 歌曲預設 {#song-presets}

1. 開啟 `Tools > nupamo > Split MMD Player > Song Presets`。
2. 點擊 `Add Song` 新增，並填寫 `Name`。
3. 指定音訊、攝影機 VMD，以及各個舞者的動作和嘴型同步。需要時，也可設定字幕檔案、`Motion Time Offset` 和 `VMD Retargeting`。

`YouTube URL` 優先於 `Audio Clip`，`Motion Animation` 優先於 `Motion VMD`。`Lip VMD` 留空時，使用動作 VMD 中的嘴型同步。

字幕以 Text Asset 形式儲存在 `Subtitle File (Optional)` 中。套用沒有字幕檔案的預設時，也會清空先前指定的檔案。Player 的字幕顯示和語言設定會保留。請參閱[字幕檔案說明](./captions#subtitle-files)。

如果現有舞者數量更多，會重複使用動作。例如：`A / B` → `A / B / A`。新增欄位後，請連接虛擬形象。

## 舞台預設 {#stage-presets}

1. 開啟 `Tools > nupamo > Split MMD Player > Stage Presets`。
2. 編輯 Day / Night / Summer，或透過 `Add Stage` 新增。
3. 指定 `Name`、`Stage Scene` 和 `Post Process Profile`。

歌曲、動作和虛擬形象設定會保留。預設中的空白欄位會在套用時清空對應的輸入。

## 套用預設

- **新場景：**點擊 Create Scene 頂端的歌曲或舞台按鈕，即會套用預設。套用後仍可手動修改。
- **現有 Player：**離開 Play Mode，選取 Player，然後在 Song Presets 中點擊 `Apply to Selected Player`。虛擬形象連接及位置、旋轉和大小會保留。

Create Scene 中的 `Edit` 按鈕可開啟各個編輯視窗。兩類預設都可透過 `Duplicate` 複製、透過 `Remove` 刪除。

## 儲存位置

預設儲存在 `Assets/nupamo/Split MMD Player/Editor/` 中的 `SongPresets.asset` 和 `StagePresets.asset`。請與關聯的檔案一起保存。
