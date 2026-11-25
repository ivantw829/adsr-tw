export interface LinkItem {
  title: string;
  handle: string;
  description: string;
  href: string;
  external: boolean;
  accent: string;
  icon: 'bylaws' | 'facebook' | 'instagram' | 'threads';
}

export const OFFICIAL_LINKS: LinkItem[] = [
  {
    title: '組織章程與紀律規章',
    handle: 'ADSR Charter & Rules',
    description: '查閱 2026 年 9 月 13 日會員大會訂定之社團章程、紀律規章與相關表單說明。',
    href: '/bylaws/',
    external: false,
    accent: '#dc2626',
    icon: 'bylaws',
  },
  {
    title: 'Instagram',
    handle: '@adsr_taiwan',
    description: '追蹤最新行動紀錄、圖文懶人包、政策分析與倡議動態。',
    href: 'https://www.instagram.com/adsr_taiwan',
    external: true,
    accent: '#e1306c',
    icon: 'instagram',
  },
  {
    title: 'Threads',
    handle: '@adsr_taiwan',
    description: '參與即時議題討論、校園現場回饋與學權快訊串文。',
    href: 'https://www.threads.net/@adsr_taiwan',
    external: true,
    accent: '#f3f4f6',
    icon: 'threads',
  },
  {
    title: 'Facebook 粉絲專頁',
    handle: '捍衛全台學權行動 ADSR',
    description: '閱讀完整聲明稿、活動預告與跨校串聯資訊。',
    href: 'https://www.facebook.com/profile.php?id=61576959986789',
    external: true,
    accent: '#1877f2',
    icon: 'facebook',
  },
];
