export const LOCALES = ['ko', 'en', 'ja', 'zh', 'zh-tw'] as const;
export type Locale = typeof LOCALES[number];
export type Localized = Record<Locale, string>;
export const DEFAULT_LOCALE: Locale = 'ko';

export const LOCALE_NAMES: Record<Locale, { short: string; name: string; lang: string }> = {
  ko: { short: 'KO', name: '한국어', lang: 'ko' },
  en: { short: 'EN', name: 'English', lang: 'en' },
  ja: { short: 'JA', name: '日本語', lang: 'ja' },
  zh: { short: '简', name: '简体中文', lang: 'zh-CN' },
  'zh-tw': { short: '繁', name: '繁體中文', lang: 'zh-TW' },
};

const site = {
  ko: {
    skip: '본문으로 이동', home: 'guide 홈', guideList: '가이드 목록', tagline: '직접 만든 Unity 에셋과 셰이더의 사용 설명서.',
    guides: '가이드', otherProjects: '다른 프로젝트', newTab: '(새 창에서 열림)', language: '언어',
    pages: '이 가이드의 페이지', onThisPage: '이 페이지의 내용', prev: '이전', next: '다음', booth: 'BOOTH에서 보기', license: '라이선스',
    pageCount: (n: number) => `${n}개 페이지`,
  },
  en: {
    skip: 'Skip to content', home: 'guide home', guideList: 'All guides', tagline: 'Manuals for the Unity assets and shaders I make.',
    guides: 'Guides', otherProjects: 'Other projects', newTab: '(opens in a new tab)', language: 'Language',
    pages: 'Pages in this guide', onThisPage: 'On this page', prev: 'Previous', next: 'Next', booth: 'View on BOOTH', license: 'License',
    pageCount: (n: number) => `${n} page${n === 1 ? '' : 's'}`,
  },
  ja: {
    skip: '本文へ移動', home: 'guide ホーム', guideList: 'ガイド一覧', tagline: '自作のUnityアセットとシェーダーの使い方。',
    guides: 'ガイド', otherProjects: 'ほかのプロジェクト', newTab: '（新しいタブで開きます）', language: '言語',
    pages: 'このガイドのページ', onThisPage: 'このページの内容', prev: '前へ', next: '次へ', booth: 'BOOTHで見る', license: 'ライセンス',
    pageCount: (n: number) => `${n}ページ`,
  },
  zh: {
    skip: '跳转到内容', home: 'guide 首页', guideList: '指南列表', tagline: '我制作的 Unity 资源与着色器的使用说明。',
    guides: '指南', otherProjects: '其他项目', newTab: '（在新标签页中打开）', language: '语言',
    pages: '本指南的页面', onThisPage: '本页目录', prev: '上一页', next: '下一页', booth: '在 BOOTH 查看', license: '许可证',
    pageCount: (n: number) => `${n} 页`,
  },
  'zh-tw': {
    skip: '跳至內容', home: 'guide 首頁', guideList: '指南列表', tagline: '我製作的 Unity 資源與著色器的使用說明。',
    guides: '指南', otherProjects: '其他專案', newTab: '（在新分頁中開啟）', language: '語言',
    pages: '本指南的頁面', onThisPage: '本頁目錄', prev: '上一頁', next: '下一頁', booth: '在 BOOTH 查看', license: '授權條款',
    pageCount: (n: number) => `${n} 頁`,
  },
} satisfies Record<Locale, unknown>;

export const getMessages = (locale: Locale) => site[locale];

// Korean lives at the site root; other languages under /en/, /ja/, /zh/, /zh-tw/.
// `path` is relative to a locale root, e.g. 'photogallery/installation/'.
export function localePath(locale: Locale, path = '') {
  return `${import.meta.env.BASE_URL}${locale === DEFAULT_LOCALE ? '' : `${locale}/`}${path}`;
}

export function localeStaticPaths() {
  return LOCALES.map(locale => ({ params: { lang: locale === DEFAULT_LOCALE ? undefined : locale }, props: { locale } }));
}
