import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Guide',
  description: 'A VitePress guide repository',
  base: '/guide/',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'AutoResize PhotoFrame', link: '/autoresize-photoframe' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' },
          { text: 'AutoResize PhotoFrame', link: '/autoresize-photoframe' }
        ]
      }
    ]
  }
})
