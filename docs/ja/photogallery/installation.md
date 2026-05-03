---
title: インストール
description: BOOTHからダウンロードしたUnityPackageをプロジェクトにインポートする方法
---

# インストール

BOOTHからダウンロードした`.unitypackage`ファイルをUnityプロジェクトにインポートします。

## インポート方法

1. Unityで使用するVRChatワールドプロジェクトを開きます。
2. 上部メニューから `Assets > Import Package > Custom Package...` を選択します。
3. BOOTHからダウンロードした`.unitypackage`ファイルを選択します。
4. Importウィンドウで含まれているファイルを確認します。
5. `Import`ボタンをクリックします。

## パッケージ構成

インポート後、基本ファイルは`Assets/nupamo/AutoResize`フォルダに入ります。

- `PhotoGallery.prefab`: 複数の写真を配置するための基本ギャラリープレハブ
- `PhotoFrame.prefab`: 1枚の写真を表示する基本額縁プレハブ
- `Preset 1.mat`, `Preset 2.mat`: すぐに使用できる額縁マテリアルプリセット
- `Source`: シェーダー、メッシュ、基本テクスチャが含まれるフォルダ
- `Runtime`, `Editor`: アセットの動作に必要なスクリプトフォルダ

一般ユーザーは、主に`PhotoGallery.prefab`、`PhotoFrame.prefab`、および`Preset`マテリアルを使用します。