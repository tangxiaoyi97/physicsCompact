import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import RaspberryTheme from 'vp-raspberry'
import VaultGraph from 'vitepress-allyouneed/theme/components/VaultGraph.vue'
import VaultStats from 'vitepress-allyouneed/theme/components/VaultStats.vue'
import Tags from 'vitepress-allyouneed/theme/components/Tags.vue'
import 'vitepress-allyouneed/theme/style.css'
import 'vp-raspberry/style.css'
import './raspberry-compat.css'

export default {
  extends: RaspberryTheme,
  // Raspberry's custom layout repeats frontmatter.title above the existing H1.
  // Keep its visual system and components, but retain VitePress' canonical layout.
  Layout: DefaultTheme.Layout,
  enhanceApp({ app }) {
    app.component('VaultGraph', VaultGraph)
    app.component('VaultStats', VaultStats)
    app.component('Tags', Tags)
  },
} satisfies Theme
