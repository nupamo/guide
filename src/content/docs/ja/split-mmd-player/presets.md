---
title: Split MMD Player プリセット
description: 曲とステージのプリセットを保存・適用する方法です。
---

# プリセット

曲とステージを別々に保存し、組み合わせて使用します。プリセットなしでCreate Sceneに直接入力しても使用できます。

## 曲プリセット {#song-presets}

1. `Tools > nupamo > Split MMD Player > Song Presets`を開きます。
2. `Add Song`で追加し、`Name`を入力します。
3. 音声、カメラVMD、ダンサー別のモーション・リップシンクを指定します。必要なら字幕ファイル、`Motion Time Offset`、`VMD Retargeting`も設定します。

`YouTube URL`は`Audio Clip`より、`Motion Animation`は`Motion VMD`より優先します。`Lip VMD`が空欄ならモーションVMD内のリップシンクを使用します。

字幕は`Subtitle File (Optional)`にText Assetとして保存します。空欄のプリセットを適用すると以前のファイルも解除されます。Playerの字幕表示・言語設定は保持されます。[字幕ファイル](./captions#subtitle-files)

既存のダンサーが多い場合はモーションを繰り返します。例：`A / B` → `A / B / A`。追加されたスロットにはアバターを接続してください。

## ステージプリセット {#stage-presets}

1. `Tools > nupamo > Split MMD Player > Stage Presets`を開きます。
2. Day / Night / Summerを編集するか、`Add Stage`で追加します。
3. `Name`、`Stage Scene`、`Post Process Profile`を指定します。

曲・モーション・アバター設定は保持されます。空欄のプリセットスロットは、適用時に対応する入力も空欄にします。

## 適用する

- **新しいシーン：** Create Scene上部の曲・ステージボタンを押すとすぐに適用します。適用後も直接変更できます。
- **既存のPlayer：** Play Modeを終了してPlayerを選択し、Song Presetsの`Apply to Selected Player`を押します。アバター接続とTransformは保持されます。

Create Sceneの`Edit`から編集画面を開けます。どちらのプリセットも`Duplicate`で複製、`Remove`で削除します。

## 保存場所

`Assets/nupamo/Split MMD Player/Editor/`の`SongPresets.asset`と`StagePresets.asset`に保存されます。参照先のファイルと一緒に保管してください。
