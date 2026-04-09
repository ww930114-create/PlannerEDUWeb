import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
// CardHeader / CardContent 已全數替換為原生 div 以避免 shadcn 預設 padding 衝突
import {
  PieChart,
  BarChart2,
  AlertTriangle,
  Users,
  MousePointerClick,
  Lightbulb,
  CheckCircle2,
  LayoutGrid,
  CalendarCheck,
} from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';
import ChartOverview1 from '@/assets/ChartOverview.png';
import ChartOverview2 from '@/assets/ChartOverview2.png';
import ChartOverview3 from '@/assets/ChartOverview3.png';

// ── 型別定義 ────────────────────────────────────────────────────────────────
interface ChartCardData {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description: string;
  insights: string[];
}

interface ScenarioData {
  icon: React.ReactNode;
  title: string;
  content: string;
  steps: string[];
}

// ── 圖片佔位符元件 ───────────────────────────────────────────────────────────
const ImagePlaceholder: React.FC<{ label?: string }> = ({
  label = '此處請替換為 Planner 圖表實際截圖',
}) => (
  <div className="w-full h-44 bg-muted border-2 border-dashed border-border rounded-xl flex flex-col items-center justify-center gap-2 text-muted-foreground select-none">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="w-9 h-9 text-muted-foreground/50"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={1.5}
    >
      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
      <circle cx="8.5" cy="8.5" r="1.5" />
      <polyline points="21 15 16 10 5 21" />
    </svg>
    <span className="text-xs font-medium text-center px-4 text-muted-foreground">{label}</span>
  </div>
);

// ── 核心資料 ─────────────────────────────────────────────────────────────────
const CHART_DATA: ChartCardData[] = [
  {
    icon: <PieChart className="w-6 h-6 text-blue-500" />,
    title: '狀態 (Status)',
    subtitle: '任務完成率一眼掌握',
    description:
      '以圓餅圖呈現版面上所有任務的當前狀態分佈，包含「尚未開始」、「進行中」、「延遲」與「已完成」四種狀態的數量與比例，可快速判斷專案整體進度健康度。',
    insights: [
      '「延遲」佔比若超過 20%，代表排程需重新評估',
      '「尚未開始」比例過高，可能有任務未被分派',
      '「已完成」比例可作為週報匯報的量化依據',
    ],
  },
  {
    icon: <LayoutGrid className="w-6 h-6 text-purple-500" />,
    title: '貯體 (Bucket)',
    subtitle: '各分類工作負載比較',
    description:
      '依照您在 Planner 中建立的貯體（如前端、後端、行銷）來比較各組的任務數量，可清楚看出哪個部門或工作類別承擔了最多任務量。',
    insights: [
      '某貯體任務數遠多於其他組，代表該組可能是瓶頸',
      '搭配「成員」圖表交叉比對，找出高風險區域',
      '可用於資源重分配決策，平衡各組工作量',
    ],
  },
  {
    icon: <AlertTriangle className="w-6 h-6 text-orange-500" />,
    title: '優先順序 (Priority)',
    subtitle: '識別緊急任務是否過載',
    description:
      '以圖表顯示「緊急」、「重要」、「中等」、「低」四個優先層級的任務分佈。若「緊急」任務佔比過高，代表團隊長期處於救火模式，需從根本調整工作節奏。',
    insights: [
      '「緊急」任務若超過 30%，代表優先度濫用或計劃失控',
      '引導團隊思考：每件事都緊急，等於沒有緊急',
      '可作為與主管溝通資源不足的客觀數據佐證',
    ],
  },
  {
    icon: <Users className="w-6 h-6 text-green-500" />,
    title: '成員 (Members)',
    subtitle: '誰過勞、誰有餘裕一目了然',
    description:
      '以橫向長條圖顯示每位成員當前被分派的任務數量。這是主管進行 1-on-1 或資源調整時最實用的功能，能客觀呈現工作分配是否公平合理。',
    insights: [
      '任務數明顯高於平均的成員，需優先關懷或卸載任務',
      '任務數為零的成員，可接手其他人的積壓工作',
      '搭配「狀態」圖表，找出「任務多又延遲」的高風險人員',
    ],
  },
];

