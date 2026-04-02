import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, MessageSquare, HelpCircle, ArrowRight, Globe } from 'lucide-react';
import Footer from '@/components/Footer';
import { MotionContainer, PageTransition, HoverScale } from '@/components/MotionContainer';

export default function Contact() {
  const contactMethods = [
    {
      icon: <Mail className="w-6 h-6 text-primary" />,
      title: "電子郵件",
      desc: "有任何問題或建議？直接發送郵件給我們。",
      action: "support@example.com",
      link: "mailto:support@example.com"
    },
    {
      icon: <MessageSquare className="w-6 h-6 text-primary" />,
      title: "Teams 頻道",
      desc: "加入我們的 Teams 頻道，與其他使用者交流心得。",
      action: "加入頻道",
      link: "#"
    },
    {
      icon: <HelpCircle className="w-6 h-6 text-primary" />,
      title: "常見問題",
      desc: "查看我們的常見問題部分，快速找到解答。",
      action: "前往 FAQ",
      link: "/support/faq"
    }
  ];

  return (
    <PageTransition>
      <div className="min-h-screen bg-white">
        {/* Header */}
        <div className="bg-primary/5 border-b border-border py-16">
          <div className="container">
            <MotionContainer direction="up">
              <h1 className="text-4xl font-bold text-foreground mb-4">聯絡與支援</h1>
              <p className="text-lg text-muted-foreground max-w-2xl">
                如果您有任何問題、建議或反饋，歡迎與我們聯絡。我們致力於提供最優質的 Planner 教學資源。
              </p>
            </MotionContainer>
          </div>
        </div>

        {/* Main Content */}
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            {/* Contact Methods */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-10">聯絡方式</h2>
              </MotionContainer>
              <div className="grid md:grid-cols-3 gap-8">
                {contactMethods.map((method, idx) => (
                  <MotionContainer key={idx} direction="up" delay={idx * 0.1}>
                    <HoverScale>
                      <Card className="border-border h-full hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                            {method.icon}
                          </div>
                          <CardTitle className="text-xl">{method.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
                            {method.desc}
                          </p>
                          {method.link.startsWith('/') ? (
                            <Link href={method.link}>
                              <Button variant="outline" size="sm" className="w-full">
                                {method.action}
                              </Button>
                            </Link>
                          ) : (
                            <a href={method.link}>
                              <Button variant="outline" size="sm" className="w-full">
                                {method.action}
                              </Button>
                            </a>
                          )}
                        </CardContent>
                      </Card>
                    </HoverScale>
                  </MotionContainer>
                ))}
              </div>
            </section>

            {/* Official Resources */}
            <section className="mb-20">
              <MotionContainer direction="up">
                <h2 className="text-2xl font-bold text-foreground mb-10">官方資源</h2>
              </MotionContainer>
              <div className="grid md:grid-cols-2 gap-8">
                <MotionContainer direction="left">
                  <Card className="border-border h-full">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <Globe className="w-5 h-5 text-primary" /> Microsoft Planner 官方文件
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-6">
                        查看 Microsoft 官方的 Planner 文件、最新更新日誌與技術支援資源。
                      </p>
                      <a
                        href="https://support.microsoft.com/office/planner"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm font-semibold inline-flex items-center gap-1"
                      >
                        前往官方文件 <ArrowRight className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </MotionContainer>
                <MotionContainer direction="right">
                  <Card className="border-border h-full">
                    <CardHeader>
                      <CardTitle className="text-lg flex items-center gap-2">
                        <MessageSquare className="w-5 h-5 text-primary" /> Microsoft 365 支援中心
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-sm text-muted-foreground mb-6">
                        如果您遇到帳號登入或訂閱相關問題，請聯絡 Microsoft 官方支援團隊。
                      </p>
                      <a
                        href="https://support.microsoft.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary hover:underline text-sm font-semibold inline-flex items-center gap-1"
                      >
                        前往支援中心 <ArrowRight className="w-4 h-4" />
                      </a>
                    </CardContent>
                  </Card>
                </MotionContainer>
              </div>
            </section>

            {/* CTA Section */}
            <MotionContainer direction="up">
              <section className="bg-slate-900 text-white rounded-3xl p-12 text-center">
                <h3 className="text-2xl font-bold mb-4">準備好開始學習了嗎？</h3>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto">
                  回到首頁，開始您的 Microsoft Planner 學習之旅。
                </p>
                <Link href="/">
                  <HoverScale>
                    <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10">
                      回到首頁
                      <ArrowRight className="ml-2 w-4 h-4" />
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
