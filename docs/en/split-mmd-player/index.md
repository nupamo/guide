---
title: Split MMD Player
description: Split MMD Player is a Unity-based MMD playback tool for VRChat users.
---

# Split MMD Player

Split MMD Player is a Unity-based MMD playback tool for VRChat users.
It can show a three-way split camera view on one screen, and it can also be used for avatar production testing.
Because it is used locally, you do not need to worry about license or upload policy issues.

Tested with Unity `2022.3.6f1` and `2022.3.22f1`.

## Quick Start

![image](/split.png)

1. Make sure the project contains `Assets/nupamo/Split MMD Player`.
2. Place the avatar you want to preview in the current scene. The avatar must have a Humanoid `Animator`.
3. Select the avatar GameObjects in the Inspector, then open `Tools > nupamo > Split MMD Player`.
4. Configure additional avatars in `Source Avatar`.
5. Assign `Motion VMD`, `Audio Clip`, and optionally `Camera VMD` and `Lip VMD`.
6. To use a stage or prop, assign a `.pmx` file to `PMX Prop`.
7. Click `Create Preview Scene`, then press Play in the generated scene.
8. In the Game window, uncheck `Free Aspect - Low Resolution Aspect Ratio`.

Only CC0 sample assets are included. Prepare your own song, motion, camera, and stage files as needed, place them under the project's `Assets` folder, then assign them in the window.

## What Create Preview Scene Does

The preview scene is created at `Assets/nupamo/Split MMD Player/Split MMD Player.unity` and opened automatically.

During creation, it:

- Clones the selected avatars into the preview scene.
- Processes the clones once through NDMF for preview use.
- Removes preview-blocking build/upload components from the clones, such as VRChat upload components, Modular Avatar/NDMF, VRCFury, and Marshmallow PB.
- Assigns the selected VMD, audio, and PMX Prop paths to the component.
- Generates loaded PMX Props and baked assets under `GeneratedAssets`.

The original avatars in your scene are not modified. If the preview scene already exists, it is overwritten, and `GeneratedAssets` is rebuilt.

## Component Options

### Inputs

- `Camera VMD`: MMD camera VMD file.
- `Dancers`: List of dancers used for playback.
- `Name`: Display name for the dancer.
- `Animator`: Humanoid Animator used as the dancer.
- `Motion VMD`: Motion VMD file for the dancer.
- `Lip VMD`: VMD file used for lip sync. If empty, Motion VMD is used.

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
