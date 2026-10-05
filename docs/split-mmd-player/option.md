---
title: Split MMD Player 옵션
description: Split MMD Player의 기능 설명입니다.
---

# 옵션

Split MMD Player의 기능 설명입니다.

## Create Scene

### Presets

창 맨 위에 `Song Preset`과 `Stage Preset` 버튼이 있습니다. **버튼을 클릭하면 바로 적용**됩니다. 각 섹션의 `Edit` 버튼으로 프리셋 편집 창을 열 수 있습니다.

- `Song Preset`: [곡 프리셋](./presets#song-presets)의 오디오, 자막 파일, 카메라 VMD, 댄서 모션과 리타기팅 설정을 적용합니다.
- `Stage Preset`: [스테이지 프리셋](./presets#stage-presets)의 Stage Scene과 포스트 프로세싱 프로파일을 적용합니다. 기본 Day / Night / Summer도 편집할 수 있습니다.

### Inputs

- `Scene Name`: 생성할 씬 이름입니다. 기존 씬이 있으면 확인 후 덮어씁니다.
- `Camera VMD`: MMD 카메라 VMD 파일입니다.
- `Audio Clip` / `YouTube URL`: 로컬 오디오 또는 YouTube 영상 링크입니다. 링크가 있으면 YouTube 오디오를 우선 사용합니다.
- `Subtitle File (Optional)`: 직접 준비한 자막 Text Asset입니다. 지정하면 YouTube 자막 대신 해당 파일을 사용합니다.
- `Stage Scene`: 생성할 씬에 가져올 Unity Scene입니다.
- `Post Process Profile`: 사용할 포스트 프로세싱 프로파일입니다.
- `Motion Time Offset`: 오디오 기준 모션 시간 보정값입니다. Inputs 마지막에 있으며, 자막 시간에는 적용하지 않습니다.

### PMX Props

- MMD 소품을 Import 합니다.

### Dancers

각 댄서에 다음 슬롯을 지정합니다. 프리셋 없이 직접 입력하거나, 프리셋을 적용한 뒤 수정할 수 있습니다.

- `Source Avatar`: 사용할 아바타입니다. 댄서 이름은 원본 아바타 이름을 사용합니다.
- `Motion Animation`: Unity `AnimationClip` 모션입니다. 지정하면 Motion VMD보다 우선합니다.
- `Motion VMD`: MMD 모션 파일입니다.
- `Lip VMD`: 별도의 립싱크 파일입니다. 비워두면 Motion VMD의 립싱크를 사용합니다.

`Add Dancer`와 `Remove Last Dancer`로 슬롯 수를 조정합니다.

### VMD Retargeting

댄서 입력 아래에서 `Enable Foot IK`, `Copy Foot IK Rotation`, `Motion Scale`, `Camera Scale`을 조정합니다. 곡 프리셋에 저장할 수도 있습니다.

---

## Setting

`Tools > nupamo > Split MMD Player > Setting`에서 FFmpeg와 yt-dlp를 한 창에서 설정합니다. Player마다 입력할 필요가 없으며 YouTube 오디오, 자막 가져오기와 Recorder가 공유합니다.

- `Executable Path`: 직접 사용할 실행 파일 경로. `Browse`로 선택할 수 있습니다.
- `Detected Path`: 현재 사용할 수 있는 실행 파일 경로입니다.
- `Use Automatic Detection`(FFmpeg) / `Use Automatic Download`(yt-dlp): 직접 지정한 경로를 비워 자동 준비를 사용합니다.

Windows에서는 경로가 비어 있으면 다음 순서로 준비합니다.

| 도구 | 준비 순서 |
| --- | --- |
| FFmpeg | PATH → 프로젝트에 저장된 도구 → 없으면 자동 다운로드 |
| yt-dlp | 프로젝트 캐시 → 없으면 공식 버전 자동 다운로드 |

직접 경로를 지정하면 그 파일을 우선 사용합니다. macOS/Linux에서는 도구를 설치하거나 경로를 지정하세요. YouTube 다운로드에서 JavaScript Runtime 안내가 나오면 Node.js를 설치하고 PATH에서 찾을 수 있게 설정하세요.

## Component

- `Mode`: 3D 모드 선택시 SBS 모드를 활성화합니다. 2분할 카메라가 강제되며 왼쪽눈과 오른쪽눈을 시뮬레이션합니다.
  - `SBS`: `Half` or `Full` 선택
  - `3D Strength`: 양쪽 눈의 거리 강도입니다.
  - `Letterbox`: 캐릭터가 앞으로 나와보이게 하는 레터박스의 크기를 설정합니다.
- `Remember Parameter Changes`: Play중에 바꾼 옵션을 초기화하지 않고 다음 재생에도 사용합니다.
- `Show Runtime UI`: Play 화면 속에 재생 컨트롤 및 카메라 설정 UI를 표시합니다.

### Inputs

- `Audio Clip`: 모션과 함께 재생할 로컬 오디오입니다.
- `YouTube URL`: 영상 링크만으로 오디오를 가져옵니다. 링크가 있으면 Audio Clip보다 우선합니다.
- `Post Process Profile`: 포스트 프로세싱 프로필
- `Camera VMD`: MMD 카메라 VMD 파일입니다.

### Captions

Dancers보다 위에 표시되는 자막 설정입니다.

- `Display`: Off / Subtitles / JIZURA를 선택합니다.
- `Subtitle Language`: 해당 YouTube 영상에서 사용할 수 있는 자막 언어를 선택합니다.
- `Subtitle File (Optional)`: 직접 준비한 자막 Text Asset으로 YouTube 자막을 대체합니다.
- `New JIZURA`: 다른 JIZURA 구성을 만듭니다.

사용 방법과 준비 환경은 [자막과 JIZURA](./captions)를 참고하세요.

### Dancers / Views

- `Dancers`: 재생에 사용할 Dancer 목록입니다.
  - 댄서 이름은 원본 아바타 이름을 사용합니다.
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
- `Motion Time Offset`: 오디오 기준 모션 시간 보정값입니다. 양수는 더 뒤의 모션 프레임, 음수는 더 앞의 프레임을 사용합니다. 첫 재생과 seek에 동일하게 적용되며 자막 시간은 바꾸지 않습니다.

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
