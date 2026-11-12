---
title: Create First Gallery
description: How to quickly place a photo gallery in the Scene
---

# Create First Gallery

![image](/photogallery.png)

This page explains the fastest way to create a single photo gallery.

## 1. Place the PhotoGallery Prefab

Find `Assets/nupamo/AutoResize/PhotoGallery.prefab` in the Project window.

Drag this prefab into the Scene or Hierarchy window.

## 2. Add Photos

Select the placed `PhotoGallery` object.

Add the photo textures you want to display into the `Photos` list in the Inspector. You can mix landscape and portrait photos.

When you add photos, gallery child objects are automatically generated, and each photo is applied to a frame.

## 3. Check Frame Prefab and Material

The default `PhotoGallery.prefab` already has the `Photo Frame Prefab` and `Shared Frame Material` configured.

If they are empty, add them as follows:

- `Photo Frame Prefab`: `Assets/nupamo/AutoResize/PhotoFrame Pro.prefab`
- `Shared Frame Material`: `Preset Opaque.mat` or your custom frame material

## 4. Adjust Layout

Adjust the following values in the Inspector:

- `Row Count`: Determines how many photos to place per row.
- `Layout Direction`: Determines whether to fill horizontally or vertically first.
- `Gap`: Adjusts the spacing between frames.
- `Slot Size`: Adjusts the base placement size of each photo slot.

## 5. Add Photos All at Once

Select multiple photo textures in the Project window, then click `Capture Selected Textures` in the `PhotoGallery` Inspector.

Next, click `Add Captured Textures`, and the selected photos will be added to the `Photos` list all at once.

The same feature is available via the top menu under `Tools > nupamo > Capture Selected Textures`.

## 6. Snap to Wall

The object you want to snap to must have a Collider.

Place the `PhotoGallery` so it faces the wall, then click the `Snap Children To Wall` button. Each frame will snap to the wall's Collider surface.

For detailed settings, please refer to [Adjust Layout](./photo-gallery.md).
