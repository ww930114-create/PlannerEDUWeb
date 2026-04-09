import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Button } from '@/components/ui/button';
import { Menu, X, Moon, Sun } from 'lucide-react';
import SearchBox from './SearchBox';
import CviLuxLogo from '../assets/CivLux-Logo.png'
import { useTheme } from "../contexts/ThemeContext";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  // 頁面跳轉時滾動到頂部
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 font-bold text-lg">
          {/* 👇 注意看 src 裡面沒有引號！因為它現在是一個 JavaScript 變數 */}
          <img
            src={CviLuxLogo}
            alt="CviLux Logo"
            className="w-16 h-16 object-contain"
          />
          <span className="text-foreground">Planner 實戰學院</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {/* 入門指南 */}
          <Link href="/basics/what-is-planner" className="text-foreground hover:text-primary transition font-medium">
            入門指南
          </Link>

          {/* 操作教學 */}
          <Link href="/tutorials/operation-guide" className="text-foreground hover:text-primary transition font-medium">
            操作教學
          </Link>

          {/* 任務管理 */}
          <Link href="/tutorials/task-management" className="text-foreground hover:text-primary transition font-medium">
            任務管理
          </Link>

          {/* 圖表分析 */}
          <Link href="/dashboard/chart-overview" className="text-foreground hover:text-primary transition font-medium">
            圖表分析
          </Link>

          {/* 應用情境 */}
          <Link href="/scenarios/use-cases" className="text-foreground hover:text-primary transition font-medium">
            應用情境
          </Link>

          {/* 常見問題 */}
          <Link href="/support/faq" className="text-foreground hover:text-primary transition font-medium">
            常見問題
          </Link>

        </div>

        {/* Right Actions (電腦版區塊：大螢幕才顯示) */}
        <div className="hidden md:flex items-center gap-4">
          <SearchBox />
          
          {/* 深淺色切換按鈕 (電腦版) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Menu Button (手機版區塊：小螢幕才顯示) */}
        <div className="md:hidden flex items-center gap-2 sm:gap-4">
          <SearchBox />
          
          {/* 深淺色切換按鈕 (手機版) */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="text-foreground"
          >
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </Button>

          {/* 漢堡選單按鈕 */}
          <button
            className="p-2 text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-4">
            {/* 入門指南 */}
            <Link href="/basics/what-is-planner" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>
              入門指南
            </Link>

            {/* 操作教學 */}
            <Link href="/tutorials/operation-guide" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>
              操作教學
            </Link>

            {/* 圖表分析 */}
            <Link href="/dashboard/chart-overview" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>
              圖表分析
            </Link>

            {/* 任務管理 */}
            <Link href="/tutorials/task-management" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>
              任務管理
            </Link>

            {/* 應用情境 */}
            <Link href="/scenarios/use-cases" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>
              應用情境
            </Link>

            {/* 常見問題 */}
            <Link href="/support/faq" className="block font-semibold text-foreground" onClick={() => setIsOpen(false)}>
              常見問題
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
