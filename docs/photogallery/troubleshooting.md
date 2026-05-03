---
title: 문제 해결
description: 자주 발생하는 문제와 해결 방법
---

# 문제 해결

## 사진이 찌그러져 보여요

머티리얼의 `Ratio` 설정을 확인해 주세요. 직접 비율을 입력했다면 사진과 맞는 값인지 확인해 주세요.

자동 비율을 사용하면 사진 텍스처의 가로세로 비율을 기준으로 표시됩니다. 텍스처의 `Non-Power of 2` 설정을 `None`으로 설정되어 있는지 확인해주세요.

액자를 단독으로 사용할 때는 수동설정이 필요합니다.

## 사진이 안 보여요

아래를 확인해 주세요.

- `PhotoGallery`의 `Photos` 리스트에 사진이 들어 있는지
- `Photo Frame Prefab`이 설정되어 있는지
- `Shared Frame Material`이 설정되어 있는지
- 사진 텍스처가 Unity에서 정상적으로 import되었는지
- Console에 shader compile error가 없는지

## 갤러리를 수정했는데 자식 액자가 갱신되지 않아요

`PhotoGallery` Inspector에서 `Reset` 버튼을 눌러 주세요.

프리팹이나 머티리얼을 바꾼 직후에는 갤러리를 한 번 다시 만들어 주는 것이 좋습니다.

## 액자가 벽에 붙지 않아요

`Snap Children To Wall`은 Collider를 기준으로 동작합니다.

확인할 것:

- 벽 오브젝트에 Collider가 있는지
- `PhotoGallery`가 붙이고 싶은 벽을 바라보고 있는지
- 벽이 너무 멀리 떨어져 있지 않은지
- 액자 위치에서 벽 방향으로 Raycast가 닿을 수 있는지

방향이 헷갈리면 `PhotoGallery` 오브젝트를 조금 앞뒤로 움직이거나 180도 돌린 뒤 다시 눌러 보세요.

## 액자가 벽 안으로 파묻혀요

`Frame Position`의 Z 값을 조정해 주세요.

벽 표면에서 조금 띄우고 싶다면 Z 값을 아주 작게 바꾼 뒤 `Snap Children To Wall`을 다시 누릅니다.

## 사진이 너무 커서 월드 용량이 커져요

`Build Photo Max Size`를 `1024` 또는 `2048`로 설정해 보세요.

사진이 많을수록 원본 크기 그대로 사용하는 것보다 빌드 용량과 메모리 사용량을 줄이는 데 도움이 됩니다.

## Console에 에러가 나요

먼저 에러 메시지에서 `AutoResize`, `PhotoGallery`, `PhotoFrame`이 포함되어 있는지 확인해 주세요.

다른 에셋이나 SDK에서 나온 에러일 수도 있습니다. 에러 메시지 전체와 Unity 버전, 사용 중인 패키지 버전을 함께 확인하면 원인을 찾기 쉽습니다.
