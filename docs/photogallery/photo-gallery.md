---
title: 갤러리 배치 조정하기
description: PhotoGallery 컴포넌트의 주요 옵션 설명
---

# 갤러리 배치 조정하기

`PhotoGallery` 컴포넌트는 여러 사진을 자동으로 배치합니다. 사진을 추가하거나 옵션을 바꾸면 Scene의 액자들이 갱신됩니다.

## Photos

갤러리에 표시할 사진 텍스처 목록입니다.

리스트에 들어 있는 순서대로 액자가 생성됩니다. 순서를 바꾸면 갤러리의 사진 순서도 바뀝니다.

## Gap

액자 사이의 간격입니다.

- X: 가로 간격
- Y: 세로 간격

사진이 겹쳐 보이면 값을 키우고, 더 촘촘히 붙이고 싶으면 값을 줄입니다.

## Slot Size

각 사진이 차지하는 기본 배치 크기입니다.

`Frame Scale`은 실제 액자 프리팹의 크기이고, `Slot Size`는 갤러리 배치 간격을 계산할 때 쓰는 기준 크기입니다. 액자의 실제 크기와 줄 간격을 따로 조정하고 싶을 때 유용합니다.

## Row Count

한 줄에 배치할 기준 개수입니다.

예를 들어 사진이 10장이고 `Row Count`가 2라면 2줄짜리 갤러리로 배치됩니다.

## Layout Direction

사진을 채우는 방향입니다.

- `Horizontal`: 가로 방향으로 먼저 채웁니다.
- `Vertical`: 세로 방향으로 먼저 채웁니다.

사진을 벽면에 넓게 펼치고 싶으면 `Horizontal`, 세로로 긴 전시 형태가 필요하면 `Vertical`을 사용해 보세요.

## Frame Position / Rotation / Scale

각 슬롯 안에 들어가는 `PhotoFrame`의 위치, 회전, 크기입니다.

대부분은 기본값으로 충분합니다. 액자가 벽에서 너무 파묻히거나 떠 보이면 `Frame Position`의 Z 값을 조정해 보세요.

## Additional Child Prefab

각 사진 슬롯에 함께 붙일 추가 프리팹입니다.

예를 들어 사진마다 작은 라벨, 장식 오브젝트, 조명 같은 것을 같이 배치하고 싶을 때 사용할 수 있습니다.

추가 프리팹을 사용하면 `Additional Position`, `Additional Rotation`, `Additional Scale`로 위치와 크기를 조정할 수 있습니다.

## Reset 버튼

현재 설정을 기준으로 갤러리 자식을 다시 만듭니다.

프리팹을 바꿨거나 배치가 예상과 다르게 꼬였을 때 사용해 주세요.

## Snap Children To Wall 버튼

각 액자를 벽 Collider에 붙입니다.

사용 조건은 다음과 같습니다.

- 벽 오브젝트에 Collider가 있어야 합니다.
- `PhotoGallery` 오브젝트가 붙이고 싶은 벽을 바라보도록 배치되어 있어야 합니다.
- 액자 앞뒤 방향이 어색하면 `PhotoGallery` 오브젝트를 180도 돌린 뒤 다시 시도해 주세요.
