---
title: フレームマテリアルの装飾
description: ProとLiteシェーダーマテリアルの調整方法
---

# フレームマテリアルの装飾

フレームの形状はマテリアルで調整します。デフォルトのプリセットを複製して使用することをお勧めします。

## プリセットの複製

1. Projectウィンドウで`Preset Lite.mat`、`Preset Opaque.mat`、または`Preset Transparent.mat`を選択します。
2. `Ctrl + D`で複製します。
3. 複製したマテリアルの名前を任意の名前に変更します。
4. マテリアルを適用します。
    - PhotoGallery: `PhotoGallery`の`Shared Frame Material`に新しいマテリアルを入れます。
    - Shaderのみ使用: `PhotoFrame Pro`または`PhotoFrame Lite`プレハブの`Material`に新しいマテリアルを入れます。

## LiteとProの違い

### Lite
- デフォルトのUnity `Cube`ベース、画像比率に応じて自動的にサイズ調整
- 配置設定
- マージン設定

### Pro
- `Custom Mesh`ベース、画像比率に応じて自動的にサイズ調整され、フレームが突出
- 配置設定
- マージン設定 + インナーシャドウ
- フレーム設定
- ガラス効果
- 透明度設定
