export interface CategoryStyle {
  name: string;
  color: string;
  bg: string;
  border: string;
  text: string;
}

export const CATEGORY_COLORS: Record<string, string> = {
  // 行動紀實
  遊行參與: '#ec4899',
  '抗議／座談': '#dc2626',
  組織動態: '#22c55e',

  // 倡議文章
  政策評論: '#3b82f6',
  校園安全: '#14b8a6',
  升學制度: '#ea580c',
  組織聲明: '#a855f7',

  // 預留議題分類
  性別平權: '#f43f5e',
  心理健康: '#10b981',
};

export function normalizeCategory(raw: string): string {
  return raw.trim().replace(/^#/, '');
}

export function getCategoryColor(raw: string): string {
  const key = normalizeCategory(raw);
  return CATEGORY_COLORS[key] ?? '#dc2626';
}

export function formatDateZh(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date.replace(/\//g, '-')) : date;
  if (Number.isNaN(d.getTime())) return String(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year} 年 ${month} 月 ${day} 日`;
}

export function formatDateISO(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date.replace(/\//g, '-')) : date;
  if (Number.isNaN(d.getTime())) return String(date);
  const year = d.getFullYear();
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function estimateReadingMinutes(text: string): number {
  const cleaned = text.replace(/[#>*_`\[\]()!\-\s]/g, '');
  const minutes = Math.ceil(cleaned.length / 420);
  return Math.max(1, minutes);
}
