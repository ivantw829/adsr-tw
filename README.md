# adsr-tw

**捍衛全台學權行動 ADSR**（Action to Defend the Student Rights in Taiwan）官方靜態網站，採用 **Astro + Tailwind CSS v4** 建置，可透過 GitHub Actions 自動部署至 GitHub Pages。

線上網址：<https://ivantw829.github.io/adsr-tw/>

## 專案特色

- **100% 純靜態輸出**：零後端依賴、零 API 呼叫，所有頁面與倡議文章皆於建置期靜態預渲染（SSG），具備完整 SEO、Open Graph、JSON-LD 與自動產生的 `sitemap-index.xml`。
- **Markdown 內容管理**：倡議文章以 Astro Content Collections + Frontmatter 管理，新增文章只需放入一份 `.md` 檔即可自動產生文章頁、列表卡片與導覽連結。
- **現代化響應式體驗**：深色行動主義視覺設計、手機版抽屜選單、活動紀實時間軸與分類篩選、倡議文章分類篩選與即時搜尋、組織章程黏性目錄。
- **自動化部署**：內建 `.github/workflows/deploy.yml`，推送至 `main` 分支即自動執行型別檢查、建置並部署至 GitHub Pages。

## 本機開發

需求：Node.js 20+（建議 Node.js 22）

```bash
# 安裝依賴
npm install

# 啟動本機開發伺服器
npm run dev

# 型別與 Content Collections 檢查
npm run check

# 建置靜態網站（輸出至 dist/）
npm run build

# 預覽建置結果（http://localhost:4321/adsr-tw/）
npm run preview
```

## 內容維護指南

### 新增倡議文章

在 `src/content/papers/` 新增一份 `.md` 檔案（檔名即為網址 slug，建議使用 `YYYYMMDD-english-slug.md`）：

```markdown
---
title: "文章標題"
description: "文章摘要（顯示於列表卡片與 SEO 描述）"
date: 2025-08-01
category: "倡議行動"
thumbnail: "https://example.com/cover.jpg"
author: "捍衛全台學權行動 ADSR"
---

這裡開始撰寫 Markdown 文章正文……
```

### 新增行動紀實

編輯 `src/data/events.json`，依格式新增一筆活動物件即可。

## GitHub Pages 部署與網域設定

1. 前往 GitHub 儲存庫的 **Settings → Pages → Build and deployment → Source**，選擇 **GitHub Actions**。
2. 推送程式碼至 `main` 分支，GitHub Actions 會自動執行部署。
3. 若日後想切換回自訂網域（例如 `https://adsr.tw`）：
   - 在 `public/` 新增 `CNAME` 檔案寫入 `adsr.tw`
   - 修改 `astro.config.mjs` 的 `site: 'https://adsr.tw'` 並移除 `base: '/adsr-tw'`
   - 更新 `public/robots.txt` 的 Sitemap 網址即可，所有站內連結會自動適配。

## 專案結構

```text
.github/workflows/deploy.yml   GitHub Pages 自動部署工作流
public/                        靜態資源（favicon、logo、robots.txt、.nojekyll）
src/
  components/                  Navbar、Footer、HeroCanvas
  content/papers/              倡議文章 Markdown（Content Collections）
  data/                        events.json、bylaws.ts、links.ts
  layouts/                     BaseLayout.astro
  pages/                       首頁、活動、倡議文章、章程、連結、404
  styles/                      global.css（Tailwind CSS v4 與文章排版樣式）
  utils/                       url.ts（base path 工具）、categories.ts
```
