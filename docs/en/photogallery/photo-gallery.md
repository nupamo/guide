---
title: Adjust Layout
description: Explanation of key options in the PhotoGallery component
---

# Adjust Layout

The `PhotoGallery` component automatically arranges multiple photos. When you add photos or change options, the frames in the Scene are updated.

## Photos

The list of photo textures to display in the gallery.

Frames are created in the order they appear in the list. Changing the order will change the order of photos in the gallery.

## Gap

The spacing between frames.

- X: Horizontal gap
- Y: Vertical gap

Increase the value if photos overlap, and decrease it if you want them packed closer together.

## Slot Size

The base placement size each photo occupies.

`Frame Scale` is the actual size of the frame prefab, while `Slot Size` is the reference size used when calculating gallery placement spacing. It is useful when you want to adjust the actual size of the frame and the row spacing separately.

## Row Count

The reference number to place per row.

For example, if you have 10 photos and the `Row Count` is 2, it will be arranged as a 2-row gallery.

## Layout Direction

The direction to fill photos.

- `Horizontal`: Fills horizontally first.
- `Vertical`: Fills vertically first.

Try using `Horizontal` if you want to spread photos widely across a wall, or `Vertical` if you need a tall exhibition format.

## Frame Position / Rotation / Scale

The position, rotation, and scale of the `PhotoFrame` placed inside each slot.

Defaults are sufficient for most cases. If the frame looks too buried or floating from the wall, try adjusting the Z value of `Frame Position`.

## Additional Child Prefab

An additional prefab to attach to each photo slot.

This can be used, for example, if you want to place a small label, decorative object, or light next to every photo.

When using an additional prefab, you can adjust its position and size with `Additional Position`, `Additional Rotation`, and `Additional Scale`.

## Reset Button

Re-creates the gallery children based on the current settings.

Please use this when you change the prefab or if the layout gets unexpectedly tangled.

## Snap Children To Wall Button

Snaps each frame to a wall Collider.

Conditions for use are:

- The wall object must have a Collider.
- The `PhotoGallery` object must be facing the wall you want to snap it to.
- If the front/back direction of the frame feels wrong, try rotating the `PhotoGallery` object 180 degrees and try again.
