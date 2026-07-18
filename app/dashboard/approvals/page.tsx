'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mockContentIdeas } from '@/lib/mock-data';
import { useLanguage } from '@/contexts/LanguageContext';
import { CheckCircle2, XCircle, Edit3, Zap, TrendingUp, Calendar } from 'lucide-react';

export default function ApprovalsPage() {
  const { t, lang } = useLanguage();
  const [ideas, setIdeas] = useState(mockContentIdeas.filter(i => i.status === 'pending'));
  const [selected, setSelected] = useState<number | null>(ideas[0]?.id ?? null);

  const selectedIdea = ideas.find(i => i.id === selected);

  return (
    <div className="space-y-16">
      <header className="animate-reveal-up opacity-0" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-center gap-4 mb-6">
          <span className="section-num">{t.approvals.section}</span>
          <div className="rule flex-1"></div>
        </div>
        <h1 className="text-huge">
          {t.approvals.title1} <span className="italic font-light text-terracotta">{t.approvals.title2}</span> {t.approvals.title3}
        </h1>
        <p className="text-lg font-light text-ink-muted mt-6 max-w-2xl">
          {t.approvals.subtitle}
        </p>
      </header>

      <section className="grid grid-cols-12 gap-0 border-l border-t border-ink/10">
        <div className="col-span-12 lg:col-span-4 border-r border-b border-ink/10 bg-white">
          <div className="p-6 border-b border-ink/10 bg-ivory-warm">
            <div className="text-eyebrow text-terracotta mb-1">{t.approvals.awaiting}</div>
            <div className="text-3xl font-black">{ideas.length} <span className="text-lg font-light text-ink-muted">{t.approvals.drafts}</span></div>
          </div>

          <div className="divide-y divide-ink/10 max-h-[600px] overflow-y-auto">
            {ideas.map((idea, i) => (
              <button
                key={idea.id}
                onClick={() => setSelected(idea.id)}
                className={`w-full text-left p-5 transition-all group animate-reveal-left opacity-0 ${
                  selected === idea.id ? 'bg-ink text-ivory' : 'hover:bg-ivory-warm'
                }`}
                style={{animationDelay: `${0.2 + i * 0.08}s`, animationFillMode: 'forwards'}}
              >
                <div className="flex items-start gap-4">
                  <div className={`text-eyebrow shrink-0 pt-1 ${selected === idea.id ? 'text-terracotta' : 'text-terracotta'}`}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="relative w-14 h-14 flex-shrink-0 overflow-hidden">
                    <Image src={idea.image} alt={idea.title} fill className="object-cover" sizes="56px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className={`text-eyebrow mb-1 ${selected === idea.id ? 'text-terracotta' : 'text-terracotta'}`}>{lang === 'ar' ? idea.typeAr : idea.type}</div>
                    <div className="font-bold text-sm truncate">{lang === 'ar' ? idea.titleAr : idea.title}</div>
                    <div className={`text-xs mt-1 truncate ${selected === idea.id ? 'text-ivory/60' : 'text-ink-subtle'}`}>{idea.suggestedTime}</div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className={`text-2xl font-black ${selected === idea.id ? 'text-terracotta' : ''}`}>{idea.engagementScore}</div>
                  </div>
                </div>
              </button>
            ))}

            {ideas.length === 0 && (
              <div className="text-center py-16 text-ink-subtle">
                <div className="text-eyebrow mb-2">{t.approvals.allClear}</div>
                <div className="text-sm">{t.approvals.allReviewed}</div>
              </div>
            )}
          </div>
        </div>

        {selectedIdea ? (
          <div className="col-span-12 lg:col-span-8 border-r border-b border-ink/10 bg-ivory-warm animate-scale-in opacity-0" key={selectedIdea.id} style={{animationFillMode: 'forwards'}}>
            <div className="p-8">
              <div className="flex items-start justify-between mb-8 pb-6 border-b border-ink/10">
                <div>
                  <div className="text-eyebrow text-terracotta mb-2">{t.approvals.preview} {String(selectedIdea.id).padStart(3, '0')}</div>
                  <h2 className="text-3xl font-black tracking-tight max-w-lg">{lang === 'ar' ? selectedIdea.titleAr : selectedIdea.title}</h2>
                </div>
                <span className="text-eyebrow px-3 py-1 border border-ink text-ink">
                  {lang === 'ar' ? selectedIdea.typeAr : selectedIdea.type}
                </span>
              </div>

              <div className="editorial-frame mb-8 max-w-lg mx-auto">
                <div className="flex items-center gap-3 p-4 border-b border-ink/10">
                  <div className="w-9 h-9 rounded-full bg-ink text-ivory flex items-center justify-center font-black text-sm">K</div>
                  <div>
                    <div className="text-sm font-bold">kanza.official</div>
                    <div className="text-eyebrow text-ink-subtle">Sponsored</div>
                  </div>
                </div>
                <div className="relative aspect-square">
                  <Image src={selectedIdea.image} alt={selectedIdea.title} fill className="object-cover" sizes="500px" priority />
                </div>
                <div className="p-4">
                  <div className="text-sm leading-relaxed">
                    <span className="font-bold">kanza.official</span>{' '}
                    <span>{lang === 'ar' ? selectedIdea.contentAr : selectedIdea.content}</span>
                  </div>
                  <div className="text-xs text-terracotta mt-2 font-semibold">
                    {selectedIdea.hashtags.join(' ')}
                  </div>
                </div>
              </div>

              <div className="editorial-frame p-6 mb-8 max-w-lg mx-auto" dir="rtl">
                <div className="text-eyebrow text-terracotta mb-3" dir="ltr">{t.approvals.arabicVoice}</div>
                <div className="text-lg font-bold mb-2">{selectedIdea.titleAr}</div>
                <div className="text-sm text-ink-muted leading-relaxed">{selectedIdea.contentAr}</div>
              </div>

              <div className="grid grid-cols-3 gap-0 border-l border-t border-ink/10 mb-8">
                <div className="p-6 border-r border-b border-ink/10 text-center">
                  <Zap className="w-4 h-4 text-terracotta mx-auto mb-3" />
                  <div className="text-4xl font-black">{selectedIdea.engagementScore}</div>
                  <div className="text-eyebrow text-ink-subtle mt-2">{t.approvals.engagement}</div>
                </div>
                <div className="p-6 border-r border-b border-ink/10 text-center">
                  <TrendingUp className="w-4 h-4 text-terracotta mx-auto mb-3" />
                  <div className="text-4xl font-black">{selectedIdea.predictedReach}</div>
                  <div className="text-eyebrow text-ink-subtle mt-2">{t.approvals.reach}</div>
                </div>
                <div className="p-6 border-r border-b border-ink/10 text-center">
                  <Calendar className="w-4 h-4 text-terracotta mx-auto mb-3" />
                  <div className="text-sm font-bold leading-tight pt-2">{selectedIdea.suggestedTime}</div>
                  <div className="text-eyebrow text-ink-subtle mt-2">{t.approvals.bestTime}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-0 border border-ink">
                <button
                  onClick={() => {
                    setIdeas(ideas.filter(i => i.id !== selected));
                    setSelected(ideas.find(i => i.id !== selected)?.id ?? null);
                  }}
                  className="col-span-2 py-5 bg-ink text-ivory font-bold text-sm tracking-widest uppercase hover:bg-terracotta transition-all flex items-center justify-center gap-3 group"
                >
                  <CheckCircle2 className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  {t.approvals.approveBtn}
                </button>
                <button className="py-5 border-l border-ink hover:bg-ink hover:text-ivory transition-all flex items-center justify-center gap-2 font-bold text-sm tracking-widest uppercase">
                  <Edit3 className="w-4 h-4" />
                  {t.approvals.edit}
                </button>
              </div>
              <button
                onClick={() => {
                  setIdeas(ideas.filter(i => i.id !== selected));
                  setSelected(ideas.find(i => i.id !== selected)?.id ?? null);
                }}
                className="w-full mt-2 py-3 text-eyebrow text-ink-subtle hover:text-terracotta transition-colors flex items-center justify-center gap-2"
              >
                <XCircle className="w-3.5 h-3.5" />
                {t.approvals.reject}
              </button>
            </div>
          </div>
        ) : (
          <div className="col-span-12 lg:col-span-8 border-r border-b border-ink/10 bg-ivory-warm min-h-[500px] flex items-center justify-center">
            <div className="text-center">
              <div className="text-eyebrow text-ink-subtle mb-2">{t.approvals.section}</div>
              <div className="text-2xl font-black">{t.approvals.allReviewedShort}</div>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
