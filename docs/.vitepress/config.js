// export default {
//   title: 'site title',
//   description: 'site description'
// }

import { defineConfig } from 'vitepress'

export default defineConfig({
  base: '/learn-vitepress1/',
  lang: 'en-US',
  // lastUpdated:true,
  title: 'site title111',
  description: 'site description111',
  // srcDir: './',
  cleanUrls: 'with-subfolders',
  markdown: {
    lineNumbers: true
  },
  /** Build Hooks */
  // async transformHead(ctx) { },
  // async transformHtml(code, id, context) { },
  // async transformPageData(pageData) { },
  // async buildEnd(siteConfig) { },
  themeConfig: {
    logo: '/images/logo.png',
    siteTitle: 'siteTitle',
    // outline: 2,
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    // carbonAds: {
    //   code: 'your-carbon-code',
    //   placement: 'your-carbon-placement'
    // },
    // docFooter: {
    //   prev: 'Pagina prior',
    //   next: 'Proxima pagina'
    // },
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      { icon: 'twitter', link: '...' },
    ],
    nav: [
      { text: 'nav1', link: '/guide' },
      {
        text: 'nav2',
        items: [
          { text: 'Item A', link: '/item-1' },
          { text: 'Item B', link: '/item-2' },
          { text: 'Item C', link: '/item-3' }
        ]
      }
    ],
    sidebar: [
      {
        text: 'Guide',
        items: [
          { text: 'Home', link: '/' },
          { text: 'advance', link: './advance.md' },
          {
            text: 'balabala', items: [
              { text: 'assets', link: './assets.md' },
              { text: 'markdown', link: './markdown.md' },
              { text: 'page', link: './page' }
            ]
          },
        ]
      }
    ],
  }
})