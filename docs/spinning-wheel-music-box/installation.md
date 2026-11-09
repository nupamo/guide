---
title: 월드에 설치하기
description: 물레 오르골을 VRChat 월드에 넣고 설정하는 방법
---

# 월드에 설치하기

## 준비

- VRChat Creator Companion으로 만든 Worlds 프로젝트
- Unity `2022.3.22f1`, VRChat SDK Worlds `3.10.3`에서 테스트했습니다.
- TextMesh Pro (Unity 기본 패키지)

## 1. 패키지 가져오기

`SpinningWheelMusicBox.unitypackage`를 프로젝트에 가져옵니다.

필요한 MML 파서와 음 분석 셰이더(MML Transcriber)가 함께 들어 있으므로 따로 설치할 것은 없습니다.

## 2. 프리팹 배치

`Assets/nupamo/Spinning Wheel Music Box/Spinning Wheel Music Box.prefab`을 Scene에 드래그해서 테이블 위에 놓습니다.

- 손잡이 쪽이 프리팹의 **-Z** 방향입니다. 사람들이 서 있을 쪽으로 돌려 주세요.
- 상자 폭은 약 0.5 m이고, 조작 화면이 상자 위로 약 0.4 m 떠 있습니다.
- 조작 화면은 약 2.2 m 안으로 다가가면 나타나고, 2.8 m보다 멀어지면 사라집니다.

## 3. 반사 확인

금속 부품이 어둡게 보이면 근처에 Reflection Probe를 두고 Bake 해 주세요.

## 미리 보기

`Assets/nupamo/Spinning Wheel Music Box/Demo/Spinning Wheel Music Box Demo.unity`를 열고 Play(ClientSim)를 누르면 바로 확인할 수 있습니다.

Unity Editor의 ClientSim은 YouTube 주소를 직접 열지 못합니다. 대신 Play 중에 유튜브 링크 칸에 YouTube 주소를 넣으면 에디터 전용 스크립트가 로컬 yt-dlp로 재생 가능한 주소로 바꿔 줍니다. 칸의 글자가 바뀐 뒤 `● 녹음`을 누르세요. 업로드한 월드에서는 VRChat이 주소를 직접 처리하므로 이 과정이 없습니다.

## 설정

프리팹 루트의 오르골 컴포넌트를 선택하면 Inspector에 두 가지가 보입니다.

### Start mode

인스턴스가 처음 열릴 때의 재생 방식입니다.

- `Manual` (기본): 손잡이를 돌려야 소리가 납니다.
- `Auto`: 첫 곡을 저절로 반복 재생합니다.

### Songs

목록에 항상 들어 있는 기본 곡입니다. 곡마다 제목과 마비노기 MML(6,000자까지)을 넣습니다.

- `+ Add song`으로 추가, `▲`로 순서 올리기, `✕`로 삭제합니다.
- 기본으로 퍼블릭 도메인 곡 3개(사티 짐노페디 1번, 사티 Je te veux, 드뷔시 달빛)가 들어 있습니다.
- 공개 월드에 넣는 곡은 사용할 권리가 있는 곡만 넣어 주세요.

나머지 값은 맨 아래 `Internal`을 펼치면 볼 수 있지만, 보통은 바꿀 필요가 없습니다.

## 같은 월드에 여러 개 놓기

오르골을 여러 개 놓아도 됩니다. 사람들이 저장한 곡 목록은 같은 월드 안의 모든 오르골이 같이 씁니다.
