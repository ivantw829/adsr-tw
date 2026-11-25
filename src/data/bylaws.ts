export interface BylawItem {
  label?: string;
  text: string;
}

export interface BylawArticle {
  id: string;
  title: string;
  intro?: string;
  listType?: 'disc' | 'decimal';
  items?: BylawItem[];
}

export interface BylawSection {
  id: string;
  title: string;
  articles: BylawArticle[];
}

export interface BylawChapter {
  id: string;
  chapterLabel: string;
  title: string;
  sections: BylawSection[];
}

export const BYLAWS_CHAPTERS: BylawChapter[] = [
  {
    id: 'chapter-1',
    chapterLabel: '第一章',
    title: '組織架構與權限',
    sections: [
      {
        id: 'section-1-1',
        title: '第一節　領導階層與成員職責',
        articles: [
          {
            id: 'article-1',
            title: '第一條　組織性質與決策原則',
            intro:
              '本組織全名為「捍衛全台學權行動」（ADSR），以批判社會學與進步教育理念為核心，透過行動主義推動學生權益與多元民主。所有決策應遵循下列原則：',
            listType: 'disc',
            items: [
              {
                label: '促進學權運動原則：',
                text: '以保障與增進學生學習權益為首要目標，堅決反對任何損害學生權益之行為。',
              },
              {
                label: '效率原則：',
                text: '面對緊迫情境時，內部應快速決策並行動，以即時維護學生權益。',
              },
              {
                label: '穩定原則：',
                text: '兼顧外部觀感與社會影響，確保組織運作穩定持續，避免損及信譽之行為。',
              },
            ],
          },
          {
            id: 'article-2',
            title: '第二條　工作分工與權力制衡',
            intro:
              '各項任務應秉持權責分立與分工均衡，避免成員過度集權，並建立應變機制，防止突發狀況中斷運作。',
          },
        ],
      },
      {
        id: 'section-1-2',
        title: '第二節　職務設計與權限規範',
        articles: [
          {
            id: 'article-3',
            title: '第三條　職權階級設置',
            listType: 'disc',
            items: [
              {
                label: '負責人：',
                text: '由創設人擔任，擁有最終同意或否決權，卸任時可指定繼任者並書面公告。',
              },
              {
                label: '決策層：',
                text: '負責人依貢獻任命，可組成決策小組處理重大或緊急事項；議案須過半出席同意。',
              },
              {
                label: '管理層：',
                text: '由決策層提名，監督日常運作及進度回報。',
              },
              {
                label: '一般成員：',
                text: '顧問與工作人員錄用須負責人審查，同意後始可加入。',
              },
            ],
          },
          {
            id: 'article-4',
            title: '第四條　決策小組決議權',
            listType: 'disc',
            items: [
              { text: '重大決議須過半數同意，並報負責人覆核；負責人對決議享有最終否決權。' },
              {
                text: '正式對外聲明須經決策小組與負責人同意，緊急狀況下負責人得單獨決定，事後須追認。',
              },
              { text: '除負責人外之不適任人員，經決策小組同意後可撤換。' },
              { text: '決策小組須每週至少召開一次會議；無故缺席兩次以上者，得予降階或解除職務。' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'chapter-2',
    chapterLabel: '第二章',
    title: '團隊規範與禁止事項',
    sections: [
      {
        id: 'section-2-2',
        title: '第二節　禁止事項與違規處理',
        articles: [
          {
            id: 'article-5',
            title: '禁止事項',
            intro: '全體成員不得從事下列行為，違者依規定處分：',
            listType: 'disc',
            items: [
              { label: '洩漏機密：', text: '未經許可公開內部策略、會議記錄或成員個資。' },
              { label: '挪用資源：', text: '私自使用組織經費、設備或文件。' },
              { label: '散布謠言：', text: '製造分裂或抹黑同仁之不實訊息。' },
              { label: '人身攻擊與歧視：', text: '任何形式的語言暴力或歧視行為。' },
              { label: '賄賂與腐敗：', text: '收受或提供不正當好處影響決策。' },
              { label: '違法犯罪：', text: '違反法律或校規之行為。' },
              { label: '未經授權之對外行動：', text: '擅自以本組織名義發言或舉辦活動。' },
              { label: '政治或商業利益輸送：', text: '利用組織平台為第三方牟利。' },
              { label: '危害學生權益：', text: '侵害學生受教權或言論自由。' },
              { text: '其他足以損及組織之不當行為。' },
            ],
          },
          {
            id: 'article-6',
            title: '第六條　違規處理原則',
            listType: 'decimal',
            items: [
              { label: '調查與通知：', text: '管理層組調查小組蒐證並書面通知當事人。' },
              { label: '聽證與申辯：', text: '當事人可於三日內提出書面陳述並邀請陪同。' },
              { label: '處分決議：', text: '調查報告後，由決策小組投票決定並報負責人核定。' },
              { label: '處分措施：', text: '可依情節採警告、降級、除名等並移送司法機關。' },
              { label: '申訴機制：', text: '不服者可於七日內申請覆議，決策小組三日內回覆。' },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'chapter-3',
    chapterLabel: '第三章',
    title: '經費管理與財務制度',
    sections: [
      {
        id: 'section-3-1',
        title: '第一節　經費來源',
        articles: [
          {
            id: 'article-funding',
            title: '經費來源項目',
            listType: 'disc',
            items: [
              { label: '會費：', text: '依年度預算由成員繳納。' },
              { label: '捐款：', text: '接受個人或團體捐贈，並登錄捐贈者資料。' },
              { label: '其他合法收入：', text: '如活動收益、補助款等。' },
            ],
          },
        ],
      },
      {
        id: 'section-3-2',
        title: '第二節　財務支出',
        articles: [
          {
            id: 'article-expense',
            title: '財務支出與公開原則',
            listType: 'disc',
            items: [
              { text: '支出須事前提出預算案，經決策小組審議通過後執行。' },
              { text: '所有支出應留存發票或憑證，並按月歸檔。' },
              { text: '每年定期舉行財務報告，向全體成員公開帳目。' },
            ],
          },
        ],
      },
    ],
  },
];
