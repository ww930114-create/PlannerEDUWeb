import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Zap } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

const HERO_BG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446932732/47KbkvpLmL9hw6oikty2zt/hero-background-f72QBXASMByD6dkQHLkYv3.webp';
const LEARNING_PATH_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446932732/47KbkvpLmL9hw6oikty2zt/learning-path-XqbuTSKxSYNunr7DGZ28Xu.webp';
const M365_ECOSYSTEM_IMG = 'https://d2xsxph8kpxj0f.cloudfront.net/310519663446932732/47KbkvpLmL9hw6oikty2zt/m365-ecosystem-8PZToEcywNW7afX9YcAkhW.webp';

export default function Home() {
  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section
          className="relative min-h-[600px] flex items-center justify-center text-center py-20 overflow-hidden"
          style={{
            backgroundImage: `url(${HERO_BG})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-white/10"></div>
          <div className="relative z-10 container max-w-3xl px-4">
            <MotionContainer direction="up" delay={0.1}>
              <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
                讓團隊協作變得簡單、直觀且高效
              </h1>
            </MotionContainer>
            <MotionContainer direction="up" delay={0.2}>
              <p className="text-xl text-muted-foreground mb-8">
                專為企業新手設計的 Microsoft Planner 完整指南。從個人任務到跨部門專案，一站式掌握所有技巧。
              </p>
            </MotionContainer>
            <MotionContainer direction="up" delay={0.3}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/basics/what-is-planner">
                  <HoverScale>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white w-full sm:w-auto">
                      立即開始
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </HoverScale>
                </Link>
                <Link href="/tutorials/operation-guide">
                  <HoverScale>
                    <Button size="lg" variant="outline" className="w-full sm:w-auto">
                      查看操作指南
                    </Button>
                  </HoverScale>
                </Link>
              </div>
            </MotionContainer>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <MotionContainer direction="up">
              <h2 className="text-3xl font-bold text-center mb-12">
                為什麼選擇 Planner？
              </h2>
            </MotionContainer>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: <Users className="w-6 h-6 text-primary" />, title: '團隊協作', desc: '輕鬆與團隊成員分享任務、評論進度、實時協作' },
                { icon: <Zap className="w-6 h-6 text-primary" />, title: '高效追蹤', desc: '使用圖表和視圖快速了解項目進度和瓶頸' },
                { icon: <BookOpen className="w-6 h-6 text-primary" />, title: '易於上手', desc: '直觀的介面設計，無需複雜的培訓即可開始使用' }
              ].map((feature, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <HoverScale>
                    <Card className="border-border hover:shadow-lg transition h-full">
                      <CardHeader>
                        <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                          {feature.icon}
                        </div>
                        <CardTitle>{feature.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{feature.desc}</p>
                      </CardContent>
                    </Card>
                  </HoverScale>
                </MotionContainer>
              ))}
            </div>
          </div>
        </section>

        {/* Learning Path Section */}
        <section className="py-20">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <MotionContainer direction="left">
                <h2 className="text-3xl font-bold mb-6">
                  三階段學習路徑
                </h2>
                <div className="space-y-6">
                  {[
                    { step: 1, stage: '第一階段', title: '理解基礎', desc: 'Planner 是什麼、適合誰、與其他工具的差異', link: '/basics/what-is-planner', linkText: '前往入門指南' },
                    { step: 2, stage: '第二階段', title: '操作實踐', desc: '建立計畫、認識網頁版與 Teams 版介面', link: '/tutorials/operation-guide', linkText: '前往操作指南' },
                    { step: 3, stage: '第三階段', title: '進階管理', desc: '任務分配、進度追蹤、實務情境應用', link: '/tutorials/task-management', linkText: '前往任務管理' }
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4">
                      <div className="flex-shrink-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-primary text-white font-bold">
                          {item.step}
                        </div>
                      </div>
                      <div className="flex-1">
                        <p className="text-sm font-semibold text-primary">{item.stage}</p>
                        <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">{item.desc}</p>
                        <Link href={item.link} className="text-xs text-primary hover:underline mt-2 inline-block font-semibold">
                          {item.linkText} →
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </MotionContainer>
              <MotionContainer direction="right">
                <img src={LEARNING_PATH_IMG} alt="Learning Path" className="w-full rounded-lg shadow-lg" />
              </MotionContainer>
            </div>
          </div>
        </section>

        {/* M365 Ecosystem Section */}
        <section className="py-20 bg-secondary/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <MotionContainer direction="left">
                <img src={M365_ECOSYSTEM_IMG} alt="M365 Ecosystem" className="w-full rounded-lg shadow-lg" />
              </MotionContainer>
              <MotionContainer direction="right">
                <h2 className="text-3xl font-bold mb-6">
                  與 M365 完美整合
                </h2>
                <p className="text-muted-foreground mb-6">
                  Planner 是 Microsoft 365 生態系的核心。無論您使用 Teams、Outlook、To Do 還是 Lists，Planner 都能無縫協作。
                </p>
                <ul className="space-y-3">
                  {[
                    '在 Teams 頻道中直接使用 Planner',
                    '將 Outlook 郵件轉換為任務',
                    '與 To Do 同步個人任務',
                    '整合 Lists 進行資料管理'
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </MotionContainer>
            </div>
          </div>
        </section>

        {/* FAQ Preview Section */}
        <section className="py-20">
          <div className="container">
            <MotionContainer direction="up">
              <h2 className="text-3xl font-bold text-center mb-12">
                常見問題快速回答
              </h2>
            </MotionContainer>
            <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {[
                { q: 'Planner 跟 To Do 有什麼差別？', a: 'To Do 是個人工具，Planner 是團隊工具。Planner 更適合團隊協作。' },
                { q: '如何在 Teams 中使用 Planner？', a: '在 Teams 頻道中點擊「+」，搜尋 Planner，選擇計畫即可。' },
                { q: 'Planner 能取代 Excel 嗎？', a: '對於任務追蹤可以，但複雜計算還是需要 Excel。' },
                { q: '如何刪除計畫？', a: '進入計畫設定，點擊「刪除此計畫」。請注意無法復原。' }
              ].map((faq, idx) => (
                <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                  <Card className="border-border">
                    <CardHeader>
                      <CardTitle className="text-base">{faq.q}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground">{faq.a}</p>
                    </CardContent>
                  </Card>
                </MotionContainer>
              ))}
            </div>
            <div className="text-center mt-8">
              <Link href="/support/faq">
                <HoverScale>
                  <Button variant="outline">
                    查看所有 FAQ
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </HoverScale>
              </Link>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary text-white overflow-hidden">
          <div className="container text-center relative">
            <MotionContainer direction="up">
              <h2 className="text-3xl font-bold mb-6">
                準備好開始了嗎？
              </h2>
              <p className="text-lg mb-8 text-white/90">
                只需 15 分鐘，您就能掌握 Planner 的基礎概念。
              </p>
              <Link href="/basics/what-is-planner">
                <HoverScale>
                  <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                    立即開始
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </HoverScale>
              </Link>
            </MotionContainer>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
}
