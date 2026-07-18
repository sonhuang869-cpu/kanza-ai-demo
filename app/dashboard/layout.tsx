import Link from 'next/link';
import { Logo, LogoMark } from '@/components/Logo';
import { LayoutDashboard, Sparkles, BarChart3, Calendar, CheckCircle2, Settings, Bell, Search, Plus } from 'lucide-react';

const navSections = [
  {
    label: 'Editorial',
    items: [
      { href: '/dashboard', label: 'Front Page', num: '01', icon: LayoutDashboard },
      { href: '/dashboard/content-generator', label: 'The Draft Board', num: '02', icon: Sparkles },
    ],
  },
  {
    label: 'Intelligence',
    items: [
      { href: '/dashboard/analytics', label: 'The Signal Room', num: '03', icon: BarChart3 },
    ],
  },
  {
    label: 'Publishing',
    items: [
      { href: '/dashboard/calendar', label: 'The Publishing Desk', num: '04', icon: Calendar },
      { href: '/dashboard/approvals', label: "Editor's Desk", num: '05', icon: CheckCircle2 },
    ],
  },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-ivory text-ink flex">
      {/* Sidebar - Editorial style */}
      <aside className="fixed left-0 top-0 h-full w-72 bg-ivory border-r border-ink/10 z-40 flex flex-col">
        {/* Logo section */}
        <div className="p-6 border-b border-ink/10">
          <Link href="/" className="block">
            <Logo size={38} />
          </Link>
        </div>

        {/* Issue label */}
        <div className="px-6 py-4 border-b border-ink/10 flex items-center justify-between">
          <div>
            <div className="text-eyebrow text-terracotta">Issue №01</div>
            <div className="text-xs font-medium text-ink-muted mt-1">Winter Edition · 2026</div>
          </div>
          <div className="w-8 h-8 border border-ink/20 flex items-center justify-center">
            <span className="text-xs font-bold">A</span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="p-6 flex-1 overflow-y-auto scrollbar-thin space-y-8">
          {navSections.map((section, si) => (
            <div key={section.label}>
              <div className="text-eyebrow text-ink-subtle mb-4">{section.label}</div>
              <div className="space-y-0">
                {section.items.map((item, i) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center gap-3 py-3 border-b border-ink/5 last:border-b-0 hover:pl-2 transition-all duration-500"
                    >
                      <span className="text-eyebrow text-terracotta w-6">{item.num}</span>
                      <div className="flex-1">
                        <div className="text-sm font-semibold text-ink group-hover:text-terracotta transition-colors">{item.label}</div>
                      </div>
                      <Icon className="w-3.5 h-3.5 text-ink-subtle group-hover:text-terracotta transition-colors" />
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>

        {/* Bottom user card - editorial style */}
        <div className="p-6 border-t border-ink/10">
          <div className="editorial-frame p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-terracotta text-ivory flex items-center justify-center font-bold text-sm">
                  A
                </div>
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-sage rounded-full border-2 border-ivory"></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-ink truncate">Ameer Albahouth</div>
                <div className="text-eyebrow text-ink-subtle truncate">Editor-in-Chief</div>
              </div>
              <Settings className="w-4 h-4 text-ink-subtle hover:text-ink cursor-pointer" />
            </div>
          </div>
        </div>
      </aside>

      {/* Main content */}
      <div className="flex-1 ml-72">
        {/* Top bar - Editorial */}
        <header className="sticky top-0 z-30 bg-ivory/95 backdrop-blur-xl border-b border-ink/10">
          <div className="px-10 py-4 flex items-center justify-between">
            {/* Search */}
            <div className="flex-1 max-w-md">
              <div className="relative border-b border-ink/20 focus-within:border-terracotta transition-colors">
                <Search className="w-4 h-4 text-ink-subtle absolute left-0 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search ideas, posts, hashtags..."
                  className="w-full pl-7 pr-4 py-2 bg-transparent text-sm font-medium placeholder:text-ink-subtle focus:outline-none"
                />
                <span className="absolute right-0 top-1/2 -translate-y-1/2 text-eyebrow text-ink-subtle">⌘K</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* Live status */}
              <div className="flex items-center gap-2 px-3 py-1.5 border border-ink/10">
                <div className="w-1.5 h-1.5 rounded-full bg-sage animate-ping-slow"></div>
                <span className="text-eyebrow text-ink-muted">Studio Live</span>
              </div>

              {/* Notifications */}
              <button className="relative w-10 h-10 border border-ink/10 hover:bg-ink hover:text-ivory transition-all flex items-center justify-center group">
                <Bell className="w-4 h-4" />
                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-terracotta rounded-full"></span>
              </button>

              {/* Compose button */}
              <button className="btn-editorial !py-2 !px-4">
                <Plus className="w-4 h-4" />
                <span>Compose</span>
              </button>
            </div>
          </div>
        </header>

        <main className="p-10 min-h-[calc(100vh-73px)]">{children}</main>
      </div>
    </div>
  );
}
