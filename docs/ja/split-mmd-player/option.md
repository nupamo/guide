---
title: Split MMD Player オプション
description: Split MMD Playerの機能説明です。
---

# オプション

Split MMD Playerの機能説明です。

## Builder

### Inputs

- `Scene Name`: 生成するScene名です。既に存在する場合は上書きします。
- `Camera VMD`: MMDカメラのVMDファイルです。
- `Audio Clip`: モーションと一緒に再生するオーディオです。
- `Stage Preset`: Studio版に同梱されたステージプリセットです。`Stage Scene`と`Post Process Profile`に適用されます。
- `Stage Scene`: 生成するSceneにImportするUnity Sceneです。
- `Post Process Profile`: ポストプロセスプリセットです。

### PMX Props

- MMD小物をImportします。

### Dancers

- `Source Avatar`: 使用するVRChatアバターGameObjectです。
- `Motion Animation`: DancerのUnity AnimationClipモーションです。
- `Motion VMD`: DancerのモーションVMDファイルです。
- `Lip VMD`: Dancerのリップシンク用VMDファイルです。ない場合はMotion VMDを使用します。

---

## Component

- `Mode`: 3Dモード選択時にSBSモードを有効化します。2分割カメラが強制され、左目と右目をシミュレートします。
  - `SBS`: `Half`または`Full`を選択します。
  - `3D Strength`: 両目の距離の強さです。
  - `Letterbox`: キャラクターが手前に出て見えるレターボックスのサイズを設定します。
- `Remember Parameter Changes`: Play中に変更したオプションを初期化せず、次回再生にも使用します。
- `Show Runtime UI`: Play画面内にカメラ設定UIを表示します。

### Inputs

- `Audio Clip`: モーションと一緒に再生するオーディオです。
- `Post Process Profile`: ポストプロセスプリセットです。
- `Camera VMD`: MMDカメラのVMDファイルです。

- `Dancers`: 再生に使用するDancer一覧です。
  - `Name`: Dancerの表示名です。
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
- `Motion Time Offset`: オーディオ基準のモーション時間補正値です。

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
