export interface CategoryStyle {
  name: string;
  color: string;
  dot: string;
  accent: string;
  bg: string;
  border: string;
  text: string;
}

export const CATEGORY_COLORS: Record<string, string> = {
  // 行動紀實（低飽和暗色模式色票）
  '抗議／座談': '#c44b4f',
  遊行參與: '#c6924a',
  組織動態: '#628ab2',

  // 倡議文章
  政策評論: '#3b82f6',
  校園安全: '#14b8a6',
  升學制度: '#ea580c',
  組織聲明: '#a855f7',

  // 預留議題分類
  性別平權: '#f43f5e',
  心理健康: '#10b981',
};

const CATEGORY_STYLES: Record<string, Omit<CategoryStyle, 'name'>> = {
  // 行動紀實
  '抗議／座談': {
    color: '#c44b4f',
    dot: '#c44b4f',
    accent: 'rgba(196, 75, 79, 0.72)',
    bg: 'rgba(196, 75, 79, 0.12)',
    border: 'rgba(196, 75, 79, 0.28)',
    text: '#e8a1a3',
  },
  遊行參與: {
    color: '#c6924a',
    dot: '#c6924a',
    accent: 'rgba(198, 146, 74, 0.68)',
    bg: 'rgba(198, 146, 74, 0.12)',
    border: 'rgba(198, 146, 74, 0.28)',
    text: '#e2c28e',
  },
  組織動態: {
    color: '#628ab2',
    dot: '#628ab2',
    accent: 'rgba(98, 138, 178, 0.68)',
    bg: 'rgba(98, 138, 178, 0.13)',
    border: 'rgba(98, 138, 178, 0.28)',
    text: '#a5c3df',
  },
};

export function normalizeCategory(raw: string): string {
  return raw.trim().replace(/^#/, '');
}

export function getCategoryColor(raw: string): string {
  const key = normalizeCategory(raw);
  return CATEGORY_COLORS[key] ?? '#c44b4f';
}

export function getCategoryStyle(raw: string): CategoryStyle {
  const name = normalizeCategory(raw);
  const preset = CATEGORY_STYLES[name];
  if (preset) {
    return { name, ...preset };
  }
  const color = getCategoryColor(name);
  return {
    name,
    color,
    dot: color,
    accent: `${color}b3`,
    bg: `${color}1f`,
    border: `${color}47`,
    text: color,
  };
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
