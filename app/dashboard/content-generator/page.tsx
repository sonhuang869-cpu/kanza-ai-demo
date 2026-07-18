'use client';

import { useState } from 'react';
import { mockContentIdeas, mockProducts } from '@/lib/mock-data';
import { Sparkles, Wand2, ThumbsUp, ThumbsDown, Edit3, Calendar, Hash, Zap } from 'lucide-react';

export default function ContentGeneratorPage() {
  const [selectedProduct, setSelectedProduct] = useState(mockProducts[0].id);
  const [generating, setGenerating] = useState(false);
  const [ideas, setIdeas] = useState(mockContentIdeas);

  const handleGenerate = () => {
    setGenerating(true);
    setTimeout(() => {
      setGenerating(false);
      setIdeas([...mockContentIdeas].sort(() => Math.random() - 0.5));
    }, 2000);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight">AI Content Ideas</h1>
        <p className="text-slate-500 mt-1">Fresh ideas generated from your products, past posts, and current trends.</p>
      </div>

      {/* Generator */}
      <div className="bg-gradient-to-br from-primary-50 via-white to-accent-500/5 rounded-2xl border border-primary-100 p-6">
        <div className="flex items-start gap-3 mb-5">
          <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white">
            <Wand2 className="w-5 h-5" />
          </div>
          <div className="flex-1">
            <h2 className="text-lg font-semibold">Generate new ideas</h2>
            <p className="text-sm text-slate-600 mt-0.5">Pick a product and we&apos;ll create fresh content ideas based on your brand voice.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-5">
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">Product / Category</label>
            <select
              value={selectedProduct}
              onChange={(e) => setSelectedProduct(Number(e.target.value))}
              className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white"
            >
              {mockProducts.map(p => (
                <option key={p.id} value={p.id}>{p.image} {p.name}</option>
              ))}
            </select>
          </div>
          <div>
            <label className="block text-xs font-medium text-slate-700 mb-1.5">Number of ideas</label>
            <select className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 bg-white">
              <option>5 ideas (Quick)</option>
              <option>10 ideas (Weekly plan)</option>
              <option>30 ideas (Monthly plan)</option>
            </select>
          </div>
        </div>

        <button
          onClick={handleGenerate}
          disabled={generating}
          className="w-full py-3 gradient-bg text-white rounded-lg font-semibold flex items-center justify-center gap-2 hover:opacity-90 disabled:opacity-60 transition"
        >
          {generating ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
              AI is thinking...
            </>
          ) : (
            <>
              <Sparkles className="w-4 h-4" />
              Generate Ideas with AI
            </>
          )}
        </button>
      </div>

      {/* Ideas grid */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold">Your ideas ({ideas.length})</h2>
          <div className="flex gap-2 text-xs">
            <button className="px-3 py-1.5 rounded-full bg-slate-900 text-white font-medium">All</button>
            <button className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">Pending</button>
            <button className="px-3 py-1.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium">Approved</button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {ideas.map((idea) => (
            <IdeaCard key={idea.id} idea={idea} />
          ))}
        </div>
      </div>
    </div>
  );
}

function IdeaCard({ idea }: { idea: typeof mockContentIdeas[0] }) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-5 card-hover">
      <div className="flex items-start gap-4">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-100 to-accent-500/20 flex items-center justify-center text-3xl flex-shrink-0">
          {idea.image}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-primary-100 text-primary-700">
              {idea.type}
            </span>
            {idea.status === 'approved' && (
              <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-700">
                Approved
              </span>
            )}
          </div>
          <h3 className="font-semibold mb-2">{idea.title}</h3>
          <p className="text-sm text-slate-600 leading-relaxed mb-3">{idea.content}</p>

          <div className="flex flex-wrap gap-1 mb-3">
            {idea.hashtags.slice(0, 4).map((tag) => (
              <span key={tag} className="text-xs text-primary-600 font-medium">{tag}</span>
            ))}
          </div>

          {/* Metrics */}
          <div className="flex items-center gap-4 py-3 border-t border-slate-100 mb-3">
            <div className="flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5 text-amber-500" />
              <div>
                <div className="text-sm font-bold">{idea.engagementScore}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Score</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Hash className="w-3.5 h-3.5 text-blue-500" />
              <div>
                <div className="text-sm font-bold">{idea.predictedReach}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Reach</div>
              </div>
            </div>
            <div className="flex items-center gap-1.5">
              <Calendar className="w-3.5 h-3.5 text-emerald-500" />
              <div>
                <div className="text-xs font-semibold">{idea.suggestedTime}</div>
                <div className="text-[10px] text-slate-500 uppercase tracking-wider">Best time</div>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="flex-1 py-2 bg-emerald-500 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-1.5 hover:bg-emerald-600">
              <ThumbsUp className="w-3.5 h-3.5" />
              Approve
            </button>
            <button className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200">
              <Edit3 className="w-3.5 h-3.5" />
            </button>
            <button className="px-3 py-2 bg-slate-100 text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-200">
              <ThumbsDown className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
