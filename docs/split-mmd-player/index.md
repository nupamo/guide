---
title: Split MMD Player
description: Split MMD Player는 VRChat 유저를 위한 Unity 기반 MMD 재생 도구입니다.
---

# Split MMD Player

Split MMD Player는 VRChat 유저를 위한 Unity 기반 MMD 재생 도구입니다.
3분할 카메라를 한 화면에 띄울 수 있으며, 아바타 제작 테스트 용도로도 사용할 수 있습니다.
Unity Editor에서 로컬로 재생하므로 VRChat 월드에 업로드하지 않고 확인할 수 있습니다.

<div style="display: flex; justify-content: center; margin: 2rem 0;">
  <iframe width="662" height="372" src="https://www.youtube.com/embed/LiA346I-l3M" title="Split MMD Player Demo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen style="border-radius: 12px; box-shadow: 0 10px 30px rgba(0,0,0,0.3);"></iframe>
</div>

## Free 버전

Free 버전은 Unity 재생 시 문제가 생길 수 있는 VRChat 컴포넌트들을 제거한 Scene을 생성합니다.
VMD, PMX 파일을 지원하지만 Unity 추가 기능은 포함되어 있지 않습니다.

## Studio 버전

**Studio v1.6.0**은 YouTube 오디오, [프리셋](./presets), [자막](./captions)을 지원합니다. JIZURA는 실험적 기능입니다.

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
PNG 시퀀스와 FFmpeg를 이용한 MP4 인코딩을 지원합니다. Windows에서는 필요한 FFmpeg를 자동으로 준비합니다. 자세한 순서는 [Recorder](./recorder)를 참고하세요.

## Editor 메뉴

`Tools > nupamo > Split MMD Player`에 다음 메뉴가 있습니다.

| 메뉴 | 용도 |
| --- | --- |
| Create Scene | 프리셋과 아바타·스테이지로 프리뷰 씬 생성 |
| Song Presets | [곡 프리셋](./presets#song-presets) 추가·편집·적용 |
| Stage Presets | [스테이지 프리셋](./presets#stage-presets) 추가·편집 |
| Recorder | [PNG 시퀀스와 MP4 녹화](./recorder) |
| Setting | FFmpeg와 yt-dlp를 하나의 설정 창에서 관리 |
| Language | Editor UI를 English / 日本語 / 한국어 / 中文으로 변경 |

## Quick Start

이 문서의 필드·버튼 이름은 영어 UI 기준입니다.

1. 프리뷰할 Humanoid 아바타를 현재 씬에 배치하고 선택합니다.
2. `Tools > nupamo > Split MMD Player > Create Scene`을 엽니다.
3. 맨 위에서 곡·스테이지 [프리셋](./presets) 버튼을 누르거나, 오디오·모션·스테이지를 직접 지정합니다.
4. `Scene Name`과 각 Dancer의 `Source Avatar`를 확인합니다. 모션 슬롯은 직접 수정할 수 있습니다.
5. Play Mode를 종료하고 `Create Preview Scene`을 누른 뒤 생성된 씬에서 Play합니다.
6. YouTube 오디오는 준비 완료를 기다립니다. 자막은 Player의 `Inputs > Captions`에서 선택합니다.

`Motion Time Offset`은 Create Scene의 Inputs 마지막에 있습니다.

Game 창에서 `Low Resolution Aspect Ratios`를 해제하면 선명한 프리뷰를 볼 수 있습니다. 아래 이미지는 이전 버전의 메뉴 위치와 Game 창 해상도 설정 예시입니다.

![Game 창의 해상도 설정 예시](/split.png)

기본 샘플은 CC0 라이선스 샘플만 들어 있습니다. 추가 모션, 카메라, 스테이지 파일은 프로젝트의 `Assets` 아래에 넣고 지정하세요.

## Create Preview Scene을 누르면

`Scene Name`에 따라 `Assets/nupamo/Split MMD Player/<Scene Name>.unity`에 프리뷰 씬이 만들어지고 자동으로 열립니다. 기본 이름은 `Split MMD Player`입니다.

생성 과정에서는 다음 작업이 일어납니다.

- 선택한 아바타를 프리뷰 씬으로 복제합니다.
- 복제본을 NDMF로 한 번 처리해 프리뷰에 필요한 형태로 굽습니다.
- VRChat 업로드용 컴포넌트, Modular Avatar/NDMF, VRCFury, Marshmallow PB처럼 프리뷰에 방해되는 빌드용 컴포넌트를 복제본에서 제거합니다.
- 로드된 Scene 및 Bake된 에셋들을 `GeneratedAssets` 아래에 생성합니다.

원본 씬의 아바타는 수정하지 않습니다. 기존 프리뷰 씬이 있으면 확인 후 덮어쓰고, 해당 씬의 생성 에셋은 `GeneratedAssets/<Scene Name>`에서 관리합니다.
