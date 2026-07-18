'use client';

import { useState } from 'react';
import Image from 'next/image';
import { mockContentIdeas, mockProducts } from '@/lib/mock-data';
import { Sparkles, Wand2, ThumbsUp, Edit3, Zap, ArrowUpRight } from 'lucide-react';

export default function ContentGeneratorPage() {
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
      {/* Editorial header */}
      <header className="animate-reveal-up opacity-0" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-center gap-4 mb-6">
          <span className="section-num">Section 02 · Draft Board</span>
          <div className="rule flex-1"></div>
        </div>
        <h1 className="text-huge">
          The <span className="italic font-light text-terracotta">draft</span> board.
        </h1>
        <p className="text-lg font-light text-ink-muted mt-6 max-w-2xl">
          Ideas generated from what you sell, tuned by what performs, waiting for your approval.
        </p>
      </header>

      {/* The Generator - editorial machine */}
      <section className="relative animate-scale-in opacity-0 delay-200" style={{animationFillMode: 'forwards'}}>
        <div className="bg-ink text-ivory relative overflow-hidden">
          <div className="absolute inset-0 bg-noise opacity-20 pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-terracotta/20 blur-3xl rounded-full animate-float"></div>

          <div className="relative p-10 md:p-14">
            <div className="flex items-start justify-between mb-10">
              <div>
                <div className="text-eyebrow text-terracotta-soft mb-4">The Voice Engine</div>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight">
                  Speak the words<br />
                  <span className="italic font-light text-terracotta">your brand would.</span>
                </h2>
              </div>
              <Wand2 className="w-12 h-12 text-terracotta-soft animate-float" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="text-eyebrow text-ivory/60 mb-3 block">Source Product</label>
                <select
                  value={selectedProduct}
                  onChange={(e) => setSelectedProduct(Number(e.target.value))}
                  className="w-full bg-transparent border-b border-ivory/30 focus:border-terracotta py-3 text-lg font-medium text-ivory focus:outline-none appearance-none cursor-pointer"
                >
                  {mockProducts.map(p => (
                    <option key={p.id} value={p.id} className="bg-ink">{p.name}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-eyebrow text-ivory/60 mb-3 block">Volume</label>
                <select className="w-full bg-transparent border-b border-ivory/30 focus:border-terracotta py-3 text-lg font-medium text-ivory focus:outline-none appearance-none cursor-pointer">
                  <option className="bg-ink">5 ideas — Quick brief</option>
                  <option className="bg-ink">10 ideas — Weekly issue</option>
                  <option className="bg-ink">30 ideas — Monthly campaign</option>
                </select>
              </div>
            </div>

            <button
              onClick={handleGenerate}
              disabled={generating}
              className="w-full bg-terracotta text-ivory py-5 flex items-center justify-center gap-3 font-bold text-sm tracking-widest uppercase hover:bg-terracotta-soft disabled:opacity-70 transition-all group"
            >
              {generating ? (
                <>
                  <div className="w-4 h-4 border-2 border-ivory/40 border-t-ivory rounded-full animate-spin"></div>
                  <span>The Studio is drafting...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Commission new drafts</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-500" />
                </>
              )}
            </button>
          </div>
        </div>
      </section>

      {/* The Library */}
      <section className="animate-reveal-up opacity-0 delay-300" style={{animationFillMode: 'forwards'}}>
        <div className="flex items-baseline justify-between mb-8">
          <div>
            <div className="section-num mb-2">The Library · {ideas.length} drafts</div>
            <h2 className="text-4xl font-black tracking-tight">On the table today.</h2>
          </div>
          <div className="flex gap-1">
            {['ALL', 'PENDING', 'APPROVED'].map((tab, i) => (
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
            <IdeaEditorialCard key={idea.id} idea={idea} index={i} />
          ))}
        </div>
      </section>
    </div>
  );
}

function IdeaEditorialCard({ idea, index }: { idea: typeof mockContentIdeas[0]; index: number }) {
  return (
    <div
      className="p-8 border-r border-b border-ink/10 group hover:bg-ivory-warm transition-colors duration-500 animate-reveal-up opacity-0"
      style={{animationDelay: `${0.4 + index * 0.06}s`, animationFillMode: 'forwards'}}
    >
      <div className="flex items-start gap-6">
        {/* Image */}
        <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
          <Image src={idea.image} alt={idea.title} fill className="object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" sizes="96px" />
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-eyebrow text-terracotta">{idea.type}</span>
            {idea.status === 'approved' && (
              <>
                <div className="w-1 h-1 bg-sage rounded-full"></div>
                <span className="text-eyebrow text-sage">Approved</span>
              </>
            )}
          </div>

          <h3 className="text-xl font-bold leading-tight mb-3 group-hover:translate-x-1 transition-transform duration-500">{idea.title}</h3>
          <p className="text-sm text-ink-muted font-light leading-relaxed line-clamp-2 mb-4">{idea.content}</p>

          <div className="flex flex-wrap gap-x-3 gap-y-1 mb-4">
            {idea.hashtags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-terracotta font-medium">{tag}</span>
            ))}
          </div>

          {/* Editorial metrics */}
          <div className="grid grid-cols-3 gap-4 py-4 border-t border-ink/10 mb-4">
            <div>
              <div className="text-2xl font-black">{idea.engagementScore}</div>
              <div className="text-eyebrow text-ink-subtle mt-1">Score</div>
            </div>
            <div>
              <div className="text-2xl font-black">{idea.predictedReach}</div>
              <div className="text-eyebrow text-ink-subtle mt-1">Reach</div>
            </div>
            <div>
              <div className="text-xs font-bold leading-tight pt-1">{idea.suggestedTime}</div>
              <div className="text-eyebrow text-ink-subtle mt-1">Best Time</div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="flex-1 py-2.5 bg-ink text-ivory text-eyebrow flex items-center justify-center gap-2 hover:bg-terracotta transition-colors">
              <ThumbsUp className="w-3 h-3" />
              Approve
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
