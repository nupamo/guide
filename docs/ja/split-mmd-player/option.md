---
title: Split MMD Player オプション
description: Split MMD Playerの機能説明です。
---

# オプション

Split MMD Playerの機能説明です。

## Create Scene

### Presets

ウィンドウ上部に`Song Preset`と`Stage Preset`のボタンがあります。**クリックするとすぐに適用**されます。各セクションの`Edit`ボタンからプリセットの編集画面を開けます。

- `Song Preset`: [曲プリセット](./presets#song-presets)の音声、字幕ファイル、カメラVMD、ダンサーモーション、リターゲティング設定を適用します。
- `Stage Preset`: [ステージプリセット](./presets#stage-presets)のStage Sceneとポストプロセッシングプロファイルを適用します。標準のDay / Night / Summerも編集できます。

### Inputs

- `Scene Name`: 作成するシーン名です。既存シーンを上書きする場合は確認します。
- `Camera VMD`: MMDカメラのVMDファイルです。
- `Audio Clip` / `YouTube URL`: ローカル音声またはYouTube動画のリンクです。URLがある場合はYouTube音声を優先します。
- `Subtitle File (Optional)`: 自分で用意した字幕Text Assetです。指定するとYouTube字幕の代わりに使用します。
- `Stage Scene`: 作成するシーンに読み込むUnity Sceneです。
- `Post Process Profile`: 使用するポストプロセッシングプロファイルです。
- `Motion Time Offset`: 音声を基準にモーションの時刻を補正します。Inputsの最後にあり、字幕の時刻には適用しません。

### PMX Props

- MMD小物をImportします。

### Dancers

各ダンサーに以下のスロットを指定します。プリセットなしで直接入力することも、プリセットの適用後に変更することもできます。

- `Source Avatar`: 使用するアバターです。ダンサー名は元のアバター名を使用します。
- `Motion Animation`: Unityの`AnimationClip`モーションです。指定するとMotion VMDより優先します。
- `Motion VMD`: MMDのモーションファイルです。
- `Lip VMD`: 別のリップシンクファイルです。空欄の場合はMotion VMD内のリップシンクを使用します。

`Add Dancer`と`Remove Last Dancer`でスロット数を変更します。

### VMD Retargeting

ダンサーの入力欄の下で`Enable Foot IK`、`Copy Foot IK Rotation`、`Motion Scale`、`Camera Scale`を調整します。曲プリセットにも保存できます。

---

## Setting

`Tools > nupamo > Split MMD Player > Setting`でFFmpegとyt-dlpを1つのウィンドウから設定します。YouTube音声、字幕の取得、Recorderで共通のパスを使用するため、Playerごとの入力は不要です。

- `Executable Path`: 使用する実行ファイルのパス。`Browse`で選択できます。
- `Detected Path`: 現在利用できる実行ファイルのパスです。
- `Use Automatic Detection`（FFmpeg）/ `Use Automatic Download`（yt-dlp）: 指定したパスを空にして、自動でツールを準備します。

Windowsでパスが空欄の場合は、次の順に準備します。

| ツール | 準備する順序 |
| --- | --- |
| FFmpeg | PATH → プロジェクトに保存したツール → なければ自動ダウンロード |
| yt-dlp | プロジェクトのキャッシュ → なければ公式版を自動ダウンロード |

パスを指定した場合は、そのファイルを優先します。macOS/Linuxではツールをインストールするか、パスを指定してください。YouTubeの取得でJavaScript Runtimeの案内が出た場合は、Node.jsをインストールしPATHから利用できるようにしてください。

## Component

- `Mode`: 3Dモード選択時にSBSモードを有効化します。2分割カメラが強制され、左目と右目をシミュレートします。
  - `SBS`: `Half`または`Full`を選択します。
  - `3D Strength`: 両目の距離の強さです。
  - `Letterbox`: キャラクターが手前に出て見えるレターボックスのサイズを設定します。
- `Remember Parameter Changes`: Play中に変更したオプションを初期化せず、次回再生にも使用します。
- `Show Runtime UI`: Play画面内に再生コントロールとカメラ設定UIを表示します。

### Inputs

- `Audio Clip`: モーションと一緒に再生するローカル音声です。
- `YouTube URL`: 動画リンクから音声を取得します。URLはAudio Clipより優先されます。
- `Post Process Profile`: ポストプロセッシングプロファイルです。
- `Camera VMD`: MMDカメラのVMDファイルです。

### Captions

字幕設定はDancersの上に表示されます。

- `Display`: Off / Subtitles / JIZURAを選択します。
- `Subtitle Language`: YouTube動画で利用できる字幕言語を選択します。
- `Subtitle File (Optional)`: 字幕Text AssetでYouTube字幕を置き換えます。
- `New JIZURA`: 別のJIZURA構成を作成します。

使い方と必要な環境は[字幕とJIZURA](./captions)を参照してください。

### Dancers / Views

- `Dancers`: 再生に使用するDancer一覧です。
  - ダンサー名は元のアバター名を使用します。
  - `Shared Dancer`: Playerで使用するDancerを選択します。
  - `Motion Animation`: DancerのUnity AnimationClipモーションです。
  - `Motion VMD`: DancerのモーションVMDファイルです。
  - `Lip VMD`: Dancerのリップシンク用VMDファイルです。ない場合はMotion VMDを使用します。
  - `Position Offset`: Playerが有効になった時に適用する位置値です。
  - `Rotation Offset`: Playerが有効になった時に適用する回転値です。
  - `Scale`: Playerが有効になった時に適用するスケールです。
- `Views`: 3分割画面設定です。
  - `Active`: そのViewを使用するかどうかです。
  - `Type`: Viewのカメラタイプです。
  - `Target Character`: Follow/Orthographic Viewが見るDancerです。

### Playback

- `Play On Start`: Play開始時に自動再生するかどうかです。
- `Loop`: ループ再生するかどうかです。
- `Start Time`: 再生開始時間です。End Timeより後の場合は静止モーションになります。
- `End Time`: 再生終了時間です。`-1`で無効化します。
- `Motion Time Offset`: 音声基準のモーション時間補正値です。正の値は後のモーションフレーム、負の値は前のフレームを使用します。初回再生とシークに同じように適用し、字幕の時刻は変えません。

### VMD Retargeting

- `Enable Foot IK`: 足IKを適用するかどうかです。
- `Copy Foot IK Rotation`: 足IKの回転をコピーするかどうかです。
- `Motion Scale`: モーション移動量のスケールです。
- `Camera Scale`: カメラ移動量のスケールです。

### Runtime Cameras

- `Field Of View`: Followカメラの視野角です。
- `Position Smooth Time`: Followカメラ位置の補間時間です。
- `Front Distance`: Front Viewの距離です。
- `Front Height Offset`: Front Viewの高さオフセットです。
- `Front Angle`: Front Viewの角度オフセットです。
- `Back Distance`: Back Viewの距離です。
- `Back Height Offset`: Back Viewの高さオフセットです。
- `Back Angle`: Back Viewの角度オフセットです。

### Orthographic Preset

- `Height Offset`: 正投影Viewの高さオフセットです。
- `Angle`: 正投影Viewの角度オフセットです。
- `Size`: 正投影カメラサイズです。
