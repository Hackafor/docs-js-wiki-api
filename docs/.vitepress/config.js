import { defineConfig } from 'vitepress'

const sidebars = {
  gettingStarted: {
    text: 'Getting Started',
    collapsed: false,
    items: [
      { text: 'Questions', link: '/questions' },
      { text: 'Libraries', link: '/libraries' },
      { text: 'Courses', link: '/courses' },
    ],
  },
  guides: {
    text: 'Guides',
    collapsed: true,
    items: [
      {
        text: 'Examples',
        link: '#',
      },
    ],
  },
}

export default defineConfig({
  lang: 'es-MX',
  title: 'Javascript Api Wiki',
  description:
    '',
  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark',
    },
  },
  themeConfig: {
    logo: '/images/logo.png',
    siteTitle: 'Javascript Wiki Api',
    socialLinks: [
      { icon: 'github', link: '' },
    ],
    nav: [
      { text: 'Examples', link: '/examples' },
    ],
    sidebar: {
      '/': [
        sidebars['gettingStarted'],
      ],
    },
  },
  titleTemplate: ':title - Elastic Guide',
})