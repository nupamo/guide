---
title: Split MMD Player 옵션
description: Split MMD Player의 기능 설명입니다.
---

# 옵션

Split MMD Player의 기능 설명입니다.

## Builder

### Inputs

- `Scene Name`: 생성할 Scene 이름입니다. 이미 있을 경우 덮어씁니다.
- `Camera VMD`: MMD 카메라 VMD 파일입니다.
- `Audio Clip`: 모션과 함께 재생할 오디오입니다.
- `Stage Preset`: Studio 버전에 동봉된 무대 프리셋. `Stage Scene`과 `Post Process Profile`에 적용됩니다.
- `Stage Scene`: 생성할 Scene에 Import 할 유니티 Scene
- `Post Process Profile`: 포스트 프로세스 프리셋

### PMX Props

- MMD 소품을 Import 합니다.

### Dancers

- `Source Avatar`: 데려갈 VRChat 아바타 GameObject 입니다.
- `Motion Animation`: Dancer의 Unity AnimationClip 모션입니다.
- `Motion VMD`: Dancer의 모션 VMD 파일입니다.
- `Lip VMD`: Dancer의 립싱크용 VMD 파일입니다. (없으면 Motion VMD를 사용합니다)

---

## Component

- `Mode`: 3D 모드 선택시 SBS 모드를 활성화합니다. 2분할 카메라가 강제되며 왼쪽눈과 오른쪽눈을 시뮬레이션합니다.
  - `SBS`: `Half` or `Full` 선택
  - `3D Strength`: 양쪽 눈의 거리 강도입니다.
  - `Letterbox`: 캐릭터가 앞으로 나와보이게 하는 레터박스의 크기를 설정합니다.
- `Remember Parameter Changes`: Play중에 바꾼 옵션을 초기화하지 않고 다음 재생에도 사용합니다.
- `Show Runtime UI`: Play 화면 속에 카메라 설정 UI를 표시합니다.

### Inputs

- `Audio Clip`: 모션과 함께 재생할 오디오입니다.
- `Post Process Profile`: 포스트 프로세스 프리셋
- `Camera VMD`: MMD 카메라 VMD 파일입니다.

- `Dancers`: 재생에 사용할 Dancer 목록입니다.
  - `Name`: Dancer 표시 이름입니다.
  - `Shared Dancer`: Player에 사용할 댄서를 선택합니다.
  - `Motion Animation`: Dancer의 Unity AnimationClip 모션입니다.
  - `Motion VMD`: Dancer의 모션 VMD 파일입니다.
  - `Lip VMD`: Dancer의 립싱크용 VMD 파일입니다. (없으면 Motion VMD를 사용합니다)
  - `Position Offset`: Player가 활성화되면 적용할 위치값
  - `Rotation Offset`: Player가 활성화되면 적용할 회전값
  - `Scale`: Player가 활성화되면 적용할 크기
- `Views`: 3분할 화면 설정
  - `Active`: 해당 View 사용 여부입니다.
  - `Type`: View 카메라 타입입니다.
  - `Target Character`: Follow/Orthographic View가 바라볼 Dancer입니다.

### Playback

- `Play On Start`: Play 시작 시 자동 재생 여부입니다.
- `Loop`: 반복 재생 여부입니다.
- `Start Time`: 재생 시작 시간입니다. (End Time 보다 뒤일 경우 정지모션)
- `End Time`: 재생 종료 시간입니다. (-1로 비활성화)
- `Motion Time Offset`: 오디오 기준 모션 시간 보정값입니다.

### VMD Retargeting

- `Enable Foot IK`: 발 IK 적용 여부입니다.
- `Copy Foot IK Rotation`: 발 IK 회전 복사 여부입니다.
- `Motion Scale`: 모션 이동량 스케일입니다.
- `Camera Scale`: 카메라 이동량 스케일입니다.

### Runtime Cameras

- `Field Of View`: Follow 카메라 시야각입니다.
- `Position Smooth Time`: Follow 카메라 위치 보간 시간입니다.
- `Front Distance`: Front View 거리입니다.
- `Front Height Offset`: Front View 높이 오프셋입니다.
- `Front Angle`: Front View 각도 오프셋입니다.
- `Back Distance`: Back View 거리입니다.
- `Back Height Offset`: Back View 높이 오프셋입니다.
- `Back Angle`: Back View 각도 오프셋입니다.

### Orthographic Preset

- `Height Offset`: 정투영 View 높이 오프셋입니다.
- `Angle`: 정투영 View 각도 오프셋입니다.
- `Size`: 정투영 카메라 크기입니다.
