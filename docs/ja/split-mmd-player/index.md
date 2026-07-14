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

## Free版

Free版は、Unity再生時に問題になる可能性があるVRChatコンポーネントを削除したSceneを生成します。
VMD、PMXファイルに対応していますが、Unity向けの追加機能は含まれていません。

## Studio版

Studio版は、単なる再生ではなく、VRChatアバターに設定したオプションをそのまま使うことを目的として追加開発されました。
Gesture Managerを通して、Modular Avatarベースの衣装切り替え、SPS、Light limitなどをそのまま使用できます。もちろん、事前に設定されていることが前提です。

さらにStudioでは、VMDモーションだけでなくUnity `AnimationClip`モーションも再生できます。
Play Mode中にモーションを変更したりパラメーターを調整したりでき、変更したパラメーターはPlay Mode終了後も保持されます。
複数のPlayerコンポーネントを作成すると、Play Mode中に曲を変更できます。DancerとAudioコンポーネントは共有され、Dancer Transform OffsetでDancerごとの位置や回転も補正できます。
Builderのステージ設定はSceneベースで動作し、Day/Night/Summer Presetで基本の雰囲気をすばやく選択できます。

次の3つの環境でテストされています。より古い環境での動作は保証しません。壊れる場合は、関連パッケージを最新に更新してください。

- 2026-07-05時点の最新環境: Unity `2022.3.22f1` / VRChat SDK `3.10.4` / Gesture Manager `3.9.8` / VRCFury `1.1348.0` / Modular Avatar `1.17.1` / NDMF `1.17.1` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.22f1` / VRChat SDK `3.10.0` / Gesture Manager `3.9.6` / VRCFury `1.1272.0` / Modular Avatar `1.14.3` / NDMF `1.9.4` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.6f1` / VRChat SDK `3.10.1` / Gesture Manager `3.9.7` / VRCFury `1.1279.0` / Modular Avatar `1.12.5` / NDMF `1.7.10` / wholesome SPS Configurator `2.0.11`

## Split MMD Recorder

Normal、SBS、VR180方式の録画に対応しています。この機能を使うと、モニターより大きな解像度でも一貫したフレームで撮影できます。
画像の抽出のみ対応しているため、動画へのエンコードまで行う場合は[FFmpeg](https://ffmpeg.org/download.html)のインストールが必要です。

## クイックスタート

![image](/split.png)

1. Unityプロジェクトに`Assets/nupamo/Split MMD Player`が入っていることを確認します。
2. プレビューしたいアバターを現在のシーンに配置します。アバターにはHumanoidの`Animator`が必要です。
3. InspectorでアバターGameObjectを選択し、`Tools > nupamo > Split MMD Player`を開きます。
4. `Scene Name`に生成するプレビューシーン名を入力します。
5. `Camera VMD`、`Audio Clip`、必要に応じて`Post Process Profile`を指定します。
6. `Stage Preset`で`Day`または`Night`を選び、`Stage Scene`に使用するステージSceneを指定します。
7. PMX小物を追加する場合は`Add PMX Prop`を押し、`PMX Prop`スロットに`.pmx`ファイルを入れます。
8. 各Dancerの`Source Avatar`を確認し、`Motion Animation`または`Motion VMD`を指定します。
9. Play Modeを終了した状態で`Create Preview Scene`を押し、生成されたシーンでPlayします。
10. Gameウィンドウの`Free Aspect - Low Resolution Aspect Ratio`チェックを外します。

同梱されているのはCC0ライセンスのサンプルのみです。使いたい楽曲、モーション、カメラ、ステージSceneファイルは自分で用意し、プロジェクトの`Assets`配下に入れてから指定してください。

## Create Preview Sceneで行われること

`Assets/nupamo/Split MMD Player/Split MMD Player.unity`にプレビューシーンが作成され、自動で開かれます。

作成時には次の処理が行われます。

- 選択したアバターをプレビューシーンへ複製します。
- 複製したアバターをNDMFで一度処理し、プレビュー用に焼き込みます。
- VRChatアップロード用コンポーネント、Modular Avatar/NDMF、VRCFury、Marshmallow PBなど、プレビューの妨げになるビルド用コンポーネントを複製から削除します。
- 読み込まれたSceneとBakeされたアセットを`GeneratedAssets`配下に生成します。

元のシーン上のアバターは変更されません。既存のプレビューシーンがある場合は確認してから上書きされ、`GeneratedAssets`も作り直されます。
