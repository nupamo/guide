---
title: Decorating Frame Materials
description: How to adjust Pro and Lite shader materials
---

# Decorating Frame Materials

The appearance of the frame is adjusted in the material. It is recommended to duplicate and use the default presets.

## Duplicating Presets

1. Select `Preset Lite.mat`, `Preset Opaque.mat`, or `Preset Transparent.mat` in the Project window.
2. Duplicate it by pressing `Ctrl + D`.
3. Rename the duplicated material to your desired name.
4. Apply the material.
    - PhotoGallery: Put the new material in `Shared Frame Material` of `PhotoGallery`.
    - Using only Shader: Put the new material in `Material` of the `PhotoFrame Pro` or `PhotoFrame Lite` prefab.

## Difference between Lite and Pro

### Lite
- Based on default Unity `Cube`, automatically resizes based on image ratio
- Alignment settings
- Margin settings

### Pro
- Based on `Custom Mesh`, automatically resizes based on image ratio and the frame protrudes
- Alignment settings
- Margin settings + inner shadow
- Frame settings
- Glass effect
- Transparency settings
