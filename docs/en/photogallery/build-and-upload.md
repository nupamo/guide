---
title: Build and Upload
description: Settings to check before building your VRChat world
---

# Check Before Build

Please verify your gallery and photo settings before uploading the world.

## Build Photo Max Size

You can find the `Build Photo Max Size` option in the Advanced section of `PhotoGallery`.

- `None`: Uses the original photo size as-is.
- `1024` / `2048`: Resizes photos so their longest side fits within 1024 or 2048 pixels during the build process.

If you have a lot of photos or the original images are very large, `1024` or `2048` is recommended. This helps reduce world file size and memory usage.

If clarity is paramount and you do not have many photos, you may use `None`.

## Photo Texture Settings

This asset automatically adjusts the texture's `Non-Power of 2` setting to `None` when you add a photo.

Manual configuration is required when using the frame on its own.

## No Udon Synchronization Features Included

This asset is intended for displaying photos pre-placed by the world creator.

It does not include features for users to change photos in-game or synchronize photos over the network.
