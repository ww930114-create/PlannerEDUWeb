import { useState } from 'react';
import { ChevronDown, HelpCircle, Lightbulb } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'wouter';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQItem {
  category: string;
  items: Array<{
    q: string;
    a: string;
  }>;
}

const faqData: FAQItem[] = [
  {
    category: '基礎概念',
    items: [
      {
        q: 'Planner 跟 To Do 有什麼差別？',
        a: 'To Do 是個人工具，主要用於個人待辦事項。Planner 是團隊工具，適合多人協作。新版 Planner 已將兩者的功能整合，您可以在 My Tasks 中同時看到個人任務和團隊任務。',
      },
      {
        q: 'Planner 是否免費？',
        a: 'Planner 包含在 Microsoft 365 訂閱中。如果您已經有 Microsoft 365 帳戶（如 Office 365），就可以直接使用 Planner。',
      },
    ],
  },
  {
    category: '計畫與任務管理',
    items: [
      {
        q: '如何建立新計畫？',
        a: '在 Planner 首頁點擊「+ 新計畫」，輸入名稱，並選擇隱私等級（私人或公開）。',
      },
      {
        q: '如何在任務中新增附件？',
        a: '打開任務卡片，在「附件」區塊點擊「+ 新增」，可選擇上傳電腦檔案、連結網址或 SharePoint 文件。',
      },
    ],
  },
  {
    category: 'Teams 整合',
    items: [
      {
        q: '如何在 Teams 頻道中使用 Planner？',
        a: '進入 Teams 頻道，點擊上方的「+」新增標籤，搜尋「Planner」並選擇您要連結的計畫。',
      },
      {
        q: '在 Teams 中使用有什麼好處？',
        a: '您可以邊聊天邊更新任務，無需切換視窗，所有通知也會整合在 Teams 活動中。',
      },
    ],
  },
];

export default function FAQ() {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  const toggleItem = (key: string) => {
    setExpandedItem(expandedItem === key ? null : key);
  };

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4 flex items-center gap-3">
                <HelpCircle className="w-10 h-10 text-primary" /> 常見問題 (FAQ)
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                在這裡，我們彙整了使用者最常遇到的疑問，幫助您快速排除障礙。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-20">
          <div className="max-w-3xl mx-auto">
            {faqData.map((category, catIdx) => (
              <div key={category.category} className="mb-12">
                <MotionContainer direction="up" delay={catIdx * 0.1}>
                  <h2 className="text-xl font-bold text-foreground mb-6 border-l-4 border-primary pl-4">
                    {category.category}
                  </h2>
                </MotionContainer>
                
                <div className="space-y-4">
                  {category.items.map((item, idx) => {
                    const itemKey = `${category.category}-${idx}`;
                    const isOpen = expandedItem === itemKey;
                    
                    return (
                      <MotionContainer key={itemKey} direction="up" delay={idx * 0.05}>
                        <div className={`border rounded-xl overflow-hidden transition-all ${isOpen ? 'border-primary/30 shadow-sm' : 'border-border'}`}>
                          <button
                            onClick={() => toggleItem(itemKey)}
                            className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition text-left"
                          >
                            <p className="font-semibold text-foreground pr-4">{item.q}</p>
                            <motion.div
                              animate={{ rotate: isOpen ? 180 : 0 }}
                              transition={{ duration: 0.2 }}
                            >
                              <ChevronDown className="w-5 h-5 text-muted-foreground flex-shrink-0" />
                            </motion.div>
                          </button>

                          <AnimatePresence>
                            {isOpen && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                              >
                                <div className="p-5 bg-slate-50/50 border-t border-border">
                                  <p className="text-muted-foreground leading-relaxed text-sm">
                                    {item.a}
                                  </p>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                      </MotionContainer>
                    );
                  })}
                </div>
              </div>
            ))}

            {/* Tip Box */}
            <MotionContainer direction="up">
              <section className="mt-20 bg-primary/5 border border-primary/20 p-8 rounded-2xl text-center">
                <Lightbulb className="w-10 h-10 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-bold text-foreground mb-4">還有其他問題嗎？</h3>
                <p className="text-muted-foreground mb-8">
                  如果您沒有找到答案，歡迎查看我們的操作指南或聯絡支援團隊。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/tutorials/operation-guide">
                    <HoverScale>
                      <Button className="px-8">前往操作指南</Button>
                    </HoverScale>
                  </Link>
                  <Link href="/support/contact">
                    <HoverScale>
                      <Button variant="outline" className="px-8">聯絡支援</Button>
                    </HoverScale>
                  </Link>
                </div>
              </section>
            </MotionContainer>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}
