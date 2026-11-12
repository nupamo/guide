---
title: Split MMD Player Captions and JIZURA
description: Use captions and the experimental JIZURA integration.
---

# Captions and JIZURA

Display YouTube captions or your own file. Captions appear once over all camera Views and are included in recordings.

## Enable captions

1. Paste a link into the Player's `Inputs > YouTube URL` and wait for audio preparation.
2. Choose a mode in `Inputs > Captions > Display`.

| Display | Mode |
| --- | --- |
| Off | Hide captions |
| Subtitles | Standard subtitles. Default |
| JIZURA | Text motion synchronized to music. Experimental |

`Subtitle Language` lists only tracks available for the video. The default `Automatic (Original)` tries the original language, Editor language, then English. If your selected language is unavailable, assign a subtitle file.

## Subtitle files {#subtitle-files}

Assign a `TextAsset` containing SRT, VTT or caption JSON to `Subtitle File (Optional)`. Save SRT/VTT as `.txt` to import into Unity. Files can also be saved in [Song Presets](./presets#song-presets).

The file overrides YouTube captions; clearing it restores YouTube caption loading. Local audio also supports subtitle files.

## JIZURA — experimental

Based on [JIZURA by 852wa](https://github.com/852wa/JIZURA), this feature automatically builds caption layouts and motion. The Split MMD Player integration is **experimental**.

- Select `JIZURA` in `Display`. Use `New JIZURA` for another composition.
- Requires **Windows 64-bit Unity Editor and Microsoft WebView2 Runtime**. Use `Install WebView2 Runtime` if needed.
- Standard subtitles appear during preparation. JIZURA is available in the Editor and Recorder.

## Timing and troubleshooting

Captions follow audio time. `Motion Time Offset` does not affect caption timing.

Use a file if no captions are available. For download errors, check `Setting` and click `Retry Captions`. Wait for JIZURA preparation before recording. [Recorder guide](./recorder)
