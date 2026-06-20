import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import VaultGraph from 'vitepress-allyouneed/theme/components/VaultGraph.vue'
import VaultStats from 'vitepress-allyouneed/theme/components/VaultStats.vue'
import Tags from 'vitepress-allyouneed/theme/components/Tags.vue'
import 'vitepress-allyouneed/style.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('VaultGraph', VaultGraph)
    app.component('VaultStats', VaultStats)
    app.component('Tags', Tags)
  },
} satisfies Theme
