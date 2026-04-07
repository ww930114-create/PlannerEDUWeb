import { ReactNode } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';

// 定義這個元件會接收一個叫 children 的東西 (就是中間的肉)
interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground transition-colors duration-300 flex flex-col">
      
      {/* 🍔 上層麵包：共用的頂部導覽列 */}
      <Navigation />

      {/* 🥩 中間的肉：這裡就是用來塞每一頁「不同內容」的洞口 */}
      {/* flex-1 會自動把中間撐開，把 Footer 往下擠 */}
      <main className="flex-1">
        {children}
      </main>

      {/* 🍔 下層麵包：共用的底部版權宣告 */}
      <Footer />
      
    </div>
  );
}