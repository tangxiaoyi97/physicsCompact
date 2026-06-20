// .vitepress/config.ts
import { defineConfigWithAllYouNeed } from "file:///sessions/brave-youthful-heisenberg/mnt/physicsCompact/node_modules/vitepress-allyouneed/dist/vitepress.js";
var config_default = defineConfigWithAllYouNeed(
  {
    title: "Physik Matura 2026",
    description: "Lernkompendium \xB7 Themen, Herleitungen, Pr\xFCfungssimulation",
    cleanUrls: true,
    srcExclude: ["README.md"],
    // README + index.md both → '/', keep index.md as home
    markdown: { math: true },
    // KaTeX/MathJax for $…$ and $$…$$
    themeConfig: {
      search: { provider: "local" },
      socialLinks: [
        { icon: "github", link: "https://github.com/tangxiaoyi97/vitepress-allyouneed" }
      ]
    },
    // ── i18n: German root (default), Chinese /zh/ ──────────────────────
    locales: {
      root: {
        label: "Deutsch",
        lang: "de-AT",
        themeConfig: {
          nav: [
            { text: "Themen", link: "/themen/" },
            { text: "Herleitungen", link: "/herleitungen/" },
            { text: "Selfcheck", link: "/selfcheck/" }
          ]
        }
      },
      zh: {
        label: "\u4E2D\u6587",
        lang: "zh-CN",
        link: "/zh/",
        themeConfig: {
          nav: [
            { text: "\u8BB2\u4E49", link: "/zh/themen/" },
            { text: "\u63A8\u5BFC", link: "/zh/herleitungen/" },
            { text: "\u6A21\u62DF", link: "/zh/selfcheck/" }
          ],
          outline: { label: "\u672C\u9875\u76EE\u5F55" },
          docFooter: { prev: "\u4E0A\u4E00\u9875", next: "\u4E0B\u4E00\u9875" }
        }
      }
    }
  },
  // ── vitepress-allyouneed options ──────────────────────────────────────
  {
    deadLink: "warn",
    sidebarAuto: {
      mode: "force",
      // always generate the sidebar
      layout: "per-folder",
      // each top-level section gets its own sidebar, swapped by URL
      autoNav: false,
      // nav is defined manually per locale (the 3 sections)
      collapsed: false,
      sortBy: "order-then-title",
      // respect frontmatter `order`
      stripNumericPrefix: false,
      // filenames have no numeric prefix anymore
      groupLink: "off"
      // section folders are nav tabs, not clickable group titles
    }
  }
);
export {
  config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvYnJhdmUteW91dGhmdWwtaGVpc2VuYmVyZy9tbnQvcGh5c2ljc0NvbXBhY3QvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2JyYXZlLXlvdXRoZnVsLWhlaXNlbmJlcmcvbW50L3BoeXNpY3NDb21wYWN0Ly52aXRlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9icmF2ZS15b3V0aGZ1bC1oZWlzZW5iZXJnL21udC9waHlzaWNzQ29tcGFjdC8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZ1dpdGhBbGxZb3VOZWVkIH0gZnJvbSAndml0ZXByZXNzLWFsbHlvdW5lZWQvdml0ZXByZXNzJ1xuXG4vLyBHZXJtYW4gaXMgdGhlIG1haW4gbGFuZ3VhZ2UgKHJvb3QgLyksIENoaW5lc2UgdW5kZXIgL3poLy5cbi8vIFRocmVlIHNlY3Rpb25zIHBlciBsYW5ndWFnZTogVGhlbWVuIChcdThCQjJcdTRFNDkpIFx1MDBCNyBIZXJsZWl0dW5nZW4gKFx1NjNBOFx1NUJGQykgXHUwMEI3IFNlbGZjaGVjayAoXHU2QTIxXHU2MkRGKS5cbi8vIFNpZGViYXIgaXMgYXV0by1nZW5lcmF0ZWQgcGVyIGZvbGRlciBieSB0aGUgcGx1Z2luIChzaWRlYmFyQXV0bywgcGVyLWZvbGRlciBsYXlvdXQpLlxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnV2l0aEFsbFlvdU5lZWQoXG4gIHtcbiAgICB0aXRsZTogJ1BoeXNpayBNYXR1cmEgMjAyNicsXG4gICAgZGVzY3JpcHRpb246ICdMZXJua29tcGVuZGl1bSBcdTAwQjcgVGhlbWVuLCBIZXJsZWl0dW5nZW4sIFByXHUwMEZDZnVuZ3NzaW11bGF0aW9uJyxcbiAgICBjbGVhblVybHM6IHRydWUsXG4gICAgc3JjRXhjbHVkZTogWydSRUFETUUubWQnXSwgICAgICAgICAgICAvLyBSRUFETUUgKyBpbmRleC5tZCBib3RoIFx1MjE5MiAnLycsIGtlZXAgaW5kZXgubWQgYXMgaG9tZVxuICAgIG1hcmtkb3duOiB7IG1hdGg6IHRydWUgfSwgICAgICAgICAgICAgLy8gS2FUZVgvTWF0aEpheCBmb3IgJFx1MjAyNiQgYW5kICQkXHUyMDI2JCRcblxuICAgIHRoZW1lQ29uZmlnOiB7XG4gICAgICBzZWFyY2g6IHsgcHJvdmlkZXI6ICdsb2NhbCcgfSxcbiAgICAgIHNvY2lhbExpbmtzOiBbXG4gICAgICAgIHsgaWNvbjogJ2dpdGh1YicsIGxpbms6ICdodHRwczovL2dpdGh1Yi5jb20vdGFuZ3hpYW95aTk3L3ZpdGVwcmVzcy1hbGx5b3VuZWVkJyB9LFxuICAgICAgXSxcbiAgICB9LFxuXG4gICAgLy8gXHUyNTAwXHUyNTAwIGkxOG46IEdlcm1hbiByb290IChkZWZhdWx0KSwgQ2hpbmVzZSAvemgvIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICAgIGxvY2FsZXM6IHtcbiAgICAgIHJvb3Q6IHtcbiAgICAgICAgbGFiZWw6ICdEZXV0c2NoJyxcbiAgICAgICAgbGFuZzogJ2RlLUFUJyxcbiAgICAgICAgdGhlbWVDb25maWc6IHtcbiAgICAgICAgICBuYXY6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1RoZW1lbicsICAgICAgICBsaW5rOiAnL3RoZW1lbi8nIH0sXG4gICAgICAgICAgICB7IHRleHQ6ICdIZXJsZWl0dW5nZW4nLCAgbGluazogJy9oZXJsZWl0dW5nZW4vJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnU2VsZmNoZWNrJywgICAgIGxpbms6ICcvc2VsZmNoZWNrLycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICAgIHpoOiB7XG4gICAgICAgIGxhYmVsOiAnXHU0RTJEXHU2NTg3JyxcbiAgICAgICAgbGFuZzogJ3poLUNOJyxcbiAgICAgICAgbGluazogJy96aC8nLFxuICAgICAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgICAgIG5hdjogW1xuICAgICAgICAgICAgeyB0ZXh0OiAnXHU4QkIyXHU0RTQ5JywgbGluazogJy96aC90aGVtZW4vJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU2M0E4XHU1QkZDJywgbGluazogJy96aC9oZXJsZWl0dW5nZW4vJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnXHU2QTIxXHU2MkRGJywgbGluazogJy96aC9zZWxmY2hlY2svJyB9LFxuICAgICAgICAgIF0sXG4gICAgICAgICAgb3V0bGluZTogeyBsYWJlbDogJ1x1NjcyQ1x1OTg3NVx1NzZFRVx1NUY1NScgfSxcbiAgICAgICAgICBkb2NGb290ZXI6IHsgcHJldjogJ1x1NEUwQVx1NEUwMFx1OTg3NScsIG5leHQ6ICdcdTRFMEJcdTRFMDBcdTk4NzUnIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG5cbiAgLy8gXHUyNTAwXHUyNTAwIHZpdGVwcmVzcy1hbGx5b3VuZWVkIG9wdGlvbnMgXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXHUyNTAwXG4gIHtcbiAgICBkZWFkTGluazogJ3dhcm4nLFxuICAgIHNpZGViYXJBdXRvOiB7XG4gICAgICBtb2RlOiAnZm9yY2UnLCAgICAgICAgICAgICAgLy8gYWx3YXlzIGdlbmVyYXRlIHRoZSBzaWRlYmFyXG4gICAgICBsYXlvdXQ6ICdwZXItZm9sZGVyJywgICAgICAgLy8gZWFjaCB0b3AtbGV2ZWwgc2VjdGlvbiBnZXRzIGl0cyBvd24gc2lkZWJhciwgc3dhcHBlZCBieSBVUkxcbiAgICAgIGF1dG9OYXY6IGZhbHNlLCAgICAgICAgICAgICAvLyBuYXYgaXMgZGVmaW5lZCBtYW51YWxseSBwZXIgbG9jYWxlICh0aGUgMyBzZWN0aW9ucylcbiAgICAgIGNvbGxhcHNlZDogZmFsc2UsXG4gICAgICBzb3J0Qnk6ICdvcmRlci10aGVuLXRpdGxlJywgLy8gcmVzcGVjdCBmcm9udG1hdHRlciBgb3JkZXJgXG4gICAgICBzdHJpcE51bWVyaWNQcmVmaXg6IGZhbHNlLCAgLy8gZmlsZW5hbWVzIGhhdmUgbm8gbnVtZXJpYyBwcmVmaXggYW55bW9yZVxuICAgICAgZ3JvdXBMaW5rOiAnb2ZmJywgICAgICAgICAgIC8vIHNlY3Rpb24gZm9sZGVycyBhcmUgbmF2IHRhYnMsIG5vdCBjbGlja2FibGUgZ3JvdXAgdGl0bGVzXG4gICAgfSxcbiAgfSxcbilcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBMlcsU0FBUyxrQ0FBa0M7QUFLdFosSUFBTyxpQkFBUTtBQUFBLEVBQ2I7QUFBQSxJQUNFLE9BQU87QUFBQSxJQUNQLGFBQWE7QUFBQSxJQUNiLFdBQVc7QUFBQSxJQUNYLFlBQVksQ0FBQyxXQUFXO0FBQUE7QUFBQSxJQUN4QixVQUFVLEVBQUUsTUFBTSxLQUFLO0FBQUE7QUFBQSxJQUV2QixhQUFhO0FBQUEsTUFDWCxRQUFRLEVBQUUsVUFBVSxRQUFRO0FBQUEsTUFDNUIsYUFBYTtBQUFBLFFBQ1gsRUFBRSxNQUFNLFVBQVUsTUFBTSx1REFBdUQ7QUFBQSxNQUNqRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBR0EsU0FBUztBQUFBLE1BQ1AsTUFBTTtBQUFBLFFBQ0osT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFVBQ1gsS0FBSztBQUFBLFlBQ0gsRUFBRSxNQUFNLFVBQWlCLE1BQU0sV0FBVztBQUFBLFlBQzFDLEVBQUUsTUFBTSxnQkFBaUIsTUFBTSxpQkFBaUI7QUFBQSxZQUNoRCxFQUFFLE1BQU0sYUFBaUIsTUFBTSxjQUFjO0FBQUEsVUFDL0M7QUFBQSxRQUNGO0FBQUEsTUFDRjtBQUFBLE1BQ0EsSUFBSTtBQUFBLFFBQ0YsT0FBTztBQUFBLFFBQ1AsTUFBTTtBQUFBLFFBQ04sTUFBTTtBQUFBLFFBQ04sYUFBYTtBQUFBLFVBQ1gsS0FBSztBQUFBLFlBQ0gsRUFBRSxNQUFNLGdCQUFNLE1BQU0sY0FBYztBQUFBLFlBQ2xDLEVBQUUsTUFBTSxnQkFBTSxNQUFNLG9CQUFvQjtBQUFBLFlBQ3hDLEVBQUUsTUFBTSxnQkFBTSxNQUFNLGlCQUFpQjtBQUFBLFVBQ3ZDO0FBQUEsVUFDQSxTQUFTLEVBQUUsT0FBTywyQkFBTztBQUFBLFVBQ3pCLFdBQVcsRUFBRSxNQUFNLHNCQUFPLE1BQU0scUJBQU07QUFBQSxRQUN4QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBO0FBQUEsRUFHQTtBQUFBLElBQ0UsVUFBVTtBQUFBLElBQ1YsYUFBYTtBQUFBLE1BQ1gsTUFBTTtBQUFBO0FBQUEsTUFDTixRQUFRO0FBQUE7QUFBQSxNQUNSLFNBQVM7QUFBQTtBQUFBLE1BQ1QsV0FBVztBQUFBLE1BQ1gsUUFBUTtBQUFBO0FBQUEsTUFDUixvQkFBb0I7QUFBQTtBQUFBLE1BQ3BCLFdBQVc7QUFBQTtBQUFBLElBQ2I7QUFBQSxFQUNGO0FBQ0Y7IiwKICAibmFtZXMiOiBbXQp9Cg==
