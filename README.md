# Physik Matura 2026 — Lernkompendium

VitePress-Wissensdatenbank für die mündliche Reifeprüfung Physik (AHS) 2026.
Aufgebaut mit [`vitepress-allyouneed`](https://github.com/tangxiaoyi97/vitepress-allyouneed).

物理 Matura 2026 复习知识库 · 基于 vitepress-allyouneed 构建。

## Struktur / 结构

| Bereich | DE | ZH |
| :-- | :-- | :-- |
| **Themen** (讲义) | `themen/` | `zh/themen/` |
| **Herleitungen** (推导) | `herleitungen/` | `zh/herleitungen/` |
| **Selfcheck** (模拟) | `selfcheck/` | `zh/selfcheck/` |

- Hauptsprache **Deutsch** (Root `/`), **Chinesisch** unter `/zh/`. Umschalten über die Sprachauswahl oben rechts.
- Navigation: drei Bereiche (Themen / Herleitungen / Selfcheck), Standard ist **Themen**.
- Seitenleiste wird pro Bereich **automatisch** generiert. Das `index.md` jedes Ordners ist Landingpage und Sortieranker; sein Frontmatter-`order` bestimmt die Position des Ordners.
- Bilder liegen in `assets/` und `sketches/` und werden über das Asset-Pipeline des Plugins automatisch aufgelöst.

德语为主语言（根 `/`），中文在 `/zh/`，右上角切换。导航三板块（讲义/推导/模拟），默认讲义。每个文件夹的 `index.md` 同时是落地页和排序锚点，其 frontmatter `order` 决定文件夹位置。

## Entwicklung / 开发

```bash
npm install
npm run docs:dev
npm run docs:build
npm run docs:preview
```

## Hinweise / 说明

- Quellcode und Inhalte: [`physicsCompact`](https://github.com/tangxiaoyi97/physicsCompact).
- Dateinamen tragen den deutschen Themennamen; Reihenfolge über Frontmatter `order`.
- `README.md` ist via `srcExclude` von der Seitengenerierung ausgenommen (sonst Konflikt mit `index.md` auf `/`).
- Bis die dirIndex-Sortierung in der nächsten Plugin-Version veröffentlicht ist, wendet `npm install` den geprüften Patch unter `patches/` automatisch an.
