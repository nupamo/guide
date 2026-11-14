import type { Localized } from '../i18n';

export type ChangeKind = 'added' | 'changed' | 'fixed';

export interface Change {
  /** Omitted for a line that needs no badge, such as the first release. */
  kind?: ChangeKind;
  text: Localized;
}

export interface Release {
  version: string;
  date: string;
  /** Product edition when it differs from the base, e.g. Split MMD Player Studio. */
  edition?: string;
  changes: Change[];
}

/** Heading anchor, e.g. `v1-6-0`. */
export const releaseId = (r: Release) => `v${r.version.replace(/\./g, '-')}`;

const c = (kind: ChangeKind | undefined, ko: string, en: string, ja: string, zh: string, zhTw: string): Change =>
  ({ kind, text: { ko, en, ja, zh, 'zh-tw': zhTw } });
const first = c(undefined, '첫 릴리즈', 'Initial release', '初回リリース', '首次发布', '首次發行');

/**
 * Release lines, newest first. A guide points at one with `release` in guides.ts;
 * guides sold as one BOOTH item share a line. Each line becomes the guide's
 * changelog page and `/releases/<guide>.json`, which the Unity editor reads.
 */
export const releases: Record<string, Release[]> = {
  'split-mmd-player': [
    {
      version: '1.6.0', date: '2026-10-05', edition: 'Studio', changes: [
        c('added', 'YouTube 링크에서 음원과 가사 불러오기', 'Audio and lyrics from YouTube links', 'YouTubeリンクから音源と歌詞を読み込み', '从 YouTube 链接加载音频和歌词', '從 YouTube 連結載入音訊與歌詞'),
        c('added', 'JIZURA (실험적 기능)', 'JIZURA (experimental)', 'JIZURA（実験的）', 'JIZURA（实验性功能）', 'JIZURA（實驗性功能）'),
        c('added', '곡·스테이지 프리셋', 'Song and stage presets', '曲・ステージのプリセット', '歌曲与舞台预设', '歌曲與舞台預設'),
        c('added', 'Editor UI 번역', 'Editor UI translations', 'Editor UIの翻訳', 'Editor UI 翻译', 'Editor UI 翻譯'),
        c('fixed', '재생 시작과 seek 때 싱크가 어긋나는 문제', 'Sync drifting when playback starts or seeks', '再生開始時・シーク時に同期がずれる問題', '开始播放和跳转时同步偏移的问题', '開始播放和跳轉時同步偏移的問題'),
      ],
    },
    {
      version: '1.5.0', date: '2026-07-26', edition: 'Studio', changes: [
        c('added', 'Runtime 재생 컨트롤', 'Runtime playback controls', 'Runtime再生コントロール', 'Runtime 播放控制', 'Runtime 播放控制'),
        c('added', '재생 단축키', 'Playback shortcuts', '再生ショートカット', '播放快捷键', '播放快捷鍵'),
      ],
    },
    {
      version: '1.4.0', date: '2026-07-14', edition: 'Studio', changes: [
        c('added', 'Split MMD Recorder', 'Split MMD Recorder', 'Split MMD Recorder', 'Split MMD Recorder', 'Split MMD Recorder'),
      ],
    },
    {
      version: '1.3.0', date: '2026-07-05', edition: 'Studio', changes: [
        c('added', '3D 모드', '3D mode', '3Dモード', '3D 模式', '3D 模式'),
        c('added', '키보드 컨트롤', 'Keyboard controls', 'キーボード操作', '键盘控制', '鍵盤控制'),
        c('added', 'Summer 프리셋', 'Summer preset', 'Summerプリセット', 'Summer 预设', 'Summer 預設'),
      ],
    },
    {
      version: '1.2.0', date: '2026-06-20', edition: 'Studio', changes: [
        c('changed', 'Stage Prefab 대신 Scene 사용', 'Scenes replace stage prefabs', 'Stage Prefabの代わりにSceneを使用', '使用 Scene 代替 Stage Prefab', '使用 Scene 取代 Stage Prefab'),
        c('added', 'Day·Night 프리셋', 'Day and Night presets', 'Day・Nightプリセット', 'Day 与 Night 预设', 'Day 與 Night 預設'),
        c('added', '씬 덮어쓰기 전 확인', 'Confirmation before overwriting a scene', 'シーン上書き前の確認', '覆盖场景前的确认', '覆寫場景前的確認'),
        c('fixed', '기존 씬 데이터가 지워지는 문제', 'Existing scene data being deleted', '既存シーンのデータが消える問題', '已有场景数据被删除的问题', '既有場景資料被刪除的問題'),
        c('fixed', '아래 시점에서 거울 바닥이 보이는 문제', 'Mirror floor visible from below', '下からの視点でミラーフロアが見える問題', '从下方观察时能看到镜面地板的问题', '從下方觀察時看得到鏡面地板的問題'),
        c('fixed', 'Runtime UI Hide 설정이 저장되지 않는 문제', 'Runtime UI Hide setting not saved', 'Runtime UIのHide設定が保存されない問題', 'Runtime UI Hide 设置未保存的问题', 'Runtime UI Hide 設定未儲存的問題'),
      ],
    },
    {
      version: '1.1.0', date: '2026-06-17', edition: 'Studio', changes: [
        c('added', 'Gesture Manager·SPS 지원', 'Gesture Manager and SPS support', 'Gesture Manager・SPS対応', '支持 Gesture Manager 与 SPS', '支援 Gesture Manager 與 SPS'),
        c('added', '포스트 프로세싱·기본 프로파일 지원', 'Post-processing and a default profile', 'ポストプロセッシング・標準プロファイル対応', '支持后处理与默认配置', '支援後製處理與預設設定檔'),
        c('added', 'Unity AnimationClip 모션 지원', 'Unity AnimationClip motions', 'Unity AnimationClipモーション対応', '支持 Unity AnimationClip 动作', '支援 Unity AnimationClip 動作'),
        c('added', 'Play Mode 파라미터 유지', 'Play Mode parameters kept', 'Play Modeのパラメーターを保持', '保留 Play Mode 参数', '保留 Play Mode 參數'),
        c('added', 'Player 간 Dancer·Audio 공유', 'Dancer and Audio shared between players', 'Player間でDancer・Audioを共有', 'Player 之间共享 Dancer 与 Audio', 'Player 之間共用 Dancer 與 Audio'),
        c('added', 'Dancer Transform Offset', 'Dancer Transform Offset', 'Dancer Transform Offset', 'Dancer Transform Offset', 'Dancer Transform Offset'),
        c('added', 'Play Mode 중 모션 변경', 'Motion changes during Play Mode', 'Play Mode中のモーション変更', '在 Play Mode 中更换动作', '在 Play Mode 中更換動作'),
        c('changed', '기본 스테이지·모션·곡', 'Default stage, motion and song', '標準ステージ・モーション・曲', '默认舞台、动作和歌曲', '預設舞台、動作和歌曲'),
        c('fixed', '사용하지 않는 Dancer가 보이는 문제', 'Unused dancers visible', '未使用のDancerが表示される問題', '未使用的 Dancer 仍然显示的问题', '未使用的 Dancer 仍然顯示的問題'),
      ],
    },
    {
      version: '1.0.1', date: '2026-06-11', changes: [
        c('fixed', 'VMD 카메라 보간', 'VMD camera interpolation', 'VMDカメラ補間', 'VMD 摄像机插值', 'VMD 攝影機插值'),
      ],
    },
    { version: '1.0.0', date: '2026-06-03', changes: [first] },
  ],
  'autoresize-photo': [
    { version: '1.0.0', date: '2026-05-03', changes: [first] },
  ],
  'spinning-wheel-music-box': [
    { version: '1.0.0', date: '2026-11-11', changes: [first] },
  ],
};
