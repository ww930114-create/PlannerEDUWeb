import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Lightbulb, CheckCircle2, Megaphone, Settings, Briefcase, Target, Users } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function UseCases() {
  const scenarios = [
    {
      icon: <Megaphone className="w-6 h-6 text-orange-500" />,
      title: '行銷團隊的行銷活動管理',
      description: '行銷團隊需要協調多個行銷活動，涉及不同的部門和外部合作夥伴。',
      tasks: [
        '建立一個「2026 年 Q1 行銷計畫」',
        '為不同的活動建立分組（如「社群媒體」、「電子郵件」）',
        '為每個活動建立任務，並分配給相應的團隊成員',
        '在 Teams 頻道中新增 Planner，讓所有相關人員都能看到進度'
      ],
    },
    {
      icon: <Settings className="w-6 h-6 text-blue-500" />,
      title: '軟體開發團隊的 Sprint 管理',
      description: '開發團隊需要管理 Sprint 中的任務，並追蹤 Bug 和功能請求。',
      tasks: [
        '為每個 Sprint 建立一個計畫（如「Sprint 1」）',
        '使用分組表示任務狀態（如「待辦」、「進行中」、「已完成」）',
        '為每個任務新增詳細描述和相關檔案',
        '定期在 Teams 中進行 Sprint 評估和回顧'
      ],
    },
    {
      icon: <Briefcase className="w-6 h-6 text-green-500" />,
      title: '人力資源團隊的招聘流程',
      description: '人力資源團隊需要管理複雜的招聘流程，涉及多個階段和多個利益相關者。',
      tasks: [
        '為每個職位建立一個計畫',
        '使用分組表示招聘階段（如「篩選簡歷」、「初試」、「複試」）',
        '為每個候選人建立任務並存放簡歷',
        '使用評論進行面試官之間的討論'
      ],
    },
    {
      icon: <Target className="w-6 h-6 text-purple-500" />,
      title: '個人目標與學習計畫',
      description: '利用 Planner 的「我的任務」功能，將個人學習目標與團隊任務整合。',
      tasks: [
        '建立「年度自我提升」計畫',
        '將大型目標拆解為檢查清單',
        '設定截止日期提醒自己',
        '定期檢查 My Tasks 中的「指派給我的」任務'
      ],
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">常見使用情境</h1>
              <p className="text-lg text-muted-foreground">
                探索 Planner 在不同行業和部門中的實際應用，尋找最適合您的協作模式。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-20">
          <div className="max-w-5xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              {scenarios.map((scenario, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <HoverScale>
                    <Card className="border-border h-full hover:shadow-xl transition-shadow overflow-hidden">
                      <CardHeader className="bg-slate-50/50 border-b border-border pb-6">
                        <div className="flex items-center gap-4">
                          <div className="p-3 bg-white rounded-xl shadow-sm">
                            {scenario.icon}
                          </div>
                          <CardTitle className="text-xl">{scenario.title}</CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-6">
                        <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                          {scenario.description}
                        </p>
                        <div className="space-y-3">
                          <p className="text-xs font-bold uppercase tracking-wider text-primary">建議操作步驟：</p>
                          {scenario.tasks.map((task, taskIdx) => (
                            <div key={taskIdx} className="flex items-start gap-3 text-sm text-slate-600">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </MotionContainer>
              ))}
            </div>

            {/* Tips Section */}
            <MotionContainer direction="up">
              <section className="mb-20 bg-primary/5 border-l-4 border-primary p-8 rounded-r-xl">
                <div className="flex gap-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-foreground mb-4">通用最佳實踐</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        '為不同的工作流程建立不同的計畫',
                        '定期檢查 My Day 和 My Tasks',
                        '使用標籤和優先順序進行分類',
                        '在 Teams 中與團隊進行實時協作',
                        '定期歸檔已完成的計畫',
                        '利用評論保留決策脈絡'
                      ].map((tip, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full"></div>
                          {tip}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </MotionContainer>

            {/* Next Steps */}
            <MotionContainer direction="up">
              <section className="bg-slate-900 text-white p-12 rounded-3xl text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">準備好提升團隊效率了嗎？</h3>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  現在您已經看到了 Planner 的實際應用，是時候開始建立您的第一個計畫了。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/tutorials/operation-guide">
                    <HoverScale>
                      <Button size="lg" className="px-10">
                        前往操作指南
                      </Button>
                    </HoverScale>
                  </Link>
                  <Link href="/support/faq">
                    <HoverScale>
                      <Button size="lg" variant="outline" className="px-10 border-white text-white hover:bg-white/10">
                        查看常見問題
                      </Button>
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
