import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Lightbulb, CheckCircle2, Users, Factory, ShieldCheck, Cpu, Truck } from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function UseCases() {
  const scenarios = [
    {
      icon: <ShieldCheck className="w-6 h-6 text-blue-500" />,
      title: '品保部門的客訴與 CAPA 追蹤',
      description: '客戶回報連接器端子接觸不良，品保需跨台灣與東莞廠協調根因分析，並在規定時效內回覆 8D 報告。',
      tasks: [
        '建立「客訴案件 #2026-Q2-047」計畫，標註客戶名稱與料號',
        '分組為「初步回覆」、「根因分析」、「改善措施」、「效果確認」',
        '將 8D 各節點任務分派給台灣品保、東莞製程及業務窗口',
        '設定截止日期並在 Teams 頻道同步通知相關人員',
      ],
    },
    {
      icon: <Cpu className="w-6 h-6 text-purple-500" />,
      title: '研發部門的新產品開發里程碑',
      description: '光電連接器新料號從設計到量產，需要研發、模具、製程、品保多部門在固定節點交付成果。',
      tasks: [
        '建立「光電連接器 LCP-2026 NPI 專案」計畫',
        '依開發階段分組：概念設計、樣品試作、客戶驗證、量產移轉',
        '每個里程碑建立子任務並附上規格文件與圖面連結',
        '定期於 Teams 開設計審查會議，會議記錄直接存入任務評論',
      ],
    },
    {
      icon: <Factory className="w-6 h-6 text-orange-500" />,
      title: '生產部門的跨廠產能協調',
      description: '接獲三星大單，需在淡水、東莞、蘇州三廠之間協調模具移轉與產能分配，避免交期延誤。',
      tasks: [
        '建立「三星 Q3 備料計畫」，分組對應各廠區負責區段',
        '為模具移轉、首件確認、量產備料各建立追蹤任務',
        '指派廠區負責人並設定每週進度回報提醒',
        '在 Teams 頻道固定週五同步各廠最新進度與風險',
      ],
    },
    {
      icon: <Truck className="w-6 h-6 text-green-500" />,
      title: '業務團隊的報價與交期管理',
      description: '業務同時手持多個客戶詢價，需協調研發估成本、採購確認料況、PM 給交期，整合後才能回覆。',
      tasks: [
        '建立「客戶詢價追蹤板」，每筆詢價建立獨立任務',
        '分組為「待評估」、「報價中」、「等客戶回覆」、「已結案」',
        '任務卡內附上詢價規格、成本估算與客戶期望交期',
        '使用優先順序標記緊急客戶，確保高價值詢價優先處理',
      ],
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">常見使用情境</h1>
              <p className="text-lg text-muted-foreground">
                以下情境取材自瀚荃日常運營，涵蓋品保、研發、生產與業務，
                協助各部門快速找到最適合自己的 Planner 協作模式。
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
                    <Card
                      className="border-border bg-card h-full overflow-hidden transition-[box-shadow] duration-300 hover:[box-shadow:0_0_30px_rgba(0,0,0,0.14)]"
                      style={{ boxShadow: '0 0 20px rgba(0,0,0,0.08)' }}
                    >
                      <div className="p-6 flex flex-col gap-5 h-full">
                        {/* 圖示 + 標題 */}
                        <div className="flex items-center gap-4">
                          <div
                            className="p-3 bg-background rounded-xl shrink-0"
                            style={{ boxShadow: '0 0 10px rgba(0,0,0,0.08)' }}
                          >
                            {scenario.icon}
                          </div>
                          <h3 className="text-xl font-semibold text-card-foreground leading-snug">
                            {scenario.title}
                          </h3>
                        </div>

                        {/* 描述 */}
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {scenario.description}
                        </p>

                        {/* 步驟 */}
                        <div className="space-y-3">
                          <p className="text-xs font-bold uppercase tracking-wider text-primary">
                            建議操作步驟：
                          </p>
                          {scenario.tasks.map((task, taskIdx) => (
                            <div key={taskIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                              <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <span>{task}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </HoverScale>
                </MotionContainer>
              ))}
            </div>

            {/* Tips Section */}
            <MotionContainer direction="up">
              <section className="mb-20 bg-primary/10 border-l-4 border-primary p-8 rounded-r-xl">
                <div className="flex gap-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-foreground mb-4">瀚荃適用的最佳實踐</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        '跨廠任務請務必標註負責廠區（淡水／東莞／蘇州）',
                        '客訴與 CAPA 任務需設定截止日期，避免逾期回覆客戶',
                        '新產品開發里程碑建議逐一建立任務，方便追蹤節點達成',
                        '業務詢價板定期歸檔已結案任務，維持看板整潔',
                        '重要決策與會議紀錄寫入任務評論，保留完整脈絡',
                        '在 Teams 頻道加入 Planner，讓跨廠同仁即時掌握進度',
                      ].map((tip, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                          <div className="w-1 h-1 bg-primary rounded-full shrink-0"></div>
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
              <section className="bg-primary text-primary-foreground p-12 rounded-3xl text-center">
                <Users className="w-12 h-12 text-primary-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">準備好提升團隊效率了嗎？</h3>
                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                  找到符合你部門的情境了嗎？立即前往操作指南，
                  建立瀚荃第一個 Planner 專案計畫。
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link href="/tutorials/operation-guide">
                    <HoverScale>
                      <Button size="lg" className="px-10 bg-background text-primary hover:bg-muted">
                        前往操作指南
                      </Button>
                    </HoverScale>
                  </Link>
                  <Link href="/support/faq">
                    <HoverScale>
                      <Button size="lg" variant="outline" className="px-10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
                        查看常見問題
                      </Button>
                    </HoverScale>
                  </Link>
                </div>
              </section>
            </MotionContainer>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}