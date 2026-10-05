---
title: Split MMD Player
description: Split MMD Player is a Unity-based MMD playback tool for VRChat users.
---

# Split MMD Player

Split MMD Player is a Unity-based MMD playback tool for VRChat users.
It can show a three-way split camera view on one screen, and it can also be used for avatar production testing.
Play locally in the Unity Editor to preview your avatars without uploading a VRChat world.

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <iframe width="662" height="372" src="https://www.youtube.com/embed/LiA346I-l3M" title="Split MMD Player Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"></iframe>
</div>

## Free Version

The Free version creates a Scene with VRChat components removed to avoid issues during Unity playback.
It supports VMD and PMX files, but does not include Unity-specific extra features.

## Studio Version

**Studio v1.6.0** adds YouTube audio, [presets](./presets), and [captions](./captions). JIZURA is experimental.

The Studio version was additionally developed to use the options configured on VRChat avatars as-is, rather than only playing motions.
Through Gesture Manager, you can use Modular Avatar-based wardrobe toggles, SPS, Light limit, and similar features as they are, assuming they are already configured on the avatar.

In addition, Studio can play Unity `AnimationClip` motions as well as VMD motions.
You can change motions and adjust parameters during Play Mode, and changed parameters are remembered after leaving Play Mode.
By creating multiple Player components, you can change songs during Play Mode. Dancer and Audio components are shared, and Dancer Transform Offset can be used to adjust each dancer's position and rotation.
Builder stage settings are Scene-based, and the Day/Night/Summer presets let you quickly choose the default atmosphere.

It has been tested in the following three environments. Behavior in older environments is not guaranteed. If something breaks, please update the related packages to the latest versions.

- Latest as of 2026-07-05: Unity `2022.3.22f1` / VRChat SDK `3.10.4` / Gesture Manager `3.9.8` / VRCFury `1.1348.0` / Modular Avatar `1.17.1` / NDMF `1.17.1` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.22f1` / VRChat SDK `3.10.0` / Gesture Manager `3.9.6` / VRCFury `1.1272.0` / Modular Avatar `1.14.3` / NDMF `1.9.4` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.6f1` / VRChat SDK `3.10.1` / Gesture Manager `3.9.7` / VRCFury `1.1279.0` / Modular Avatar `1.12.5` / NDMF `1.7.10` / wholesome SPS Configurator `2.0.11`

## Split MMD Recorder

Supports recording in Normal, SBS, and VR180 modes. This feature lets you capture frames at resolutions larger than your monitor with consistent framing.
Capture PNG sequences and encode MP4 videos with FFmpeg. On Windows, missing FFmpeg is prepared automatically. See [Recorder](./recorder) for the steps.

## Editor menu

Open `Tools > nupamo > Split MMD Player`.

| Menu | Purpose |
| --- | --- |
| Create Scene | Create a preview scene from presets, avatars and a stage |
| Song Presets | Add, edit and apply [song presets](./presets#song-presets) |
| Stage Presets | Add and edit [stage presets](./presets#stage-presets) |
| Recorder | [Record PNG sequences and MP4 videos](./recorder) |
| Setting | Manage FFmpeg and yt-dlp in one settings window |
| Language | Choose English / 日本語 / 한국어 / 中文 for the Editor UI |

## Quick Start

Field and button names in this guide use the English UI.

1. Place and select your Humanoid preview avatars in the current scene.
2. Open `Tools > nupamo > Split MMD Player > Create Scene`.
3. Click the song and stage [preset](./presets) buttons at the top, or assign audio, motion and stage directly.
4. Check `Scene Name` and each dancer's `Source Avatar`. Motion slots remain editable.
5. Exit Play Mode, click `Create Preview Scene`, then press Play in the generated scene.
6. Wait for YouTube audio preparation. Choose captions in the Player's `Inputs > Captions`.

`Motion Time Offset` is the last Inputs field in Create Scene.

Disable `Low Resolution Aspect Ratios` in the Game window for a sharper preview. The image below shows the previous version's menu location and Game window resolution settings.

![Game window resolution settings](/split.png)

Only CC0 sample assets are included. Place additional motion, camera and stage files under the project's `Assets` folder before assigning them.

## What Create Preview Scene Does

The preview scene is created at `Assets/nupamo/Split MMD Player/<Scene Name>.unity` and opened automatically. The default name is `Split MMD Player`.

During creation, it:

- Clones the selected avatars into the preview scene.
- Processes the clones once through NDMF for preview use.
- Removes preview-blocking build/upload components from the clones, such as VRChat upload components, Modular Avatar/NDMF, VRCFury, and Marshmallow PB.
- Generates loaded Scene and baked assets under `GeneratedAssets`.

The original avatars in your scene are not modified. If the preview scene already exists, it asks for confirmation before overwriting it, and generated assets for that scene are stored under `GeneratedAssets/<Scene Name>`.
