---
title: Split MMD Player 자막과 JIZURA
description: 자막과 실험적 JIZURA 기능을 사용하는 방법입니다.
---

# 자막과 JIZURA

YouTube 자막 또는 직접 준비한 파일을 표시합니다. 여러 카메라 View에서도 화면 전체에 한 번 표시되며 녹화에도 포함됩니다.

## 자막 켜기

1. Player의 `Inputs > YouTube URL`에 링크를 넣고 오디오 준비를 기다립니다.
2. `Inputs > Captions > Display`에서 표시 방식을 선택합니다.

| Display | 표시 |
| --- | --- |
| Off | 자막 끄기 |
| Subtitles | 일반 자막. 기본값 |
| JIZURA | 음악에 맞춘 문자 모션. 실험적 기능 |

`Subtitle Language`에는 영상에서 사용 가능한 자막만 나옵니다. 기본값 `Automatic (Original)`은 원어 → Editor 언어 → 영어 순으로 시도합니다. 직접 선택한 언어가 없으면 자막 파일을 지정하세요.

## 자막 파일 {#subtitle-files}

`Subtitle File (Optional)`에 SRT, VTT 또는 자막 JSON이 담긴 `TextAsset`을 지정합니다. SRT/VTT는 `.txt`로 저장하면 Unity에서 가져올 수 있습니다. [곡 프리셋](./presets#song-presets)에도 저장할 수 있습니다.

파일은 YouTube 자막보다 우선합니다. 비우면 YouTube 자막을 가져옵니다. 로컬 오디오에도 사용할 수 있습니다.

## JIZURA — 실험적 기능

[852wa의 JIZURA](https://github.com/852wa/JIZURA)를 기반으로 자막의 레이아웃과 모션을 자동 구성합니다. Split MMD Player의 JIZURA 연동은 **실험적 기능**입니다.

- `Display`를 `JIZURA`로 선택합니다. `New JIZURA`로 구성을 바꿀 수 있습니다.
- **Windows 64비트 Unity Editor와 Microsoft WebView2 Runtime**이 필요합니다. 없으면 `Install WebView2 Runtime`으로 설치합니다.
- 준비 중에는 일반 자막이 표시됩니다. JIZURA는 Editor·Recorder에서 사용할 수 있습니다.

## 싱크와 문제 해결

자막은 오디오 시간을 따릅니다. `Motion Time Offset`은 자막 시간에 적용되지 않습니다.

자막이 없으면 파일을 지정하고, 다운로드 오류는 `Setting` 확인 후 `Retry Captions`로 다시 시도하세요. JIZURA 녹화는 준비 완료 후 시작합니다. [Recorder 안내](./recorder)
