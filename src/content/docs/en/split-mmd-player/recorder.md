---
title: Split MMD Recorder
description: Record PNG sequences and MP4 videos in Studio v1.6.0.
---

# Recorder

Open `Tools > nupamo > Split MMD Player > Recorder`. Capture PNG sequences at resolutions larger than your monitor and encode an MP4 when FFmpeg is available.

## Record a sequence

1. Assign the `Player` to record.
2. Set `Start Time` and `End Time` on the Player component. An `End Time` of `-1` records until the audio ends.
3. Wait for YouTube audio preparation if used. If JIZURA is selected, wait for it to finish preparing too.
4. Choose `Output Mode`, output folder, resolution and `FPS`.
5. Click the capture button. Capture begins after preparation and warm-up.

Progress and an estimated remaining time are shown during capture. Use `Cancel` to stop. Recording time depends on song length, resolution, FPS, avatars and effects.

## Settings

| Setting | Description |
| --- | --- |
| Player | Player to record |
| Output Mode | Normal, SBS or VR180 |
| Output | Output folder for the PNG sequence and video |
| Width / Height | Output resolution for Normal and SBS |
| Resolution / Quality | Resolution and quality presets for VR180 |
| Output Size | Resolution determined by the VR180 preset; read-only |
| FPS | Captured frames per second |
| Start Time / End Time | Range configured on the Player; read-only in Recorder |
| FFmpeg / Setting | Detected executable and a button to open shared tool settings |

Use Player mode `2D` for `Normal` and `3D` for `VR180`. SBS places the two eye views side by side.

## FFmpeg and MP4

Configure FFmpeg under `Split MMD Player > Setting`. YouTube audio conversion and Recorder share this setting.

On Windows, an empty path checks PATH and cached project tools. If FFmpeg is missing, it is downloaded before recording. Once ready, capture saves PNG frames and encodes an MP4.

On macOS/Linux, install FFmpeg or specify its executable path. If FFmpeg is unavailable, only PNG frames are saved. The PNG sequence is kept if encoding fails.

## Audio and captions

Prepared YouTube audio is recorded the same way as a local `Audio Clip`. The Player's playback range and `Motion Time Offset` are used.

Subtitles and JIZURA are displayed once over the combined camera Views. During recording, capture waits for the JIZURA frame at the requested time before saving it. See [Captions and JIZURA](./captions).
