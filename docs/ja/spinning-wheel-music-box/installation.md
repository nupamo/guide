---
title: ワールドへの設置
description: 糸車オルゴールをVRChatワールドに入れて設定する方法
---

# ワールドへの設置

## 必要なもの

- VRChat Creator Companionで作ったWorldsプロジェクト
- Unity `2022.3.22f1`、VRChat SDK Worlds `3.10.3` で動作確認しています。
- TextMesh Pro（Unity標準パッケージ）

## 1. パッケージのインポート

`SpinningWheelMusicBox.unitypackage` をプロジェクトにインポートします。

必要なMMLパーサーと音の聞き取り用シェーダー（MML Transcriber）も入っているので、ほかに入れるものはありません。

## 2. プレハブの配置

`Assets/nupamo/Spinning Wheel Music Box/Spinning Wheel Music Box.prefab` をSceneにドラッグして、テーブルの上に置きます。

- ハンドル側がプレハブの **-Z** 方向です。人が立つ側に向けてください。
- 箱の幅は約0.5 mで、操作画面は箱の上約0.4 mに浮かんでいます。
- 操作画面は約2.2 m以内に近づくと現れ、2.8 mより離れると消えます。

## 3. 反射の確認

金属部品が暗く見える場合は、近くにReflection Probeを置いてBakeしてください。

## プレビュー

`Assets/nupamo/Spinning Wheel Music Box/Demo/Spinning Wheel Music Box Demo.unity` を開いてPlay（ClientSim）を押すと、すぐに確認できます。

Unity EditorのClientSimはYouTubeのアドレスを直接開けません。かわりに、Play中にYouTubeリンク欄へアドレスを貼ると、エディター専用スクリプトがローカルのyt-dlpで再生できるアドレスに変換します。欄の文字が変わってから `● 録音` を押してください。アップロードしたワールドではVRChatがアドレスを処理するので、この手順はありません。

## 設定

プレハブのルートにあるオルゴールのコンポーネントを選ぶと、Inspectorに2つの項目が表示されます。

### Start mode

インスタンスが最初に開いたときの再生方法です。

- `Manual`（初期値）：ハンドルを回すまで音は鳴りません。
- `Auto`：最初の曲を自動でくり返し再生します。

### Songs

リストにいつも入っている曲です。曲ごとにタイトルとマビノギMML（6000文字まで）を入れます。

- `+ Add song` で追加、`▲` で上へ移動、`✕` で削除します。
- 初期状態でパブリックドメインの3曲（サティ「ジムノペディ第1番」、サティ「ジュ・トゥ・ヴ」、ドビュッシー「月の光」）が入っています。
- 公開ワールドには、使う権利のある曲だけを入れてください。

そのほかの値はいちばん下の `Internal` を開くと見られますが、ふつうは変える必要はありません。

## 1つのワールドに複数置く

オルゴールを複数置いてもかまいません。みんなが保存した曲のリストは、同じワールド内のすべてのオルゴールで共有されます。
