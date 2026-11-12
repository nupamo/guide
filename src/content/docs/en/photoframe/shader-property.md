---
title: Shader Properties
description: Description of AutoResize PhotoFrame material Inspector properties
---

# Shader Properties

This document explains the settings visible in the `AutoResize PhotoFrame Pro` and `AutoResize PhotoFrame Lite` materials.

## Surface

Visible only in Pro materials. Determines the rendering mode of the material.

- `Opaque`: Opaque rendering. Recommended in most cases.
- `Transparent`: Transparent rendering. Used when you want a strong glass or translucent effect.

## Image

Settings for the photo itself.

### Main Texture

The photo texture to display.

When using `PhotoGallery`, each photo is automatically inserted from the `Photos` list. If you are placing a single frame manually, you can put the photo here.

### Main Color

The color multiplied with the photo.

The default is white. Adjust this when you want to darken the photo or tint it slightly with a specific color.

### Image Unlit

Determines how much the photo is unaffected by lighting.

- `0`: Highly affected by world lighting.
- `1`: Less affected by lighting, making the photo appear bright on its own.

If the photo looks too dark in a VRChat world, try increasing this value.

In Lite, an item with the same role may appear as `Image Unlit` or `Lit`.

## Frame

Visible only in Pro materials.

Unchecking the box on the left disables the frame effect.

### Frame Size

The thickness of the picture frame.

Higher values make the frame around the photo thicker.

### Frame Texture

The texture to use for the frame.

You can add images like wood grain, metal, or paper textures.

### Frame Normal Map

The normal map that expresses the surface bumps of the frame.

Used to make wood grain or 3D effects look stronger.

### Frame Color

The frame color.

If there is a `Frame Texture`, this color is multiplied by the texture color.

### Frame Bump Scale

The intensity of the frame normal map.

Higher values make the surface bumps look stronger.

### Frame Bevel

The intensity of the fake bevel effect on the frame edges.

If the frame border looks flat, increasing this value adds a 3D effect.

### Bevel Highlight

The intensity of the bright part of the frame bevel.

### Bevel Shadow

The intensity of the dark part of the frame bevel.

### Inner Shadow

The shadow intensity inside the photo and margin.

Gives the impression that the photo is slightly recessed into the frame.

### Raised Mesh Depth

The depth to which the frame appears to protrude forward.

The effect is most visible when used with the protruding mesh of the default `PhotoFrame` prefab.

### Frame Unlit

Determines how much the frame is unaffected by lighting.

- `0`: Affected by world lighting.
- `1`: Appears bright on its own.

## Margin

Settings for the margin around the photo.

Available in both Pro and Lite.

### Margin Size

The size of the margin around the photo.

Higher values widen the space between the photo and the frame.

### Margin Texture

The texture to use for the margin.

Used to add a paper texture or pattern.

### Margin Color

The margin color.

If white, it creates a typical photo mat feel, and by lowering the transparency, you can allow the background to show through.

### Margin Shadow

The intensity of the shadow inside the margin.

Adds depth to the edges of the photo or inside the frame.

### Margin Shadow Size

The width of the margin shadow.

Higher values spread the shadow wider.

### Margin Unlit

Determines how much the margin is unaffected by lighting.

## Glass

Visible only in Pro materials.

Unchecking the box on the left disables the glass effect.

### Glass Strength

The overall intensity of the glass effect.

Higher values make the glass tint and reflection more visible.

### Glass Tint

The glass color.

Adding a slight blue or gray tint can create the feel of a thin layer of glass over the photo.

### Glass Glare

The intensity of the glass reflection.

Higher values make the diagonal highlights and edge sparkles stronger.

### Glass Glare Size

The width of the reflection.

Higher values spread the highlight wider.

### Glass Smoothness

The smoothness of the glass.

Higher values make the specular reflection appear smoother.

## Alignment

Determines where the photo will stick within the display area.

If the photo ratio and the frame ratio differ, there may be empty space. Alignment options are applied in this case.

### Vertical align

Vertical alignment.

- `Top`: Top alignment
- `Center`: Center alignment
- `Bottom`: Bottom alignment

### Horizontal align

Horizontal alignment.

- `Left`: Left alignment
- `Center`: Center alignment
- `Right`: Right alignment

## Ratio

Sets how the photo ratio is determined.

### Aspect ratio from texture

Automatically uses the actual aspect ratio of the photo texture.

It is recommended to leave this on in most cases.

### Set ratio

The ratio to use manually if `Aspect ratio from texture` is turned off.

Examples:

- 16:9 landscape photo: `16, 9`
- Square: `1, 1`
- 9:16 portrait photo: `9, 16`

Used when you want it to always appear at the same ratio, like a specific size poster frame.