---
title: Split MMD Player
description: Split MMD Player는 VRChat 유저를 위한 Unity 기반 MMD 재생 도구입니다.
---

# Split MMD Player

Split MMD Player는 VRChat 유저를 위한 Unity 기반 MMD 재생 도구입니다.
3분할 카메라를 한 화면에 띄울 수 있으며, 아바타 제작 테스트 용도로도 사용할 수 있습니다.
로컬로 사용하기 때문에 라이센스나 업로드 정책을 신경쓰지 않아도 됩니다.

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <iframe width="662" height="372" src="https://www.youtube.com/embed/LiA346I-l3M" title="AutoResize PhotoGallery Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"></iframe>
</div>

## Studio 버전

Studio 버전은 단순 재생이 아닌 VRChat 아바타에 설정한 옵션들을 그대로 사용하기 위한 목적으로 추가 개발되었습니다.  
Gesture Manager를 통해 Modular Avatar기반 옷장 토글, SPS, Light limit 등을 그대로 사용할 수 있습니다.(물론 미리 세팅되어있다는 전제 하에)

추가로 Studio에서는 VMD 모션뿐 아니라 Unity `AnimationClip` 모션도 사용할 수 있습니다.
Play Mode 중 모션을 바꾸거나 파라미터를 조정할 수 있으며, 변경한 파라미터는 Play Mode가 끝난 뒤에도 유지됩니다.
여러 Player 컴포넌트를 만들면 Play Mode 중에 곡을 변경할 수 있으며, Dancer와 Audio 컴포넌트가 공유되고, Dancer Transform Offset으로 댄서별 위치와 회전도 보정할 수 있습니다.

3가지 환경에서 테스트되었습니다. 더 오래된 환경에서의 동작은 보장하지 않습니다. 고장난다면 관련 패키지들을 최신으로 업데이트 해주세요.

- (2026-06-16 기준 모두 최신) Unity `2022.3.22f1` / VRChat SDK `3.10.3` / Gesture Manager `3.9.8` / VRCFury `1.1341.0` / Modular Avatar `1.17.1` / NDMF `1.13.1` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.22f1` / VRChat SDK `3.10.0` / Gesture Manager `3.9.6` / VRCFury `1.1272.0` / Modular Avatar `1.14.3` / NDMF `1.9.4` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.6f1` / VRChat SDK `3.10.1` / Gesture Manager `3.9.7` / VRCFury `1.1279.0` / Modular Avatar `1.12.5` / NDMF `1.7.10` / wholesome SPS Configurator `2.0.11`

## Quick Start

![image](/split.png)

1. Unity 프로젝트에 `Assets/nupamo/Split MMD Player`가 들어있는지 확인합니다.
2. 프리뷰할 아바타를 현재 씬에 배치합니다. 아바타에는 Humanoid `Animator`가 필요합니다.
3. Inspector에서 아바타 GameObject들을 선택하고 메뉴에서 `Tools > nupamo > Split MMD Player`를 엽니다.
4. `Source Avatar`에서 아바타들을 추가로 설정합니다.
5. `Motion VMD` 또는 Unity `AnimationClip`, `Audio Clip`, 필요하면 `Camera VMD`와 `Lip VMD`를 넣습니다.
6. 스테이지나 소품을 쓰려면 `PMX Prop`에 `.pmx` 파일을 넣습니다.
7. `Create Preview Scene`을 누르고 생성된 씬에서 Play합니다.
8. Game 창의 `Free Aspect - Low Resolution Aspect Ratio` 체크를 해제합니다.

기본 샘플은 CC0 라이선스 샘플만 들어 있습니다. 원하는 곡, 모션, 카메라, 스테이지 파일은 직접 찾아서 프로젝트의 `Assets` 아래에 넣은 뒤 사용해 주세요.

## Create Preview Scene을 누르면

`Assets/nupamo/Split MMD Player/Split MMD Player.unity` 프리뷰 씬이 만들어지고 자동으로 열립니다.

생성 과정에서는 다음 작업이 일어납니다.

- 선택한 아바타를 프리뷰 씬으로 복제합니다.
- 복제본을 NDMF로 한 번 처리해 프리뷰에 필요한 형태로 굽습니다.
- VRChat 업로드용 컴포넌트, Modular Avatar/NDMF, VRCFury, Marshmallow PB처럼 프리뷰에 방해되는 빌드용 컴포넌트를 복제본에서 제거합니다.
- 입력한 VMD, 오디오, PMX Prop 경로를 컴포넌트에 설정합니다.
- 로드 된 PMX Prop 및 Bake된 에셋들을 `GeneratedAssets` 아래에 생성합니다.

원본 씬의 아바타는 수정하지 않습니다. 기존 프리뷰 씬이 있으면 덮어쓰고, `GeneratedAssets`도 다시 생성됩니다.

## 컴포넌트 옵션

### Inputs

- `Camera VMD`: MMD 카메라 VMD 파일입니다.
- `Dancers`: 재생에 사용할 Dancer 목록입니다.
- `Name`: Dancer 표시 이름입니다.
- `Animator`: Dancer로 사용할 Humanoid Animator입니다.
- `Motion VMD`: Dancer의 모션 VMD 파일입니다.
- `Animation Clip`: Dancer의 Unity AnimationClip 모션입니다.
- `Lip VMD`: Dancer의 립싱크용 VMD 파일입니다. (없으면 Motion VMD를 사용합니다)
- `Audio Clip`: 모션과 함께 재생할 오디오입니다.

### Views

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
- `Dancer Transform Offset`: Dancer별 위치, 회전, 크기 보정값입니다.

### Runtime Cameras

- `Show Runtime UI`: 런타임 카메라 UI 표시 여부입니다.
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
