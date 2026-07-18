'use client';

import Link from 'next/link';
import Image from 'next/image';
import { mockContentIdeas, mockScheduledPosts } from '@/lib/mock-data';
import { PlatformIconMap } from '@/components/PlatformIcons';
import { useLanguage } from '@/contexts/LanguageContext';
import { ArrowUpRight, Sparkles, TrendingUp, Zap } from 'lucide-react';

export default function DashboardOverview() {
  const { t, lang, dir } = useLanguage();
  const upcomingPosts = mockScheduledPosts.slice(0, 4);
  const pendingIdeas = mockContentIdeas.filter(i => i.status === 'pending').slice(0, 3);
  const arrowRotate = dir === 'rtl' ? 'group-hover:-rotate-45' : 'group-hover:rotate-45';

  return (
    <div className="space-y-16">
      <header className="animate-reveal-up opacity-0" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-center gap-4 mb-8">
          <span className="section-num">{t.overview.frontPage}</span>
          <div className="rule flex-1"></div>
          <span className="text-eyebrow text-ink-subtle">{t.overview.wednesday}</span>
        </div>

        <div className="grid grid-cols-12 gap-8 items-end">
          <div className="col-span-12 lg:col-span-8">
            <h1 className="text-huge">
              {t.overview.greeting}
              <br />
              <span className="italic font-light text-terracotta">{t.overview.name}</span>
            </h1>
          </div>
          <div className="col-span-12 lg:col-span-4">
            <p className="text-lg font-light text-ink-muted leading-relaxed">
              {t.overview.intro1} <span className="font-bold text-ink">89 {t.overview.intro2}</span> {t.overview.intro3} <span className="font-bold text-sage">+18%</span> {t.overview.intro4}
            </p>
          </div>
        </div>
      </header>

      <div className="rule-thick"></div>

      <section>
        <div className="grid grid-cols-12 gap-0 border-l border-t border-ink/10">
          <StatBlock num="01" label={t.overview.stats.freshIdeas} value="89" unit={t.overview.stats.drafts} trend="+23" delay={0.1} />
          <StatBlock num="02" label={t.overview.stats.ready} value="23" unit={t.overview.stats.scheduled} trend="7 days" delay={0.2} />
          <StatBlock num="03" label={t.overview.stats.engagement} value="8.4" unit="%" trend="+12%" delay={0.3} featured />
          <StatBlock num="04" label={t.overview.stats.reach} value="156" unit="K" trend="+18%" delay={0.4} />
        </div>
      </section>

      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-8 animate-reveal-up opacity-0 delay-500" style={{animationFillMode: 'forwards'}}>
          <div className="flex items-baseline justify-between mb-8">
            <div>
              <div className="section-num mb-2">{t.overview.draftBoard}</div>
              <h2 className="text-4xl font-black tracking-tight">{t.overview.draftTitle}</h2>
            </div>
            <Link href="/dashboard/content-generator" className="text-eyebrow text-terracotta flex items-center gap-2 hover:gap-3 transition-all">
              {t.overview.viewAll} <ArrowUpRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="editorial-frame">
            {pendingIdeas.map((idea, i) => (
              <div key={idea.id} className={`group grid grid-cols-12 gap-4 p-6 hover:bg-ivory-warm cursor-pointer transition-colors duration-300 ${i !== pendingIdeas.length - 1 ? 'border-b border-ink/10' : ''}`}>
                <div className="col-span-1 text-eyebrow text-terracotta pt-2">0{i + 1}</div>
                <div className="col-span-2">
                  <div className="relative aspect-square overflow-hidden">
                    <Image src={idea.image} alt={idea.title} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" sizes="120px" />
                  </div>
                </div>
                <div className="col-span-6">
                  <div className="text-eyebrow text-ink-subtle mb-2">{lang === 'ar' ? idea.typeAr : idea.type} · {idea.suggestedTime}</div>
                  <h3 className="text-xl font-bold leading-tight mb-2 group-hover:text-terracotta transition-colors">{lang === 'ar' ? idea.titleAr : idea.title}</h3>
                  <p className="text-sm text-ink-muted font-light leading-relaxed line-clamp-2">{lang === 'ar' ? idea.contentAr : idea.content}</p>
                </div>
                <div className={`col-span-3 ${dir === 'rtl' ? 'text-left' : 'text-right'}`}>
                  <div className="text-5xl font-black">{idea.engagementScore}</div>
                  <div className="text-eyebrow text-ink-subtle mt-1">{t.overview.stats.engagement}</div>
                  <div className="text-xs font-semibold text-ink mt-3">{idea.predictedReach} {t.overview.stats.reach}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-4 space-y-8 animate-reveal-right opacity-0 delay-600" style={{animationFillMode: 'forwards'}}>
          <div>
            <div className="section-num mb-2">{t.overview.agenda}</div>
            <h2 className="text-4xl font-black tracking-tight">{t.overview.comingUp}</h2>
          </div>

          <div className="editorial-frame divide-y divide-ink/10">
            {upcomingPosts.map((post, i) => {
              const Icon = PlatformIconMap[post.platform];
              return (
                <div key={i} className="p-5 hover:bg-ivory-warm transition-colors group cursor-pointer">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-baseline gap-3">
                      <div className="text-2xl font-black">{post.time}</div>
                      <div>
                        <div className="flex items-center gap-2 text-terracotta">
                          <Icon size={12} />
                          <span className="text-eyebrow">{post.platform}</span>
                        </div>
                        <div className={`text-sm font-semibold mt-0.5 ${dir === 'rtl' ? 'group-hover:-translate-x-1' : 'group-hover:translate-x-1'} transition-transform`}>{post.title}</div>
                      </div>
                    </div>
                    <span className={`text-eyebrow px-2 py-1 border ${post.status === 'scheduled' ? 'text-sage border-sage/30' : 'text-ink-subtle border-ink/20'}`}>
                      {post.status}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          <Link href="/dashboard/calendar" className="btn-ghost w-full justify-center">
            <span>{t.overview.openDesk}</span>
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <div className="rule-thick"></div>

      <section className="animate-reveal-up opacity-0 delay-700" style={{animationFillMode: 'forwards'}}>
        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-12 lg:col-span-4">
            <div className="section-num mb-4">{t.overview.signal}</div>
            <div className="text-eyebrow text-ink-subtle">{t.overview.insight}</div>
          </div>
          <div className="col-span-12 lg:col-span-8">
            <blockquote className="text-4xl font-light leading-tight tracking-tight">
              {t.overview.signalQuote1} <span className="font-bold text-terracotta">3× {t.overview.signalQuote2}</span> {t.overview.signalQuote3}
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="rule flex-1 max-w-16"></div>
              <div className="text-eyebrow text-ink-subtle">{t.overview.signalSource}</div>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 gap-4 animate-reveal-up opacity-0 delay-800" style={{animationFillMode: 'forwards'}}>
        <Link href="/dashboard/content-generator" className="data-card group">
          <Sparkles className="w-8 h-8 mb-6 text-terracotta group-hover:scale-110 transition-transform" />
          <div className="text-xl font-black tracking-tight mb-2">{t.overview.quick.draft}</div>
          <div className="text-sm text-ink-muted font-light mb-6">{t.overview.quick.draftDesc}</div>
          <div className="flex items-center gap-2 text-eyebrow text-terracotta">
            {t.overview.quick.begin} <ArrowUpRight className="w-3 h-3" />
          </div>
        </Link>
        <Link href="/dashboard/analytics" className="data-card group">
          <TrendingUp className="w-8 h-8 mb-6 text-terracotta group-hover:scale-110 transition-transform" />
          <div className="text-xl font-black tracking-tight mb-2">{t.overview.quick.signals}</div>
          <div className="text-sm text-ink-muted font-light mb-6">{t.overview.quick.signalsDesc}</div>
          <div className="flex items-center gap-2 text-eyebrow text-terracotta">
            {t.overview.quick.open} <ArrowUpRight className="w-3 h-3" />
          </div>
        </Link>
        <Link href="/dashboard/approvals" className="data-card group">
          <Zap className="w-8 h-8 mb-6 text-terracotta group-hover:scale-110 transition-transform" />
          <div className="text-xl font-black tracking-tight mb-2">{t.overview.quick.ship}</div>
          <div className="text-sm text-ink-muted font-light mb-6">{t.overview.quick.shipDesc}</div>
          <div className="flex items-center gap-2 text-eyebrow text-terracotta">
            {t.overview.quick.review} <ArrowUpRight className="w-3 h-3" />
          </div>
        </Link>
      </section>
    </div>
  );
}

function StatBlock({ num, label, value, unit, trend, delay, featured }: {
  num: string;
  label: string;
  value: string;
  unit: string;
  trend: string;
  delay: number;
  featured?: boolean;
}) {
  return (
    <div
      className={`col-span-12 md:col-span-6 lg:col-span-3 p-8 border-r border-b border-ink/10 relative group animate-counter opacity-0 ${featured ? 'bg-ink text-ivory' : 'hover:bg-ivory-warm'} transition-colors duration-500`}
      style={{animationDelay: `${delay}s`, animationFillMode: 'forwards'}}
    >
      <div className="text-eyebrow mb-6 text-terracotta">{num} / {label}</div>
      <div className="flex items-baseline gap-2">
        <div className={`text-7xl font-black tracking-tighter ${featured ? '' : 'group-hover:text-terracotta transition-colors duration-500'}`}>{value}</div>
        <div className={`text-2xl font-light ${featured ? 'text-ivory/60' : 'text-ink-subtle'}`}>{unit}</div>
      </div>
      <div className="mt-6 flex items-center gap-2">
        <div className={`text-eyebrow ${featured ? 'text-terracotta' : 'text-sage'}`}>{trend}</div>
        <div className={`rule flex-1 ${featured ? '!bg-ivory !opacity-20' : ''}`}></div>
      </div>
    </div>
  );
}
