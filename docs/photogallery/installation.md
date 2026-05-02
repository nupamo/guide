---
title: 설치하기
description: BOOTH에서 받은 UnityPackage를 프로젝트에 가져오는 방법
---

# 설치하기

BOOTH에서 받은 `.unitypackage` 파일을 Unity 프로젝트에 가져옵니다.

## Import 방법

1. Unity에서 사용할 VRChat 월드 프로젝트를 엽니다.
2. 상단 메뉴에서 `Assets > Import Package > Custom Package...`를 선택합니다.
3. BOOTH에서 받은 `.unitypackage` 파일을 선택합니다.
4. Import 창에서 포함된 파일을 확인합니다.
5. `Import` 버튼을 누릅니다.

## 패키지 구성

Import 후 기본 파일은 `Assets/nupamo/AutoResize` 폴더에 들어갑니다.

- `PhotoGallery.prefab`: 여러 사진을 배치하기 위한 기본 갤러리 프리팹
- `PhotoFrame.prefab`: 한 장의 사진을 표시하는 기본 액자 프리팹
- `Preset 1.mat`, `Preset 2.mat`: 바로 사용할 수 있는 액자 머티리얼 프리셋
- `Source`: 셰이더, 메쉬, 기본 텍스처가 들어 있는 폴더
- `Runtime`, `Editor`: 에셋 동작에 필요한 스크립트 폴더

일반 사용자는 `PhotoGallery.prefab`, `PhotoFrame.prefab`, `Preset` 머티리얼을 주로 사용하면 됩니다.