const SCENARIOS: ScenarioData[] = [
  {
    icon: <CalendarCheck className="w-6 h-6 text-blue-500" />,
    title: '用圖表數據主持每日站立會議',
    content:
      '每日站立會議開始前，打開「狀態」圖表，以「目前有幾件延遲」作為開場，取代冗長的口頭報告。',
    steps: [
      '開啟圖表檢視，截圖「狀態」圖表作為會議開場畫面',
      '聚焦討論延遲原因，而非逐一詢問每個人的進度',
      '會議結束後更新任務狀態，下次會議自動反映最新數據',
    ],
  },
  {
    icon: <Users className="w-6 h-6 text-purple-500" />,
    title: '週會資源調配決策',
    content:
      '每週一用「成員」圖表搭配「貯體」圖表做交叉分析，找出高負載區域並在週會上做任務轉移決策。',
    steps: [
      '比對「成員」圖表，找出任務數明顯高於平均的成員',
      '對照「貯體」圖表，確認瓶頸來自哪個工作分類',
      '在週會上提出具體的任務轉移建議，避免主觀偏頗',
    ],
  },
  {
    icon: <Lightbulb className="w-6 h-6 text-orange-500" />,
    title: '月度回顧與向上匯報',
    content:
      '月底截圖「優先順序」與「狀態」圖表，製作一頁式摘要向主管或客戶說明本月產出成果。',
    steps: [
      '截圖「已完成」比例與「優先任務完成率」作為核心指標',
      '用「優先順序」圖表說明本月緊急任務的處理狀況',
      '附上下月的任務預覽，展示團隊的前瞻規劃能力',
    ],
  },
];

// ── 統一卡片陰影樣式（四周均勻，X/Y 偏移皆為 0）────────────────────────────
const CARD_SHADOW = {
  style: { boxShadow: '0 0 20px rgba(0, 0, 0, 0.08)' } as React.CSSProperties,
  className: 'border-border bg-card overflow-hidden transition-[box-shadow] duration-300 hover:[box-shadow:0_0_30px_rgba(0,0,0,0.14)]',
};

// ── 圖示容器陰影（四周均勻小光暈）──────────────────────────────────────────
const ICON_SHADOW = {
  style: { boxShadow: '0 0 10px rgba(0, 0, 0, 0.08)' } as React.CSSProperties,
};

