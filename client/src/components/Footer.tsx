import { Link } from 'wouter';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="container grid grid-cols-1 md:grid-cols-4 gap-12">
        {/* Brand */}
        <div className="md:col-span-1">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl mb-4">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white">
              P
            </div>
            <span>Planner 實戰學院</span>
          </Link>
          <p className="text-sm text-slate-400 leading-relaxed">
            致力於提供最實用的 Microsoft Planner 教學，幫助個人與團隊實現高效協作。
          </p>
        </div>

        {/* Learning */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-200">核心資源</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/basics/what-is-planner" className="hover:text-primary transition">
                Planner 是什麼
              </Link>
            </li>
            <li>
              <Link href="/tutorials/operation-guide" className="hover:text-primary transition">
                操作教學
              </Link>
            </li>
            <li>
              <Link href="/tutorials/task-management" className="hover:text-primary transition">
                任務管理
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-200">支援服務</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <Link href="/support/faq" className="hover:text-primary transition">
                常見問題
              </Link>
            </li>
            <li>
              <Link href="/support/contact" className="hover:text-primary transition">
                聯絡我們
              </Link>
            </li>
            <li>
              <Link href="/scenarios/use-cases" className="hover:text-primary transition">
                應用情境
              </Link>
            </li>
          </ul>
        </div>

        {/* Official Links */}
        <div>
          <h4 className="font-semibold mb-4 text-slate-200">官方連結</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>
              <a href="https://tasks.office.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                Planner 網頁版
              </a>
            </li>
            <li>
              <a href="https://support.microsoft.com/planner" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition">
                Microsoft 官方支援
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Planner 實戰學院. All rights reserved.</p>
      </div>
    </footer>
  );
}
