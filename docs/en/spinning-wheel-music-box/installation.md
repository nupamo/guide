---
title: Installation
description: Adding Spinning Wheel Music Box to a VRChat world and setting it up
---

# Installation

## Requirements

- A Worlds project made with VRChat Creator Companion
- Tested with Unity `2022.3.22f1` and VRChat SDK Worlds `3.10.3`.
- TextMesh Pro (a built-in Unity package)

## 1. Import the package

Import `SpinningWheelMusicBox.unitypackage` into your project.

The MML parser and the note-detection shader (MML Transcriber) it needs are included, so there is nothing else to install.

## 2. Place the prefab

Drag `Assets/nupamo/Spinning Wheel Music Box/Spinning Wheel Music Box.prefab` into the Scene and put it on a table.

- The handle side is the prefab's **-Z** direction. Turn it toward where people will stand.
- The box is about 0.5 m wide, and the control screen floats about 0.4 m above it.
- The control screen appears within about 2.2 m and disappears beyond 2.8 m.

## 3. Check reflections

If the metal parts look dark, place a Reflection Probe nearby and bake it.

## Preview

Open `Assets/nupamo/Spinning Wheel Music Box/Demo/Spinning Wheel Music Box Demo.unity` and press Play (ClientSim).

ClientSim in the Unity Editor cannot open YouTube addresses directly. Instead, when you paste a YouTube address into the link field during Play, an editor-only script uses your local yt-dlp to turn it into a playable address. Press `● Record` after the text in the field changes. In an uploaded world VRChat handles the address itself, so this step does not happen.

## Settings

Select the music box component on the prefab root. The Inspector shows two things.

### Start mode

How it plays when the instance first opens.

- `Manual` (default): no sound until someone turns the handle.
- `Auto`: the first song repeats on its own.

### Sound

How far the music box can be heard. This is set only in the Inspector, not on the in-world screen.

- `Around the box (3D)` (default): the sound comes from the box and gets quieter with distance.
- `Whole world (2D)`: everyone in the world hears it at the same level.

### Songs

Built-in songs that are always in the list. Each has a title and an MML score (up to 6,000 characters; Mabinogi syntax works too).

- Add with `+ Add song`, move up with `▲`, delete with `✕`.
- Three public-domain songs are included by default (Satie Gymnopédie No.1, Satie Je te veux, Debussy Clair de lune).
- Only add songs you have the right to use in a public world.

The other values are under `Internal` at the bottom, but you usually do not need to change them.

## More than one in a world

You can place several music boxes. All music boxes in the same world share the list of songs people have saved.
