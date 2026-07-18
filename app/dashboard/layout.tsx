'use client';

import Link from 'next/link';
import { Logo } from '@/components/Logo';
import { LanguageToggle } from '@/components/LanguageToggle';
import { useLanguage } from '@/contexts/LanguageContext';
import { LayoutDashboard, Sparkles, BarChart3, Calendar, CheckCircle2, Settings, Bell, Search, Plus } from 'lucide-react';

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { t, dir } = useLanguage();

  const navSections = [
    {
      label: t.dashboard.editorial,
      items: [
        { href: '/dashboard', label: t.dashboard.pages.frontPage, num: '01', icon: LayoutDashboard },
        { href: '/dashboard/content-generator', label: t.dashboard.pages.draftBoard, num: '02', icon: Sparkles },
      ],
    },
    {
      label: t.dashboard.intelligence,
      items: [
        { href: '/dashboard/analytics', label: t.dashboard.pages.signalRoom, num: '03', icon: BarChart3 },
      ],
    },
    {
      label: t.dashboard.publishing,
      items: [
        { href: '/dashboard/calendar', label: t.dashboard.pages.publishingDesk, num: '04', icon: Calendar },
        { href: '/dashboard/approvals', label: t.dashboard.pages.editorsDesk, num: '05', icon: CheckCircle2 },
      ],
    },
  ];

  const sidebarPosition = dir === 'rtl' ? 'right-0 border-l' : 'left-0 border-r';
  const mainOffset = dir === 'rtl' ? 'mr-72' : 'ml-72';
  const hoverTranslate = dir === 'rtl' ? 'hover:pr-2' : 'hover:pl-2';

  return (
    <div className="min-h-screen bg-ivory text-ink flex" dir={dir}>
      {/* Sidebar */}
      <aside className={`fixed ${sidebarPosition} top-0 h-full w-72 bg-ivory border-ink/10 z-40 flex flex-col`}>
        <div className="p-6 border-b border-ink/10">
          <Link href="/" className="block">
            <Logo size={38} />
          </Link>
        </div>

        <div className="px-6 py-4 border-b border-ink/10 flex items-center justify-between">
          <div>
            <div className="text-eyebrow text-terracotta">{t.dashboard.issue}</div>
            <div className="text-xs font-medium text-ink-muted mt-1">{t.dashboard.edition}</div>
          </div>
          <LanguageToggle />
        </div>

        <nav className="p-6 flex-1 overflow-y-auto scrollbar-thin space-y-8">
          {navSections.map((section) => (
            <div key={section.label}>
              <div className="text-eyebrow text-ink-subtle mb-4">{section.label}</div>
              <div className="space-y-0">
                {section.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`group flex items-center gap-3 py-3 border-b border-ink/5 last:border-b-0 ${hoverTranslate} transition-all duration-500`}
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

        <div className="p-6 border-t border-ink/10">
          <div className="editorial-frame p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-terracotta text-ivory flex items-center justify-center font-bold text-sm">
                  A
                </div>
                <div className={`absolute -bottom-0.5 ${dir === 'rtl' ? '-left-0.5' : '-right-0.5'} w-3 h-3 bg-sage rounded-full border-2 border-ivory`}></div>
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-sm font-bold text-ink truncate">Ameer Albahouth</div>
                <div className="text-eyebrow text-ink-subtle truncate">{t.dashboard.editorInChief}</div>
              </div>
              <Settings className="w-4 h-4 text-ink-subtle hover:text-ink cursor-pointer" />
            </div>
          </div>
        </div>
      </aside>

      <div className={`flex-1 ${mainOffset}`}>
        <header className="sticky top-0 z-30 bg-ivory/95 backdrop-blur-xl border-b border-ink/10">
          <div className="px-10 py-4 flex items-center justify-between">
            <div className="flex-1 max-w-md">
              <div className="relative border-b border-ink/20 focus-within:border-terracotta transition-colors">
                <Search className={`w-4 h-4 text-ink-subtle absolute ${dir === 'rtl' ? 'right-0' : 'left-0'} top-1/2 -translate-y-1/2`} />
                <input
                  type="text"
                  placeholder={t.dashboard.search}
                  className={`w-full ${dir === 'rtl' ? 'pr-7 pl-4' : 'pl-7 pr-4'} py-2 bg-transparent text-sm font-medium placeholder:text-ink-subtle focus:outline-none`}
                />
                <span className={`absolute ${dir === 'rtl' ? 'left-0' : 'right-0'} top-1/2 -translate-y-1/2 text-eyebrow text-ink-subtle`}>⌘K</span>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 border border-ink/10">
                <div className="w-1.5 h-1.5 rounded-full bg-sage animate-ping-slow"></div>
                <span className="text-eyebrow text-ink-muted">{t.dashboard.studioLive}</span>
              </div>

              <button className="relative w-10 h-10 border border-ink/10 hover:bg-ink hover:text-ivory transition-all flex items-center justify-center group">
                <Bell className="w-4 h-4" />
                <span className={`absolute top-1.5 ${dir === 'rtl' ? 'left-1.5' : 'right-1.5'} w-2 h-2 bg-terracotta rounded-full`}></span>
              </button>

              <button className="btn-editorial !py-2 !px-4">
                <Plus className="w-4 h-4" />
                <span>{t.dashboard.compose}</span>
              </button>
            </div>
          </div>
        </header>

        <main className="p-10 min-h-[calc(100vh-73px)]">{children}</main>
      </div>
    </div>
  );
}
