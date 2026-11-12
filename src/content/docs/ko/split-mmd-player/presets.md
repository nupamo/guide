---
title: Split MMD Player 프리셋
description: 곡과 스테이지 프리셋을 저장하고 적용하는 방법입니다.
---

# 프리셋

곡과 스테이지를 따로 저장해 조합해서 사용합니다. 프리셋 없이 Create Scene에 직접 입력해도 됩니다.

## 곡 프리셋 {#song-presets}

1. `Tools > nupamo > Split MMD Player > Song Presets`를 엽니다.
2. `Add Song`으로 추가하고 `Name`을 입력합니다.
3. 오디오, 카메라 VMD, 댄서별 모션·립싱크를 지정합니다. 필요하면 자막 파일, `Motion Time Offset`, `VMD Retargeting`도 설정합니다.

`Audio Clip`보다 `YouTube URL`이, `Motion VMD`보다 `Motion Animation`이 우선합니다. `Lip VMD`를 비우면 모션 VMD의 립싱크를 사용합니다.

자막은 `Subtitle File (Optional)`에 Text Asset으로 저장합니다. 파일이 없는 프리셋을 적용하면 이전 파일도 비워집니다. 자막 표시·언어 설정은 Player에서 유지됩니다. [자막 파일 안내](./captions#subtitle-files)

기존 댄서가 더 많으면 모션을 반복합니다. 예: `A / B` → `A / B / A`. 슬롯이 추가되면 아바타를 연결하세요.

## 스테이지 프리셋 {#stage-presets}

1. `Tools > nupamo > Split MMD Player > Stage Presets`를 엽니다.
2. Day / Night / Summer를 편집하거나 `Add Stage`로 추가합니다.
3. `Name`, `Stage Scene`, `Post Process Profile`을 지정합니다.

곡·모션·아바타 설정은 유지됩니다. 비어 있는 프리셋 슬롯은 적용할 때 해당 입력도 비웁니다.

## 적용하기

- **새 씬:** Create Scene 맨 위의 곡·스테이지 버튼을 누르면 즉시 적용됩니다. 적용 후 직접 수정할 수 있습니다.
- **기존 Player:** Play Mode를 종료하고 Player를 선택한 뒤 Song Presets에서 `Apply to Selected Player`를 누릅니다. 아바타 연결과 위치·회전·크기는 유지됩니다.

Create Scene의 `Edit` 버튼으로 각 편집 창을 열 수 있습니다. 두 프리셋 모두 `Duplicate`로 복제하고 `Remove`로 삭제합니다.

## 저장 위치

`Assets/nupamo/Split MMD Player/Editor/`의 `SongPresets.asset`과 `StagePresets.asset`에 저장됩니다. 연결된 파일과 함께 보관하세요.
