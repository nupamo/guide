---
title: 调整画廊布局
description: PhotoGallery 组件的主要选项说明
---

# 调整画廊布局

`PhotoGallery` 组件可自动排列多张照片。添加照片或修改选项后，场景中的相框会更新。

## Photos

画廊中要显示的照片纹理列表。

相框按列表中的顺序创建。更改顺序后，画廊中的照片顺序也会随之改变。

## Gap

相框之间的间距。

- X：水平间距
- Y：垂直间距

如果照片重叠，请增大数值；如果希望排列更紧密，请减小数值。

## Slot Size

每张照片占用的基本布局尺寸。

`Frame Scale` 是相框预制体的实际大小，而 `Slot Size` 是计算画廊布局间距时使用的基准尺寸。需要分别调整相框实际大小和行间距时，这个选项很有用。

## Row Count

每行排列数量的基准值。

例如，有 10 张照片且 `Row Count` 为 2 时，会排列成两行的画廊。

## Layout Direction

照片的填充方向。

- `Horizontal`：优先横向填充。
- `Vertical`：优先纵向填充。

希望照片在墙面上横向展开时，可使用 `Horizontal`；需要纵向较长的展示布局时，可使用 `Vertical`。

## Expand Direction

增加照片时，设置以 `PhotoGallery` 对象的当前位置为基准向哪个方向扩展。

- `Center`：整个画廊保持居中对齐。
- `Expand Right`：第一列位于当前位置，并向右扩展。
- `Expand Left`：第一列位于当前位置，并向左扩展。

## Frame Position / Rotation / Scale

每个槽位中 `PhotoFrame` 的位置、旋转和大小。

大多数情况下，默认值即可。如果相框陷入墙内或悬浮在墙外，请尝试调整 `Frame Position` 的 Z 值。

## Additional Child Prefab

附加到每个照片槽位中的额外预制体。

例如，需要为每张照片添加小标签、装饰对象或灯光时，可以使用此选项。

使用额外预制体后，可通过 `Additional Position`、`Additional Rotation`、`Additional Scale` 调整位置和大小。

## Reset 按钮

根据当前设置重新创建画廊的子对象。

更换预制体后，或布局出现异常时，请使用此按钮。

## Snap Children To Wall 按钮

将每个相框吸附到墙面的 Collider 上。

使用条件如下。

- 墙面对象必须有 Collider。
- `PhotoGallery` 对象必须朝向要吸附到的墙面。
- 如果相框的正反方向不正确，请将 `PhotoGallery` 对象旋转 180 度后重试。
