---
title: Split MMD Player
description: Split MMD PlayerはVRChatユーザー向けのUnityベースMMD再生ツールです。
---

# Split MMD Player

Split MMD PlayerはVRChatユーザー向けのUnityベースMMD再生ツールです。
3分割カメラを1つの画面に表示でき、アバター制作のテスト用途にも使用できます。
ローカルで使用するため、ライセンスやアップロードポリシーを気にせず使えます。

Unityバージョン`2022.3.6f1`、`2022.3.22f1`でテストされています。

## クイックスタート

1. Unityプロジェクトに`Assets/nupamo/Split MMD Player`が入っていることを確認します。
2. プレビューしたいアバターを現在のシーンに配置します。アバターにはHumanoidの`Animator`が必要です。
3. `Tools > nupamo > Split MMD Player`を開きます。
4. `Source Avatar`にシーン上のアバターGameObjectを入れます。
5. `Motion VMD`、`Audio Clip`、必要に応じて`Camera VMD`と`Lip VMD`を入れます。
6. ステージや小物を使う場合は、`PMX Prop`に`.pmx`ファイルを入れます。
7. 複数人で使う場合は、`Add Dancer`でDancerを追加します。
8. `Create Preview Scene`を押し、生成されたシーンでPlayします。

同梱されているのはCC0ライセンスのサンプルのみです。使いたい楽曲、モーション、カメラ、ステージのファイルは自分で用意し、プロジェクトの`Assets`配下に入れてから指定してください。

## Create Preview Sceneで行われること

`Assets/nupamo/Split MMD Player/Split MMD Player.unity`にプレビューシーンが作成され、自動で開かれます。

作成時には次の処理が行われます。

- 選択したアバターをプレビューシーンへ複製します。
- 複製したアバターをNDMFで一度処理し、プレビュー用に焼き込みます。
- VRChatアップロード用コンポーネント、Modular Avatar/NDMF、VRCFury、Marshmallow PBなど、プレビューの妨げになるビルド用コンポーネントを複製から削除します。
- 指定したVMD、オーディオ、PMX Propのパスをコンポーネントに設定します。
- 読み込まれたPMX PropとBakeされたアセットを`GeneratedAssets`配下に生成します。

元のシーン上のアバターは変更されません。既存のプレビューシーンがある場合は上書きされ、`GeneratedAssets`も作り直されます。

## コンポーネントオプション

### Inputs

- `Camera VMD`: MMDカメラのVMDファイルです。
- `Dancers`: 再生に使うDancer一覧です。
- `Name`: Dancerの表示名です。
- `Animator`: Dancerとして使うHumanoid Animatorです。
- `Motion VMD`: DancerのモーションVMDファイルです。
- `Lip VMD`: リップシンク用のVMDファイルです。ない場合はMotion VMDを使用します。

### Views

- `Active`: そのViewを有効にするかどうかです。
- `Type`: Viewのカメラタイプです。
- `Target Character`: Follow/Orthographic Viewの対象Dancerです。

### Playback

- `Play On Start`: Play開始時に自動再生するかどうかです。
- `Loop`: ループ再生するかどうかです。
- `Start Time`: 再生開始時間です。End Timeより後の場合は静止モーションになります。
- `End Time`: 再生終了時間です。`-1`で無効化します。
- `Motion Time Offset`: 音声基準のモーション時間補正値です。

### VMD Retargeting

- `Enable Foot IK`: 足IKを適用するかどうかです。
- `Copy Foot IK Rotation`: 足IKの回転をコピーするかどうかです。
- `Motion Scale`: モーション移動量のスケールです。
- `Camera Scale`: カメラ移動量のスケールです。

### Runtime Cameras

- `Show Runtime UI`: ランタイムカメラUIを表示するかどうかです。
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
