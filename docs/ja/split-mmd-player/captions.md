---
title: Split MMD Player 字幕とJIZURA
description: 字幕と実験的なJIZURA連携を使用する方法です。
---

# 字幕とJIZURA

YouTube字幕または指定したファイルを表示します。複数のカメラViewでも画面全体に一度だけ表示し、録画にも含めます。

## 字幕を表示する

1. Playerの`Inputs > YouTube URL`にリンクを入力し、音声の準備を待ちます。
2. `Inputs > Captions > Display`で表示方式を選択します。

| Display | 表示 |
| --- | --- |
| Off | 字幕を非表示 |
| Subtitles | 通常字幕。初期設定 |
| JIZURA | 音楽に合わせた文字モーション。実験的機能 |

`Subtitle Language`には動画で利用できる字幕だけが表示されます。初期設定の`Automatic (Original)`は原語 → Editorの言語 → 英語の順に試します。選択した言語がなければ字幕ファイルを指定してください。

## 字幕ファイル {#subtitle-files}

SRT、VTT、字幕JSONを含む`TextAsset`を`Subtitle File (Optional)`に指定します。SRT/VTTは`.txt`で保存するとUnityで読み込めます。[曲プリセット](./presets#song-presets)にも保存できます。

ファイルはYouTube字幕より優先します。空欄に戻すとYouTube字幕を取得します。ローカル音声にも使用できます。

## JIZURA — 実験的機能

[852waのJIZURA](https://github.com/852wa/JIZURA)を基に、字幕のレイアウトとモーションを自動構成します。Split MMD Playerの連携は**実験的機能**です。

- `Display`で`JIZURA`を選択します。`New JIZURA`で構成を変更できます。
- **Windows 64ビットUnity EditorとMicrosoft WebView2 Runtime**が必要です。未導入なら`Install WebView2 Runtime`でインストールします。
- 準備中は通常字幕を表示します。JIZURAはEditor・Recorderで使用できます。

## 同期とトラブル対処

字幕は音声の時刻に従います。`Motion Time Offset`は字幕の時刻には適用しません。

字幕がなければファイルを指定します。取得エラーは`Setting`確認後、`Retry Captions`で再試行してください。JIZURAの録画は準備完了後に開始します。[Recorderガイド](./recorder)
