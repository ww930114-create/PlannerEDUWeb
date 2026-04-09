import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { useLocation } from 'wouter';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

// ── 型別定義 ────────────────────────────────────────────────────────────────
interface SearchResult {
  title: string;
  path: string;
  category: string;
  excerpt: string;
  keywords: string[]; // 額外關鍵字，不顯示在畫面上，只用於搜尋命中
}

// ── 全站搜尋資料庫 ────────────────────────────────────────────────────────────
// 每個頁面可以有多筆條目（例如 FAQ 每題一筆），搜尋命中率更高
const searchData: SearchResult[] = [

  // ── 首頁 ────────────────────────────────────────────────────────────────
  {
    title: '首頁',
    path: '/',
    category: '首頁',
    excerpt: 'Microsoft Planner 教學入口，快速找到你需要的教學資源',
    keywords: ['首頁', 'home', '教學', '入口', 'planner', '瀚荃', 'cvilux'],
  },

  // ── 入門 ────────────────────────────────────────────────────────────────
  {
    title: 'Planner 是什麼？',
    path: '/basics/what-is-planner',
    category: '入門',
    excerpt: '了解 Microsoft Planner 的核心概念、主要功能和適用場景',
    keywords: [
      'planner', '是什麼', '介紹', '簡介', '概念', '功能', '適用',
      '任務管理', '專案', '看板', 'kanban', 'microsoft 365', 'm365',
      '計畫', 'plan', '團隊', '協作', '入門', '基礎',
    ],
  },

  // ── 教學：操作指南 ──────────────────────────────────────────────────────
  {
    title: '操作指南（網頁版）',
    path: '/tutorials/operation-guide',
    category: '教學',
    excerpt: '說明如何在網頁版 Planner 建立計畫、新增任務與管理看板',
    keywords: [
      '操作', '網頁版', 'web', '建立計畫', '新增任務', '看板', 'board',
      '面板', '方格', '排程', '圖表', '頁籤', '分組', 'bucket', '貯列',
      '步驟', '指南', 'how to', '怎麼用', '開始',
    ],
  },
  {
    title: '操作指南（Teams 版）',
    path: '/tutorials/operation-guide',
    category: '教學',
    excerpt: '在 Microsoft Teams 中加入 Planner 頁籤，直接在頻道內協作',
    keywords: [
      'teams', 'microsoft teams', '頻道', 'channel', '頁籤', 'tab',
      '加入 planner', 'teams 整合', '整合', '團隊頻道', '聊天', '協作',
    ],
  },

  // ── 教學：任務管理 ──────────────────────────────────────────────────────
  {
    title: '任務管理教學',
    path: '/tutorials/task-management',
    category: '教學',
    excerpt: '學習如何建立任務、分配人員、設定優先順序和追蹤進度',
    keywords: [
      '任務', 'task', '建立任務', '分配', '指派', 'assign', '人員',
      '優先順序', 'priority', '緊急', '重要', '截止日期', 'due date',
      '到期', '進度', '追蹤', '完成', '標籤', 'label', '附件', '評論', '留言',
      '核取清單', 'checklist', '子任務',
    ],
  },
  {
    title: '設定任務截止日期',
    path: '/tutorials/task-management',
    category: '教學',
    excerpt: '為任務設定到期日，讓 Planner 自動提醒即將逾期的工作',
    keywords: [
      '截止日期', '到期日', '提醒', 'reminder', '逾期', '延遲', 'late',
      '日期', 'date', '行事曆', 'calendar',
    ],
  },
  {
    title: '任務優先順序設定',
    path: '/tutorials/task-management',
    category: '教學',
    excerpt: '將任務標記為緊急、重要、中等或低，幫助團隊聚焦關鍵工作',
    keywords: [
      '優先', '緊急', '重要', '中等', '低', 'urgent', 'important',
      '優先度', '標記', '分類',
    ],
  },

  // ── 圖表總覽 ────────────────────────────────────────────────────────────
  {
    title: 'Planner 圖表分析全攻略',
    path: '/dashboard/chart-overview',
    category: '圖表',
    excerpt: '利用圖表檢視一眼看出專案瓶頸、過勞成員與優先度分佈',
    keywords: [
      '圖表', 'chart', '分析', '統計', '視覺化', '儀表板', 'dashboard',
      '瓶頸', '進度', '狀態', 'status', '貯列', 'bucket', '優先順序',
      '成員', 'member', '站立會議', '週會', '月報', '資源配置',
    ],
  },
  {
    title: '狀態圖表（Status）',
    path: '/dashboard/chart-overview',
    category: '圖表',
    excerpt: '查看版面上「尚未開始」、「進行中」、「延遲」、「已完成」的任務分佈',
    keywords: [
      '狀態', 'status', '尚未開始', '進行中', '延遲', '已完成',
      '完成率', '圓餅圖', '進度健康',
    ],
  },
  {
    title: '貯列圖表（Bucket）',
    path: '/dashboard/chart-overview',
    category: '圖表',
    excerpt: '比較各分組（前端、後端、行銷等）的任務負載量',
    keywords: [
      '貯列', 'bucket', '分組', '負載', '工作量', '瓶頸', '部門',
    ],
  },
  {
    title: '優先順序圖表（Priority）',
    path: '/dashboard/chart-overview',
    category: '圖表',
    excerpt: '識別是否有過多「緊急」任務導致團隊長期處於救火模式',
    keywords: [
      '優先', 'priority', '緊急', '救火', '過載', '壓力', '分佈',
    ],
  },
  {
    title: '成員圖表（Members）',
    path: '/dashboard/chart-overview',
    category: '圖表',
    excerpt: '一眼看出誰身上任務過多、誰有餘裕，協助主管做資源調配',
    keywords: [
      '成員', 'member', '過勞', '人員', '資源', '調配', '分配',
      '主管', '1-on-1', '工作量', '誰最忙',
    ],
  },

  // ── 使用情境 ────────────────────────────────────────────────────────────
  {
    title: '常見使用情境',
    path: '/scenarios/use-cases',
    category: '應用',
    excerpt: '瀚荃各部門實際應用案例：品保、研發、生產、業務',
    keywords: [
      '使用情境', '案例', '應用', '範例', '情境', '瀚荃', 'cvilux',
      '品保', '研發', '生產', '業務', '部門',
    ],
  },
  {
    title: '品保部門：客訴與 CAPA 追蹤',
    path: '/scenarios/use-cases',
    category: '應用',
    excerpt: '跨台灣與東莞廠協調 8D 報告，在時效內完成根因分析與改善確認',
    keywords: [
      '品保', 'qa', 'qc', '客訴', '8d', 'capa', '根因分析', '改善',
      '連接器', '不良', '品質', '東莞', '淡水', '跨廠',
    ],
  },
  {
    title: '研發部門：新產品開發里程碑',
    path: '/scenarios/use-cases',
    category: '應用',
    excerpt: '光電連接器 NPI 從設計到量產，多部門節點追蹤',
    keywords: [
      '研發', 'rd', 'npi', '新產品', '開發', '里程碑', '樣品', '試作',
      '量產', '模具', '設計審查', '光電', '連接器', 'lcp',
    ],
  },
  {
    title: '生產部門：跨廠產能協調',
    path: '/scenarios/use-cases',
    category: '應用',
    excerpt: '三星大單跨淡水、東莞、蘇州三廠的模具移轉與產能分配',
    keywords: [
      '生產', '製造', '產能', '跨廠', '三星', 'samsung', '淡水', '東莞',
      '蘇州', '模具', '移轉', '交期', '備料', '廠區',
    ],
  },
  {
    title: '業務團隊：報價與交期管理',
    path: '/scenarios/use-cases',
    category: '應用',
    excerpt: '多筆客戶詢價並行，整合研發成本估算與採購料況後回覆',
    keywords: [
      '業務', '報價', '詢價', '交期', '採購', '料況', '客戶', '成本',
      '估算', '回覆', 'rfq', '看板', '結案',
    ],
  },

  // ── 支援：FAQ ──────────────────────────────────────────────────────────
  {
    title: '常見問題 FAQ',
    path: '/support/faq',
    category: '支援',
    excerpt: '解決登入問題、權限設定、Teams 整合等常見疑惑',
    keywords: [
      'faq', '常見問題', '疑問', '問題', '解決', '幫助', 'help',
      '登入', '權限', '授權', '設定', '錯誤', '無法', '看不到',
    ],
  },
  {
    title: '無法登入 Planner？',
    path: '/support/faq',
    category: '支援',
    excerpt: '確認 Microsoft 365 授權是否包含 Planner，或嘗試清除瀏覽器快取',
    keywords: [
      '登入', '無法登入', '帳號', '授權', '快取', 'cache', '瀏覽器',
      '登不進去', '黑畫面', '錯誤',
    ],
  },
  {
    title: '如何在 Teams 加入 Planner？',
    path: '/support/faq',
    category: '支援',
    excerpt: '在 Teams 頻道點擊「+」新增頁籤，選擇 Planner 並連結現有計畫',
    keywords: [
      'teams', '加入', '頁籤', 'tab', '新增', '連結', '頻道', '整合',
      '怎麼加', '怎麼開', '+號',
    ],
  },
  {
    title: '權限與成員管理',
    path: '/support/faq',
    category: '支援',
    excerpt: '說明計畫擁有者、成員權限差異，以及如何邀請或移除成員',
    keywords: [
      '權限', '擁有者', '成員', '邀請', '移除', '加入', '管理員',
      '無法編輯', '唯讀', 'owner', 'member',
    ],
  },

  // ── 支援：聯絡 ──────────────────────────────────────────────────────────
  {
    title: '聯絡我們',
    path: '/support/contact',
    category: '支援',
    excerpt: '聯絡 IT 支援、回報問題或提供教學網站意見反饋',
    keywords: [
      '聯絡', '聯繫', 'contact', '支援', 'it', '回報', '問題', '意見',
      '反饋', '信箱', 'email', '電話', '幫助',
    ],
  },
];

