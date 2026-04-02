import { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Link, useLocation } from 'wouter';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

interface SearchResult {
  title: string;
  path: string;
  category: string;
  excerpt: string;
}

const searchData: SearchResult[] = [
  // Basics
  {
    title: 'Planner 是什麼？',
    path: '/basics/what-is-planner',
    category: '入門',
    excerpt: '了解 Microsoft Planner 的核心概念、主要功能和適用場景',
  },
  // Tutorials
  {
    title: '操作指南 (網頁版 vs Teams 版)',
    path: '/tutorials/operation-guide',
    category: '教學',
    excerpt: '完整說明 Planner 在網頁版與 Teams 版的使用介面與建立計畫步驟',
  },
  {
    title: '任務管理教學',
    path: '/tutorials/task-management',
    category: '教學',
    excerpt: '學習如何建立任務、分配人員、設定優先順序和追蹤進度',
  },
  // Scenarios
  {
    title: '常見使用情境',
    path: '/scenarios/use-cases',
    category: '應用',
    excerpt: '探索專案管理、活動籌備、日常運維等實際應用案例',
  },
  // Support
  {
    title: '常見問題 FAQ',
    path: '/support/faq',
    category: '支援',
    excerpt: '解決登入問題、權限設定、Teams 整合等常見疑惑',
  },
  {
    title: '聯絡我們',
    path: '/support/contact',
    category: '支援',
    excerpt: '聯絡方式、支援管道與快速連結',
  },
];

export default function SearchBox() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [, setLocation] = useLocation();
  const searchRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (query.trim() === '') {
      setResults([]);
      return;
    }

    const filtered = searchData.filter(
      (item) =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.excerpt.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filtered);
  }, [query]);

  // 點擊外部關閉搜尋
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (path: string) => {
    setLocation(path);
    setIsOpen(false);
    setQuery('');
  };

  return (
    <div className="relative" ref={searchRef}>
      <div
        className={cn(
          "flex items-center gap-2 px-3 py-1.5 rounded-md bg-secondary/50 border border-border cursor-pointer hover:bg-secondary transition-colors w-10 md:w-48",
          isOpen && "bg-white ring-2 ring-primary/20 border-primary/50"
        )}
        onClick={() => setIsOpen(true)}
      >
        <Search className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground hidden md:inline">搜尋教學...</span>
      </div>

      {isOpen && (
        <div className="absolute right-0 top-12 w-[90vw] md:w-[400px] bg-white border border-border rounded-xl shadow-2xl overflow-hidden z-[100]">
          <div className="p-4 border-b border-border flex items-center gap-2">
            <Search className="w-4 h-4 text-muted-foreground" />
            <Input
              autoFocus
              placeholder="搜尋關鍵字（例如：Teams, 任務）..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="border-none focus-visible:ring-0 p-0 h-auto text-base"
            />
            {query && (
              <button onClick={() => setQuery('')}>
                <X className="w-4 h-4 text-muted-foreground hover:text-foreground" />
              </button>
            )}
          </div>

          <div className="max-h-[400px] overflow-y-auto p-2">
            {query.trim() === '' ? (
              <div className="p-4 text-center text-sm text-muted-foreground">
                輸入關鍵字開始搜尋
              </div>
            ) : results.length > 0 ? (
              <div className="space-y-1">
                {results.map((result) => (
                  <div
                    key={result.path}
                    className="p-3 rounded-lg hover:bg-secondary cursor-pointer transition-colors"
                    onClick={() => handleSelect(result.path)}
                  >
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-primary/10 text-primary">
                        {result.category}
                      </span>
                      <span className="font-semibold text-sm">{result.title}</span>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-1">
                      {result.excerpt}
                    </p>
                  </div>
                ))}
              </div>
            ) : (
              <div className="p-8 text-center">
                <p className="text-sm text-muted-foreground">找不到與「{query}」相關的內容</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
