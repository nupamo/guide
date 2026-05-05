---
title: Installation
description: How to import the UnityPackage downloaded from BOOTH into your project
---

# Installation

Import the `.unitypackage` file downloaded from BOOTH into your Unity project.

## How to Import

1. Open the VRChat world project you will use in Unity.
2. From the top menu, select `Assets > Import Package > Custom Package...`.
3. Select the `.unitypackage` file you downloaded from BOOTH.
4. Check the included files in the Import window.
5. Click the `Import` button.

## Package Structure

After importing, the main files are located in the `Assets/nupamo/AutoResize` folder.

- `PhotoGallery.prefab`: The base gallery prefab for placing multiple photos.
- `PhotoFrame Pro.prefab`: A high-performance frame prefab including frame and glass effects.
- `PhotoFrame Lite.prefab`: A lightweight frame prefab with only the photo and margins.
- `Preset Lite.mat`, `Preset Opaque.mat`, `Preset Transparent.mat`: Ready-to-use material presets.
- `Source`: Folder containing shaders, meshes, and default textures.
- `Runtime`, `Editor`: Folders containing scripts required for the asset to function.

General users mainly need to use `PhotoGallery.prefab`, `PhotoFrame` prefabs, and the `Preset` materials.