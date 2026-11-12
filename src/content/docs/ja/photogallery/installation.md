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
- `PhotoFrame Pro.prefab`: フレーム、ガラス効果が含まれた高機能な額縁プレハブ
- `PhotoFrame Lite.prefab`: 写真と余白のみの軽量な額縁プレハブ
- `Preset Lite.mat`, `Preset Opaque.mat`, `Preset Transparent.mat`: すぐに使えるマテリアルプリセット
- `Source`: シェーダー、メッシュ、基本テクスチャが入っているフォルダ
- `Runtime`, `Editor`: アセットの動作に必要なスクリプトフォルダ

一般ユーザーは、主に`PhotoGallery.prefab`、`PhotoFrame` プレハブ、および`Preset`マテリアルを使用します。