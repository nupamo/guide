import type { Localized } from '../i18n';

export type IconName = 'clapperboard' | 'gallery' | 'frame' | 'music' | 'wrench' | 'bot';

export interface GuidePage {
  /** File name without `.md`. `index` is the guide's own URL. */
  slug: string;
  title: Localized;
}

export interface Guide {
  slug: string;
  name: Localized;
  description: Localized;
  icon: IconName;
  booth?: string;
  /** Sidebar order. The first page is the guide's entry point. */
  pages: GuidePage[];
}

const same = (s: string): Localized => ({ ko: s, en: s, ja: s, zh: s, 'zh-tw': s });

// Only list guides that have pages. Text exists for every locale.
export const guides: Guide[] = [
  {
    slug: 'split-mmd-player',
    name: same('Split MMD Player'),
    description: {
      ko: '3분할 카메라로 MMD를 재생하고 녹화합니다.',
      en: 'Play and record MMD with a three-way split camera.',
      ja: '3分割カメラでMMDを再生・録画します。',
      zh: '用三分屏摄像机播放并录制 MMD。',
      'zh-tw': '用三分割攝影機播放並錄製 MMD。',
    },
    icon: 'clapperboard',
    booth: 'https://nupamo.booth.pm/items/8450925',
    pages: [
      { slug: 'index', title: { ko: '가이드', en: 'Guide', ja: 'ガイド', zh: '指南', 'zh-tw': '指南' } },
      { slug: 'option', title: { ko: '옵션', en: 'Options', ja: 'オプション', zh: '选项', 'zh-tw': '選項' } },
      { slug: 'presets', title: { ko: '프리셋', en: 'Presets', ja: 'プリセット', zh: '预设', 'zh-tw': '預設' } },
      { slug: 'captions', title: { ko: '자막과 JIZURA', en: 'Captions and JIZURA', ja: '字幕とJIZURA', zh: '字幕与 JIZURA', 'zh-tw': '字幕與 JIZURA' } },
      { slug: 'keyboard', title: { ko: '키보드 조작', en: 'Keyboard controls', ja: 'キーボード操作', zh: '键盘操作', 'zh-tw': '鍵盤操作' } },
      { slug: 'recorder', title: { ko: '녹화', en: 'Recorder', ja: '録画', zh: '录制', 'zh-tw': '錄製' } },
      { slug: 'changelog', title: { ko: '변경 이력', en: 'Changelog', ja: '変更履歴', zh: '更新日志', 'zh-tw': '更新紀錄' } },
    ],
  },
  {
    slug: 'photogallery',
    name: same('AutoResize PhotoGallery'),
    description: {
      ko: '사진 비율에 맞춰 액자를 만들고 벽에 배치합니다.',
      en: 'Fit frames to each photo and lay them out on a wall.',
      ja: '写真の比率に合わせて額縁を作り、壁に並べます。',
      zh: '按照片比例生成相框并排列到墙上。',
      'zh-tw': '依照片比例產生相框並排列到牆上。',
    },
    icon: 'gallery',
    booth: 'https://nupamo.booth.pm/items/8301374',
    pages: [
      { slug: 'index', title: { ko: '소개', en: 'Introduction', ja: '紹介', zh: '介绍', 'zh-tw': '介紹' } },
      { slug: 'installation', title: { ko: '설치하기', en: 'Installation', ja: 'インストール', zh: '安装', 'zh-tw': '安裝' } },
      { slug: 'quick-start', title: { ko: '첫 갤러리 만들기', en: 'Create your first gallery', ja: '最初のギャラリー作成', zh: '创建第一个画廊', 'zh-tw': '建立第一個畫廊' } },
      { slug: 'photo-gallery', title: { ko: '갤러리 배치 조정하기', en: 'Adjust the layout', ja: 'ギャラリーの配置調整', zh: '调整画廊布局', 'zh-tw': '調整畫廊配置' } },
      { slug: 'build-and-upload', title: { ko: '빌드 전에 확인하기', en: 'Check before build', ja: 'ビルド前の確認', zh: '构建前检查', 'zh-tw': '建置前檢查' } },
      { slug: 'troubleshooting', title: { ko: '문제 해결', en: 'Troubleshooting', ja: 'トラブルシューティング', zh: '故障排除', 'zh-tw': '疑難排解' } },
    ],
  },
  {
    slug: 'photoframe',
    name: same('AutoResize PhotoFrame'),
    description: {
      ko: '유리 반사와 입체 프레임을 가진 액자 셰이더.',
      en: 'A frame shader with glass reflection and a 3D border.',
      ja: 'ガラス反射と立体フレームの額縁シェーダー。',
      zh: '带玻璃反射和立体边框的相框着色器。',
      'zh-tw': '具玻璃反射與立體邊框的相框著色器。',
    },
    icon: 'frame',
    booth: 'https://nupamo.booth.pm/items/8301374',
    pages: [
      { slug: 'frame-materials', title: { ko: '액자 머티리얼 꾸미기', en: 'Decorate frame materials', ja: 'フレームマテリアルの装飾', zh: '设置相框材质', 'zh-tw': '設定相框材質' } },
      { slug: 'shader-property', title: { ko: '셰이더 설정', en: 'Shader properties', ja: 'シェーダー設定', zh: '着色器设置', 'zh-tw': '著色器設定' } },
    ],
  },
  {
    slug: 'spinning-wheel-music-box',
    name: { ko: '물레 오르골', en: 'Spinning Wheel Music Box', ja: '糸車オルゴール', zh: '纺车八音盒', 'zh-tw': '紡車音樂盒' },
    description: {
      ko: '손으로 돌리는 종이악보 오르골. 인스턴스가 함께 듣습니다.',
      en: 'A hand-cranked paper-score music box the whole instance hears.',
      ja: '手回しの紙楽譜オルゴール。インスタンスの全員で聴けます。',
      zh: '手摇纸乐谱八音盒，实例中的所有人一起听。',
      'zh-tw': '手搖紙樂譜音樂盒，實例中的所有人一起聽。',
    },
    icon: 'music',
    pages: [
      { slug: 'index', title: { ko: '소개', en: 'Introduction', ja: '紹介', zh: '介绍', 'zh-tw': '介紹' } },
      { slug: 'how-to-play', title: { ko: '오르골 사용법', en: 'How to play', ja: 'オルゴールの使い方', zh: '八音盒的使用方法', 'zh-tw': '音樂盒的使用方法' } },
      { slug: 'installation', title: { ko: '월드에 설치하기', en: 'Installation', ja: 'ワールドへの設置', zh: '安装到世界', 'zh-tw': '安裝到世界' } },
      { slug: 'troubleshooting', title: { ko: '문제 해결', en: 'Troubleshooting', ja: 'トラブルシューティング', zh: '故障排除', 'zh-tw': '疑難排解' } },
    ],
  },
];

/** Path of a page relative to a locale root, e.g. `photogallery/` or `photogallery/installation/`. */
export const pagePath = (guide: string, page: string) => `${guide}/${page === 'index' ? '' : `${page}/`}`;

export interface Project {
  href: string;
  name: string;
  description: Localized;
  domain: string;
  icon: IconName;
}

// Other projects linked below the guide list. They open on their own sites.
export const projects: Project[] = [
  {
    href: 'https://tools.nupa.moe/', name: 'tools', domain: 'tools.nupa.moe', icon: 'wrench',
    description: { ko: '직접 쓰려고 만든 작은 도구들', en: 'Small tools I made for myself', ja: '自分用に作った小さな道具', zh: '自用的小工具', 'zh-tw': '自用的小工具' },
  },
  {
    href: 'https://bot.nupa.moe/', name: 'Pamo_bot', domain: 'bot.nupa.moe', icon: 'bot',
    description: { ko: '디스코드 봇', en: 'Discord bot', ja: 'Discord ボット', zh: 'Discord 机器人', 'zh-tw': 'Discord 機器人' },
  },
];
