import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/guide/',
  locales: {
    root: {
      label: '한국어',
      lang: 'ko',
      title: 'Nupamo Project Guide',
      description: 'Nupamo의 Unity 에셋 및 셰이더 가이드.',
      themeConfig: {
        nav: [
          { text: '홈', link: '/' },
          {
            text: 'Split MMD Player',
            link: 'https://nupamo.booth.pm/items/8450925',
          },
          {
            text: 'AutoResize PhotoGallery',
            link: 'https://nupamo.booth.pm/items/8301374',
          },
          { text: '라이선스', link: 'https://nupa.moe/license/' },
        ],
        outline: {
          level: [2, 3],
          label: '이 페이지의 내용',
        },
        sidebar: [
          {
            text: 'AutoResize PhotoGallery (Editor)',
            items: [
              { text: '소개', link: '/photogallery/' },
              { text: '설치하기', link: '/photogallery/installation' },
              { text: '첫 갤러리 만들기', link: '/photogallery/quick-start' },
              {
                text: '갤러리 배치 조정하기',
                link: '/photogallery/photo-gallery',
              },
              {
                text: '빌드 전에 확인하기',
                link: '/photogallery/build-and-upload',
              },
              { text: '문제 해결', link: '/photogallery/troubleshooting' },
            ],
          },
          {
            text: 'AutoResize PhotoFrame (Shader)',
            items: [
              {
                text: '액자 머티리얼 꾸미기',
                link: '/photoframe/frame-materials',
              },
              { text: '셰이더 설정', link: '/photoframe/shader-property' },
            ],
          },
          {
            text: 'Split MMD Player',
            items: [
              { text: '가이드', link: '/split-mmd-player/' },
              { text: '옵션', link: '/split-mmd-player/option' },
              { text: '프리셋', link: '/split-mmd-player/presets' },
              { text: '자막과 JIZURA', link: '/split-mmd-player/captions' },
              { text: '키보드 조작', link: '/split-mmd-player/keyboard' },
              { text: '녹화', link: '/split-mmd-player/recorder' },
              { text: '변경 이력', link: '/split-mmd-player/changelog' },
            ],
          },
        ],
      },
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Nupamo Project Guide',
      description: "Guide for Nupamo's Unity assets and shaders.",
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          {
            text: 'Split MMD Player',
            link: 'https://nupamo.booth.pm/items/8450925',
          },
          {
            text: 'AutoResize PhotoGallery',
            link: 'https://nupamo.booth.pm/items/8301374',
          },
          { text: 'License', link: 'https://nupa.moe/license/' },
        ],
        outline: {
          level: [2, 3],
          label: 'On this page',
        },
        sidebar: [
          {
            text: 'AutoResize PhotoGallery (Editor)',
            items: [
              { text: 'Introduction', link: '/en/photogallery/' },
              { text: 'Installation', link: '/en/photogallery/installation' },
              {
                text: 'Create First Gallery',
                link: '/en/photogallery/quick-start',
              },
              { text: 'Adjust Layout', link: '/en/photogallery/photo-gallery' },
              {
                text: 'Check Before Build',
                link: '/en/photogallery/build-and-upload',
              },
              {
                text: 'Troubleshooting',
                link: '/en/photogallery/troubleshooting',
              },
            ],
          },
          {
            text: 'AutoResize PhotoFrame (Shader)',
            items: [
              {
                text: 'Decorating Frame Materials',
                link: '/en/photoframe/frame-materials',
              },
              {
                text: 'Shader Properties',
                link: '/en/photoframe/shader-property',
              },
            ],
          },
          {
            text: 'Split MMD Player',
            items: [
              { text: 'Guide', link: '/en/split-mmd-player/' },
              { text: 'Options', link: '/en/split-mmd-player/option' },
              { text: 'Presets', link: '/en/split-mmd-player/presets' },
              {
                text: 'Captions and JIZURA',
                link: '/en/split-mmd-player/captions',
              },
              {
                text: 'Keyboard Controls',
                link: '/en/split-mmd-player/keyboard',
              },
              { text: 'Recorder', link: '/en/split-mmd-player/recorder' },
              { text: 'Changelog', link: '/en/split-mmd-player/changelog' },
            ],
          },
        ],
      },
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'Nupamo Project Guide',
      description: 'NupamoのUnityアセットとシェーダーのガイド。',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          {
            text: 'Split MMD Player',
            link: 'https://nupamo.booth.pm/items/8450925',
          },
          {
            text: 'AutoResize PhotoGallery',
            link: 'https://nupamo.booth.pm/items/8301374',
          },
          { text: 'ライセンス', link: 'https://nupa.moe/license/' },
        ],
        outline: {
          level: [2, 3],
          label: 'このページについて',
        },
        sidebar: [
          {
            text: 'AutoResize PhotoGallery (Editor)',
            items: [
              { text: '紹介', link: '/ja/photogallery/' },
              { text: 'インストール', link: '/ja/photogallery/installation' },
              {
                text: '最初のギャラリー作成',
                link: '/ja/photogallery/quick-start',
              },
              {
                text: 'ギャラリーの配置調整',
                link: '/ja/photogallery/photo-gallery',
              },
              {
                text: 'ビルド前の確認',
                link: '/ja/photogallery/build-and-upload',
              },
              {
                text: 'トラブルシューティング',
                link: '/ja/photogallery/troubleshooting',
              },
            ],
          },
          {
            text: 'AutoResize PhotoFrame (Shader)',
            items: [
              {
                text: 'フレームマテリアルの装飾',
                link: '/ja/photoframe/frame-materials',
              },
              {
                text: 'シェーダー設定',
                link: '/ja/photoframe/shader-property',
              },
            ],
          },
          {
            text: 'Split MMD Player',
            items: [
              { text: 'ガイド', link: '/ja/split-mmd-player/' },
              { text: 'オプション', link: '/ja/split-mmd-player/option' },
              { text: 'プリセット', link: '/ja/split-mmd-player/presets' },
              { text: '字幕とJIZURA', link: '/ja/split-mmd-player/captions' },
              {
                text: 'キーボード操作',
                link: '/ja/split-mmd-player/keyboard',
              },
              { text: '録画', link: '/ja/split-mmd-player/recorder' },
              { text: '変更履歴', link: '/ja/split-mmd-player/changelog' },
            ],
          },
        ],
      },
    },
    zh: {
      label: '简体中文',
      lang: 'zh-CN',
      title: 'Nupamo Project Guide',
      description: 'Nupamo 的 Unity 资源与着色器指南。',
      themeConfig: {
        nav: [
          { text: '首页', link: '/zh/' },
          {
            text: 'Split MMD Player',
            link: 'https://nupamo.booth.pm/items/8450925',
          },
          {
            text: 'AutoResize PhotoGallery',
            link: 'https://nupamo.booth.pm/items/8301374',
          },
          { text: '许可证', link: 'https://nupa.moe/license/' },
        ],
        outline: {
          level: [2, 3],
          label: '本页目录',
        },
        docFooter: {
          prev: '上一页',
          next: '下一页',
        },
        sidebarMenuLabel: '菜单',
        returnToTopLabel: '返回顶部',
        langMenuLabel: '切换语言',
        darkModeSwitchLabel: '外观',
        darkModeSwitchTitle: '切换到深色模式',
        lightModeSwitchTitle: '切换到浅色模式',
        skipToContentLabel: '跳转到内容',
        notFound: {
          title: '页面未找到',
          quote: '您访问的页面不存在，请检查链接或返回首页。',
          linkLabel: '返回首页',
          linkText: '返回首页',
        },
        sidebar: [
          {
            text: 'AutoResize PhotoGallery（编辑器）',
            items: [
              { text: '介绍', link: '/zh/photogallery/' },
              { text: '安装', link: '/zh/photogallery/installation' },
              { text: '创建第一个画廊', link: '/zh/photogallery/quick-start' },
              { text: '调整画廊布局', link: '/zh/photogallery/photo-gallery' },
              { text: '构建前检查', link: '/zh/photogallery/build-and-upload' },
              { text: '故障排除', link: '/zh/photogallery/troubleshooting' },
            ],
          },
          {
            text: 'AutoResize PhotoFrame（着色器）',
            items: [
              { text: '设置相框材质', link: '/zh/photoframe/frame-materials' },
              { text: '着色器设置', link: '/zh/photoframe/shader-property' },
            ],
          },
          {
            text: 'Split MMD Player',
            items: [
              { text: '指南', link: '/zh/split-mmd-player/' },
              { text: '选项', link: '/zh/split-mmd-player/option' },
              { text: '预设', link: '/zh/split-mmd-player/presets' },
              { text: '字幕与 JIZURA', link: '/zh/split-mmd-player/captions' },
              { text: '键盘操作', link: '/zh/split-mmd-player/keyboard' },
              { text: '录制', link: '/zh/split-mmd-player/recorder' },
              { text: '更新日志', link: '/zh/split-mmd-player/changelog' },
            ],
          },
        ],
      },
    },
    'zh-tw': {
      label: '繁體中文',
      lang: 'zh-TW',
      title: 'Nupamo Project Guide',
      description: 'Nupamo 的 Unity 資源與著色器指南。',
      themeConfig: {
        nav: [
          { text: '首頁', link: '/zh-tw/' },
          {
            text: 'Split MMD Player',
            link: 'https://nupamo.booth.pm/items/8450925',
          },
          {
            text: 'AutoResize PhotoGallery',
            link: 'https://nupamo.booth.pm/items/8301374',
          },
          { text: '授權條款', link: 'https://nupa.moe/license/' },
        ],
        outline: {
          level: [2, 3],
          label: '本頁目錄',
        },
        docFooter: {
          prev: '上一頁',
          next: '下一頁',
        },
        sidebarMenuLabel: '選單',
        returnToTopLabel: '返回頂端',
        langMenuLabel: '切換語言',
        darkModeSwitchLabel: '外觀',
        darkModeSwitchTitle: '切換至深色模式',
        lightModeSwitchTitle: '切換至淺色模式',
        skipToContentLabel: '跳至內容',
        notFound: {
          title: '找不到頁面',
          quote: '您造訪的頁面不存在，請檢查連結或返回首頁。',
          linkLabel: '返回首頁',
          linkText: '返回首頁',
        },
        sidebar: [
          {
            text: 'AutoResize PhotoGallery（編輯器）',
            items: [
              { text: '介紹', link: '/zh-tw/photogallery/' },
              { text: '安裝', link: '/zh-tw/photogallery/installation' },
              {
                text: '建立第一個畫廊',
                link: '/zh-tw/photogallery/quick-start',
              },
              {
                text: '調整畫廊配置',
                link: '/zh-tw/photogallery/photo-gallery',
              },
              {
                text: '建置前檢查',
                link: '/zh-tw/photogallery/build-and-upload',
              },
              { text: '疑難排解', link: '/zh-tw/photogallery/troubleshooting' },
            ],
          },
          {
            text: 'AutoResize PhotoFrame（著色器）',
            items: [
              {
                text: '設定相框材質',
                link: '/zh-tw/photoframe/frame-materials',
              },
              { text: '著色器設定', link: '/zh-tw/photoframe/shader-property' },
            ],
          },
          {
            text: 'Split MMD Player',
            items: [
              { text: '指南', link: '/zh-tw/split-mmd-player/' },
              { text: '選項', link: '/zh-tw/split-mmd-player/option' },
              { text: '預設', link: '/zh-tw/split-mmd-player/presets' },
              {
                text: '字幕與 JIZURA',
                link: '/zh-tw/split-mmd-player/captions',
              },
              { text: '鍵盤操作', link: '/zh-tw/split-mmd-player/keyboard' },
              { text: '錄製', link: '/zh-tw/split-mmd-player/recorder' },
              { text: '更新紀錄', link: '/zh-tw/split-mmd-player/changelog' },
            ],
          },
        ],
      },
    },
  },
})
