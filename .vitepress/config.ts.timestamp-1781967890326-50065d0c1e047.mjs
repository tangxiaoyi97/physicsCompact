// .vitepress/config.ts
import { defineConfigWithAllYouNeed } from "file:///sessions/brave-youthful-heisenberg/mnt/physicsCompact/node_modules/vitepress-allyouneed/dist/vitepress.js";
var config_default = defineConfigWithAllYouNeed(
  {
    title: "Physik Matura 2026",
    description: "Lernkompendium \xB7 Themen, Herleitungen, Pr\xFCfungssimulation",
    cleanUrls: true,
    srcExclude: ["README.md", "BUG_REPORT_*.md"],
    // README↔index conflict; bug report contains a repro table (not a page)
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLnZpdGVwcmVzcy9jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvc2Vzc2lvbnMvYnJhdmUteW91dGhmdWwtaGVpc2VuYmVyZy9tbnQvcGh5c2ljc0NvbXBhY3QvLnZpdGVwcmVzc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL3Nlc3Npb25zL2JyYXZlLXlvdXRoZnVsLWhlaXNlbmJlcmcvbW50L3BoeXNpY3NDb21wYWN0Ly52aXRlcHJlc3MvY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9zZXNzaW9ucy9icmF2ZS15b3V0aGZ1bC1oZWlzZW5iZXJnL21udC9waHlzaWNzQ29tcGFjdC8udml0ZXByZXNzL2NvbmZpZy50c1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZ1dpdGhBbGxZb3VOZWVkIH0gZnJvbSAndml0ZXByZXNzLWFsbHlvdW5lZWQvdml0ZXByZXNzJ1xuXG4vLyBHZXJtYW4gaXMgdGhlIG1haW4gbGFuZ3VhZ2UgKHJvb3QgLyksIENoaW5lc2UgdW5kZXIgL3poLy5cbi8vIFRocmVlIHNlY3Rpb25zIHBlciBsYW5ndWFnZTogVGhlbWVuIChcdThCQjJcdTRFNDkpIFx1MDBCNyBIZXJsZWl0dW5nZW4gKFx1NjNBOFx1NUJGQykgXHUwMEI3IFNlbGZjaGVjayAoXHU2QTIxXHU2MkRGKS5cbi8vIFNpZGViYXIgaXMgYXV0by1nZW5lcmF0ZWQgcGVyIGZvbGRlciBieSB0aGUgcGx1Z2luIChzaWRlYmFyQXV0bywgcGVyLWZvbGRlciBsYXlvdXQpLlxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnV2l0aEFsbFlvdU5lZWQoXG4gIHtcbiAgICB0aXRsZTogJ1BoeXNpayBNYXR1cmEgMjAyNicsXG4gICAgZGVzY3JpcHRpb246ICdMZXJua29tcGVuZGl1bSBcdTAwQjcgVGhlbWVuLCBIZXJsZWl0dW5nZW4sIFByXHUwMEZDZnVuZ3NzaW11bGF0aW9uJyxcbiAgICBjbGVhblVybHM6IHRydWUsXG4gICAgc3JjRXhjbHVkZTogWydSRUFETUUubWQnLCAnQlVHX1JFUE9SVF8qLm1kJ10sICAgLy8gUkVBRE1FXHUyMTk0aW5kZXggY29uZmxpY3Q7IGJ1ZyByZXBvcnQgY29udGFpbnMgYSByZXBybyB0YWJsZSAobm90IGEgcGFnZSlcbiAgICBtYXJrZG93bjogeyBtYXRoOiB0cnVlIH0sICAgICAgICAgICAgIC8vIEthVGVYL01hdGhKYXggZm9yICRcdTIwMjYkIGFuZCAkJFx1MjAyNiQkXG5cbiAgICB0aGVtZUNvbmZpZzoge1xuICAgICAgc2VhcmNoOiB7IHByb3ZpZGVyOiAnbG9jYWwnIH0sXG4gICAgICBzb2NpYWxMaW5rczogW1xuICAgICAgICB7IGljb246ICdnaXRodWInLCBsaW5rOiAnaHR0cHM6Ly9naXRodWIuY29tL3Rhbmd4aWFveWk5Ny92aXRlcHJlc3MtYWxseW91bmVlZCcgfSxcbiAgICAgIF0sXG4gICAgfSxcblxuICAgIC8vIFx1MjUwMFx1MjUwMCBpMThuOiBHZXJtYW4gcm9vdCAoZGVmYXVsdCksIENoaW5lc2UgL3poLyBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcdTI1MDBcbiAgICBsb2NhbGVzOiB7XG4gICAgICByb290OiB7XG4gICAgICAgIGxhYmVsOiAnRGV1dHNjaCcsXG4gICAgICAgIGxhbmc6ICdkZS1BVCcsXG4gICAgICAgIHRoZW1lQ29uZmlnOiB7XG4gICAgICAgICAgbmF2OiBbXG4gICAgICAgICAgICB7IHRleHQ6ICdUaGVtZW4nLCAgICAgICAgbGluazogJy90aGVtZW4vJyB9LFxuICAgICAgICAgICAgeyB0ZXh0OiAnSGVybGVpdHVuZ2VuJywgIGxpbms6ICcvaGVybGVpdHVuZ2VuLycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1NlbGZjaGVjaycsICAgICBsaW5rOiAnL3NlbGZjaGVjay8nIH0sXG4gICAgICAgICAgXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgICB6aDoge1xuICAgICAgICBsYWJlbDogJ1x1NEUyRFx1NjU4NycsXG4gICAgICAgIGxhbmc6ICd6aC1DTicsXG4gICAgICAgIGxpbms6ICcvemgvJyxcbiAgICAgICAgdGhlbWVDb25maWc6IHtcbiAgICAgICAgICBuYXY6IFtcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1OEJCMlx1NEU0OScsIGxpbms6ICcvemgvdGhlbWVuLycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NjNBOFx1NUJGQycsIGxpbms6ICcvemgvaGVybGVpdHVuZ2VuLycgfSxcbiAgICAgICAgICAgIHsgdGV4dDogJ1x1NkEyMVx1NjJERicsIGxpbms6ICcvemgvc2VsZmNoZWNrLycgfSxcbiAgICAgICAgICBdLFxuICAgICAgICAgIG91dGxpbmU6IHsgbGFiZWw6ICdcdTY3MkNcdTk4NzVcdTc2RUVcdTVGNTUnIH0sXG4gICAgICAgICAgZG9jRm9vdGVyOiB7IHByZXY6ICdcdTRFMEFcdTRFMDBcdTk4NzUnLCBuZXh0OiAnXHU0RTBCXHU0RTAwXHU5ODc1JyB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9LFxuICB9LFxuXG4gIC8vIFx1MjUwMFx1MjUwMCB2aXRlcHJlc3MtYWxseW91bmVlZCBvcHRpb25zIFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFx1MjUwMFxuICB7XG4gICAgZGVhZExpbms6ICd3YXJuJyxcbiAgICBzaWRlYmFyQXV0bzoge1xuICAgICAgbW9kZTogJ2ZvcmNlJywgICAgICAgICAgICAgIC8vIGFsd2F5cyBnZW5lcmF0ZSB0aGUgc2lkZWJhclxuICAgICAgbGF5b3V0OiAncGVyLWZvbGRlcicsICAgICAgIC8vIGVhY2ggdG9wLWxldmVsIHNlY3Rpb24gZ2V0cyBpdHMgb3duIHNpZGViYXIsIHN3YXBwZWQgYnkgVVJMXG4gICAgICBhdXRvTmF2OiBmYWxzZSwgICAgICAgICAgICAgLy8gbmF2IGlzIGRlZmluZWQgbWFudWFsbHkgcGVyIGxvY2FsZSAodGhlIDMgc2VjdGlvbnMpXG4gICAgICBjb2xsYXBzZWQ6IGZhbHNlLFxuICAgICAgc29ydEJ5OiAnb3JkZXItdGhlbi10aXRsZScsIC8vIHJlc3BlY3QgZnJvbnRtYXR0ZXIgYG9yZGVyYFxuICAgICAgc3RyaXBOdW1lcmljUHJlZml4OiBmYWxzZSwgIC8vIGZpbGVuYW1lcyBoYXZlIG5vIG51bWVyaWMgcHJlZml4IGFueW1vcmVcbiAgICAgIGdyb3VwTGluazogJ29mZicsICAgICAgICAgICAvLyBzZWN0aW9uIGZvbGRlcnMgYXJlIG5hdiB0YWJzLCBub3QgY2xpY2thYmxlIGdyb3VwIHRpdGxlc1xuICAgIH0sXG4gIH0sXG4pXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTJXLFNBQVMsa0NBQWtDO0FBS3RaLElBQU8saUJBQVE7QUFBQSxFQUNiO0FBQUEsSUFDRSxPQUFPO0FBQUEsSUFDUCxhQUFhO0FBQUEsSUFDYixXQUFXO0FBQUEsSUFDWCxZQUFZLENBQUMsYUFBYSxpQkFBaUI7QUFBQTtBQUFBLElBQzNDLFVBQVUsRUFBRSxNQUFNLEtBQUs7QUFBQTtBQUFBLElBRXZCLGFBQWE7QUFBQSxNQUNYLFFBQVEsRUFBRSxVQUFVLFFBQVE7QUFBQSxNQUM1QixhQUFhO0FBQUEsUUFDWCxFQUFFLE1BQU0sVUFBVSxNQUFNLHVEQUF1RDtBQUFBLE1BQ2pGO0FBQUEsSUFDRjtBQUFBO0FBQUEsSUFHQSxTQUFTO0FBQUEsTUFDUCxNQUFNO0FBQUEsUUFDSixPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsVUFDWCxLQUFLO0FBQUEsWUFDSCxFQUFFLE1BQU0sVUFBaUIsTUFBTSxXQUFXO0FBQUEsWUFDMUMsRUFBRSxNQUFNLGdCQUFpQixNQUFNLGlCQUFpQjtBQUFBLFlBQ2hELEVBQUUsTUFBTSxhQUFpQixNQUFNLGNBQWM7QUFBQSxVQUMvQztBQUFBLFFBQ0Y7QUFBQSxNQUNGO0FBQUEsTUFDQSxJQUFJO0FBQUEsUUFDRixPQUFPO0FBQUEsUUFDUCxNQUFNO0FBQUEsUUFDTixNQUFNO0FBQUEsUUFDTixhQUFhO0FBQUEsVUFDWCxLQUFLO0FBQUEsWUFDSCxFQUFFLE1BQU0sZ0JBQU0sTUFBTSxjQUFjO0FBQUEsWUFDbEMsRUFBRSxNQUFNLGdCQUFNLE1BQU0sb0JBQW9CO0FBQUEsWUFDeEMsRUFBRSxNQUFNLGdCQUFNLE1BQU0saUJBQWlCO0FBQUEsVUFDdkM7QUFBQSxVQUNBLFNBQVMsRUFBRSxPQUFPLDJCQUFPO0FBQUEsVUFDekIsV0FBVyxFQUFFLE1BQU0sc0JBQU8sTUFBTSxxQkFBTTtBQUFBLFFBQ3hDO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQSxFQUNGO0FBQUE7QUFBQSxFQUdBO0FBQUEsSUFDRSxVQUFVO0FBQUEsSUFDVixhQUFhO0FBQUEsTUFDWCxNQUFNO0FBQUE7QUFBQSxNQUNOLFFBQVE7QUFBQTtBQUFBLE1BQ1IsU0FBUztBQUFBO0FBQUEsTUFDVCxXQUFXO0FBQUEsTUFDWCxRQUFRO0FBQUE7QUFBQSxNQUNSLG9CQUFvQjtBQUFBO0FBQUEsTUFDcEIsV0FBVztBQUFBO0FBQUEsSUFDYjtBQUFBLEVBQ0Y7QUFDRjsiLAogICJuYW1lcyI6IFtdCn0K
