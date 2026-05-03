---
title: Troubleshooting
description: Common issues and how to fix them
---

# Troubleshooting

## The photo looks stretched or squashed

Please check the `Ratio` setting of your material. If you entered a custom ratio, verify it matches the photo.

If using auto ratio, it will be displayed based on the aspect ratio of the photo texture. Make sure the texture's `Non-Power of 2` setting is set to `None`.

Manual configuration is required when using the frame on its own.

## The photo is not visible

Check the following:

- Are there photos in the `Photos` list of `PhotoGallery`?
- Is the `Photo Frame Prefab` set?
- Is the `Shared Frame Material` set?
- Was the photo texture imported correctly in Unity?
- Are there any shader compile errors in the Console?

## I modified the gallery but the child frames are not updating

Please click the `Reset` button in the `PhotoGallery` Inspector.

It is recommended to recreate the gallery once immediately after changing the prefab or material.

## The frames don't snap to the wall

`Snap Children To Wall` operates based on Colliders.

Things to check:

- Does the wall object have a Collider?
- Is the `PhotoGallery` facing the wall you want to attach it to?
- Is the wall too far away?
- Can a Raycast reach from the frame's position to the wall's direction?

If you are confused about the direction, try moving the `PhotoGallery` object slightly forward or backward, or rotate it 180 degrees and press the button again.

## The frame is buried inside the wall

Please adjust the Z value of `Frame Position`.

If you want it to hover slightly off the wall surface, change the Z value to a very small amount and click `Snap Children To Wall` again.

## The world size is too large because the photos are too big

Try setting `Build Photo Max Size` to `1024` or `2048`.

The more photos you have, the more this helps reduce build size and memory usage compared to using the original size.

## There are errors in the Console

First, check if the error message includes `AutoResize`, `PhotoGallery`, or `PhotoFrame`.

It could be an error from another asset or SDK. Checking the entire error message, Unity version, and package version being used will make it easier to find the cause.
