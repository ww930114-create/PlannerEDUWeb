import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, CheckCircle2, Clock, Users, ListTodo, MessageSquare, Paperclip } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function TaskManagement() {
  const taskDetailItems = [
    { icon: <Users className="w-5 h-5 text-blue-500" />, title: "指派給", desc: "選擇負責此任務的團隊成員。一個任務可以指派給多個人。" },
    { icon: <Clock className="w-5 h-5 text-orange-500" />, title: "到期日期", desc: "設定任務的截止日期。系統會自動提醒相關人員。" },
    { icon: <CheckCircle2 className="w-5 h-5 text-green-500" />, title: "優先順序", desc: "選擇「高」、「中」或「低」，影響任務在看板中的視覺突出度。" },
    { icon: <ListTodo className="w-5 h-5 text-purple-500" />, title: "檢查清單", desc: "將大任務拆解為細小步驟，逐一勾選追蹤進度。" },
    { icon: <Paperclip className="w-5 h-5 text-slate-500" />, title: "附件", desc: "上傳相關的檔案或文件，如設計稿、需求文檔等。" },
    { icon: <MessageSquare className="w-5 h-5 text-pink-500" />, title: "評論", desc: "在任務中進行實時討論，保留完整的溝通脈絡。" }
  ];

  return (
    <PageTransition>
      {/* 🛑 致命錯誤修正：bg-white 換成 bg-background，並加上 text-foreground */}
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-12">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">任務管理教學</h1>
              <p className="text-lg text-muted-foreground">
                本章節將教您如何建立任務、分配任務、設定優先順序，以及利用高級功能追蹤進度。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Create Task Section */}
            <section className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <MotionContainer direction="left">
                  <h2 className="text-3xl font-bold text-foreground mb-6">1. 建立與定義任務</h2>
                  <p className="text-muted-foreground mb-6">
                    任務是 Planner 的最小工作單元。建立任務後，點擊卡片即可進入「詳細資訊視圖」，這是團隊協作的核心。
                  </p>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary/20 rounded-lg border border-border">
                      <p className="font-bold text-sm mb-1 text-foreground">快速建立步驟：</p>
                      <ol className="text-sm text-muted-foreground list-decimal list-inside space-y-1">
                        <li>點擊貯體中的「+ 新增任務」</li>
                        <li>輸入任務名稱並按 Enter</li>
                        <li>點擊卡片開啟詳細設定</li>
                      </ol>
                    </div>
                  </div>
                </MotionContainer>
                <MotionContainer direction="right">
                  {/* 🛑 修正：bg-slate-50 換成 bg-muted，border-slate-300 換成 border-border，text-slate-400 換成 text-muted-foreground */}
                  <div className="aspect-square bg-muted rounded-2xl border border-dashed border-border flex items-center justify-center text-muted-foreground p-8 text-center">
                    <div>
                      {/* 🛑 修正：bg-white 換成 bg-background */}
                      <div className="w-16 h-16 bg-background rounded-full shadow-sm mx-auto mb-4 flex items-center justify-center border border-border">
                        <ListTodo className="w-8 h-8 text-primary" />
                      </div>
                      <p className="font-bold text-foreground">任務卡片示意圖</p>
                      <p className="text-xs mt-2">顯示進度、期限與負責人</p>
                    </div>
                  </div>
                </MotionContainer>
              </div>
            </section>

            {/* Task Details Grid */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-8">任務詳細資訊解構</h2>
              </MotionContainer>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {taskDetailItems.map((item, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <HoverScale>
                      {/* 🛑 加上 bg-card 確保卡片底色正確 */}
                      <Card className="border-border bg-card h-full">
                        <CardHeader className="pb-2">
                          <div className="mb-2">{item.icon}</div>
                          <CardTitle className="text-base text-card-foreground">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* Tracking Progress */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-3xl font-bold text-foreground mb-12 text-center">2. 多維度追蹤進度</h2>
              </MotionContainer>
              <div className="grid md:grid-cols-2 gap-8">
                <MotionContainer direction="up" delay={0.1}>
                  {/* 🛑 修正：bg-slate-900 換成語意化的 bg-card，讓它在淺色是白底/淺灰底，深色是深灰底 */}
                  <div className="p-8 bg-card border border-border shadow-sm rounded-2xl h-full">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-card-foreground">
                      <div className="w-5 h-5 text-primary" /> 看板與圖表
                    </h3>
                    {/* 🛑 修正：text-slate-400 換成 text-muted-foreground */}
                    <p className="text-muted-foreground text-sm mb-6">
                      看板視圖適合日常執行，而圖表視圖則能自動將數據轉化為視覺報表，幫助您一眼看出進度瓶頸。
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> 狀態分佈圖 (未開始/進行中/已延遲)
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> 成員工作量統計
                      </li>
                    </ul>
                  </div>
                </MotionContainer>
                <MotionContainer direction="up" delay={0.2}>
                  <div className="p-8 bg-primary/5 border border-primary/10 rounded-2xl h-full">
                    <h3 className="text-xl font-bold mb-4 flex items-center gap-2 text-foreground">
                      <Clock className="w-5 h-5 text-primary" /> 排程與清單
                    </h3>
                    <p className="text-muted-foreground text-sm mb-6">
                      使用行事曆格式查看任務時間軸，或使用清單視圖進行大批量的任務篩選與排序。
                    </p>
                    <ul className="space-y-3 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> 行事曆同步功能
                      </li>
                      <li className="flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full"></div> 多層級篩選 (依標籤、期限、指派人)
                      </li>
                    </ul>
                  </div>
                </MotionContainer>
              </div>
            </section>

            {/* Tip Box */}
            <MotionContainer direction="up">
              {/* 🛑 閃光彈修正：寫死的 amber-50 和 amber-900 全部換成 primary 語意色 */}
              <section className="mb-20 bg-primary/10 border-l-4 border-primary p-8 rounded-r-xl">
                <div className="flex gap-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-foreground mb-2">重點提示：善用「我的任務」</p>
                    <p className="text-muted-foreground">
                      不要迷失在眾多的計畫中。點擊左側導覽列的「我的任務」，Planner 會跨計畫匯總所有分配給您的任務，讓您對今日工作一目了然。
                    </p>
                  </div>
                </div>
              </section>
            </MotionContainer>

            {/* Final CTA */}
            <MotionContainer direction="up">
              {/* 🛑 修正：bg-slate-50 換成 bg-muted/50 */}
              <section className="bg-muted/50 border border-border p-12 rounded-3xl text-center">
                <h3 className="text-2xl font-bold mb-4 text-foreground">掌握了管理技巧，來看看實際應用案例！</h3>
                <p className="text-muted-foreground mb-8">
                  了解不同行業與團隊是如何利用 Planner 來優化工作流程的。
                </p>
                <Link href="/scenarios/use-cases">
                  <HoverScale>
                    <Button size="lg" className="gap-2 bg-primary text-primary-foreground hover:bg-primary/90">
                      查看應用情境 <ArrowRight className="w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
              </section>
            </MotionContainer>
          </div>
        </div>
        <Footer />
      </div>
    </PageTransition>
  );
}