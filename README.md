# adsr-tw

[捍衛全台學權行動 ADSR](https://adsr.tw) 官方網站。FastAPI 後端 + 靜態前端，提供組織介紹、章程、活動與文章內容。

## 功能

- 首頁、章程（bylaws）、活動（event）、連結（link）等靜態頁面
- `/api/papers`：掃描 `frontend/papers/pages/*.html`，解析每篇文章的標題、描述、日期、分類、作者、縮圖等 meta 資訊，依日期排序回傳列表
- `/api/paper/{filename}`：回傳單篇文章的 HTML 內容
- 啟動時自動產生 `sitemap.xml`（涵蓋首頁、`frontend/pages`、`frontend/papers/pages` 下所有頁面），並提供 `POST /api/generate_sitemap` 手動重新產生

## 技術棧

- FastAPI + Uvicorn
- BeautifulSoup（解析文章 HTML 的 meta 資訊）
- 純 HTML / CSS / JavaScript 前端

## 本機啟動

**安裝依賴**
```bash
pip install -r requirements.txt
```

**啟動伺服器**
```bash
uvicorn main:app --reload
```
啟動後在瀏覽器打開 <http://localhost:8000>

## 專案結構

```
main.py                  FastAPI 入口：/api/papers、/api/paper/{filename}、sitemap 產生
frontend/
  index.html              首頁
  pages/                   章程、活動、連結等靜態頁面
  papers/pages/            文章 HTML 內容（含 meta 資訊供 API 解析）
  assets, css, js, fonts   靜態資源
```
