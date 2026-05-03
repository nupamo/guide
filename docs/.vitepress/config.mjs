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
          { text: 'AutoResize PhotoGallery', link: 'https://nupamo.booth.pm/items/8301374' },
          { text: 'AutoResize PhotoFrame (Free)', link: 'https://nupamo.booth.pm/items/1740420' },
        ],
        outline: {
          level: [2, 3],
          label: '이 페이지의 내용'
        },
        sidebar: [
          {
            text: 'AutoResize PhotoGallery (Editor)',
            items: [
              { text: '소개', link: '/photogallery/' },
              { text: '설치하기', link: '/photogallery/installation' },
              { text: '첫 갤러리 만들기', link: '/photogallery/quick-start' },
              { text: '갤러리 배치 조정하기', link: '/photogallery/photo-gallery' },
              { text: '빌드 전에 확인하기', link: '/photogallery/build-and-upload' },
              { text: '문제 해결', link: '/photogallery/troubleshooting' },
            ]
          },
          {
            text: 'AutoResize PhotoFrame (Shader)',
            items: [
              { text: '액자 머티리얼 꾸미기', link: '/photoframe/frame-materials' },
              { text: '셰이더 설정', link: '/photoframe/shader-property' },
            ]
          }
        ]
      }
    },
    en: {
      label: 'English',
      lang: 'en',
      title: 'Nupamo Project Guide',
      description: 'Guide for Nupamo\'s Unity assets and shaders.',
      themeConfig: {
        nav: [
          { text: 'Home', link: '/en/' },
          { text: 'AutoResize PhotoGallery', link: '/en/photogallery/' },
          { text: 'AutoResize PhotoFrame', link: '/en/photoframe/frame-materials' },
        ],
        outline: {
          level: [2, 3],
          label: 'On this page'
        },
        sidebar: [
          {
            text: 'AutoResize PhotoGallery (Editor)',
            items: [
              { text: 'Introduction', link: '/en/photogallery/' },
              { text: 'Installation', link: '/en/photogallery/installation' },
              { text: 'Create First Gallery', link: '/en/photogallery/quick-start' },
              { text: 'Adjust Layout', link: '/en/photogallery/photo-gallery' },
              { text: 'Check Before Build', link: '/en/photogallery/build-and-upload' },
              { text: 'Troubleshooting', link: '/en/photogallery/troubleshooting' },
            ]
          },
          {
            text: 'AutoResize PhotoFrame (Shader)',
            items: [
              { text: 'Decorating Frame Materials', link: '/en/photoframe/frame-materials' },
              { text: 'Shader Properties', link: '/en/photoframe/shader-property' },
            ]
          }
        ]
      }
    },
    ja: {
      label: '日本語',
      lang: 'ja',
      title: 'Nupamo Project Guide',
      description: 'NupamoのUnityアセットとシェーダーのガイド。',
      themeConfig: {
        nav: [
          { text: 'ホーム', link: '/ja/' },
          { text: 'AutoResize PhotoGallery', link: '/ja/photogallery/' },
          { text: 'AutoResize PhotoFrame', link: '/ja/photoframe/frame-materials' },
        ],
        outline: {
          level: [2, 3],
          label: 'このページについて'
        },
        sidebar: [
          {
            text: 'AutoResize PhotoGallery (Editor)',
            items: [
              { text: '紹介', link: '/ja/photogallery/' },
              { text: 'インストール', link: '/ja/photogallery/installation' },
              { text: '最初のギャラリー作成', link: '/ja/photogallery/quick-start' },
              { text: 'ギャラリーの配置調整', link: '/ja/photogallery/photo-gallery' },
              { text: 'ビルド前の確認', link: '/ja/photogallery/build-and-upload' },
              { text: 'トラブルシューティング', link: '/ja/photogallery/troubleshooting' },
            ]
          },
          {
            text: 'AutoResize PhotoFrame (Shader)',
            items: [
              { text: 'フレームマテリアルの装飾', link: '/ja/photoframe/frame-materials' },
              { text: 'シェーダー設定', link: '/ja/photoframe/shader-property' },
            ]
          }
        ]
      }
    }
  }
})
