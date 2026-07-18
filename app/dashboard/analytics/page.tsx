'use client';

import Image from 'next/image';
import { mockFAQs, mockViralPosts, mockStats } from '@/lib/mock-data';
import { useLanguage } from '@/contexts/LanguageContext';
import { MessageCircle, TrendingUp, Eye, Heart, MessageSquare, Share2, Sparkles } from 'lucide-react';

export default function AnalyticsPage() {
  const { t, lang } = useLanguage();

  return (
    <div className="space-y-16">
      <header className="animate-reveal-up opacity-0" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-center gap-4 mb-6">
          <span className="section-num">{t.analytics.section}</span>
          <div className="rule flex-1"></div>
        </div>
        <h1 className="text-huge">
          {t.analytics.title1} <span className="italic font-light text-terracotta">{t.analytics.title2}</span> {t.analytics.title3}
        </h1>
        <p className="text-lg font-light text-ink-muted mt-6 max-w-2xl">
          {t.analytics.subtitle}
        </p>
      </header>

      <section className="grid grid-cols-12 border-l border-t border-ink/10 animate-reveal-up opacity-0 delay-200" style={{animationFillMode: 'forwards'}}>
        {[
          { value: mockStats.weeklyReach, label: t.analytics.stats.weeklyReach, trend: '+18%', num: '01' },
          { value: mockStats.weeklyImpressions, label: t.analytics.stats.impressions, trend: '+24%', num: '02' },
          { value: `${mockStats.engagementRate}%`, label: t.analytics.stats.engagement, trend: 'Above avg', num: '03' },
          { value: `+${mockStats.audienceGrowth}%`, label: t.analytics.stats.audienceGrowth, trend: 'This month', num: '04' },
        ].map((stat, i) => (
          <div key={i} className="col-span-12 md:col-span-6 lg:col-span-3 p-8 border-r border-b border-ink/10 group hover:bg-ivory-warm transition-colors duration-500">
            <div className="text-eyebrow text-terracotta mb-6">{stat.num} / {stat.label}</div>
            <div className="text-6xl font-black tracking-tighter group-hover:text-terracotta transition-colors duration-500">{stat.value}</div>
            <div className="mt-4 flex items-center gap-2">
              <div className="text-eyebrow text-sage">{stat.trend}</div>
              <div className="rule flex-1"></div>
            </div>
          </div>
        ))}
      </section>

      <section className="animate-reveal-up opacity-0 delay-300" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <div className="section-num mb-2">{t.analytics.chartLabel}</div>
            <h2 className="text-4xl font-black tracking-tight">{t.analytics.chartTitle}</h2>
          </div>
          <select className="text-eyebrow border-b border-ink/20 pb-1 bg-transparent">
            <option>{t.analytics.chartLast}</option>
          </select>
        </div>

        <div className="editorial-frame p-8">
          <div className="h-72 flex items-end gap-1.5">
            {[
              45, 52, 48, 61, 55, 68, 72, 65, 70, 78, 82, 74, 88, 92,
              85, 90, 96, 88, 94, 105, 98, 112, 108, 115, 122, 118, 125, 130, 128, 135
            ].map((h, i) => (
              <div key={i} className="flex-1 flex flex-col justify-end group relative">
                <div
                  className="w-full bg-ink group-hover:bg-terracotta transition-colors duration-300 animate-reveal-up opacity-0"
                  style={{
                    height: `${(h / 135) * 100}%`,
                    animationDelay: `${0.4 + i * 0.02}s`,
                    animationFillMode: 'forwards',
                  }}
                />
              </div>
            ))}
          </div>
          <div className="flex justify-between text-eyebrow text-ink-subtle mt-4 font-mono">
            <span>18 Jun</span>
            <span>03 Jul</span>
            <span>17 Jul · {t.analytics.today}</span>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-12 gap-8">
        <div className="col-span-12 lg:col-span-6 animate-reveal-up opacity-0 delay-400" style={{animationFillMode: 'forwards'}}>
          <div className="flex items-center gap-3 mb-2">
            <MessageCircle className="w-5 h-5 text-terracotta" />
            <div className="section-num">{t.analytics.questions}</div>
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-6">{t.analytics.questionsTitle}</h2>

          <div className="editorial-frame divide-y divide-ink/10">
            {mockFAQs.map((faq, i) => (
              <div key={i} className="p-6 hover:bg-ivory-warm transition-colors group animate-reveal-up opacity-0" style={{animationDelay: `${0.5 + i * 0.08}s`, animationFillMode: 'forwards'}}>
                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="flex-1">
                    <div className="text-eyebrow text-terracotta mb-2">№ {String(i + 1).padStart(2, '0')}</div>
                    <div className="font-bold leading-snug">{lang === 'ar' ? faq.questionAr : faq.question}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-4xl font-black">{faq.frequency}</div>
                    <div className="text-eyebrow text-ink-subtle">{t.analytics.asks}</div>
                  </div>
                </div>
                <div className="pt-3 border-t border-ink/10 text-sm text-ink-muted font-light leading-relaxed flex items-start gap-2">
                  <Sparkles className="w-3.5 h-3.5 text-terracotta mt-1 flex-shrink-0" />
                  <span><span className="font-semibold text-ink">{t.analytics.studioSuggests}</span> {faq.suggestedContent}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="col-span-12 lg:col-span-6 animate-reveal-up opacity-0 delay-500" style={{animationFillMode: 'forwards'}}>
          <div className="flex items-center gap-3 mb-2">
            <TrendingUp className="w-5 h-5 text-terracotta" />
            <div className="section-num">{t.analytics.hits}</div>
          </div>
          <h2 className="text-3xl font-black tracking-tight mb-6">{t.analytics.hitsTitle}</h2>

          <div className="space-y-4">
            {mockViralPosts.map((post, i) => (
              <div key={post.id} className="editorial-frame p-6 hover:bg-ivory-warm transition-colors group animate-reveal-up opacity-0" style={{animationDelay: `${0.6 + i * 0.1}s`, animationFillMode: 'forwards'}}>
                <div className="flex items-start gap-4">
                  <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden">
                    <Image src={post.thumbnail} alt={post.topic} fill className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500" sizes="80px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-eyebrow text-terracotta">{post.platform}</span>
                      <div className="w-1 h-1 bg-ink-subtle rounded-full"></div>
                      <span className="text-eyebrow text-ink-subtle">{post.type}</span>
                    </div>
                    <h3 className="text-lg font-bold leading-snug mb-3">{post.topic}</h3>

                    <div className="flex items-center gap-4 text-xs text-ink-muted mb-3">
                      <span className="flex items-center gap-1"><Heart className="w-3 h-3" /> {post.likes}</span>
                      <span className="flex items-center gap-1"><MessageSquare className="w-3 h-3" /> {post.comments}</span>
                      <span className="flex items-center gap-1"><Share2 className="w-3 h-3" /> {post.shares}</span>
                      <span className="flex items-center gap-1 text-sage font-bold">
                        <Eye className="w-3 h-3" /> {post.engagement}
                      </span>
                    </div>

                    <div className="pt-3 border-t border-ink/10 text-xs text-ink-muted font-light leading-relaxed flex items-start gap-2">
                      <Sparkles className="w-3 h-3 text-terracotta mt-0.5 flex-shrink-0" />
                      <span>{post.insights}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
