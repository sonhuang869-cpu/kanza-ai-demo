'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mockContentIdeas, mockProducts } from '@/lib/mock-data';
import { useLanguage } from '@/contexts/LanguageContext';
import { Sparkles, Wand2, ThumbsUp, Edit3, ArrowUpRight } from 'lucide-react';

export default function ContentGeneratorPage() {
  const { t, lang, dir } = useLanguage();
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0].id);
  const [generating, setGenerating] = useState(false);
  const [ideas, setIdeas] = useState(mockContentIdeas);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setIdeas([...mockContentIdeas].sort(() => Math.random() - 0.5));
    }, 2200);
  };

  return (
    <div className="space-y-16">
      <header className="animate-reveal-up opacity-0" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-center gap-4 mb-6">
          <span className="section-num">{t.generator.section}</span>
          <div className="rule flex-1"></div>
        </div>
        <h1 className="text-huge">
          {t.generator.title1} <span className="italic font-light text-terracotta">{t.generator.title2}</span> {t.generator.title3}
        </h1>
        <p className="text-lg font-light text-ink-muted mt-6 max-w-2xl">
          {t.generator.subtitle}
        </p>
      </header>

      <section className="relative animate-scale-in opacity-0 delay-200" style={{animationFillMode: 'forwards'}}>
        <div className="bg-ink text-ivory relative overflow-hidden">
          <div className="relative p-10 md:p-14">
            <div className="flex items-start justify-between mb-10">
              <div>
                <div className="text-eyebrow text-terracotta mb-4">{t.generator.engine}</div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                  {t.generator.engineTitle1}<br />
                  <span className="italic font-light text-terracotta">{t.generator.engineTitle2}</span>
                </h2>
              </div>
              <Wand2 className="w-12 h-12 text-terracotta animate-float" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="text-eyebrow text-ivory/60 mb-3 block">{t.generator.source}</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(Number(e.target.value))}
                  className="w-full bg-transparent border-b border-ivory/30 focus:border-terracotta py-3 text-lg font-medium text-ivory focus:outline-none appearance-none cursor-pointer"
                >
                  {mockProducts.map(p => (
                    <option key={p.id} value={p.id} className="bg-ink">{lang === 'ar' ? p.nameAr : p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-eyebrow text-ivory/60 mb-3 block">{t.generator.volume}</label>
                <select className="w-full bg-transparent border-b border-ivory/30 focus:border-terracotta py-3 text-lg font-medium text-ivory focus:outline-none appearance-none cursor-pointer">
                  <option className="bg-ink">{t.generator.volume1}</option>
                  <option className="bg-ink">{t.generator.volume2}</option>
                  <option className="bg-ink">{t.generator.volume3}</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={generating}
              className="w-full bg-terracotta text-ivory py-5 flex items-center justify-center gap-3 font-bold text-sm tracking-widest uppercase hover:opacity-90 disabled:opacity-70 transition-all group"
            >
              {generating ? (
                <>
                  <div className="w-4 h-4 border-2 border-ivory/40 border-t-ivory rounded-full animate-spin"></div>
                  <span>{t.generator.drafting}</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>{t.generator.generateBtn}</span>
                  <ArrowUpRight className={`w-4 h-4 ${dir === 'rtl' ? 'group-hover:-rotate-45' : 'group-hover:rotate-45'} transition-transform duration-500`} />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      <section className="animate-reveal-up opacity-0 delay-300" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <div className="section-num mb-2">{t.generator.library} · {ideas.length} {t.generator.drafts}</div>
            <h2 className="text-4xl font-black tracking-tight">{t.generator.libraryTitle}</h2>
          </div>
          <div className="flex gap-1">
            {t.generator.tabs.map((tab, i) => (
              <button
                key={tab}
                className={`px-4 py-2 text-eyebrow ${i === 0 ? 'bg-ink text-ivory' : 'text-ink-subtle hover:text-ink'} transition-colors`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-l border-t border-ink/10">
          {ideas.map((idea, i) => (
            <IdeaEditorialCard key={idea.id} idea={idea} index={i} lang={lang} t={t} />
          ))}
        </div>
      </section>
    </div>
  );
}

function IdeaEditorialCard({ idea, index, lang, t }: { idea: typeof mockContentIdeas[0]; index: number; lang: string; t: any }) {
  return (
    <div
      className="p-8 border-r border-b border-ink/10 group hover:bg-ivory-warm transition-colors duration-500 animate-reveal-up opacity-0"
      style={{animationDelay: `${0.4 + index * 0.06}s`, animationFillMode: 'forwards'}}
    >
      <div className="flex items-start gap-6">
        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
          <Image src={idea.image} alt={idea.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" sizes="96px" />
        </div>

        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-eyebrow text-terracotta">{lang === 'ar' ? idea.typeAr : idea.type}</span>
          </div>

          <h3 className="text-xl font-bold leading-tight mb-3">{lang === 'ar' ? idea.titleAr : idea.title}</h3>
          <p className="text-sm text-ink-muted font-light leading-relaxed line-clamp-2 mb-4">{lang === 'ar' ? idea.contentAr : idea.content}</p>

          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
            {idea.hashtags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-terracotta font-medium">{tag}</span>
            ))}
          </div>

          <div className="grid grid-cols-3 gap-4 py-4 border-t border-ink/10 mb-4">
            <div>
              <div className="text-2xl font-black">{idea.engagementScore}</div>
              <div className="text-eyebrow text-ink-subtle mt-1">{t.generator.score}</div>
            </div>
            <div>
              <div className="text-2xl font-black">{idea.predictedReach}</div>
              <div className="text-eyebrow text-ink-subtle mt-1">{t.generator.reach}</div>
            </div>
            <div>
              <div className="text-xs font-bold leading-tight pt-1">{idea.suggestedTime}</div>
              <div className="text-eyebrow text-ink-subtle mt-1">{t.generator.bestTime}</div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button className="flex-1 py-2.5 bg-ink text-ivory text-eyebrow flex items-center justify-center gap-2 hover:bg-terracotta transition-colors">
              <ThumbsUp className="w-3 h-3" />
              {t.generator.approve}
            </button>
            <button className="px-3 py-2.5 border border-ink/20 hover:border-ink transition-colors">
              <Edit3 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
