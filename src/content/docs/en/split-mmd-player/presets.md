---
title: Split MMD Player Presets
description: Save and apply song and stage presets.
---

# Presets

Save songs and stages separately and combine them as needed. You can also fill Create Scene directly without a preset.

## Song Presets {#song-presets}

1. Open `Tools > nupamo > Split MMD Player > Song Presets`.
2. Click `Add Song` and enter a `Name`.
3. Assign audio, camera VMD and each dancer's motion and lip sync. Optionally set a subtitle file, `Motion Time Offset` and `VMD Retargeting`.

`YouTube URL` takes priority over `Audio Clip`; `Motion Animation` takes priority over `Motion VMD`. An empty `Lip VMD` uses lip sync from the motion VMD.

Save captions as a Text Asset in `Subtitle File (Optional)`. Applying a preset with no file clears the previous one. The Player's caption display and language are preserved. [Subtitle files](./captions#subtitle-files)

Extra existing dancers repeat the preset motions: `A / B` → `A / B / A`. Connect avatars to any added slots.

## Stage Presets {#stage-presets}

1. Open `Tools > nupamo > Split MMD Player > Stage Presets`.
2. Edit Day / Night / Summer, or click `Add Stage`.
3. Assign `Name`, `Stage Scene` and `Post Process Profile`.

Song, motion and avatar settings are preserved. Empty preset slots clear the corresponding inputs when applied.

## Apply a preset

- **New scene:** Click the song or stage buttons at the top of Create Scene to apply immediately. You can edit the inputs afterward.
- **Existing Player:** Exit Play Mode, select the Player, then click `Apply to Selected Player` in Song Presets. Avatar connections and transforms are preserved.

Use Create Scene's `Edit` buttons to open the editors. Both preset types support `Duplicate` and `Remove`.

## Storage

Presets are saved as `SongPresets.asset` and `StagePresets.asset` in `Assets/nupamo/Split MMD Player/Editor/`. Keep them with their referenced files.
