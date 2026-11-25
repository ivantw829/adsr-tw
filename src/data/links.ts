export interface LinkItem {
  title: string;
  handle: string;
  description: string;
  href: string;
  external: boolean;
  download?: string;
  accent: string;
  icon: 'bylaws' | 'form' | 'email' | 'facebook' | 'instagram' | 'threads';
}

export const OFFICIAL_LINKS: LinkItem[] = [
  {
    title: '入社申請表（下載）',
    handle: 'Membership Application (.odt)',
    description: '認同 ADSR 理念者，歡迎下載入社申請表填寫後向社長或社員代表遞交申請入社。',
    href: '/files/adsr-membership-application.odt',
    external: false,
    download: '捍衛全台學權行動入社申請表.odt',
    accent: '#ef4444',
    icon: 'form',
  },
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
  {
    title: '聯絡信箱',
    handle: 'info@asdtw.org',
    description: '媒體採訪、活動合作、學權申訴或任何建議，歡迎透過電子郵件與我們聯繫。',
    href: 'mailto:info@asdtw.org',
    external: false,
    accent: '#f59e0b',
    icon: 'email',
  },
];
