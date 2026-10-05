---
title: Split MMD Player Options
description: Feature reference for Split MMD Player.
---

# Options

Feature reference for Split MMD Player.

## Create Scene

### Presets

`Song Preset` and `Stage Preset` buttons appear at the top of the window. **Click a button to apply it immediately.** Each section's `Edit` button opens its preset editor.

- `Song Preset`: Apply audio, subtitle file, camera VMD, dancer motions and retargeting settings from a [song preset](./presets#song-presets).
- `Stage Preset`: Apply Stage Scene and the post-processing profile from a [stage preset](./presets#stage-presets). The default Day / Night / Summer presets are editable too.

### Inputs

- `Scene Name`: Name of the scene to create. Overwriting an existing scene requires confirmation.
- `Camera VMD`: MMD camera VMD file.
- `Audio Clip` / `YouTube URL`: Local audio or a YouTube video link. A URL takes priority over the clip.
- `Subtitle File (Optional)`: Your subtitle Text Asset. When assigned, it overrides YouTube captions.
- `Stage Scene`: Unity Scene to import into the generated scene.
- `Post Process Profile`: Post-processing profile to use.
- `Motion Time Offset`: Adjust motion timing relative to audio. This is the last Inputs field and does not affect caption timing.

### PMX Props

- Imports MMD props.

### Dancers

Assign the following slots for each dancer. Enter them directly without a preset, or edit them after applying one.

- `Source Avatar`: Avatar to use. Dancer names come from the original avatars.
- `Motion Animation`: Unity `AnimationClip` motion. Takes priority over Motion VMD when assigned.
- `Motion VMD`: MMD motion file.
- `Lip VMD`: Separate lip-sync file. Leaving it empty uses lip sync from Motion VMD.

Use `Add Dancer` and `Remove Last Dancer` to adjust the number of slots.

### VMD Retargeting

Below the dancer inputs, adjust `Enable Foot IK`, `Copy Foot IK Rotation`, `Motion Scale` and `Camera Scale`. These settings can also be saved in a song preset.

---

## Setting

Open `Tools > nupamo > Split MMD Player > Setting` to configure FFmpeg and yt-dlp in one window. YouTube audio, caption downloads and Recorder share these paths across Players.

- `Executable Path`: A specific executable to use. Select it with `Browse`.
- `Detected Path`: The executable currently available.
- `Use Automatic Detection` (FFmpeg) / `Use Automatic Download` (yt-dlp): clear the custom path to prepare the tool automatically.

With an empty path on Windows, tools are prepared in this order:

| Tool | Preparation order |
| --- | --- |
| FFmpeg | PATH → cached project tool → automatic download if missing |
| yt-dlp | Project cache → official download if missing |

A custom path takes priority. On macOS/Linux, install the tools or specify their paths. If a YouTube download requests a JavaScript runtime, install Node.js and make it available through PATH.

## Component

- `Mode`: Enables SBS mode when 3D mode is selected. The camera is forced to a two-way split and simulates left and right eyes.
  - `SBS`: Select `Half` or `Full`.
  - `3D Strength`: Distance strength between the two eyes.
  - `Letterbox`: Sets the letterbox size that makes the character appear to come forward.
- `Remember Parameter Changes`: Keeps options changed during Play instead of resetting them for the next playback.
- `Show Runtime UI`: Shows the playback controls and camera settings UI in the Play screen.

### Inputs

- `Audio Clip`: Local audio played with the motion.
- `YouTube URL`: Load audio from a video link. A URL takes priority over Audio Clip.
- `Post Process Profile`: Post-processing profile.
- `Camera VMD`: MMD camera VMD file.

### Captions

Caption settings appear above Dancers.

- `Display`: Choose Off, Subtitles or JIZURA.
- `Subtitle Language`: Choose a caption language available for the YouTube video.
- `Subtitle File (Optional)`: Use your own subtitle Text Asset instead of YouTube captions.
- `New JIZURA`: Create a different JIZURA arrangement.

See [Captions and JIZURA](./captions) for setup and requirements.

### Dancers / Views

- `Dancers`: List of Dancers used for playback.
  - Dancer names come from the original avatars.
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
- `Motion Time Offset`: Motion timing offset against audio. Positive values sample a later motion frame; negative values sample an earlier frame. It applies consistently on start and seek, and does not change caption timing.

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
