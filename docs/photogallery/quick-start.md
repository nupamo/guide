---
title: 첫 갤러리 만들기
description: Scene에 사진 갤러리를 빠르게 배치하는 방법
---

# 첫 갤러리 만들기

이 페이지는 가장 빠르게 사진 갤러리를 하나 만드는 방법입니다.

## 1. PhotoGallery 프리팹 배치

Project 창에서 `Assets/nupamo/AutoResize/PhotoGallery.prefab`을 찾습니다.

이 프리팹을 Scene 또는 Hierarchy 창으로 드래그합니다.

## 2. 사진 넣기

배치한 `PhotoGallery` 오브젝트를 선택합니다.

Inspector의 `Photos` 리스트에 표시할 사진 텍스처를 넣습니다. 사진은 가로 사진과 세로 사진을 섞어도 됩니다.

사진을 넣으면 갤러리 자식 오브젝트가 자동으로 생성되고, 각 사진이 액자에 적용됩니다.

## 3. 액자 프리팹과 머티리얼 확인

기본 `PhotoGallery.prefab`에는 `Photo Frame Prefab`과 `Shared Frame Material`이 이미 설정되어 있습니다.

비어 있다면 아래처럼 넣어 주세요.

- `Photo Frame Prefab`: `Assets/nupamo/AutoResize/PhotoFrame Pro.prefab`
- `Shared Frame Material`: `Preset Opaque.mat` 또는 직접 만든 액자 머티리얼

## 4. 배치 조정

Inspector에서 아래 값을 조정합니다.

- `Row Count`: 한 줄에 몇 장씩 배치할지 정합니다.
- `Layout Direction`: 사진을 가로 방향으로 먼저 채울지, 세로 방향으로 먼저 채울지 정합니다.
- `Gap`: 액자 사이 간격을 조정합니다.
- `Slot Size`: 각 사진 슬롯의 기본 배치 크기를 조정합니다.

## 5. 사진을 한 번에 추가하기

Project 창에서 여러 사진 텍스처를 선택한 뒤, `PhotoGallery` Inspector에서 `Capture Selected Textures`를 누릅니다.

그 다음 `Add Captured Textures`를 누르면 선택한 사진들이 `Photos` 리스트에 한 번에 추가됩니다.

상단 메뉴의 `Tools > nupamo > Capture Selected Textures`도 같은 기능입니다.

## 6. 벽에 붙이기

벽에 붙이고 싶은 오브젝트에 Collider가 있어야 합니다.

`PhotoGallery`가 벽을 바라보도록 배치한 뒤 `Snap Children To Wall` 버튼을 누르면, 각 액자가 벽 Collider 표면에 맞춰 배치됩니다.

자세한 설정은 [갤러리 배치 조정하기](./photo-gallery.md)를 참고해 주세요.
