---
title: Split MMD Player 選項
description: Split MMD Player 的功能說明。
---

# 選項

本頁介紹 Split MMD Player 的各項功能。

## Create Scene

### Presets

視窗頂端有 `Song Preset` 和 `Stage Preset` 按鈕。**點擊按鈕即會套用預設**。各區域的 `Edit` 按鈕可開啟對應的預設編輯視窗。

- `Song Preset`：套用[歌曲預設](./presets#song-presets)中的音訊、字幕檔案、攝影機 VMD、舞者動作和重定向設定。
- `Stage Preset`：套用[舞台預設](./presets#stage-presets)中的 Stage Scene 和後製處理設定檔。預設的 Day / Night / Summer 也可以編輯。

### Inputs

- `Scene Name`：要產生的場景名稱。如果已有同名場景，會在確認後覆寫。
- `Camera VMD`：MMD 攝影機 VMD 檔案。
- `Audio Clip` / `YouTube URL`：本機音訊或 YouTube 影片連結。有連結時優先使用 YouTube 音訊。
- `Subtitle File (Optional)`：自行準備的字幕 Text Asset。指定後，使用該檔案代替 YouTube 字幕。
- `Stage Scene`：要匯入產生場景中的 Unity 場景。
- `Post Process Profile`：要使用的後製處理設定檔。
- `Motion Time Offset`：相對於音訊的動作時間偏移。位於 Inputs 最後，不影響字幕時間。

### PMX Props

- 匯入 MMD 道具。

### Dancers

為每個舞者指定以下欄位。可不使用預設直接填寫，也可套用預設後修改。

- `Source Avatar`：要使用的虛擬形象。舞者名稱使用原始虛擬形象的名稱。
- `Motion Animation`：Unity `AnimationClip` 動作。指定後優先於 Motion VMD。
- `Motion VMD`：MMD 動作檔案。
- `Lip VMD`：獨立的嘴型同步檔案。留空時，使用 Motion VMD 中的嘴型同步。

透過 `Add Dancer` 和 `Remove Last Dancer` 調整欄位數量。

### VMD Retargeting

在舞者輸入區域下方調整 `Enable Foot IK`、`Copy Foot IK Rotation`、`Motion Scale` 和 `Camera Scale`。這些設定也可儲存至歌曲預設中。

---

## Setting

在 `Tools > nupamo > Split MMD Player > Setting` 中，可在同一視窗設定 FFmpeg 和 yt-dlp。無需為每個 Player 個別填寫；YouTube 音訊、字幕取得和 Recorder 共用這些設定。

- `Executable Path`：手動指定的執行檔路徑。可透過 `Browse` 選擇。
- `Detected Path`：目前可用的執行檔路徑。
- `Use Automatic Detection`（FFmpeg）/ `Use Automatic Download`（yt-dlp）：清空手動指定的路徑，使用自動準備功能。

在 Windows 上，路徑為空時依以下順序準備。

| 工具 | 準備順序 |
| --- | --- |
| FFmpeg | PATH → 專案中儲存的工具 → 如未找到則自動下載 |
| yt-dlp | 專案快取 → 如未找到則自動下載官方版本 |

手動指定路徑後，會優先使用該檔案。在 macOS/Linux 上，請安裝工具或指定路徑。如果 YouTube 下載提示需要 JavaScript Runtime，請安裝 Node.js，並確保可透過 PATH 找到。

## Component

- `Mode`：選擇 3D 模式時啟用 SBS 模式。強制使用兩個攝影機視圖，分別模擬左眼和右眼。
  - `SBS`：選擇 `Half` 或 `Full`。
  - `3D Strength`：雙眼間距的強度。
  - `Letterbox`：設定讓角色看起來突出畫面的遮幅大小。
- `Remember Parameter Changes`：保留播放時修改的選項，供下次播放使用。
- `Show Runtime UI`：在播放畫面中顯示播放控制和攝影機設定 UI。

### Inputs

- `Audio Clip`：與動作一起播放的本機音訊。
- `YouTube URL`：透過影片連結取得音訊。有連結時優先於 Audio Clip。
- `Post Process Profile`：後製處理設定檔。
- `Camera VMD`：MMD 攝影機 VMD 檔案。

### Captions

顯示在 Dancers 上方的字幕設定。

- `Display`：選擇 Off / Subtitles / JIZURA。
- `Subtitle Language`：選擇該 YouTube 影片可用的字幕語言。
- `Subtitle File (Optional)`：使用自行準備的字幕 Text Asset 代替 YouTube 字幕。
- `New JIZURA`：產生另一種 JIZURA 排版與動畫組合。

使用方法和所需環境請參閱[字幕與 JIZURA](./captions)。

### Dancers / Views

- `Dancers`：播放時使用的 Dancer 清單。
  - 舞者名稱使用原始虛擬形象的名稱。
  - `Shared Dancer`：選擇此 Player 使用的舞者。
  - `Motion Animation`：Dancer 的 Unity AnimationClip 動作。
  - `Motion VMD`：Dancer 的動作 VMD 檔案。
  - `Lip VMD`：Dancer 的嘴型同步 VMD 檔案。未指定時使用 Motion VMD。
  - `Position Offset`：Player 啟用時套用的位置。
  - `Rotation Offset`：Player 啟用時套用的旋轉。
  - `Scale`：Player 啟用時套用的大小。
- `Views`：三個分割畫面的視圖設定。
  - `Active`：是否使用該 View。
  - `Type`：View 的攝影機類型。
  - `Target Character`：Follow/Orthographic View 面向的 Dancer。

### Playback

- `Play On Start`：進入 Play Mode 時是否自動播放。
- `Loop`：是否循環播放。
- `Start Time`：播放開始時間。晚於 End Time 時，動作保持靜止。
- `End Time`：播放結束時間。設為 `-1` 時停用此限制。
- `Motion Time Offset`：相對於音訊的動作時間偏移。正值使用較晚的動作影格，負值使用較早的動作影格。首次播放和跳轉時套用相同的偏移，不改變字幕時間。

### VMD Retargeting

- `Enable Foot IK`：是否套用腳部 IK。
- `Copy Foot IK Rotation`：是否複製腳部 IK 旋轉。
- `Motion Scale`：動作位移的縮放係數。
- `Camera Scale`：攝影機位移的縮放係數。

### Runtime Cameras

- `Field Of View`：Follow 攝影機的視野角度。
- `Position Smooth Time`：Follow 攝影機的位置平滑時間。
- `Front Distance`：Front View 的距離。
- `Front Height Offset`：Front View 的高度偏移。
- `Front Angle`：Front View 的角度偏移。
- `Back Distance`：Back View 的距離。
- `Back Height Offset`：Back View 的高度偏移。
- `Back Angle`：Back View 的角度偏移。

### Orthographic Preset

- `Height Offset`：正交 View 的高度偏移。
- `Angle`：正交 View 的角度偏移。
- `Size`：正交攝影機的大小。
