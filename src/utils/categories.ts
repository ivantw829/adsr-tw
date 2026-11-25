export interface CategoryStyle {
  name: string;
  color: string;
  bg: string;
  border: string;
  text: string;
}

export const CATEGORY_COLORS: Record<string, string> = {
  各校行動: '#9333ea',
  升學主義: '#ea580c',
  心理健康: '#528c68',
  校園霸凌: '#14b8a6',
  網路性犯罪: '#a855f7',
  性少數困境: '#ec4899',
  倡議行動: '#dc2626',
  時事分析: '#eab308',
  活動快報: '#22c55e',
  手機管制: '#3b82f6',
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
