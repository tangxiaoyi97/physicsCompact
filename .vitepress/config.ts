import { defineConfigWithAllYouNeed } from 'vitepress-allyouneed/vitepress'

// Local search renders and indexes every page before the dev server becomes
// usable. With ~90 MathJax-heavy pages that makes startup take about a minute.
// Keep search in production builds, but skip the expensive index in dev.
const isDev = process.argv.includes('dev')

// German is the main language (root /), Chinese under /zh/.
// Three sections per language: Themen (讲义) · Herleitungen (推导) · Selfcheck (模拟).
// Sidebar is auto-generated per folder by the plugin (sidebarAuto, per-folder layout).
export default defineConfigWithAllYouNeed(
  {
    title: 'Physik Matura 2026',
    description: 'Lernkompendium · Themen, Herleitungen, Prüfungssimulation',
    head: [
      ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ],
    cleanUrls: true,
    buildConcurrency: 8, // keep MathJax-heavy production builds within memory limits
    srcExclude: ['README.md', 'BUGS.md'],   // README↔index conflict; BUGS.md contains repro tables (not a site page)
    markdown: { math: true },             // KaTeX/MathJax for $…$ and $$…$$

    themeConfig: {
      search: isDev ? undefined : { provider: 'local' },
      socialLinks: [
        { icon: 'github', link: 'https://github.com/tangxiaoyi97/physicsCompact' },
        { icon: 'discord', link: 'https://discord.gg/UuXvsXqH' },
        { icon: 'buymeacoffee', link: 'https://buymeacoffee.com/tangxy97' },
      ],
    },

    // ── i18n: German root (default), Chinese /zh/ ──────────────────────
    locales: {
      root: {
        label: 'Deutsch',
        lang: 'de-AT',
        themeConfig: {
          nav: [
            { text: 'Themen',        link: '/themen/' },
            { text: 'Herleitungen',  link: '/herleitungen/' },
            { text: 'Selfcheck',     link: '/selfcheck/' },
          ],
        },
      },
      zh: {
        label: '中文',
        lang: 'zh-CN',
        link: '/zh/',
        themeConfig: {
          nav: [
            { text: '讲义', link: '/zh/themen/' },
            { text: '推导', link: '/zh/herleitungen/' },
            { text: '模拟', link: '/zh/selfcheck/' },
          ],
          outline: { label: '本页目录' },
          docFooter: { prev: '上一页', next: '下一页' },
        },
      },
    },
  },

  // ── vitepress-allyouneed options ──────────────────────────────────────
  {
    deadLink: 'warn',
    modules: {
      views: true,
      highlight: true,
    },
    views: {
      enabled: {
        graph: true,
        stats: true,
        tags: true,
      },
      injectInto: 'nav',
    },
    wikilinks: {
      anchorMatch: 'fuzzy',     // match anchors like [[#Biomarker]], [[#(3) …]] (non-numeric headings)
    },
    sidebarAuto: {
      mode: 'force',              // always generate the sidebar
      layout: 'per-folder',       // each top-level section gets its own sidebar, swapped by URL
      autoNav: false,             // nav is defined manually per locale (the 3 sections)
      collapsed: true,
      sortBy: 'order-then-title', // respect frontmatter `order`
      stripNumericPrefix: false,  // filenames have no numeric prefix anymore
      foldersFirst: true,         // chapter folders before loose pages
      groupLink: 'all',           // folder titles open their authored index page
      folderLinkOrder: ['index', 'first-file'], // index.md is the canonical folder landing page
    },
  },
)
