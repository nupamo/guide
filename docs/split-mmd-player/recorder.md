---
title: Split MMD Recorder
description: Studio v1.6.0에서 PNG 시퀀스와 MP4를 녹화하는 방법입니다.
---

# Recorder

`Tools > nupamo > Split MMD Player > Recorder`에서 엽니다. 모니터보다 큰 해상도로 PNG 시퀀스를 촬영하고, FFmpeg가 준비되어 있으면 MP4로 인코딩합니다.

## 녹화 순서

1. `Player`에 녹화할 Player를 지정합니다.
2. Player 컴포넌트에서 `Start Time`과 `End Time`을 설정합니다. `End Time`이 `-1`이면 오디오 끝까지 녹화합니다.
3. YouTube 오디오를 사용하면 오디오 준비를 기다립니다. JIZURA를 선택했으면 JIZURA 준비도 기다립니다.
4. `Output Mode`, 출력 폴더, 해상도와 `FPS`를 정합니다.
5. 녹화 버튼을 누릅니다. 필요한 준비와 워밍업 후 캡처가 시작됩니다.

녹화 중에는 진행률과 남은 예상 시간이 표시됩니다. `Cancel`로 중단할 수 있습니다. 녹화 시간은 곡 길이, 해상도, FPS, 아바타와 효과 설정에 따라 달라집니다.

## 설정

| 항목 | 설명 |
| --- | --- |
| Player | 녹화할 Player |
| Output Mode | Normal, SBS, VR180 |
| Output | PNG 시퀀스와 영상의 출력 폴더 |
| Width / Height | Normal·SBS의 출력 해상도 |
| Resolution / Quality | VR180의 해상도·품질 프리셋 |
| Output Size | VR180 프리셋으로 정해진 해상도. 읽기 전용 |
| FPS | 초당 녹화 프레임 수 |
| Start Time / End Time | Player에서 설정한 구간. Recorder에서는 읽기 전용 |
| FFmpeg / Setting | 감지된 실행 파일과 공통 도구 설정 열기 |

`Normal`은 Player의 `2D` 모드에서, `VR180`은 `3D` 모드에서 녹화합니다. SBS는 두 눈의 화면을 좌우로 배치합니다.

## FFmpeg와 MP4

FFmpeg 경로는 `Split MMD Player > Setting`에서 관리합니다. YouTube 오디오 변환과 Recorder가 같은 설정을 사용합니다.

Windows에서는 경로를 비워두면 PATH와 프로젝트에 저장된 도구를 확인하고, 없으면 녹화 전에 자동 다운로드합니다. 다운로드가 끝나면 PNG 캡처와 MP4 인코딩을 진행합니다.

macOS/Linux에서는 FFmpeg를 설치하거나 실행 파일 경로를 지정하세요. FFmpeg를 사용할 수 없으면 PNG 시퀀스만 저장합니다. 인코딩에 실패하더라도 PNG 시퀀스는 남습니다.

## 오디오와 자막

YouTube로 준비한 오디오도 로컬 `Audio Clip`과 같은 방식으로 녹화에 사용합니다. 시작·종료 구간과 `Motion Time Offset`은 Player 설정을 따릅니다.

일반 자막과 JIZURA는 모든 카메라 View를 합친 화면에 한 번 표시됩니다. 녹화에서는 지정된 시간의 JIZURA 프레임이 준비될 때까지 기다린 뒤 캡처합니다. 자세한 내용은 [자막과 JIZURA](./captions)를 참고하세요.
