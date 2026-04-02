import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import SearchBox from "./SearchBox";
import { motion } from "framer-motion";

export default function Navigation() {
  const [location] = useLocation();

  const navItems = [
    { href: "/", label: "首頁" },
    { href: "/basics/what-is-planner", label: "基礎入門" },
    { href: "/tutorials/operation-guide", label: "操作教學" },
    { href: "/tutorials/task-management", label: "任務管理" },
    { href: "/scenarios/use-cases", label: "應用情境" },
    { href: "/support/faq", label: "常見問題" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-white/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-8">
          <Link href="/">
            <motion.a 
              className="flex items-center gap-2 cursor-pointer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/60">
                Planner Guide
              </span>
            </motion.a>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <motion.a
                  className={cn(
                    "px-4 py-2 text-sm font-medium rounded-md transition-colors cursor-pointer relative",
                    location === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                  )}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  {location === item.href && (
                    <motion.div
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary mx-4"
                      initial={false}
                    />
                  )}
                </motion.a>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4">
          <SearchBox />
          <Link href="/support/contact">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button size="sm" className="hidden sm:flex">
                聯絡支援
              </Button>
            </motion.div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
