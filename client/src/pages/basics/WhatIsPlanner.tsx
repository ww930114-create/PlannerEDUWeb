import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, CheckCircle, Lightbulb, Users, BarChart3, MessageSquare, Layout, Zap } from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function WhatIsPlanner() {
  const coreFeatures = [
    {
      icon: <Layout className="w-8 h-8 text-primary" />,
      title: '視覺化看板',
      desc: '用卡片和欄位組織任務，一眼看清工作流程和進度',
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: '團隊協作',
      desc: '多人同時編輯、評論、分配任務，實時協作無延遲',
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-primary" />,
      title: '進度追蹤',
      desc: '用圖表和統計快速了解完成度、瓶頸在哪',
    },
    {
      icon: <MessageSquare className="w-8 h-8 text-primary" />,
      title: '內建評論',
      desc: '在任務中直接評論討論，保持對話和工作在同一個地方',
    },
  ];

  return (
    <PageTransition>
      {/* 🛑 致命錯誤修正：bg-white 換成 bg-background，並加上 text-foreground */}
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Planner 是什麼？</h1>
              <p className="text-xl text-muted-foreground max-w-2xl">
                Microsoft Planner 是一個輕量級的團隊任務管理工具，幫助您和您的團隊組織工作、分配任務、追蹤進度。
              </p>
              <div className="mt-8">
                <Link href="/tutorials/operation-guide">
                  <HoverScale>
                    <Button size="lg" className="gap-2 text-primary-foreground">
                      開始操作教學 <ArrowRight className="w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            
            {/* Core Concept */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-3xl font-bold text-foreground mb-8">核心概念</h2>
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  <div>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      想像您要籌備一場公司年會。您需要列出所有要做的事、分配給不同的人負責、設定每項任務的截止日期、隨時看到進度、知道哪些項目有風險。Planner 就是為了解決這個問題而設計的。
                    </p>
                    <div className="bg-primary/5 border-l-4 border-primary p-6 rounded">
                      <p className="text-foreground font-semibold">
                        Planner = 計畫 + 任務 + 協作 + 追蹤
                      </p>
                      <p className="text-muted-foreground mt-2 text-sm">
                        一個工具，幫助您的團隊在同一個地方組織工作、分配責任、看到進度。
                      </p>
                    </div>
                  </div>
                  {/* 🛑 錯誤修正：bg-slate-50 換成 bg-muted，text-slate-400 換成 text-muted-foreground */}
                  <div className="bg-muted aspect-video rounded-2xl border border-border flex items-center justify-center text-muted-foreground">
                    [ 核心概念示意圖 ]
                  </div>
                </div>
              </MotionContainer>
            </section>

            {/* Core Features */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-3xl font-bold text-foreground mb-10 text-center">Planner 的核心功能</h2>
              </MotionContainer>
              <div className="grid md:grid-cols-2 gap-6">
                {coreFeatures.map((feature, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <HoverScale>
                      {/* 確保卡片背景使用 bg-card */}
                      <Card className="border-border bg-card hover:shadow-lg transition h-full">
                        <CardHeader>
                          <div className="flex items-center gap-4">
                            <div className="p-2 bg-primary/10 rounded-lg">
                              {feature.icon}
                            </div>
                            <CardTitle className="text-lg text-card-foreground">{feature.title}</CardTitle>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{feature.desc}</p>
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* Key Concepts Grid */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-3xl font-bold text-foreground mb-10">關鍵名詞解釋</h2>
              </MotionContainer>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { title: '計畫 (Plan)', desc: '任務的集合。每個計畫代表一個專案、部門或工作流程。' },
                  { title: '任務 (Task)', desc: '需要完成的工作項目。可以分配人員、設定期限與優先順序。' },
                  { title: '看板 (Board)', desc: '視覺化的管理方式。任務以卡片形式顯示在不同的貯體欄位中。' },
                  { title: '圖表 (Chart)', desc: '進度統計視圖，包括完成百分比與成員負載分析。' }
                ].map((concept, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.05}>
                    {/* 🛑 錯誤修正：bg-slate-50 換成 bg-card */}
                    <div className="bg-card rounded-xl p-6 border border-border hover:border-primary/30 transition-colors shadow-sm">
                      <p className="font-bold text-primary mb-2">{concept.title}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{concept.desc}</p>
                    </div>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* Tip Box */}
            <MotionContainer direction="up">
              {/* 🛑 閃光彈修正：寫死的 blue-50 和 blue-900 全部換成 primary 語意色 */}
              <section className="mb-20 bg-primary/10 border-l-4 border-primary p-8 rounded-r-xl">
                <div className="flex gap-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-foreground mb-2">💡 新手提示</p>
                    <p className="text-muted-foreground mb-3">
                      Planner 設計得很直觀，您不需要複雜的培訓就能開始使用。最好的學習方式是：建立一個計畫 → 邀請團隊成員 → 建立幾個任務 → 開始協作。
                    </p>
                    <p className="text-muted-foreground/80 text-sm">
                      新版 Planner 已將個人任務管理與團隊任務管理整合在一起。您可以在「My Tasks」中同時看到個人任務與團隊任務。
                    </p>
                  </div>
                </div>
              </section>
            </MotionContainer>

            {/* Next Step */}
            <MotionContainer direction="up">
              <div className="text-center py-12 border-t border-border">
                <h3 className="text-xl font-bold mb-6 text-foreground">了解了概念，來看看具體如何操作！</h3>
                <Link href="/tutorials/operation-guide">
                  <HoverScale>
                    <Button size="lg" variant="outline" className="px-10 bg-background text-foreground hover:bg-muted">
                      前往操作指南
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </MotionContainer>

          </div>
        </div>
      </div>
    </PageTransition>
  );
}