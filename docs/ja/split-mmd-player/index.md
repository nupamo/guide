---
title: Split MMD Player
description: Split MMD PlayerはVRChatユーザー向けのUnityベースMMD再生ツールです。
---

# Split MMD Player

Split MMD PlayerはVRChatユーザー向けのUnityベースMMD再生ツールです。
3分割カメラを1つの画面に表示でき、アバター制作のテスト用途にも使用できます。
Unity Editorでローカル再生するため、VRChatワールドにアップロードせずに確認できます。

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <iframe width="662" height="372" src="https://www.youtube.com/embed/LiA346I-l3M" title="Split MMD Player Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"></iframe>
</div>

## Free版

Free版は、Unity再生時に問題になる可能性があるVRChatコンポーネントを削除したSceneを生成します。
VMD、PMXファイルに対応していますが、Unity向けの追加機能は含まれていません。

## Studio版

**Studio v1.6.0**はYouTube音声、[プリセット](./presets)、[字幕](./captions)に対応します。JIZURAは実験的機能です。

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
PNG連番とFFmpegによるMP4エンコードに対応します。Windowsでは必要なFFmpegを自動で用意します。手順は[Recorder](./recorder)を参照してください。

## Editorメニュー

`Tools > nupamo > Split MMD Player`から開きます。

| メニュー | 用途 |
| --- | --- |
| Create Scene | プリセット、アバター、ステージからプレビューシーンを作成 |
| Song Presets | [曲プリセット](./presets#song-presets)の追加・編集・適用 |
| Stage Presets | [ステージプリセット](./presets#stage-presets)の追加・編集 |
| Recorder | [PNG連番とMP4の録画](./recorder) |
| Setting | FFmpegとyt-dlpを1つの設定ウィンドウで管理 |
| Language | Editor UIをEnglish / 日本語 / 한국어 / 中文に変更 |

## クイックスタート

このガイドのフィールド・ボタン名は英語UIに合わせています。

1. Humanoidのプレビュー用アバターを現在のシーンに配置し、選択します。
2. `Tools > nupamo > Split MMD Player > Create Scene`を開きます。
3. 上部の曲・ステージ[プリセット](./presets)を押すか、音声・モーション・ステージを直接指定します。
4. `Scene Name`と各Dancerの`Source Avatar`を確認します。モーションのスロットは直接変更できます。
5. Play Modeを終了して`Create Preview Scene`を押し、生成したシーンでPlayします。
6. YouTube音声は準備完了を待ちます。字幕はPlayerの`Inputs > Captions`で選択します。

`Motion Time Offset`はCreate SceneのInputsの最後にあります。

Gameウィンドウで`Low Resolution Aspect Ratios`をオフにすると、鮮明なプレビューになります。下の画像は旧バージョンのメニュー位置とGameウィンドウの解像度設定の例です。

![Gameウィンドウの解像度設定例](/split.png)

同梱サンプルはCC0ライセンスです。追加のモーション、カメラ、ステージファイルはプロジェクトの`Assets`配下に入れてから指定してください。

## Create Preview Sceneで行われること

`Scene Name`に応じて`Assets/nupamo/Split MMD Player/<Scene Name>.unity`にプレビューシーンを作成し、自動で開きます。デフォルト名は`Split MMD Player`です。

作成時には次の処理が行われます。

- 選択したアバターをプレビューシーンへ複製します。
- 複製したアバターをNDMFで一度処理し、プレビュー用に焼き込みます。
- VRChatアップロード用コンポーネント、Modular Avatar/NDMF、VRCFury、Marshmallow PBなど、プレビューの妨げになるビルド用コンポーネントを複製から削除します。
- 読み込まれたSceneとBakeされたアセットを`GeneratedAssets`配下に生成します。

元のシーン上のアバターは変更されません。既存のプレビューシーンがある場合は確認してから上書きされ、そのシーンの生成アセットは`GeneratedAssets/<Scene Name>`で管理します。