// ── 主元件 ───────────────────────────────────────────────────────────────────
export default function ChartOverview() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* ── Header ──────────────────────────────────────────────────────── */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Planner 圖表分析全攻略
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                不用翻遍每一張卡片，圖表（Charts）檢視讓你一眼看出專案瓶頸、找到過勞成員、
                識別優先度失衡，讓團隊討論從「感覺」升級為「數據驅動」。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* ── Main Content ────────────────────────────────────────────────── */}
        <div className="container py-20">
          <div className="max-w-5xl mx-auto">

            {/* ── Step 1：如何開啟圖表檢視 ──────────────────────────────── */}
            <MotionContainer direction="up">
              <section className="mb-20">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Step 1．如何開啟圖表檢視
                </h2>
                <p className="text-muted-foreground mb-8">
                  圖表功能內建於 Planner 看板中，所有 Microsoft 365 用戶均可使用，無需任何外掛。
                </p>
 
                <HoverScale>
                  <Card className={CARD_SHADOW.className} style={CARD_SHADOW.style}>
                    <div className="p-6">
                      <div className="flex items-center gap-4 mb-6">
                        <div className="p-3 bg-background rounded-xl" style={ICON_SHADOW.style}>
                          <MousePointerClick className="w-6 h-6 text-blue-500" />
                        </div>
                        <h3 className="text-xl font-semibold text-card-foreground">
                          點擊「圖表」頁籤
                        </h3>
                      </div>
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-4">
                          {[
                            {
                              step: '開啟 Microsoft Planner',
                              detail: '從 Microsoft 365 應用程式列或 Teams 的「Planner」分頁進入目標專案。',
                            },
                            {
                              step: '找到頁籤列',
                              detail: '在看板上方，你會看到「方格」、「面板」、「排程」、「圖表」等頁籤。',
                            },
                            {
                              step: '點擊「圖表」',
                              detail: '頁面將自動載入四種圖表視圖，從「狀態」開始由上往下排列。',
                            },
                          ].map((item, idx) => (
                            <div key={idx} className="flex items-start gap-3 text-sm">
                              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-primary/10 text-primary text-xs font-bold shrink-0 mt-0.5">
                                {idx + 1}
                              </span>
                              <div>
                                <p className="font-semibold text-foreground">{item.step}</p>
                                <p className="text-muted-foreground mt-0.5">{item.detail}</p>
                              </div>
                            </div>
                          ))}
 
                          <div className="flex items-start gap-2 bg-primary/5 border-l-4 border-primary p-3.5 rounded-r-xl text-sm text-muted-foreground mt-2">
                            <Lightbulb className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                            <span>
                              <strong className="text-foreground">提示：</strong>
                              若在 Teams 中使用，需確認已將 Planner 標籤頁加入到您的頻道中。
                            </span>
                          </div>
                        </div>
 
                        <div className="flex flex-col gap-2">
                          <img
                            src={ChartOverview3}
                            alt="狀態、貯體和優先順序圖表示意"
                            className="w-full h-full object-contain"
                          />
                          <p className="text-xs text-muted-foreground text-center">
                            ↑ Planner 頁籤列，請標示「圖表」頁籤位置
                          </p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </HoverScale>
              </section>
            </MotionContainer>

            {/* ── Step 2：四大核心圖表 ──────────────────────────────────── */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Step 2．四大核心圖表解析
                </h2>
                <p className="text-muted-foreground mb-8">
                  每種圖表回答不同的管理問題，搭配使用效果最佳。
                </p>
              </MotionContainer>

              <MotionContainer direction="up" delay={0.1}>
                <Card className={CARD_SHADOW.className} style={CARD_SHADOW.style}>
                  <div className="p-8 flex flex-col gap-10">

                    {/* ── 四個圖表說明列表 ── */}
                    <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
                      {CHART_DATA.map((chart, idx) => (
                        <div key={idx} className="flex flex-col gap-3">
                          {/* 圖示 + 標題 */}
                          <div className="flex items-center gap-3">
                            <div className="p-2.5 bg-background rounded-xl shrink-0" style={ICON_SHADOW.style}>
                              {chart.icon}
                            </div>
                            <div>
                              <h3 className="text-base font-semibold text-card-foreground">{chart.title}</h3>
                              <p className="text-xs text-muted-foreground mt-0.5">{chart.subtitle}</p>
                            </div>
                          </div>

                          {/* 說明 */}
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {chart.description}
                          </p>

                          {/* 洞察要點 */}
                          <div className="space-y-1.5">
                            {chart.insights.map((insight, iIdx) => (
                              <div key={iIdx} className="flex items-start gap-2 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-3.5 h-3.5 text-primary mt-0.5 shrink-0" />
                                <span>{insight}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* ── 分隔線 ── */}
                    <div className="border-t border-border" />

                    {/* ── 兩張說明截圖 ── */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <div className="h-64 rounded-xl overflow-hidden bg-black">
                          <img
                            src={ChartOverview1}
                            alt="狀態、貯體和優先順序圖表示意"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                          ↑ 狀態、貯體和優先順序圖表示意
                        </p>
                      </div>
                      <div className="flex flex-col gap-2">
                        <div className="h-64 rounded-xl overflow-hidden bg-black">
                          <img
                            src={ChartOverview2}
                            alt="成員圖表示意"
                            className="w-full h-full object-contain"
                          />
                        </div>
                        <p className="text-xs text-muted-foreground text-center">
                          ↑ 成員圖表示意
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </MotionContainer>
            </section>

            {/* ── Step 3：實戰應用情境 ──────────────────────────────────── */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-2">
                  Step 3．實戰應用情境
                </h2>
                <p className="text-muted-foreground mb-8">
                  以下是三個在實際工作場景中活用圖表功能的具體建議。
                </p>
              </MotionContainer>

              <div className="grid md:grid-cols-2 gap-8">
                {SCENARIOS.map((scenario, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <HoverScale>
                      <Card className={`${CARD_SHADOW.className} h-full`} style={CARD_SHADOW.style}>
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-6">
                            <div className="p-3 bg-background rounded-xl" style={ICON_SHADOW.style}>
                              {scenario.icon}
                            </div>
                            <h3 className="text-xl font-semibold text-card-foreground">{scenario.title}</h3>
                          </div>
                          <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                            {scenario.content}
                          </p>
                          <div className="space-y-3">
                            <p className="text-xs font-bold uppercase tracking-wider text-primary">
                              建議操作步驟：
                            </p>
                            {scenario.steps.map((step, sIdx) => (
                              <div key={sIdx} className="flex items-start gap-3 text-sm text-muted-foreground">
                                <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                                <span>{step}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </Card>
                    </HoverScale>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* ── Tips Section ──────────────────────────────────────────── */}
            <MotionContainer direction="up">
              <section className="mb-20 bg-primary/5 border-l-4 border-primary p-8 rounded-r-xl">
                <div className="flex gap-4">
                  <Lightbulb className="w-8 h-8 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-bold text-lg text-foreground mb-4">圖表使用最佳實踐</p>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {[
                        '每次站立會議前先截圖狀態圖表作為開場',
                        '每週定期檢視成員圖表，避免過勞累積',
                        '使用優先順序圖表作為向上溝通的數據依據',
                        '月底匯出圖表截圖，納入專案回顧文件',
                        '貯體命名保持一致，確保圖表比較有意義',
                        '搭配任務截止日期設定，讓延遲數字更準確',
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

            {/* ── Next Steps CTA ────────────────────────────────────────── */}
            <MotionContainer direction="up">
              <section className="bg-primary text-primary-foreground p-12 rounded-3xl text-center">
                <BarChart2 className="w-12 h-12 text-primary-foreground mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">準備好用數據驅動你的團隊了嗎？</h3>
                <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
                  現在就打開你的 Planner 專案，切換到「圖表」頁籤，
                  試著找出一個你之前沒注意到的工作瓶頸。
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