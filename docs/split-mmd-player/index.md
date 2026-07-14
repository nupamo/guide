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

## Free 버전

Free 버전은 Unity 재생 시 문제가 생길 수 있는 VRChat 컴포넌트들을 제거한 Scene을 생성합니다.
VMD, PMX 파일을 지원하지만 Unity 추가 기능은 포함되어 있지 않습니다.

## Studio 버전

Studio 버전은 단순 재생이 아닌 VRChat 아바타에 설정한 옵션들을 그대로 사용하기 위한 목적으로 추가 개발되었습니다.  
Gesture Manager를 통해 Modular Avatar기반 옷장 토글, SPS, Light limit 등을 그대로 사용할 수 있습니다.(물론 미리 세팅되어있다는 전제 하에)

추가로 Studio에서는 VMD 모션뿐 아니라 Unity `AnimationClip` 모션도 사용할 수 있습니다.
Play Mode 중 모션을 바꾸거나 파라미터를 조정할 수 있으며, 변경한 파라미터는 Play Mode가 끝난 뒤에도 유지됩니다.
여러 Player 컴포넌트를 만들면 Play Mode 중에 곡을 변경할 수 있으며, Dancer와 Audio 컴포넌트가 공유되고, Dancer Transform Offset으로 댄서별 위치와 회전도 보정할 수 있습니다.
Builder의 스테이지 설정은 Scene 기반으로 동작하며, Day/Night/Summer Preset으로 기본 분위기를 빠르게 선택할 수 있습니다.

3가지 환경에서 테스트되었습니다. 더 오래된 환경에서의 동작은 보장하지 않습니다. 고장난다면 관련 패키지들을 최신으로 업데이트 해주세요.

- 최신 기준(2026-07-05) Unity `2022.3.22f1` / VRChat SDK `3.10.4` / Gesture Manager `3.9.8` / VRCFury `1.1348.0` / Modular Avatar `1.17.1` / NDMF `1.17.1` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.22f1` / VRChat SDK `3.10.0` / Gesture Manager `3.9.6` / VRCFury `1.1272.0` / Modular Avatar `1.14.3` / NDMF `1.9.4` / wholesome SPS Configurator `2.0.11`
- Unity `2022.3.6f1` / VRChat SDK `3.10.1` / Gesture Manager `3.9.7` / VRCFury `1.1279.0` / Modular Avatar `1.12.5` / NDMF `1.7.10` / wholesome SPS Configurator `2.0.11`

## Split MMD Recorder

Normal, SBS, VR180 방식의 녹화를 지원합니다. 해당 기능을 사용하면 일관된 프레임으로 모니터보다 큰 해상도를 촬영할 수 있습니다.  
단 이미지 추출만 지원하며, 동영상 인코딩까지 진행하려면 [FFmpeg](https://ffmpeg.org/download.html) 설치가 필요합니다.

## Quick Start

![image](/split.png)

1. Unity 프로젝트에 `Assets/nupamo/Split MMD Player`가 들어있는지 확인합니다.
2. 프리뷰할 아바타를 현재 씬에 배치합니다. 아바타에는 Humanoid `Animator`가 필요합니다.
3. Inspector에서 아바타 GameObject들을 선택하고 메뉴에서 `Tools > nupamo > Split MMD Player`를 엽니다.
4. `Scene Name`에 생성할 프리뷰 씬 이름을 입력합니다.
5. `Camera VMD`, `Audio Clip`, 필요하면 `Post Process Profile`을 지정합니다.
6. `Stage Preset`에서 `Day` 또는 `Night`를 고르고, `Stage Scene`에 사용할 스테이지 Scene을 지정합니다.
7. PMX 소품을 추가하려면 `Add PMX Prop`을 누르고 `PMX Prop` 슬롯에 `.pmx` 파일을 넣습니다.
8. 각 Dancer의 `Source Avatar`를 확인하고, `Motion Animation` 또는 `Motion VMD`를 지정합니다.
9. Play Mode를 종료한 상태에서 `Create Preview Scene`을 누르고 생성된 씬에서 Play합니다.
10. Game 창의 `Free Aspect - Low Resolution Aspect Ratio` 체크를 해제합니다.

기본 샘플은 CC0 라이선스 샘플만 들어 있습니다. 원하는 곡, 모션, 카메라, 스테이지 Scene 파일은 직접 찾아서 프로젝트의 `Assets` 아래에 넣은 뒤 사용해 주세요.

## Create Preview Scene을 누르면

`Assets/nupamo/Split MMD Player/Split MMD Player.unity` 프리뷰 씬이 만들어지고 자동으로 열립니다.

생성 과정에서는 다음 작업이 일어납니다.

- 선택한 아바타를 프리뷰 씬으로 복제합니다.
- 복제본을 NDMF로 한 번 처리해 프리뷰에 필요한 형태로 굽습니다.
- VRChat 업로드용 컴포넌트, Modular Avatar/NDMF, VRCFury, Marshmallow PB처럼 프리뷰에 방해되는 빌드용 컴포넌트를 복제본에서 제거합니다.
- 로드된 Scene 및 Bake된 에셋들을 `GeneratedAssets` 아래에 생성합니다.

원본 씬의 아바타는 수정하지 않습니다. 기존 프리뷰 씬이 있으면 확인 후 덮어쓰고, `GeneratedAssets`도 다시 생성됩니다.
