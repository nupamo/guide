---
title: 액자 머티리얼 꾸미기
description: Pro와 Lite 셰이더 머티리얼을 조정하는 방법
---

# 액자 머티리얼 꾸미기

액자의 모양은 머티리얼에서 조정합니다. 기본 프리셋을 복제해서 사용하는 것을 권장합니다.

## 프리셋 복제하기

1. Project 창에서 `Preset Lite.mat`, `Preset Opaque.mat`, `Preset Transparent.mat` 중 하나를 선택합니다.
2. `Ctrl + D`로 복제합니다.
3. 복제한 머티리얼 이름을 원하는 이름으로 바꿉니다.
4. 머터리얼을 적용합니다.
    - PhotoGallery : `PhotoGallery`의 `Shared Frame Material`에 새 머티리얼을 넣습니다.
    - Shader만 사용 : `PhotoFrame Pro` 또는 `PhotoFrame Lite` 프리팹의 `Material`에 새 머티리얼을 넣습니다.

## Lite와 Pro의 차이

### Lite
- 기본 Unity `Cube` 기반, 이미지 비율을 통해 자동으로 크기가 조절됨
- 정렬 설정
- 마진 설정

### Pro
- `Custom Mesh` 기반, 이미지 비율을 통해 자동으로 크기가 조절되고 프레임이 돌출됨
- 정렬 설정
- 마진 설정 + inner shadow
- 프레임 설정
- 유리 효과
- 투명 설정
