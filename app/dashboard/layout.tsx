import Link from 'next/link';
import { LayoutDashboard, Sparkles, BarChart3, Calendar, CheckCircle2, Settings, Bell } from 'lucide-react';

const navItems = [
  { href: '/dashboard', label: 'Overview', icon: LayoutDashboard },
  { href: '/dashboard/content-generator', label: 'AI Ideas', icon: Sparkles },
  { href: '/dashboard/analytics', label: 'Insights', icon: BarChart3 },
  { href: '/dashboard/calendar', label: 'Schedule', icon: Calendar },
  { href: '/dashboard/approvals', label: 'Approvals', icon: CheckCircle2 },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 h-full w-64 bg-white border-r border-slate-200 z-40">
        <div className="p-6 border-b border-slate-200">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-bg flex items-center justify-center text-white font-bold">
              K
            </div>
            <div>
              <div className="font-bold text-lg gradient-text">KANZA AI</div>
              <div className="text-[11px] text-slate-500 leading-tight">Content Manager</div>
            </div>
          </Link>
        </div>

        <nav className="p-4 space-y-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-slate-700 hover:bg-slate-100 text-sm font-medium transition"
              >
                <Icon className="w-4 h-4" />
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-slate-200">
          <div className="flex items-center gap-3 p-2">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center text-white font-semibold text-sm">
              A
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-medium truncate">Ameer Albahouth</div>
              <div className="text-xs text-slate-500 truncate">KANZA Brand</div>
            </div>
            <Settings className="w-4 h-4 text-slate-400" />
          </div>
        </div>
      </aside>

      {/* Main */}
      <div className="ml-64">
        <header className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b border-slate-200 px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="text-sm text-slate-500">Dashboard</div>
            </div>
            <div className="flex items-center gap-3">
              <button className="relative w-9 h-9 rounded-lg bg-slate-100 flex items-center justify-center hover:bg-slate-200">
                <Bell className="w-4 h-4 text-slate-600" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-500 rounded-full"></span>
              </button>
              <div className="px-3 py-1.5 rounded-lg bg-primary-50 text-primary-700 text-xs font-medium">
                Demo Mode
              </div>
            </div>
          </div>
        </header>

        <main className="p-8">{children}</main>
      </div>
    </div>
  );
}
