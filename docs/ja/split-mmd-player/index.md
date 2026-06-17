---
title: Split MMD Player
description: Split MMD PlayerはVRChatユーザー向けのUnityベースMMD再生ツールです。
---

# Split MMD Player

Split MMD PlayerはVRChatユーザー向けのUnityベースMMD再生ツールです。
3分割カメラを1つの画面に表示でき、アバター制作のテスト用途にも使用できます。
ローカルで使用するため、ライセンスやアップロードポリシーを気にせず使えます。

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <iframe width="662" height="372" src="https://www.youtube.com/embed/LiA346I-l3M" title="AutoResize PhotoGallery Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"></iframe>
</div>

## Studio版

Studio版は、単なる再生ではなく、VRChatアバターに設定したオプションをそのまま使うことを目的として追加開発されました。
Gesture Managerを通して、Modular Avatarベースの衣装切り替え、SPS、Light limitなどをそのまま使用できます。もちろん、事前に設定されていることが前提です。

さらにStudioでは、VMDモーションだけでなくUnity `AnimationClip`モーションも再生できます。
Play Mode中にモーションを変更したりパラメーターを調整したりでき、変更したパラメーターはPlay Mode終了後も保持されます。
複数のPlayerコンポーネントを作成すると、Play Mode中に曲を変更できます。DancerとAudioコンポーネントは共有され、Dancer Transform OffsetでDancerごとの位置や回転も補正できます。

次の3つの環境でテストされています。より古い環境での動作は保証しません。壊れる場合は、関連パッケージを最新に更新してください。

- (2026-06-16時点ですべて最新) Unity `2022.3.22f1` / VRChat SDK `3.10.3` / Gesture Manager `3.9.8` / VRCFury `1.1341.0` / Modular Avatar `1.17.1` / NDMF `1.13.1` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.22f1` / VRChat SDK `3.10.0` / Gesture Manager `3.9.6` / VRCFury `1.1272.0` / Modular Avatar `1.14.3` / NDMF `1.9.4` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.6f1` / VRChat SDK `3.10.1` / Gesture Manager `3.9.7` / VRCFury `1.1279.0` / Modular Avatar `1.12.5` / NDMF `1.7.10` / wholesome SPS Configurator `2.0.11`

## クイックスタート

![image](/split.png)

1. Unityプロジェクトに`Assets/nupamo/Split MMD Player`が入っていることを確認します。
2. プレビューしたいアバターを現在のシーンに配置します。アバターにはHumanoidの`Animator`が必要です。
3. InspectorでアバターGameObjectを選択し、`Tools > nupamo > Split MMD Player`を開きます。
4. `Source Avatar`で追加のアバターを設定します。
5. `Motion VMD`またはUnity `AnimationClip`、`Audio Clip`、必要に応じて`Camera VMD`と`Lip VMD`を入れます。
6. ステージや小物を使う場合は、`PMX Prop`に`.pmx`ファイルを入れます。
7. `Create Preview Scene`を押し、生成されたシーンでPlayします。
8. Gameウィンドウの`Free Aspect - Low Resolution Aspect Ratio`チェックを外します。

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
- `Animation Clip`: DancerのUnity AnimationClipモーションです。
- `Lip VMD`: リップシンク用のVMDファイルです。ない場合はMotion VMDを使用します。
- `Audio Clip`: モーションと一緒に再生するオーディオです。

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
- `Dancer Transform Offset`: Dancerごとの位置、回転、スケール補正値です。

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
