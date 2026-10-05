---
title: Split MMD Player
description: Split MMD Player 是面向 VRChat 使用者的 Unity MMD 播放工具。
---

# Split MMD Player

Split MMD Player 是面向 VRChat 使用者的 Unity MMD 播放工具。
可在同一畫面中顯示三個攝影機視圖，也可用於測試製作中的虛擬形象。
它在 Unity Editor 中於本機播放，無需上傳至 VRChat 世界即可查看效果。

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <iframe width="662" height="372" src="https://www.youtube.com/embed/LiA346I-l3M" title="Split MMD Player 示範" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"></iframe>
</div>

## Free 版本

Free 版本會產生一個場景，移除可能在 Unity 播放時引發問題的 VRChat 元件。
支援 VMD、PMX 檔案，但不包含額外的 Unity 功能。

## Studio 版本

**Studio v1.6.0** 支援 YouTube 音訊、[預設](./presets)和[字幕](./captions)。JIZURA 是實驗性功能。

Studio 版本在基礎播放功能之上進行了擴充，目的是保留並使用 VRChat 虛擬形象中已設定的選項。  
透過 Gesture Manager，可以直接使用基於 Modular Avatar 的服裝切換、SPS、Light limit 等功能，前提是已事先設定好。

此外，Studio 不僅支援 VMD 動作，也支援 Unity `AnimationClip` 動作。
可在 Play Mode 中更換動作或調整參數，更改後的參數在離開 Play Mode 後也會保留。
建立多個 Player 元件後，可在 Play Mode 中切換歌曲，並共用 Dancer 和 Audio 元件。也可透過 Dancer Transform Offset 調整各個舞者的位置和旋轉。
Builder 的舞台設定以場景為基礎運作，可透過 Day/Night/Summer Preset 快速選擇基本氛圍。

已在以下三種環境中測試。不保證在更舊的環境中運作。如出現故障，請將相關套件更新至最新版本。

- 最近測試環境（2026-07-05）：Unity `2022.3.22f1` / VRChat SDK `3.10.4` / Gesture Manager `3.9.8` / VRCFury `1.1348.0` / Modular Avatar `1.17.1` / NDMF `1.17.1` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.22f1` / VRChat SDK `3.10.0` / Gesture Manager `3.9.6` / VRCFury `1.1272.0` / Modular Avatar `1.14.3` / NDMF `1.9.4` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.6f1` / VRChat SDK `3.10.1` / Gesture Manager `3.9.7` / VRCFury `1.1279.0` / Modular Avatar `1.12.5` / NDMF `1.7.10` / wholesome SPS Configurator `2.0.11`

## Split MMD Recorder

支援 Normal、SBS 和 VR180 錄製。使用此功能，可依穩定的影格步進錄製高於螢幕解析度的畫面。  
支援 PNG 序列和透過 FFmpeg 編碼為 MP4。在 Windows 上會自動準備所需的 FFmpeg。詳細步驟請參閱[錄製指南](./recorder)。

## Editor 選單

`Tools > nupamo > Split MMD Player` 中包含以下選單。

| 選單 | 用途 |
| --- | --- |
| Create Scene | 使用預設、虛擬形象和舞台產生預覽場景 |
| Song Presets | 新增、編輯和套用[歌曲預設](./presets#song-presets) |
| Stage Presets | 新增和編輯[舞台預設](./presets#stage-presets) |
| Recorder | [錄製 PNG 序列和 MP4](./recorder) |
| Setting | 在同一設定視窗中管理 FFmpeg 和 yt-dlp |
| Language | 將 Editor UI 切換為 English / 日本語 / 한국어 / 中文 |

## 快速開始

本文中的欄位和按鈕名稱以英文 UI 為準。

1. 將要預覽的 Humanoid 虛擬形象放入目前場景並選取。
2. 開啟 `Tools > nupamo > Split MMD Player > Create Scene`。
3. 點擊頂端的歌曲或舞台[預設](./presets)按鈕，或手動指定音訊、動作和舞台。
4. 檢查 `Scene Name` 和各個 Dancer 的 `Source Avatar`。動作欄位可以手動修改。
5. 離開 Play Mode，點擊 `Create Preview Scene`，然後在產生的場景中進入 Play Mode。
6. 使用 YouTube 音訊時，等待準備完成。字幕在 Player 的 `Inputs > Captions` 中選擇。

`Motion Time Offset` 位於 Create Scene 的 Inputs 最後。

在 Game 視窗中取消勾選 `Low Resolution Aspect Ratios`，可查看更清晰的預覽。下圖展示舊版本的選單位置和 Game 視窗解析度設定範例。

![Game 視窗解析度設定範例](/split.png)

預設範例僅包含 CC0 授權的樣本。請將額外的動作、攝影機和舞台檔案放入專案的 `Assets` 下，然後指定這些檔案。

## 點擊 Create Preview Scene 後

根據 `Scene Name`，在 `Assets/nupamo/Split MMD Player/<Scene Name>.unity` 中產生預覽場景，並自動開啟。預設名稱為 `Split MMD Player`。

產生過程中會執行以下操作。

- 將所選虛擬形象複製至預覽場景中。
- 使用 NDMF 處理一次副本，將其烘焙為預覽所需的形式。
- 從副本中移除影響預覽的建置元件，例如用於 VRChat 上傳的元件、Modular Avatar/NDMF、VRCFury 和 Marshmallow PB。
- 將載入的場景和烘焙後的資源產生至 `GeneratedAssets` 下。

原始場景中的虛擬形象不會被修改。如果已有預覽場景，會在確認後覆寫；該場景產生的資源在 `GeneratedAssets/<Scene Name>` 中管理。
