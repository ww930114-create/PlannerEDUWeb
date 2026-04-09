import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, Lightbulb, Monitor, Layout, Users } from 'lucide-react';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';
import operationBuildImg from '@/assets/operation.build.png';
import operationBuildImg2 from '@/assets/operation.build2.png';
import operationBuildImg3 from '@/assets/operation.build3.png';

export default function OperationGuide() {
  return (
    <PageTransition>
      {/* 🛑 致命錯誤修正：bg-white 換成 bg-background，並加上 text-foreground */}
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">

        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-12">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">操作指南：網頁版 vs Teams 版</h1>
              <p className="text-lg text-muted-foreground">
                本章節將完整說明 Planner 在不同平台上的使用方式。您可以根據您的工作習慣選擇最適合的平台。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-12">
          <div className="max-w-4xl mx-auto">

            {/* Comparison Intro */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-6">選擇您的工作平台</h2>
                <p className="text-muted-foreground mb-8">
                  Microsoft Planner 提供網頁版與 Teams 版，兩者的核心功能完全相同，主要差別在於存取方式與協作深度。
                </p>
              </MotionContainer>

              <Tabs defaultValue="web" className="w-full">
                <MotionContainer direction="up" delay={0.1}>
                  <TabsList className="grid w-full grid-cols-2 mb-8 bg-muted text-muted-foreground">
                    <TabsTrigger value="web" className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      <Monitor className="w-4 h-4" /> 網頁版 (Web)
                    </TabsTrigger>
                    <TabsTrigger value="teams" className="flex items-center gap-2 data-[state=active]:bg-background data-[state=active]:text-foreground">
                      <Users className="w-4 h-4" /> Teams 版 (Teams Integration)
                    </TabsTrigger>
                  </TabsList>
                </MotionContainer>

                {/* Web Content */}
                <TabsContent value="web" className="space-y-8">
                  <MotionContainer direction="up">
                    <div className="bg-muted/50 rounded-xl p-8 border border-border">
                      <h3 className="text-xl font-bold mb-4 text-foreground">如何開始？</h3>
                      <p className="text-muted-foreground mb-6">
                        直接訪問 <a href="https://tasks.office.com" className="text-primary hover:underline font-semibold" target="_blank" rel="noopener noreferrer">tasks.office.com</a>。這是最快速、最直接的使用方式。
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <HoverScale>
                          {/* 🛑 加上 bg-card */}
                          <Card className="border-border bg-card h-full">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2 text-card-foreground">
                                <Layout className="w-4 h-4 text-primary" /> 介面特色
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              <ul className="space-y-2">
                                <li>• <strong>全螢幕檢視：</strong> 擁有最大的操作空間，適合管理大型計畫。</li>
                                <li>• <strong>獨立視窗：</strong> 不會被其他 Teams 訊息干擾，專注於任務。</li>
                                <li>• <strong>效能較佳：</strong> 在處理大量任務卡片時通常更流暢。</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </HoverScale>
                        <HoverScale>
                          <Card className="border-border bg-card h-full">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2 text-card-foreground">
                                <Lightbulb className="w-4 h-4 text-primary" /> 適用情境
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              <ul className="space-y-2">
                                <li>• 需要長時間專注於計畫規劃時。</li>
                                <li>• 需要同時開啟多個計畫進行對比時。</li>
                                <li>• 非 Teams 使用者或習慣網頁操作的人。</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </HoverScale>
                      </div>
                    </div>
                  </MotionContainer>
                </TabsContent>

                {/* Teams Content */}
                <TabsContent value="teams" className="space-y-8">
                  <MotionContainer direction="up">
                    <div className="bg-primary/5 rounded-xl p-8 border border-primary/20">
                      <h3 className="text-xl font-bold mb-4 text-foreground">如何開始？</h3>
                      <p className="text-muted-foreground mb-6">
                        在 Teams 左側導覽列搜尋「Planner」並釘選，或在特定頻道的上方點擊「+」新增 Planner 標籤。
                      </p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <HoverScale>
                          <Card className="border-border bg-card h-full">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2 text-card-foreground">
                                <Users className="w-4 h-4 text-primary" /> 協作優勢
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              <ul className="space-y-2">
                                <li>• <strong>溝通與執行一體化：</strong> 邊聊天邊更新任務，無需切換應用。</li>
                                <li>• <strong>實時通知：</strong> 任務變更會直接顯示在 Teams 活動中。</li>
                                <li>• <strong>上下文保留：</strong> 任務與相關對話緊密結合。</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </HoverScale>
                        <HoverScale>
                          <Card className="border-border bg-card h-full">
                            <CardHeader>
                              <CardTitle className="text-base flex items-center gap-2 text-card-foreground">
                                <Lightbulb className="w-4 h-4 text-primary" /> 適用情境
                              </CardTitle>
                            </CardHeader>
                            <CardContent className="text-sm text-muted-foreground">
                              <ul className="space-y-2">
                                <li>• 團隊日常溝通頻繁，需要快速指派任務時。</li>
                                <li>• 希望在同一個介面處理所有工作時。</li>
                                <li>• 需要在會議中即時追蹤進度時。</li>
                              </ul>
                            </CardContent>
                          </Card>
                        </HoverScale>
                      </div>
                    </div>
                  </MotionContainer>
                </TabsContent>
              </Tabs>
            </section>

            {/* Unified Core Features */}
            <section className="mb-16">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-6">共通核心功能：建立與管理</h2>
                <p className="text-muted-foreground mb-8">
                  無論您在哪個平台，建立計畫與管理任務的邏輯都是一致的。
                </p>
              </MotionContainer>

              <div className="space-y-12">
                {/* Step 1: Create */}
                <MotionContainer direction="up">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">1. 建立計畫</h3>
                    {/* 🛑 這裡的 bg-white 被抓到了，改成 bg-card */}
                    <div className="bg-card border border-border rounded-lg overflow-hidden">
                      <div className="p-6 border-b border-border bg-muted/50">
                        <p className="text-sm text-muted-foreground">
                          點擊「+ 新計畫」，輸入名稱並選擇隱私等級（私人或公開）。在 Teams 中，您可以直接將計畫與特定頻道關聯。
                        </p>
                        {/* 🛑 用 grid 切成 3 等份，加上 md: 確保手機版不會擠成一團 */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                          {/* 左邊大圖：佔據 2 個網格 (col-span-2) */}
                          <div className="md:col-span-2 p-6 bg-muted/10 flex items-center justify-center border border-border rounded-lg overflow-hidden">
                            <img
                              src={operationBuildImg}
                              alt="建立計畫操作示意圖一"
                              // 加上 max-h-[400px] 和 object-contain 確保圖片不會無限放大，且能保持等高比例
                              className="w-full h-auto max-h-[400px] object-contain rounded-md shadow-sm border border-border hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>

                          {/* 右邊小圖：佔據 1 個網格 (col-span-1) */}
                          <div className="md:col-span-1 p-6 bg-muted/10 flex items-center justify-center border border-border rounded-lg overflow-hidden">
                            <img
                              src={operationBuildImg2}
                              alt="建立計畫操作示意圖二"
                              className="w-full h-auto max-h-[400px] object-contain rounded-md shadow-sm border border-border hover:scale-[1.02] transition-transform duration-300"
                            />
                          </div>

                        </div>
                      </div>

                    </div>
                  </div>
                </MotionContainer>

                {/* Step 2: Structure */}
                <MotionContainer direction="up">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">2. 設定結構 (分組與標籤)</h3>
                    <p className="text-muted-foreground mb-6">
                      利用「分組」來定義工作分類，利用「標籤」來進行分組中工作多重分類。
                    </p>
                    <div className="grid md:grid-cols-2 gap-6">
                      <HoverScale>
                        {/* 🛑 加上 bg-card */}
                        <div className="p-6 border border-border bg-card rounded-lg h-full">
                          <h4 className="font-bold mb-2 text-card-foreground">分組 (Buckets)</h4>
                          <p className="text-sm text-muted-foreground">
                            點擊「+ 新增分組」即可建立新的欄位，方便您將任務分類。
                          </p>
                        </div>
                      </HoverScale>
                      <HoverScale>
                        <div className="p-6 border border-border bg-card rounded-lg h-full">
                          <h4 className="font-bold mb-2 text-card-foreground">標籤 (Labels)</h4>
                          <p className="text-sm text-muted-foreground">
                            提供 25 種顏色，讓您為任務貼上多重分類標籤。
                          </p>
                        </div>
                      </HoverScale>
                    </div>
                  </div>
                </MotionContainer>

                {/* Step 3: Tasks */}
                <MotionContainer direction="up">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-foreground">3. 任務管理</h3>
                    <p className="text-muted-foreground mb-6">
                      點擊任何任務卡片，您可以設定到期日、指派人員、新增附件、撰寫檢查清單，並在下方進行評論。
                    </p>
                    <div className="p-6 bg-muted/10 flex justify-center border border-border rounded-lg overflow-hidden">
                      <img
                        src={operationBuildImg3}
                        alt="建立計畫操作示意圖三"
                        className="max-w-lg h-auto rounded-md shadow-sm border border-border hover:scale-[1.02] transition-transform duration-300"
                      />
                    </div>
                    <div className="bg-primary/10 border-l-4 border-primary p-6 rounded">
                      <p className="text-sm font-semibold mb-2 text-foreground">💡 專家建議</p>
                      <p className="text-sm text-muted-foreground">
                        善用「My Tasks（我的任務）」區塊，它可以跨計畫匯總所有分配給您的任務，讓您對自己的工作量一目了然。
                      </p>
                    </div>
                  </div>
                </MotionContainer>
              </div>
            </section>

            {/* Next Steps CTA */}
            <MotionContainer direction="up">
              <section className="bg-muted/50 p-8 rounded-lg text-center border border-border">
                <h3 className="text-xl font-bold text-foreground mb-4">掌握了基礎，來看看如何具體管理任務吧！</h3>
                <p className="text-muted-foreground mb-6">
                  接下來，我們將深入探討任務管理的進階技巧與最佳實踐。
                </p>
                <Link href="/tutorials/task-management">
                  <HoverScale>
                    {/* 🛑 text-white 換成 text-primary-foreground */}
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                      前往「任務管理教學」
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
              </section>
            </MotionContainer>
          </div>
        </div>
      </div>
    </PageTransition>
  );
}