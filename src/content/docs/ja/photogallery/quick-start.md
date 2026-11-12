---
title: 最初のギャラリー作成
description: Sceneに写真ギャラリーを素早く配置する方法
---

# 最初のギャラリー作成

![image](/photogallery.png)

このページでは、写真ギャラリーを最も早く作成する方法を説明します。

## 1. PhotoGalleryプレハブの配置

Projectウィンドウで`Assets/nupamo/AutoResize/PhotoGallery.prefab`を見つけます。

このプレハブをSceneまたはHierarchyウィンドウにドラッグします。

## 2. 写真の追加

配置した`PhotoGallery`オブジェクトを選択します。

Inspectorの`Photos`リストに、表示したい写真テクスチャを入れます。横向きと縦向きの写真を混ぜてもかまいません。

写真を入れると、ギャラリーの子オブジェクトが自動的に生成され、各写真が額縁に適用されます。

## 3. 額縁プレハブとマテリアルの確認

デフォルトの`PhotoGallery.prefab`には、`Photo Frame Prefab`と`Shared Frame Material`がすでに設定されています。

空の場合は、以下のように設定してください。

- `Photo Frame Prefab`: `Assets/nupamo/AutoResize/PhotoFrame Pro.prefab`
- `Shared Frame Material`: `Preset Opaque.mat`または自作の額縁マテリアル

## 4. 配置の調整

Inspectorで以下の値を調整します。

- `Row Count`: 1行に何枚配置するかを決定します。
- `Layout Direction`: 写真を横方向に先に埋めるか、縦方向に先に埋めるかを決定します。
- `Gap`: 額縁間の間隔を調整します。
- `Slot Size`: 各写真スロットの基本配置サイズを調整します。

## 5. 写真を一度に追加する

Projectウィンドウで複数の写真テクスチャを選択し、`PhotoGallery`のInspectorで`Capture Selected Textures`をクリックします。

次に`Add Captured Textures`をクリックすると、選択した写真が`Photos`リストに一度に追加されます。

上部メニューの`Tools > nupamo > Capture Selected Textures`も同じ機能です。

## 6. 壁にスナップする

スナップしたいオブジェクトにはコライダー（Collider）が必要です。

`PhotoGallery`が壁の方向を向くように配置し、`Snap Children To Wall`ボタンを押すと、各額縁が壁のコライダー表面に合わせて配置されます。

詳細な設定については、[ギャラリーの配置調整](./photo-gallery.md)を参照してください。
