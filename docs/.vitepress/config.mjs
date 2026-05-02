import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Guide',
  description: 'A VitePress guide repository',
  base: '/guide/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
    ],
    outline: {
      level: [2, 3],
      label: 'On this page'
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
})
