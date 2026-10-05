---
title: Split MMD Recorder
description: Studio v1.6.0でPNG連番とMP4を録画する方法です。
---

# Recorder

`Tools > nupamo > Split MMD Player > Recorder`で開きます。モニターより大きな解像度でPNG連番を撮影し、FFmpegが利用できればMP4にエンコードします。

## 録画手順

1. 録画する`Player`を指定します。
2. Playerコンポーネントで`Start Time`と`End Time`を設定します。`End Time`が`-1`の場合は音声の最後まで録画します。
3. YouTube音声を使う場合は準備完了を待ちます。JIZURAを選択した場合は、JIZURAの準備も待ちます。
4. `Output Mode`、出力先、解像度、`FPS`を設定します。
5. 録画ボタンを押します。準備とウォームアップ後にキャプチャを開始します。

録画中は進行状況と残り時間の目安が表示されます。`Cancel`で中止できます。録画時間は曲の長さ、解像度、FPS、アバターやエフェクト設定によって変わります。

## 設定

| 項目 | 説明 |
| --- | --- |
| Player | 録画するPlayer |
| Output Mode | Normal、SBS、VR180 |
| Output | PNG連番と動画の出力先 |
| Width / Height | Normal・SBSの出力解像度 |
| Resolution / Quality | VR180の解像度・品質プリセット |
| Output Size | VR180プリセットで決まる解像度。読み取り専用 |
| FPS | 1秒あたりの録画フレーム数 |
| Start Time / End Time | Playerで設定した範囲。Recorderでは読み取り専用 |
| FFmpeg / Setting | 検出した実行ファイルと共通ツール設定へのボタン |

`Normal`はPlayerの`2D`モード、`VR180`は`3D`モードで録画します。SBSは左右の目の映像を横に並べます。

## FFmpegとMP4

FFmpegのパスは`Split MMD Player > Setting`で設定します。YouTube音声変換とRecorderで同じ設定を使います。

Windowsではパスを空欄にするとPATHとプロジェクトに保存したツールを確認し、見つからなければ録画前に自動ダウンロードします。準備完了後、PNGのキャプチャとMP4のエンコードを行います。

macOS/LinuxではFFmpegをインストールするか、実行ファイルのパスを指定してください。利用できない場合はPNG連番のみ保存します。エンコードに失敗してもPNG連番は残ります。

## 音声と字幕

準備したYouTube音声も、ローカルの`Audio Clip`と同じように録画に使用します。再生範囲と`Motion Time Offset`はPlayerの設定に従います。

通常字幕とJIZURAは、すべてのカメラViewを合成した画面に一度だけ表示します。録画時は指定した時刻のJIZURAフレームを待ってからキャプチャします。詳しくは[字幕とJIZURA](./captions)を参照してください。
