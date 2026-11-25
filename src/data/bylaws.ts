export interface BylawSubItem {
  marker: string;
  text: string;
  deleted?: boolean;
  note?: string;
}

export interface BylawArticle {
  id: string;
  number: string;
  body?: string;
  items?: BylawSubItem[];
}

export interface BylawSection {
  id: string;
  title?: string;
  articles: BylawArticle[];
}

export interface BylawChapter {
  id: string;
  chapterLabel: string;
  title: string;
  sections: BylawSection[];
}

export interface BylawDocument {
  id: string;
  title: string;
  subtitle: string;
  adoptedNote: string;
  chapters: BylawChapter[];
}

export const BYLAW_DOCUMENTS: BylawDocument[] = [
  {
    id: 'charter',
    title: '捍衛全台學權行動社團章程',
    subtitle: 'ADSR Organization Charter',
    adoptedNote: '本章程於 2026 年 09 月 13 日會員大會訂定之',
    chapters: [
      {
        id: 'charter-ch1',
        chapterLabel: '第一章',
        title: '總則',
        sections: [
          {
            id: 'charter-ch1-main',
            articles: [
              {
                id: 'c-art-1',
                number: '第 1 條',
                body: '本社團全名為「捍衛全台學權行動」，英文名為「Action to Defend the Student Rights in Taiwan」，得簡寫為「ADSR」。',
              },
              {
                id: 'c-art-2',
                number: '第 2 條',
                items: [
                  { marker: '1.', text: '本社團以批判社會學理論、進步教育學理論為核心。' },
                  { marker: '2.', text: '本社團採行動主義路線。' },
                  { marker: '3.', text: '本社團推動學生權益實踐多元民主。' },
                ],
              },
              {
                id: 'c-art-3',
                number: '第 3 條',
                body: '本社團為全國性學生社團。',
              },
              {
                id: 'c-art-4',
                number: '第 4 條',
                body: '本社團標章，其圖樣詳見附件所示。',
              },
            ],
          },
        ],
      },
      {
        id: 'charter-ch2',
        chapterLabel: '第二章',
        title: '社員',
        sections: [
          {
            id: 'charter-ch2-main',
            articles: [
              {
                id: 'c-art-5',
                number: '第 5 條',
                body: '認同社團理念者，可向社長或社員代表遞出入社表單申請入社，經審查通過後，成為本社團社員。',
              },
              {
                id: 'c-art-6',
                number: '第 6 條',
                body: '社員之權利如下：',
                items: [
                  { marker: '一、', text: '有依據本社團規章選舉、被選舉、罷免、創制及複決之權利。' },
                  { marker: '二、', text: '在社團內會議有發言、提案及表決之權利。' },
                  { marker: '三、', text: '對本社團有建議、檢舉與獲得資訊之權利。' },
                  { marker: '四、', text: '對本社團活動有參與之權利。' },
                  { marker: '五、', text: '對社團內部事務發起連署或提出申訴之權利。' },
                ],
              },
              {
                id: 'c-art-7',
                number: '第 7 條',
                body: '社員之義務如下：',
                items: [
                  { marker: '一、', text: '遵守社團章程，遵守《捍衛全台學權行動紀律規章》。' },
                  { marker: '二、', text: '維護社團名譽。' },
                  { marker: '三、', text: '繳納社費。' },
                ],
              },
              {
                id: 'c-art-8',
                number: '第 8 條',
                items: [
                  {
                    marker: '1.',
                    text: '社員未繳納社費者自動停權，自補繳日起始得回復行使權利，超過兩年未繳交者，視為自動退社。',
                  },
                  {
                    marker: '2.',
                    text: '就補繳社費或停權等事項，於《捍衛全台學權行動社費管理辦法》另定之。',
                  },
                  {
                    marker: '3.',
                    text: '繳納社費之義務於前項所述辦法施行後始生效力。',
                  },
                ],
              },
              {
                id: 'c-art-9',
                number: '第 9 條',
                body: '社員得隨時具填放棄會籍聲明書，於社員代表會審查後正式喪失會員資格。',
              },
              {
                id: 'c-art-9-1',
                number: '第 9-1 條',
                items: [
                  { marker: '一、', text: '退社後重新申請入社應經社長之審核。' },
                  { marker: '二、', text: '受除名處分後兩年後，得重新申請入社。' },
                  { marker: '三、', text: '受除名處分後再申請入社，應經社長之審核。' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'charter-ch3',
        chapterLabel: '第三章',
        title: '社團及運作',
        sections: [
          {
            id: 'charter-ch3-s1',
            title: '第一節　社長',
            articles: [
              {
                id: 'c-art-10',
                number: '第 10 條',
                items: [
                  {
                    marker: '1.',
                    text: '本社團設置社長兩人，共同對外代表本社團，對內共同總籌社團事務。',
                  },
                  {
                    marker: '2.',
                    text: '社長處理社團一般事務，得個別行之；涉及對外正式聲明、重大財務支出或人事決議者，應經二人共同同意；意見不一致時，提交社員代表會表決。',
                  },
                ],
              },
              {
                id: 'c-art-11',
                number: '第 11 條',
                body: '社長二人應由社員大會以無記名投票選舉之，任期自西元偶數年八月三十日起二年，於任期屆滿當年完成改選。',
              },
              {
                id: 'c-art-12',
                number: '第 12 條',
                items: [
                  {
                    marker: '1.',
                    text: '社長中一人出缺，所餘任期未滿六個月者，由社員代表會記名投票，以過半數同意互推一人代理至任期屆滿；所餘任期超過六個月者，應於三個月內召開社員大會臨時會補選之。',
                  },
                  {
                    marker: '2.',
                    text: '社長二人同時出缺者，由社員代表會具名投票互推二人代理，並準用前項補選規定。',
                  },
                ],
              },
              {
                id: 'c-art-13',
                number: '第 13 條',
                items: [
                  {
                    marker: '1.',
                    text: '社長一人因故不能行使職權時，由另一位社長代行其職權；如兩人均不能行使職權，由社員代表會記名投票互推一人代理。',
                  },
                  {
                    marker: '2.',
                    text: '社長不能行使職權之期間超過六個月者，視為出缺，依前條規定辦理。',
                  },
                ],
              },
              {
                id: 'c-art-14',
                number: '第 14 條',
                body: '社長選舉應經過登記、投票之程序，相關辦理方法應使用具公信力、公平、公正、公開之方式舉辦。',
              },
              {
                id: 'c-art-15',
                number: '第 15 條',
                items: [
                  {
                    marker: '1.',
                    text: '社長之罷免，須有全體社員二分之一以上聯署提議，並經社員代表會迴避後有效投票人數三分之二以上同意後，提交社員大會臨時會表決。',
                  },
                  {
                    marker: '2.',
                    text: '社長之罷免案，被罷免人於社員代表會議應迴避表決。',
                  },
                  {
                    marker: '3.',
                    text: '社長之罷免應經過發起、投票之程序。相關辦理方法應使用具公信力、公平、公正、公開之方式舉辦。',
                  },
                  {
                    marker: '4.',
                    text: '社長經罷免確定者，其職缺依第十二條規定視為出缺。',
                  },
                ],
              },
            ],
          },
          {
            id: 'charter-ch3-s2',
            title: '第二節　社員代表會',
            articles: [
              {
                id: 'c-art-16',
                number: '第 16 條',
                body: '本社團設社員代表會，採合議制，由當然社員代表及選舉社員代表組成。社長為當然社員代表；另置選舉社員代表三人，候補二人，由社員大會選舉之。',
              },
              {
                id: 'c-art-17',
                number: '第 17 條',
                body: '選舉社員代表任期自西元偶數年八月三十日起二年，與社長同屆改選。',
              },
              {
                id: 'c-art-18',
                number: '第 18 條',
                body: '社員代表選舉應經過登記、投票之程序，相關辦理方法應使用具公信力、公平、公正、公開之方式舉辦。',
              },
              {
                id: 'c-art-19',
                number: '第 19 條',
                body: '選舉社員代表出缺或因故不能行使職權超過六個月者，以候補社員代表依選舉得票順序遞補；候補社員代表亦出缺者，得由社員代表會決議暫緩遞補至下次改選。',
              },
              {
                id: 'c-art-20',
                number: '第 20 條',
                items: [
                  {
                    marker: '1.',
                    text: '社員代表之罷免，須有全體社員二分之一以上聯署提議，提交社員大會臨時會表決。',
                  },
                  {
                    marker: '2.',
                    text: '社員代表之罷免應經過發起、投票之程序。相關辦理方法應使用具公信力、公平、公正、公開之方式舉辦。',
                  },
                  {
                    marker: '3.',
                    text: '社員代表經罷免確定者，其職缺依第十九條規定辦理遞補。',
                  },
                ],
              },
              {
                id: 'c-art-21',
                number: '第 21 條',
                body: '社員代表會職權如下：',
                items: [
                  { marker: '一、', text: '訂定及執行社團計畫。' },
                  {
                    marker: '二、',
                    text: '訂定及執行社團章程及其施行細則、條例與辦法，社費管理辦法及本章程另有規定應經社員大會複決者除外。',
                  },
                  { marker: '三、', text: '籌措社費與編制預算及決算，提社員大會備查。' },
                  { marker: '四、', text: '審議入社申請、社員除名等人事案。' },
                  { marker: '五、', text: '社團紀律裁決。' },
                  { marker: '六、', text: '其他依本章程賦予之職權。' },
                ],
              },
              {
                id: 'c-art-22',
                number: '第 22 條',
                body: '社員代表就與自身有直接利害關係之人事案或財務案，應自行迴避，不得參與討論及表決。',
              },
              {
                id: 'c-art-23',
                number: '第 23 條',
                body: '社員代表會每兩月至少應開會一次，經社長一人以上提出，得召開臨時會議。',
              },
              {
                id: 'c-art-24',
                number: '第 24 條',
                body: '社員代表三人以上出席，始得開會決議；決議以出席社員代表人數過半數同意為之，可否同數時，由主持會議者裁決。',
              },
              {
                id: 'c-art-25',
                number: '第 25 條',
                body: '社員代表如連續兩次會議未出席且未請假者，視為因故不能行使職權。',
              },
              {
                id: 'c-art-26',
                number: '第 26 條',
                body: '如出席人數不足法定人數，候補社員代表得依序代理出席，代理出席之候補社員代表於該次會議有表決權。',
              },
              {
                id: 'c-art-27',
                number: '第 27 條',
                body: '社員代表會議之過程與決議，除涉及個人隱私或正在審議中之人事案外，應向全體社員公開。',
              },
            ],
          },
          {
            id: 'charter-ch3-s3',
            title: '第三節　社員大會',
            articles: [
              {
                id: 'c-art-28',
                number: '第 28 條',
                body: '本社團以社員大會為最高權力機關。社員大會之職權如下：',
                items: [
                  { marker: '一、', text: '聽取社長及社員代表會之工作報告。' },
                  { marker: '二、', text: '選舉及罷免社長與社員代表。' },
                  { marker: '三、', text: '複決社團章程之修改、社團之合併或解散案。' },
                  {
                    marker: '四、',
                    text: '複決《捍衛全台學權行動社費管理辦法》及其他重要辦法之訂定或修改。',
                  },
                  { marker: '五、', text: '其他依本章程或社員提案應提交大會決議之事項。' },
                ],
              },
              {
                id: 'c-art-29',
                number: '第 29 條',
                body: '社員大會分為常會與臨時會。常會每年召開一次，由社長召集。有下列情形之一者，應召開臨時會：',
                items: [
                  { marker: '一、', text: '社長認有必要時。' },
                  { marker: '二、', text: '社員代表三分之二以上決議時。' },
                  { marker: '三、', text: '全體社員二分之一以上聯署請求時。' },
                ],
              },
              {
                id: 'c-art-30',
                number: '第 30 條',
                body: '社員大會之召集，應於開會日十四日前，以書面或電子方式通知全體社員，並載明開會之時間、地點及議程。臨時會如情況緊急，得縮短前段通知期間，但不得少於七日。',
              },
              {
                id: 'c-art-31',
                number: '第 31 條',
                items: [
                  {
                    marker: '1.',
                    text: '社員大會以社員親自出席為原則；不能親自出席者，得以書面委託其他社員代理出席，但每一社員受託代理以一人為限。',
                  },
                  { marker: '2.', text: '社員大會得以視訊方式召開或併行。' },
                ],
              },
              {
                id: 'c-art-32',
                number: '第 32 條',
                items: [
                  {
                    marker: '1.',
                    text: '社員大會應有全體社員三分之一以上出席，始得開會；出席社員過半數同意，即為通過。',
                  },
                  {
                    marker: '2.',
                    text: '出席人數不足前項規定者，得另訂日期重新召集，經二次召集仍不足法定人數時，得以出席社員人數視為法定人數開會，但僅得決議常會既定議程事項。',
                  },
                ],
              },
              {
                id: 'c-art-33',
                number: '第 33 條',
                body: '下列事項，應有全體社員二分之一以上出席，出席社員三分之二以上同意，始得通過：',
                items: [
                  { marker: '一、', text: '社團章程之修改。' },
                  { marker: '二、', text: '社團之合併或解散。' },
                  { marker: '三、', text: '社長與社員代表之罷免。' },
                  {
                    marker: '四、',
                    text: '前三款中之第一款、第二款所定事項，如經依第三十條規定合法召集二次，出席人數仍未達全體社員二分之一以上者，得於第三次召集時，以全體社員三分之一以上出席為法定人數，仍須出席社員三分之二以上同意，始得通過。',
                  },
                ],
              },
              {
                id: 'c-art-34',
                number: '第 34 條',
                body: '社員大會之決議及會議紀錄，應於會後十四日內公告，供全體社員查閱。',
              },
            ],
          },
        ],
      },
      {
        id: 'charter-ch4',
        chapterLabel: '第四章',
        title: '經費',
        sections: [
          {
            id: 'charter-ch4-main',
            articles: [
              {
                id: 'c-art-35',
                number: '第 35 條',
                body: '經費管理辦法於《捍衛全台學權行動社費管理辦法》另訂定之，且需經過社員大會同意。',
              },
              {
                id: 'c-art-36',
                number: '第 36 條',
                body: '如未訂定《捍衛全台學權行動社費管理辦法》，視為無社費制度，當然無經費管理之必要。',
              },
              {
                id: 'c-art-36-1',
                number: '第 36-1 條',
                body: '未訂定社費管理辦法時，社團運營所需經費由專案社內募款，由社長或社員代表會推派一名專案負責人管理，專案負責人應主動向社員代表會彙報專案資訊。',
              },
            ],
          },
        ],
      },
      {
        id: 'charter-ch5',
        chapterLabel: '第五章',
        title: '附則',
        sections: [
          {
            id: 'charter-ch5-main',
            articles: [
              {
                id: 'c-art-37',
                number: '第 37 條',
                body: '本章程於通過後隔日起生效。',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 'discipline',
    title: '捍衛全台學權行動紀律規章',
    subtitle: 'ADSR Disciplinary Regulations',
    adoptedNote: '本規章於 2026 年 09 月 13 日會員大會訂定之',
    chapters: [
      {
        id: 'discipline-ch1',
        chapterLabel: '第一章',
        title: '總則',
        sections: [
          {
            id: 'discipline-ch1-main',
            articles: [
              {
                id: 'd-art-1',
                number: '第 1 條',
                body: '本規章依本社團章程第七條規定訂定之。',
              },
              {
                id: 'd-art-2',
                number: '第 2 條',
                body: '社員有下列行為之一者，為違反社團紀律：',
                items: [
                  { marker: '一、', text: '違反社團章程。' },
                  { marker: '二、', text: '犯相關刑事犯罪經判決確定者。' },
                  { marker: '三、', text: '瀆職。' },
                  { marker: '四、', text: '挪用本社資源、行使與收受賄絡等腐敗事項。' },
                  { marker: '五、', text: '故意為不實檢舉。' },
                  { marker: '六、', text: '洩漏本社機密。' },
                  { marker: '七、', text: '妨礙社團內選舉之公正性。' },
                  { marker: '八、', text: '損害社團聲譽，情節重大者。' },
                  { marker: '九、', text: '違反社團決議或行動脫序者。' },
                  { marker: '十、', text: '未經授權之對外行動。' },
                  {
                    marker: '十一、',
                    text: '歧視。',
                    deleted: true,
                    note: '（2026/09/13 會員大會決議刪除）',
                  },
                  { marker: '十二、', text: '其他違反公序良俗、情節重大者。' },
                ],
              },
              {
                id: 'd-art-3',
                number: '第 3 條',
                body: '社員違反社團紀律後，社員代表會應依照本規章之規定，分別裁決下列處分：',
                items: [
                  { marker: '一、', text: '勸告，指以書面方式指正違紀行為。' },
                  { marker: '二、', text: '停權，指停止社團章程第七條所賦予之全部權利。' },
                  { marker: '三、', text: '除名，指開除社員身份。' },
                ],
              },
              {
                id: 'd-art-4',
                number: '第 4 條',
                body: '本規章第二條第一款所稱之相關刑事犯罪，所指範圍如下：',
                items: [
                  {
                    marker: '一、',
                    text: '犯中華民國刑法第二章、第三章、第四章、第六章、第八章、第九章、第十章、第十章之一、第十一章、第十二章、第十三章、第十四章、第十五章、第十六章、第十九章、第二十二章、第二十三章、第二十五章、第二十八章、第二十八章之一、第二十九章、第三十章、第三十一章、第三十二章、第三十三章、第三十四章、第三十六章。',
                  },
                  {
                    marker: '二、',
                    text: '犯組織犯罪防制條例、洗錢防制法、證券交易法、槍砲彈藥刀械管制條例、兒童及少年性剝削防治條例、家庭暴力防治法、跟蹤騷擾法有關之罪者。',
                  },
                  { marker: '三、', text: '犯其他刑法情節重大者。' },
                ],
              },
              {
                id: 'd-art-4-1',
                number: '第 4-1 條',
                body: '涉犯前條之罪者經起訴嫌疑重大，得預防性採取停權措施。',
              },
              {
                id: 'd-art-5',
                number: '第 5 條',
                body: '處分自社員代表會所作裁決確定之日起算。',
              },
              {
                id: 'd-art-6',
                number: '第 6 條',
                body: '前項裁決確定之日，指社員代表會之裁決翌日起二十日內，被申訴人未向社長提出申訴者。',
              },
            ],
          },
        ],
      },
      {
        id: 'discipline-ch2',
        chapterLabel: '第二章',
        title: '程序',
        sections: [
          {
            id: 'discipline-ch2-main',
            articles: [
              {
                id: 'd-art-7',
                number: '第 7 條',
                body: '社員代表會接獲檢舉或發現違紀後，應於七日內組成調查小組蒐證，並通知當事人。當事人七日內得提出書面申辯並邀同伴陪同。裁決由社員代表會投票決定，報社長核定。',
              },
              {
                id: 'd-art-8',
                number: '第 8 條',
                body: '當事人接獲通知後，得於七日內提出書面呈報、答辯。當事人有權聲請證人以口頭或書狀向調查小組說明。',
              },
              {
                id: 'd-art-9',
                number: '第 9 條',
                body: '當事人確認提交所有申辯或期限屆滿後，應於七日內由社員代表會召開臨時會議裁決，並交由社長核定。',
              },
              {
                id: 'd-art-10',
                number: '第 10 條',
                body: '社員代表會作成裁決後，當事人如不滿裁決，得於裁決翌日起二十日內向社長提出申訴，並說明理由。',
              },
              {
                id: 'd-art-11',
                number: '第 11 條',
                body: '社長接獲申訴後，應於七日內回應做出下列裁決：',
                items: [
                  { marker: '一、', text: '維持原裁定。' },
                  { marker: '二、', text: '發回調查小組重新調查。' },
                  { marker: '三、', text: '發回社員代表會重新裁定。' },
                  { marker: '四、', text: '本案不得繼續申訴。' },
                ],
              },
            ],
          },
        ],
      },
      {
        id: 'discipline-ch3',
        chapterLabel: '第三章',
        title: '附則',
        sections: [
          {
            id: 'discipline-ch3-main',
            articles: [
              {
                id: 'd-art-12',
                number: '第 12 條',
                body: '本規章依社團章程第二十一條，由社員代表會訂定、修改。',
              },
              {
                id: 'd-art-13',
                number: '第 13 條',
                body: '本規章於通過後隔日起生效。',
              },
            ],
          },
        ],
      },
    ],
  },
];

export interface BylawFormSummary {
  title: string;
  purpose: string;
  fields: string[];
}

export const BYLAW_FORMS: BylawFormSummary[] = [
  {
    title: '入社申請表',
    purpose: '依社團章程第 5 條，認同社團理念者向社長或社員代表遞交申請入社。',
    fields: [
      '姓名、性別（認同）、年齡、就讀學校與科系、學級',
      '每週可投入社團時長、能否參與線下會議／集會遊行',
      '自我簡介（約 100 字）、主要關注議題、過往倡議經歷或輔助審查資料',
    ],
  },
  {
    title: '社員放棄社籍聲明書',
    purpose: '依社團章程第 9 條，社員填具退社聲明並經社員代表會審查後正式喪失會員資格。',
    fields: [
      '申請人姓名、日期、退社理由與申請人簽名',
      '社員代表會審查欄位（是否通過、理由、備註）與主席簽名',
      '社長審核欄位與簽名',
    ],
  },
  {
    title: '社長選舉登記單',
    purpose: '依社團章程第 14 條，供參選社長之社員辦理登記。',
    fields: [
      '基本資料（姓名、性別認同、年齡、就讀學校與科系、學級）',
      '政見與自由發揮欄位（500 字以內）、日期與參選人簽名',
    ],
  },
  {
    title: '社員代表選舉登記單',
    purpose: '依社團章程第 18 條，供參選選舉社員代表之社員辦理登記。',
    fields: [
      '基本資料（姓名、性別認同、年齡、就讀學校與科系、學級）',
      '政見與自由發揮欄位（500 字以內）、日期與參選人簽名',
    ],
  },
];
