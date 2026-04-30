import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Guide',
  description: 'A VitePress guide repository',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Introduction', link: '/' }
        ]
      }
    ]
  }
})
