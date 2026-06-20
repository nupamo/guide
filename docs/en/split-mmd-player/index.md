---
title: Split MMD Player
description: Split MMD Player is a Unity-based MMD playback tool for VRChat users.
---

# Split MMD Player

Split MMD Player is a Unity-based MMD playback tool for VRChat users.
It can show a three-way split camera view on one screen, and it can also be used for avatar production testing.
Because it is used locally, you do not need to worry about license or upload policy issues.

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <iframe width="662" height="372" src="https://www.youtube.com/embed/LiA346I-l3M" title="AutoResize PhotoGallery Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"></iframe>
</div>

## Studio Version

The Studio version was additionally developed to use the options configured on VRChat avatars as-is, rather than only playing motions.
Through Gesture Manager, you can use Modular Avatar-based wardrobe toggles, SPS, Light limit, and similar features as they are, assuming they are already configured on the avatar.

In addition, Studio can play Unity `AnimationClip` motions as well as VMD motions.
You can change motions and adjust parameters during Play Mode, and changed parameters are remembered after leaving Play Mode.
By creating multiple Player components, you can change songs during Play Mode. Dancer and Audio components are shared, and Dancer Transform Offset can be used to adjust each dancer's position and rotation.
Builder stage settings are Scene-based, and the Day/Night presets let you quickly choose the default atmosphere.

It has been tested in the following three environments. Behavior in older environments is not guaranteed. If something breaks, please update the related packages to the latest versions.

- (Latest as of 2026-06-20) Unity `2022.3.22f1` / VRChat SDK `3.10.4` / Gesture Manager `3.9.8` / VRCFury `1.1341.0` / Modular Avatar `1.17.1` / NDMF `1.13.1` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.22f1` / VRChat SDK `3.10.0` / Gesture Manager `3.9.6` / VRCFury `1.1272.0` / Modular Avatar `1.14.3` / NDMF `1.9.4` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.6f1` / VRChat SDK `3.10.1` / Gesture Manager `3.9.7` / VRCFury `1.1279.0` / Modular Avatar `1.12.5` / NDMF `1.7.10` / wholesome SPS Configurator `2.0.11`

## Quick Start

![image](/split.png)

1. Make sure the project contains `Assets/nupamo/Split MMD Player`.
2. Place the avatar you want to preview in the current scene. The avatar must have a Humanoid `Animator`.
3. Select the avatar GameObjects in the Inspector, then open `Tools > nupamo > Split MMD Player`.
4. Enter the preview scene name in `Scene Name`.
5. Assign `Camera VMD`, `Audio Clip`, and optionally `Post Process Profile`.
6. Choose `Day` or `Night` in `Stage Preset`, then assign the stage scene to `Stage Scene`.
7. To add PMX props, click `Add PMX Prop`, then assign `.pmx` files to the `PMX Prop` slots.
8. Check each dancer's `Source Avatar`, then assign `Motion Animation` or `Motion VMD`.
9. Exit Play Mode, click `Create Preview Scene`, then press Play in the generated scene.
10. In the Game window, uncheck `Free Aspect - Low Resolution Aspect Ratio`.

Only CC0 sample assets are included. Prepare your own song, motion, camera, and stage Scene files as needed, place them under the project's `Assets` folder, then assign them in the window.

## What Create Preview Scene Does

The preview scene is created at `Assets/nupamo/Split MMD Player/Split MMD Player.unity` and opened automatically.

During creation, it:

- Clones the selected avatars into the preview scene.
- Processes the clones once through NDMF for preview use.
- Removes preview-blocking build/upload components from the clones, such as VRChat upload components, Modular Avatar/NDMF, VRCFury, and Marshmallow PB.
- Generates loaded Scene and baked assets under `GeneratedAssets`.

The original avatars in your scene are not modified. If the preview scene already exists, it asks for confirmation before overwriting it, and `GeneratedAssets` is rebuilt.

## Component Options

### Inputs

- `Camera VMD`: MMD camera VMD file.
- `Dancers`: List of dancers used for playback.
- `Name`: Display name for the dancer.
- `Animator`: Humanoid Animator used as the dancer.
- `Motion VMD`: Motion VMD file for the dancer.
- `Animation Clip`: Unity AnimationClip motion for the dancer.
- `Lip VMD`: VMD file used for lip sync. If empty, Motion VMD is used.
- `Audio Clip`: Audio played with the motion.

### Views

- `Active`: Whether the view is enabled.
- `Type`: Camera type for the view.
- `Target Character`: Dancer targeted by Follow/Orthographic views.

### Playback

- `Play On Start`: Whether playback starts automatically on Play.
- `Loop`: Whether playback repeats.
- `Start Time`: Playback start time. If it is after End Time, the motion stays still.
- `End Time`: Playback end time. Set to `-1` to disable.
- `Motion Time Offset`: Motion timing offset against audio.

### VMD Retargeting

- `Enable Foot IK`: Whether foot IK is applied.
- `Copy Foot IK Rotation`: Whether foot IK rotation is copied.
- `Motion Scale`: Scale for motion translation.
- `Camera Scale`: Scale for camera translation.
- `Dancer Transform Offset`: Per-dancer position, rotation, and scale offset.

### Runtime Cameras

- `Show Runtime UI`: Whether the runtime camera UI is shown.
- `Field Of View`: Field of view for Follow cameras.
- `Position Smooth Time`: Position smoothing time for Follow cameras.
- `Front Distance`: Distance for the Front view.
- `Front Height Offset`: Height offset for the Front view.
- `Front Angle`: Angle offset for the Front view.
- `Back Distance`: Distance for the Back view.
- `Back Height Offset`: Height offset for the Back view.
- `Back Angle`: Angle offset for the Back view.

### Orthographic Preset

- `Height Offset`: Height offset for the Orthographic view.
- `Angle`: Angle offset for the Orthographic view.
- `Size`: Orthographic camera size.
