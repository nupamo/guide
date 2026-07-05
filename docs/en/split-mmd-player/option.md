---
title: Split MMD Player Options
description: Feature reference for Split MMD Player.
---

# Options

Feature reference for Split MMD Player.

## Builder

### Inputs

- `Scene Name`: Name of the Scene to create. If it already exists, it will be overwritten.
- `Camera VMD`: MMD camera VMD file.
- `Audio Clip`: Audio played with the motion.
- `Stage Preset`: Stage preset included in the Studio version. Applied to `Stage Scene` and `Post Process Profile`.
- `Stage Scene`: Unity Scene to import into the generated Scene.
- `Post Process Profile`: Post-process preset.

### PMX Props

- Imports MMD props.

### Dancers

- `Source Avatar`: VRChat avatar GameObject to bring into the preview Scene.
- `Motion Animation`: Unity AnimationClip motion for the Dancer.
- `Motion VMD`: Motion VMD file for the Dancer.
- `Lip VMD`: VMD file for Dancer lip sync. If empty, Motion VMD is used.

---

## Component

- `Mode`: Enables SBS mode when 3D mode is selected. The camera is forced to a two-way split and simulates left and right eyes.
  - `SBS`: Select `Half` or `Full`.
  - `3D Strength`: Distance strength between the two eyes.
  - `Letterbox`: Sets the letterbox size that makes the character appear to come forward.
- `Remember Parameter Changes`: Keeps options changed during Play instead of resetting them for the next playback.
- `Show Runtime UI`: Shows the camera settings UI in the Play screen.

### Inputs

- `Audio Clip`: Audio played with the motion.
- `Post Process Profile`: Post-process preset.
- `Camera VMD`: MMD camera VMD file.

- `Dancers`: List of Dancers used for playback.
  - `Name`: Display name for the Dancer.
  - `Shared Dancer`: Selects the Dancer used by the Player.
  - `Motion Animation`: Unity AnimationClip motion for the Dancer.
  - `Motion VMD`: Motion VMD file for the Dancer.
  - `Lip VMD`: VMD file for Dancer lip sync. If empty, Motion VMD is used.
  - `Position Offset`: Position value applied when the Player is active.
  - `Rotation Offset`: Rotation value applied when the Player is active.
  - `Scale`: Scale applied when the Player is active.
- `Views`: Three-way split screen settings.
  - `Active`: Whether the View is enabled.
  - `Type`: Camera type for the View.
  - `Target Character`: Dancer targeted by Follow/Orthographic Views.

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

- `Field Of View`: Field of view for Follow cameras.
- `Position Smooth Time`: Position smoothing time for Follow cameras.
- `Front Distance`: Distance for the Front View.
- `Front Height Offset`: Height offset for the Front View.
- `Front Angle`: Angle offset for the Front View.
- `Back Distance`: Distance for the Back View.
- `Back Height Offset`: Height offset for the Back View.
- `Back Angle`: Angle offset for the Back View.

### Orthographic Preset

- `Height Offset`: Height offset for the Orthographic View.
- `Angle`: Angle offset for the Orthographic View.
- `Size`: Orthographic camera size.