// ── 搜尋邏輯：title + excerpt + keywords 全部命中 ──────────────────────────
function searchItems(query: string): SearchResult[] {
  const q = query.toLowerCase().trim();
  if (!q) return [];

  return searchData.filter((item) => {
    const haystack = [
      item.title,
      item.excerpt,
      item.category,
      ...item.keywords,
    ]
      .join(' ')
      .toLowerCase();
    return haystack.includes(q);
  });
}

// ── 主元件 ───────────────────────────────────────────────────────────────────
export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [, setLocation] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setResults(searchItems(query));
  }, [query]);

  // 點擊外部關閉
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 開啟時自動 focus
  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleSelect = (path: string) => {
    setLocation(path);
    setIsOpen(false);
    setQuery('');
  };

  // 依 category 分組顯示
  const grouped = results.reduce<Record<string, SearchResult[]>>((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="relative" ref={searchRef}>
      {/* 搜尋觸發按鈕 */}
      <div
        className={cn(
          'flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/50 border border-border cursor-pointer hover:bg-secondary transition-colors w-10 md:w-48',
          isOpen && 'bg-background ring-2 ring-primary/20 border-primary/50'
        )}
        onClick={() => setIsOpen(true)}
      >
        <Search className="w-4 h-4 text-muted-foreground shrink-0" />
        <span className="text-sm text-muted-foreground hidden md:inline">搜尋教學...</span>
      </div>

      {/* 搜尋面板 */}
      {isOpen && (
        <div className="absolute right-0 top-12 w-[90vw] md:w-[440px] bg-background border border-border rounded-xl shadow-2xl overflow-hidden z-[100]">
          {/* 輸入框 */}
          <div className="p-4 border-b border-border flex items-center gap-2">
            <Search className="w-4 h-4 text-muted-foreground shrink-0" />
            <Input
              ref={inputRef}
              placeholder="搜尋關鍵字（例如：CAPA、圖表、Teams）..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-none focus-visible:ring-0 p-0 h-auto text-base bg-transparent"
            />
            {query && (
              <button onClick={() => setQuery('')} className="shrink-0">
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>

          {/* 結果列表 */}
          <div className="max-h-[480px] overflow-y-auto p-2">
            {query.trim() === '' ? (
              /* 空白提示：顯示快速連結 */
              <div className="p-4">
                <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
                  快速前往
                </p>
                <div className="space-y-1">
                  {[
                    { title: '入門：Planner 是什麼？', path: '/basics/what-is-planner', category: '入門' },
                    { title: '操作指南', path: '/tutorials/operation-guide', category: '教學' },
                    { title: '圖表分析攻略', path: '/dashboard/chart-overview', category: '圖表' },
                    { title: '常見使用情境', path: '/scenarios/use-cases', category: '應用' },
                    { title: '常見問題 FAQ', path: '/support/faq', category: '支援' },
                  ].map((item) => (
                    <div
                      key={item.path}
                      className="flex items-center gap-2 p-2.5 rounded-lg hover:bg-secondary cursor-pointer transition-colors"
                      onClick={() => handleSelect(item.path)}
                    >
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary shrink-0">
                        {item.category}
                      </span>
                      <span className="text-sm text-foreground">{item.title}</span>
                    </div>
                  ))}
                </div>
              </div>
            ) : Object.keys(grouped).length > 0 ? (
              /* 分組搜尋結果 */
              <div className="space-y-4 p-2">
                {Object.entries(grouped).map(([category, items]) => (
                  <div key={category}>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground px-1 mb-1.5">
                      {category}
                    </p>
                    <div className="space-y-1">
                      {items.map((result) => (
                        <div
                          key={result.title}
                          className="p-3 rounded-lg hover:bg-secondary cursor-pointer transition-colors"
                          onClick={() => handleSelect(result.path)}
                        >
                          <p className="font-semibold text-sm text-foreground mb-0.5">
                            {result.title}
                          </p>
                          <p className="text-xs text-muted-foreground line-clamp-1">
                            {result.excerpt}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* 無結果 */
              <div className="p-8 text-center">
                <p className="text-sm text-muted-foreground">
                  找不到與「{query}」相關的內容
                </p>
                <p className="text-xs text-muted-foreground mt-1">
                  試試看：圖表、任務、Teams、CAPA、報價
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}