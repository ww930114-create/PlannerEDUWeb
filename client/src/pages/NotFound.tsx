import { Link } from 'wouter';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="container text-center max-w-md">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-2xl font-semibold text-foreground mb-4">頁面未找到</p>
        <p className="text-lg text-muted-foreground mb-8">
          抱歉，您要找的頁面不存在或已被移除。
        </p>
        <Link href="/">
          <Button className="bg-primary hover:bg-primary/90 text-white">
            <ArrowLeft className="mr-2 w-4 h-4" />
            返回首頁
          </Button>
        </Link>
      </div>
    </div>
  );
}
